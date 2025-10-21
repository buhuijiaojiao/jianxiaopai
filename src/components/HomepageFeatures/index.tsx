import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export type FeatureIcon = ReactNode;

export type FeatureConfig = {
  title?: ReactNode;
  icon?: FeatureIcon;
  summary?: ReactNode;
  bullets?: ReactNode[];
  className?: string;
};

export interface HomepageFeaturesProps {
  items?: FeatureConfig[];
  heading?: ReactNode;
  description?: ReactNode;
}


export default function HomepageFeatures({
  items = defaultItems,
  heading = '简小派全新版本正式上线',
  description = '一站式求职服务全面升级，多维度功能协同助力，带来更高效、更安心的求职体验。',
}: HomepageFeaturesProps): ReactNode {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          {heading && <h2 className={styles.title}>{heading}</h2>}
          {description && <p className={styles.description}>{description}</p>}
        </header>
        <div className={styles.grid}>
          {items.map((item, index) => {
            const key = `feature-${index}`;

            return (
              <article key={key} className={clsx(styles.card, item.className)}>
                {item.icon && <div className={styles.iconWrapper}>{item.icon}</div>}
                {item.title && <h3 className={styles.cardTitle}>{item.title}</h3>}
                {item.summary && <p className={styles.summary}>{item.summary}</p>}
                {item.bullets && item.bullets.length > 0 && (
                  <ul className={styles.list}>
                    {item.bullets.map((bullet, bulletIndex) => (
                      <li key={`feature-${index}-bullet-${bulletIndex}`} className={styles.listItem}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
