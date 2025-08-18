import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import UpgradeAnnouncement from '@site/src/components/UpgradeAnnouncement';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
        <Heading as="h1" className="hero__title">
              简小派
        </Heading>
            <p className="hero__subtitle">
              一站式 AI 赋能求职平台
            </p>
            <p className="hero__description">
              优化简历 · 一键投递 · 模拟面试 · 快速提升竞争力
            </p>
        <div className={styles.buttons}>
          <Link
                className={styles.primaryButton}
                to="http://8.153.173.210:5173">
                立即体验简小派 🚀
              </Link>
              <Link
                className={styles.secondaryButton}
            to="/docs/intro">
                查看使用文档 📖
          </Link>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.heroImage}>
              <img 
                src="/img/logo.png" 
                alt="简小派 Logo" 
                className={styles.logo}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="简小派 - AI求职助手"
      description="一站式AI赋能求职平台，智能优化简历，一键投递岗位，AI模拟面试，助你快速提升求职竞争力">
      <UpgradeAnnouncement />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
