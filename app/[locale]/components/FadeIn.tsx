'use client';

import { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
}

export function FadeIn({ children, className = '', delay = 0, as: Tag = 'div' }: FadeInProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respeitar prefers-reduced-motion: revelar imediatamente
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = delay
            ? setTimeout(() => setVisible(true), delay)
            : (setVisible(true), undefined);
          observer.disconnect();
          return () => {
            if (timer) clearTimeout(timer);
          };
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -64px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const AnyTag = Tag as React.ElementType;

  return (
    <AnyTag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </AnyTag>
  );
}
