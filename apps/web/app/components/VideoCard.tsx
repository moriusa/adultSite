'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './VideoCard.module.css';

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: number;
  likes: number;
  uploader: string;
  uploadDate: string;
  category: string;
  isFavorite?: boolean;
  affiliateLink?: string;
}

export default function VideoCard({
  id,
  title,
  thumbnail,
  duration,
  views,
  likes,
  uploader,
  uploadDate,
  category,
  isFavorite = false,
  affiliateLink
}: VideoCardProps) {
  const [favorite, setFavorite] = useState(isFavorite);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  const formatViews = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1日前';
    if (diffDays < 7) return `${diffDays}日前`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)}週間前`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)}ヶ月前`;
    return `${Math.floor(diffDays / 365)}年前`;
  };

  return (
    <div className={styles.card}>
      <div className={styles.thumbnailContainer}>
        <Link href={`/video/${id}`}>
          <div className={styles.thumbnail}>
            <img 
              src={thumbnail} 
              alt={title}
              className={styles.thumbnailImage}
              loading="lazy"
            />
            <div className={styles.duration}>
              {duration}
            </div>
            <div className={styles.playButton}>
              ▶
            </div>
          </div>
        </Link>
        <button 
          className={`${styles.favoriteButton} ${favorite ? styles.favorited : ''}`}
          onClick={toggleFavorite}
          aria-label={favorite ? 'お気に入りから削除' : 'お気に入りに追加'}
        >
          {favorite ? '❤️' : '🤍'}
        </button>
      </div>

      <div className={styles.content}>
        <Link href={`/video/${id}`} className={styles.titleLink}>
          <h3 className={styles.title}>{title}</h3>
        </Link>
        
        <div className={styles.meta}>
          <Link href={`/uploader/${uploader}`} className={styles.uploader}>
            {uploader}
          </Link>
          <span className={styles.uploadDate}>{formatDate(uploadDate)}</span>
        </div>

        <div className={styles.stats}>
          <span className={styles.views}>{formatViews(views)} 回視聴</span>
          <span className={styles.likes}>{formatViews(likes)} いいね</span>
        </div>

        <div className={styles.category}>
          <span className={styles.categoryTag}>{category}</span>
        </div>

        {affiliateLink && (
          <div className={styles.affiliate}>
            <a 
              href={affiliateLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.affiliateLink}
            >
              🔗 関連商品を見る
            </a>
          </div>
        )}
      </div>
    </div>
  );
} 