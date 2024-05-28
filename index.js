document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('[data-collapse-toggle]');
    const menu = document.getElementById('mobile-menu-2');
  
    toggleButton.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  
    // Dark mode toggle logic (optional)
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const html = document.documentElement;
  
    darkModeToggle.addEventListener('click', () => {
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  
    if (localStorage.getItem('theme') === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  });
  