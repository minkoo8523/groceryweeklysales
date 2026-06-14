document.addEventListener('DOMContentLoaded', () => {
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
});
