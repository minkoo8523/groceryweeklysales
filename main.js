document.addEventListener('DOMContentLoaded', () => {
  // Shopping list toggle
  const actions = document.querySelectorAll('.card-action');
  actions.forEach(action => {
    action.addEventListener('click', () => {
      const isAdded = action.classList.contains('added');
      if (!isAdded) {
        action.classList.add('added');
        action.textContent = '✅ Added to List';
        action.style.backgroundColor = '#22c55e'; // Green
        action.style.color = '#ffffff';
        action.style.borderColor = '#22c55e';
        action.style.boxShadow = '0 0 12px rgba(34, 197, 94, 0.4)';
      } else {
        action.classList.remove('added');
        action.textContent = 'Add to Shopping List';
        action.style.backgroundColor = '';
        action.style.color = '';
        action.style.borderColor = '';
        action.style.boxShadow = '';
      }
    });
  });

  // H Mart Flyer tab switcher
  const flyerTabs = document.querySelectorAll('.flyer-tab-btn');
  const flyerImg = document.getElementById('active-flyer-image');
  const viewFullBtn = document.getElementById('view-full-btn');

  if (flyerTabs.length > 0 && flyerImg && viewFullBtn) {
    flyerTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs
        flyerTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Get source URL
        const src = tab.getAttribute('data-src');
        
        // Update flyer image src
        flyerImg.src = src;
        
        // Update view full image link href
        viewFullBtn.href = src;
      });
    });
  }
});
