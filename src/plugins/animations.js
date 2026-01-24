export default {
  install(app) {
    // Fade In Directive
    app.directive('fade-in', {
      mounted(el, binding) {
        el.style.opacity = '0';
        el.style.transform = binding.value === 'up' ? 'translateY(20px)' : 'translateY(0)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                observer.unobserve(el);
              }
            });
          },
          { threshold: 0.1 }
        );

        observer.observe(el);
      },
    });

    // Parallax Directive (Simple)
    app.directive('parallax', {
      mounted(el, binding) {
        window.addEventListener('scroll', () => {
          const speed = binding.value || 0.5;
          const offset = window.scrollY * speed;
          el.style.transform = `translateY(${offset}px)`;
        });
      }
    });
  },
};
