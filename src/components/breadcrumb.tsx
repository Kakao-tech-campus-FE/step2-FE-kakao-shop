import styles from '../styles/breadcrumb.module.css';
import { BreadcrumbData } from '../types/breadcrumbData';

interface BreadcrumbProps {
  path: BreadcrumbData[];
  currentPath?: BreadcrumbData;
}

export default function Breadcrumb({
  path,
  currentPath,
}: BreadcrumbProps) {
  return (
    <div>
      <div className="demo-category-title">
        Breadcrumb
      </div>
      <nav
        className={styles.breadcrumbList}
      >
        {path.map(({ id, label, link }) => (
          <div
            key={id}
            className={styles.breadcrumb}
          >
            <a href={link}>
              {label}
            </a>
          </div>
        ))}
        {currentPath !== undefined
          ? (
            <div className={styles.breadcrumb}>
              <a href={currentPath.link}>
                {currentPath.label}
              </a>
            </div>
          ) : null}
      </nav>
    </div>
  );
}
