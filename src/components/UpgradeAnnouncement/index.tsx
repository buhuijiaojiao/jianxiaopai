import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

export type AnnouncementActionVariant = 'primary' | 'secondary' | 'ghost';

export interface AnnouncementMeta {
  label: ReactNode;
  value?: ReactNode;
}

export interface AnnouncementAction {
  label: ReactNode;
  href: string;
  variant?: AnnouncementActionVariant;
  newTab?: boolean;
}

export interface UpgradeAnnouncementProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  meta?: AnnouncementMeta[];
  actions?: AnnouncementAction[];
  children?: ReactNode;
  footer?: ReactNode;
}

const defaultActions: AnnouncementAction[] = [
  {label: 'Primary Action', href: '#', variant: 'primary'},
  {label: 'Secondary Action', href: '#', variant: 'secondary'},
];

const variantClassMap: Record<AnnouncementActionVariant, string> = {
  primary: styles.primaryAction,
  secondary: styles.secondaryAction,
  ghost: styles.ghostAction,
};

export default function UpgradeAnnouncement({
  title = 'Product Update',
  subtitle,
  description,
  meta,
  actions = defaultActions,
  children,
  footer,
}: UpgradeAnnouncementProps): ReactNode {
  return (
    <section className={styles.section}>
      <div className={styles.frame}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
            {title && <h1 className={styles.title}>{title}</h1>}
            {description && <p className={styles.lead}>{description}</p>}
          </div>
          {meta && meta.length > 0 && (
            <ul className={styles.metaList}>
              {meta.map(({label, value}, index) => (
                <li key={`meta-${index}`} className={styles.metaItem}>
                  <span className={styles.metaLabel}>{label}</span>
                  {value && <span className={styles.metaValue}>{value}</span>}
                </li>
              ))}
            </ul>
          )}
        </header>

        <main className={styles.body}>{children}</main>

        {actions && actions.length > 0 && (
          <div className={styles.actions}>
            {actions.map(({label, href, variant = 'primary', newTab}, index) => (
              <Link
                key={`action-${index}`}
                className={clsx(styles.actionButton, variantClassMap[variant])}
                to={href}
                {...(newTab ? {target: '_blank', rel: 'noopener noreferrer'} : {})}>
                {label}
              </Link>
            ))}
          </div>
        )}

        {footer && <footer className={styles.footer}>{footer}</footer>}
      </div>
    </section>
  );
}
