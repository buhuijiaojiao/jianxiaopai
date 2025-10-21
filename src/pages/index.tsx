import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures, {FeatureConfig} from '@site/src/components/HomepageFeatures';
import UpgradeAnnouncement from '@site/src/components/UpgradeAnnouncement';

import styles from './index.module.css';

const heroHighlights: string[] = [
  '实惠的价格，AI 求职黑科技人人用得起',
  '吊打竞品的全链路 AI 求职助手，精准又高效',
  '从简历到面试全程陪跑，求职加速一站搞定',
];

const featureItems: FeatureConfig[] = [
  {
    title: '一站式求职',
    summary: '覆盖求职准备、投递执行与面试辅导的全流程解决方案。',
    icon: <span aria-hidden="true">🚀</span>,
  },
  {
    title: '简小鉴',
    summary: '企业风险智能识别，职位画像一目了然，提升决策效率。',
    icon: <span aria-hidden="true">🛡️</span>,
  },
  {
    title: '求职陪跑',
    summary: 'AI导师陪伴，结合数据反馈调整策略，稳步推进每一步。',
    icon: <span aria-hidden="true">🤝</span>,
  },
  {
    title: '面试模拟',
    summary: '多场景模拟 AI 面试演练，实时给出结构化改进建议。',
    icon: <span aria-hidden="true">🎤</span>,
  },
  {
    title: '薪资分析',
    summary: '聚合行业数据，提供谈薪参考与预期管理。',
    icon: <span aria-hidden="true">📊</span>,
  },
  {
    title: '职场陪跑',
    summary: '入职后持续跟进，规划成长路径，快速适应新环境。',
    icon: <span aria-hidden="true">🏃‍♂️</span>,
  },
  {
    title: '人岗匹配',
    summary: '依据能力画像与岗位需求双向匹配，精准推荐高契合机会。',
    icon: <span aria-hidden="true">🎯</span>,
  },
  {
    title: '一对一答疑',
    summary: '专家团队实时解答求职疑问，提供个性化建议。',
    icon: <span aria-hidden="true">💬</span>,
  },
  {
    title: '加速求职',
    summary: '自动化工具与资源整合，让每一次投递都更快抵达目标。',
    icon: <span aria-hidden="true">⚡</span>,
  },
];

const announcementMeta = [
  {label: '发布日期', value: '2025 年 10 月'},
  {label: '版本', value: '简小派 v1.0'},
  {label: '覆盖功能', value: '简历 · 投递 · 面试 · 薪资 · 陪跑'},
];

const announcementActions = [
  {label: '了解版本亮点', href: '/docs/intro', variant: 'primary' as const},
  {label: '前往主站', href: 'https://jianlipai.com/', variant: 'secondary' as const, newTab: true},
];

function HeroSection(): ReactNode {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>简小派 · 全新出发</span>
          <h1 className={styles.heroTitle}>一站式 AI 求职平台</h1>
          <ul className={styles.heroHighlights}>
            {heroHighlights.map((item, index) => (
              <li key={`highlight-${index}`}>{item}</li>
            ))}
          </ul>
          <div className={styles.heroActions}>
            <Link className={styles.primaryAction} to="https://jianlipai.com/">
              立即体验
            </Link>
            <Link className={styles.secondaryAction} to="/docs/upgrade-announcement">
              查看使用指南
            </Link>
            <Link className={styles.secondaryAction} to="https://luntan.jianlipai.com/">
              论坛
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <img src="/img/logo.png" alt="简小派 Logo" />
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="简小派 - AI 求职助手"
      description="一站式 AI 赋能求职平台，提供简历优化、岗位匹配、面试模拟、薪资分析与求职陪跑等核心功能。">
      <main>
        <HeroSection />
        <UpgradeAnnouncement
          title="简小派全新版本上线"
          subtitle="Release Notes"
          description="新增多项核心功能，并全面升级UI交互体验。"
          meta={announcementMeta}
          actions={announcementActions}>
          <div className={styles.announcementContent}>
            <p>
              新版本围绕真实求职场景重新设计，强化数据驱动的智能服务能力，并为后续的组合式产品能力预留拓展空间。
            </p>
            <ul>
              <li>全新信息架构：模块化内容分区，快速定位所需功能。</li>
              <li>多角色支持：兼顾学生、转职者与职场人士的差异化需求。</li>
              <li>开放式生态：统一组件骨架，便于快速接入更多业务能力。</li>
            </ul>
          </div>
        </UpgradeAnnouncement>
        <HomepageFeatures
          heading="全流程功能矩阵"
          description="围绕求职准备、投递、面试与入职阶段提供一体化服务，每个功能都可独立使用，也能协同串联。"
          items={featureItems}
        />
      </main>
    </Layout>
  );
}
