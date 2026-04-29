'use client';

import { useState, type KeyboardEvent, type MouseEvent } from 'react';

type GooeyNavItem = {
  label: string;
  href: string;
};

type GooeyNavProps = {
  items: GooeyNavItem[];
  initialActiveIndex?: number;
};

export default function GooeyNav({ items, initialActiveIndex = 0 }: GooeyNavProps) {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, index: number) => {
    event.preventDefault();
    setActiveIndex(index);

    const href = items[index]?.href;
    if (!href) return;

    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    window.location.href = href;
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLAnchorElement>, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick(event as unknown as MouseEvent<HTMLAnchorElement>, index);
    }
  };

  return (
    <nav className="gooey-nav" aria-label="Navegación principal">
      <ul className="gooey-nav-list">
        {items.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <li key={item.label} className={`gooey-nav-item ${isActive ? 'is-active' : ''}`}>
              <a href={item.href} onClick={event => handleClick(event, index)} onKeyDown={event => handleKeyDown(event, index)}>
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>

      <style jsx global>{`
        .gooey-nav {
          display: inline-flex;
          align-items: center;
        }

        .gooey-nav-list {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          list-style: none;
          margin: 0;
          padding: 0.35rem;
          border-radius: 999px;
          border: 1px solid rgba(13, 21, 38, 0.08);
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(18px);
          box-shadow: 0 12px 36px rgba(13, 21, 38, 0.06);
        }

        .gooey-nav-item {
          position: relative;
          border-radius: 999px;
          transition: transform 180ms ease, color 180ms ease, background-color 180ms ease;
        }

        .gooey-nav-item a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.7rem 1rem;
          border-radius: 999px;
          font-size: 0.875rem;
          font-weight: 500;
          line-height: 1;
          color: #6b7280;
          transition: color 180ms ease, transform 180ms ease;
        }

        .gooey-nav-item:hover {
          transform: translateY(-1px);
        }

        .gooey-nav-item:hover a,
        .gooey-nav-item.is-active a {
          color: #ffffff;
        }

        .gooey-nav-item::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: var(--primary);
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 220ms ease, transform 220ms ease;
          z-index: -1;
        }

        .gooey-nav-item.is-active::after {
          opacity: 1;
          transform: scale(1);
        }

        @media (max-width: 1024px) {
          .gooey-nav-list {
            gap: 0.25rem;
          }

          .gooey-nav-item a {
            padding-inline: 0.85rem;
          }
        }
      `}</style>
    </nav>
  );
}