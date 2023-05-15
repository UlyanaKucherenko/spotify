import styles from '@/styles/ContentSection.module.scss';
import Link from 'next/link';

export const ContentSection = ({ title, path, children }) => {
  return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>{title}</h3>
          <Link legacyBehavior href={path}>see all</Link>
        </div>
        <div>
          {children}
        </div>
      </div>
  );
};