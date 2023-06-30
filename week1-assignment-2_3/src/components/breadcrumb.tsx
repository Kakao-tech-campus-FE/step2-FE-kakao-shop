import React, { useState } from 'react';
import styles from '../styles/breadcrumb.module.css';

export default function Breadcrumb() {
  const directoryTree: {
    [key: string]: string[];
  } = {
    Home: ['Blog', 'Resume', 'Contact'],
    Blog: ['Post 1', 'Post 2', 'Post 3'],
    Resume: ['First', 'Second', 'Third'],
    Contact: ['Email', 'Phone'],
  };
  const [pages, setPages] = useState<string[]>(['Home']);

  return (
    <div>
      <div
        style={{
          fontWeight: '700',
          fontSize: '2rem',
          margin: '2rem 1rem',
        }}
      >
        Breadcrumb
      </div>
      <nav
        style={{
          margin: '1rem',
        }}
      >
        <ul className={styles.breadcrumbList}>
          {pages.map((page, index) => (
            <li
              className={styles.breadcrumb}
              key={page}
            >
              {index === pages.length - 1 ? page : (
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    setPages((prev) => prev.slice(0, prev.indexOf(page) + 1));
                  }}
                >
                  {page}
                </a>
              )}
            </li>
          ))}
        </ul>
        <br />
        <ul className={styles.links}>
          {directoryTree[pages[pages.length - 1]] && directoryTree[pages[pages.length - 1]].map((link) => (
            <li key={link}>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  setPages((prev) => [...prev, link]);
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
