import { useEffect } from 'react';

export default function useScrollAnimations(prefersReducedMotion = false) {
  useEffect(() => {
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all animated elements
    document.querySelectorAll('.section-animate, .tag-animate, .section-line-animate').forEach((el) => {
      observer.observe(el);
    });

    // Stagger skill tags when their parent section becomes visible
    const skillsSection = document.querySelector('#skills.section-animate');
    if (skillsSection) {
      const tagObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            document.querySelectorAll('#skills .tag-animate').forEach((tag, i) => {
              setTimeout(() => tag.classList.add('visible'), i * 40);
            });
          }
        },
        { threshold: 0.1 }
      );
      tagObserver.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, [prefersReducedMotion]);
}
