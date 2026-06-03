import { useEffect } from 'react';

function useScrollAnimations(prefersReducedMotion) {
  useEffect(() => {
    if (prefersReducedMotion) return;

    // Section fade-up observer
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // If this section has skill tags, stagger them
            const tags = entry.target.querySelectorAll('.tag-animate');
            tags.forEach((tag, index) => {
              setTimeout(() => {
                tag.classList.add('visible');
              }, index * 40);
            });

            // If this section has divider lines, animate them
            const lines = entry.target.querySelectorAll('.section-line');
            lines.forEach((line) => {
              line.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all section-animate elements
    document.querySelectorAll('.section-animate').forEach((el) => {
      sectionObserver.observe(el);
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, [prefersReducedMotion]);
}

export default useScrollAnimations;
