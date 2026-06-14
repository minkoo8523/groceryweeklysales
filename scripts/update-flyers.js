const fs = require('fs');
const path = require('path');

async function updateFlyers() {
  console.log('Fetching live H Mart weekly ads page...');
  try {
    const res = await fetch('https://www.hmart.com/weekly-ads/new-york-new-jersey');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const html = await res.text();
    console.log('Page fetched successfully. Extracting flyer URLs...');

    const patterns = {
      englishKorean: 'ENGLISH(?:\\\\u002F|/)KOREAN',
      chineseNY: 'CHINESE\\(NY\\)',
      chineseNJ: 'CHINESE\\(NJ\\)',
      houseware: 'HOUSEWARE\\s+SALE',
      anniversary: '40th\\s+Anniversary\\s+Sale'
    };

    const urls = {};
    for (const [key, pattern] of Object.entries(patterns)) {
      const regex = new RegExp(`"tabName"\\s*:\\s*"${pattern}"[^}]+?"imageSrc"\\s*:\\s*"([^"]+)"`, 'i');
      const match = html.match(regex);
      if (match) {
        let url = match[1];
        url = url.replace(/\\u002F/gi, '/');
        url = url.replace(/\\u002f/gi, '/');
        url = url.replace(/\\/g, '');
        urls[key] = url;
      } else {
        console.warn(`Warning: Could not find flyer URL for pattern "${pattern}"`);
      }
    }

    console.log('Extracted URLs:', urls);

    if (Object.keys(urls).length === 0) {
      throw new Error('No flyer URLs could be extracted. The page structure might have changed.');
    }

    // Path to hmart.html
    const hmartPath = path.join(__dirname, '..', 'hmart.html');
    if (!fs.existsSync(hmartPath)) {
      throw new Error(`hmart.html not found at path: ${hmartPath}`);
    }

    let hmartContent = fs.readFileSync(hmartPath, 'utf8');

    // Let's replace the data-src for buttons
    const buttonReplacements = [
      { key: 'englishKorean', label: 'English/Korean' },
      { key: 'chineseNY', label: 'Chinese (NY)' },
      { key: 'chineseNJ', label: 'Chinese (NJ)' },
      { key: 'houseware', label: 'Houseware Sale' },
      { key: 'anniversary', label: '40th Anniversary' }
    ];

    buttonReplacements.forEach(({ key, label }) => {
      if (urls[key]) {
        // Regex to match the button with this specific label and replace its data-src
        const btnRegex = new RegExp(`(<button[^>]+class="[^"]*flyer-tab-btn[^"]*"[^>]*data-src=")[^"]*("[^>]*>\\s*${label.replace('(', '\\(').replace(')', '\\)')}\\s*</button>)`, 'i');
        if (hmartContent.match(btnRegex)) {
          hmartContent = hmartContent.replace(btnRegex, `$1${urls[key]}$2`);
          console.log(`Updated button URL for: ${label}`);
        } else {
          console.warn(`Warning: Button for "${label}" not found in HTML`);
        }
      }
    });

    // Also update the active flyer image: <img id="active-flyer-image" class="flyer-image" src="..." ... />
    if (urls.englishKorean) {
      const imgRegex = /(<img[^>]+id="active-flyer-image"[^>]*src=")[^"]*("[^>]*>)/i;
      if (hmartContent.match(imgRegex)) {
        hmartContent = hmartContent.replace(imgRegex, `$1${urls.englishKorean}$2`);
        console.log('Updated active flyer image source URL.');
      }
      
      // Also update the view full image link: <a id="view-full-btn" href="..." ...>
      const hrefRegex = /(<a[^>]+id="view-full-btn"[^>]*href=")[^"]*("[^>]*>)/i;
      if (hmartContent.match(hrefRegex)) {
        hmartContent = hmartContent.replace(hrefRegex, `$1${urls.englishKorean}$2`);
        console.log('Updated view-full button href URL.');
      }
    }

    fs.writeFileSync(hmartPath, hmartContent, 'utf8');
    console.log('hmart.html has been successfully updated with the latest flyer images.');

  } catch (error) {
    console.error('Error updating flyers:', error.message);
    process.exit(1);
  }
}

// If run directly
if (require.main === module) {
  updateFlyers();
}

module.exports = { updateFlyers };
