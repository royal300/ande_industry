import { useEffect, useRef } from 'react';

export default function AnimatedSection({ children, className = '' }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Add reveal class to each direct child
    const children = Array.from(el.children);
    children.forEach((child, index) => {
      child.classList.add('reveal');
      const delay = Math.min(index * 0.1, 0.5);
      child.style.transitionDelay = `${delay}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const childEls = Array.from(entry.target.children);
            childEls.forEach((child) => {
              child.classList.add('visible');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
