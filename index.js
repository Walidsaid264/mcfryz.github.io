document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('[data-collapse-toggle]');
    const menu = document.getElementById('mobile-menu-2');
  
    toggleButton.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  });

  const carousel = document.querySelector('.carousel');
        const items = document.querySelectorAll('.carousel-item');
        const prevButton = document.querySelector('.carousel-prev');
        const nextButton = document.querySelector('.carousel-next');
        const navButtons = document.querySelectorAll('.carousel-nav');
        let index = 0;
        let interval;

        const updateCarousel = () => {
            carousel.style.transform = `translateX(-${index * 100}%)`;
            navButtons.forEach((btn, i) => {
                btn.classList.toggle('bg-gray-800', i === index);
                btn.classList.toggle('bg-gray-400', i !== index);
            });
        };

        const showNextItem = () => {
            index = (index + 1) % items.length;
            updateCarousel();
        };

        const showPrevItem = () => {
            index = (index - 1 + items.length) % items.length;
            updateCarousel();
        };

        const showItem = (i) => {
            index = i;
            updateCarousel();
        };

        nextButton.addEventListener('click', showNextItem);
        prevButton.addEventListener('click', showPrevItem);
        navButtons.forEach((btn, i) => {
            btn.addEventListener('click', () => showItem(i));
        });

        interval = setInterval(showNextItem, 10000);

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                clearInterval(interval);
            } 
        });
  