import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/breadcrumb.module.css';

export default function Breadcrumb() {
  const location = useLocation();
  const routes = location.pathname.split('/');

  return (
    <div>
      <div className="demo-category-title">
        Breadcrumb
      </div>
      <nav
        className={styles.breadcrumbList}
      >
        {routes.map((route, index) => (
          <div
            key={route}
            className={styles.breadcrumb}
          >
            {index !== routes.length - 1 ? (
              <a
                href={`/${routes.slice(1, index + 1).join('/')}`}
              >
                {route === '' ? 'home' : route}
              </a>
            ) : (
              <span>
                {route}
              </span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
