import React, { useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface Firework {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
}

const UpgradeAnnouncement: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fireworksRef = useRef<Firework[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置canvas尺寸
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 烟花颜色
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];

    // 创建烟花
    const createFirework = (x: number, y: number) => {
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 2 + Math.random() * 3;
        fireworksRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 100,
          maxLife: 100,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    // 动画循环
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 更新和绘制烟花
      fireworksRef.current = fireworksRef.current.filter((firework) => {
        firework.x += firework.vx;
        firework.y += firework.vy;
        firework.vy += 0.05; // 重力
        firework.life--;

        if (firework.life > 0) {
          const alpha = firework.life / firework.maxLife;
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = firework.color;
          ctx.beginPath();
          ctx.arc(firework.x, firework.y, 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
          return true;
        }
        return false;
      });

      // 随机创建新烟花
      if (Math.random() < 0.02) {
        createFirework(
          Math.random() * canvas.width,
          Math.random() * canvas.height * 0.5
        );
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className={styles.announcementContainer}>
      <canvas
        ref={canvasRef}
        className={styles.fireworksCanvas}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div className={styles.announcementContent}>
        <div className={styles.badge}>
          <span className={styles.badgeText}>🚀 重磅升级</span>
        </div>

        <h1 className={styles.title}>
          简小派平台重磅升级！
          <br />
          <span className={styles.highlight}>全新功能矩阵即将上线</span>
        </h1>

        <p className={styles.subtitle}>
          从简历优化到求职全流程，简小派陪你走完求职每一步
        </p>

        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>✨</div>
            <h3>简历优化</h3>
            <p>AI深度分析，智能优化建议</p>
            <span className={styles.status}>已上线</span>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔍</div>
            <h3>简小鉴</h3>
            <p>智能公司甄别助手</p>
            <span className={styles.statusComing}>即将上线</span>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📤</div>
            <h3>在线投递</h3>
            <p>一站式简历投递平台</p>
            <span className={styles.statusComing}>即将上线</span>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>💬</div>
            <h3>求职广场</h3>
            <p>求职者交流社区</p>
            <span className={styles.statusComing}>即将上线</span>
          </div>
        </div>

        <div className={styles.buttons}>
          <Link className={styles.primaryButton} to="https://jianlipai.com/">
            立即体验简小派 🚀
          </Link>
          <Link className={styles.secondaryButton} to="/docs/create-resume">
            查看使用文档 📖
          </Link>
          <Link
            className={styles.tertiaryButton}
            to="/docs/upgrade-announcement"
          >
            升级详情 🔍
          </Link>
        </div>

        <div className={styles.contactInfo}>
          <p>📞 联系我们：QQ交流群 1043216521</p>
          <p>📧 邮箱：support@jianlipai.com</p>
        </div>
      </div>
    </div>
  );
};

export default UpgradeAnnouncement; 