// ForumLaunchAnnouncement.tsx
import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const ForumLaunchAnnouncement: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // 触发入场动画
    const timer = setTimeout(() => setIsVisible(true), 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={styles.announcementContainer}>
      {/* 背景装饰元素 */}
      <div className={styles.backgroundDecorations}>
        <div 
          className={styles.decoration1}
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)` }}
        />
        <div 
          className={styles.decoration2}
          style={{ transform: `translateY(${-scrollY * 0.15}px) rotate(${-scrollY * 0.08}deg)` }}
        />
        <div className={styles.floatingDot1} />
        <div className={styles.floatingDot2} />
        <div className={styles.floatingDot3} />
      </div>

      <div className={`${styles.announcementContent} ${isVisible ? styles.fadeInUp : ''}`}>
        
        {/* 公告头部 */}
        <header className={styles.header}>
          <div className={`${styles.badge} ${styles.pulseAnimation}`}>
            <span className={styles.sparkle}>✨</span>
            <span className={styles.badgeText}>产品公告</span>
          </div>
          
          <h1 className={styles.title}>
            <span className={styles.gradientText}>简小派论坛正式上线</span>
            <span className={styles.subtitle}>专业求职者交流社区</span>
          </h1>
          
          <div className={styles.meta}>
            <span className={styles.date}>2025年9月</span>
            <span className={styles.divider}>·</span>
            <span className={styles.team}>简历派产品团队</span>
          </div>
        </header>

        {/* 核心内容 */}
        <main className={styles.main}>
          <section className={styles.announcement}>
            <div className={styles.announcementText}>
              <p className={styles.leadText}>
                经过团队精心开发和测试，简小派论坛现已正式面向所有用户开放。
                论坛旨在为求职者提供专业的交流平台，促进经验分享与互助成长。
              </p>
            </div>
          </section>

          {/* 平台功能状态 */}
          <section className={styles.platformStatus}>
            <h2 className={styles.sectionTitle}>平台功能状态</h2>
            
            <div className={styles.featureGrid}>
              <div className={`${styles.featureCard} ${styles.animationDelay1}`}>
                <div className={styles.featureHeader}>
                  <div className={`${styles.featureIcon} ${styles.iconBlue}`}>
                    <span>📋</span>
                  </div>
                  <div className={styles.featureInfo}>
                    <h3 className={styles.featureName}>简历优化</h3>
                    <p className={styles.featureDesc}>AI智能简历分析与优化建议</p>
                  </div>
                </div>
                <span className={styles.statusRunning}>正常运行</span>
              </div>

              <div className={`${styles.featureCard} ${styles.animationDelay2}`}>
                <div className={styles.featureHeader}>
                  <div className={`${styles.featureIcon} ${styles.iconPurple}`}>
                    <span>🔍</span>
                  </div>
                  <div className={styles.featureInfo}>
                    <h3 className={styles.featureName}>简小鉴</h3>
                    <p className={styles.featureDesc}>企业信息甄别与风险评估</p>
                  </div>
                </div>
                <span className={styles.statusRunning}>正常运行</span>
              </div>

              <div className={`${styles.featureCard} ${styles.animationDelay3}`}>
                <div className={styles.featureHeader}>
                  <div className={`${styles.featureIcon} ${styles.iconOrange}`}>
                    <span>📤</span>
                  </div>
                  <div className={styles.featureInfo}>
                    <h3 className={styles.featureName}>在线投递</h3>
                    <p className={styles.featureDesc}>高效便捷的简历投递服务</p>
                  </div>
                </div>
                <span className={styles.statusRunning}>正常运行</span>
              </div>

              <div className={`${styles.featureCard} ${styles.animationDelay4}`}>
                <div className={styles.featureHeader}>
                  <div className={`${styles.featureIcon} ${styles.iconGreen}`}>
                    <span>💬</span>
                  </div>
                  <div className={styles.featureInfo}>
                    <h3 className={styles.featureName}>交流论坛</h3>
                    <p className={styles.featureDesc}>求职经验分享与互助社区</p>
                  </div>
                </div>
                <span className={`${styles.statusNew} ${styles.sparkleEffect}`}>新功能上线</span>
              </div>
            </div>
          </section>
        </main>

        {/* 行动引导 */}
        <section className={styles.actions}>
          <div className={styles.actionButtons}>
            <Link className={`${styles.primaryButton} ${styles.buttonAnimation}`} to="https://luntan.jianlipai.com/">
              <span className={styles.buttonContent}>访问论坛</span>
              <span className={styles.buttonShine}></span>
            </Link>
            <Link className={`${styles.secondaryButton} ${styles.buttonHover}`} to="https://jianlipai.com/">
              返回主站
            </Link>
            <Link className={`${styles.tertiaryButton} ${styles.buttonHover}`} to="/docs/create-resume">
              使用指南
            </Link>
          </div>
        </section>

        {/* 页脚信息 */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.supportInfo}>
              <h4>技术支持</h4>
              <p>如有问题，请通过以下方式联系我们：</p>
              <div className={styles.contactList}>
                <div className={`${styles.contactItem} ${styles.contactHover}`}>
                  <span>QQ交流群：1043216521</span>
                </div>
                <div className={`${styles.contactItem} ${styles.contactHover}`}>
                  <span>邮箱：support@jianlipai.com</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ForumLaunchAnnouncement;