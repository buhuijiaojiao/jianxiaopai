import React from 'react';
import styles from './styles.module.css';

type BilibiliVideoProps = {
  /** Bilibili 视频 BV 号，例如：BV1hK411W7fC */
  id: string;
  /** 视频标题，可选 */
  title?: string;
  /** 视频页面链接，可选 */
  link?: string;
  /** 分 P 页码，默认 1 */
  page?: number;
  /** 宽度百分比，默认 100% */
  width?: string;
};

const BilibiliVideo: React.FC<BilibiliVideoProps> = ({
  id,
  title,
  link,
  page = 1,
  width = '100%',
}) => {
  if (!id) return null;

  const src = `https://player.bilibili.com/player.html?bvid=${id}&page=${page}`;

  return (
    <div className={styles.container} style={{ width }}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.videoWrapper}>
        <iframe
          src={src}
          allowFullScreen
          loading="lazy"
          title={`bilibili video ${id}`}
        />
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          在哔哩哔哩观看 → 
        </a>
      )}
    </div>
  );
};

export default BilibiliVideo;
