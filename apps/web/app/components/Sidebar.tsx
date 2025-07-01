'use client';

import Link from 'next/link';
import styles from './Sidebar.module.css';

const popularCategories = [
  { name: 'アニメ', count: 1234, color: '#FF6B6B' },
  { name: '実写', count: 2345, color: '#4ECDC4' },
  { name: '3D', count: 567, color: '#45B7D1' },
  { name: 'ゲーム', count: 890, color: '#96CEB4' },
  { name: 'コスプレ', count: 432, color: '#FFEAA7' },
  { name: 'オリジナル', count: 678, color: '#DDA0DD' },
];

const trendTags = [
  '人気', '新着', 'おすすめ', 'ランキング', '急上昇',
  'アニメ', '実写', '3D', 'ゲーム', 'コスプレ',
  'オリジナル', '二次創作', '同人', '商業', '無料'
];

const recommendedVideos = [
  {
    id: '1',
    title: 'おすすめ動画タイトル1',
    thumbnail: 'https://via.placeholder.com/120x68/667eea/ffffff?text=Video1',
    views: 15000,
    duration: '12:34'
  },
  {
    id: '2',
    title: 'おすすめ動画タイトル2',
    thumbnail: 'https://via.placeholder.com/120x68/764ba2/ffffff?text=Video2',
    views: 8900,
    duration: '8:45'
  },
  {
    id: '3',
    title: 'おすすめ動画タイトル3',
    thumbnail: 'https://via.placeholder.com/120x68/667eea/ffffff?text=Video3',
    views: 12300,
    duration: '15:20'
  }
];

export default function Sidebar() {
  const formatViews = (num: number) => {
    if (num >= 10000) {
      return `${(num / 10000).toFixed(1)}万`;
    }
    return num.toString();
  };

  return (
    <aside className={styles.sidebar}>
      {/* 人気カテゴリ */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>人気カテゴリ</h3>
        <div className={styles.categories}>
          {popularCategories.map((category, index) => (
            <Link 
              key={index} 
              href={`/category/${category.name}`}
              className={styles.categoryItem}
            >
              <div 
                className={styles.categoryColor}
                style={{ backgroundColor: category.color }}
              ></div>
              <span className={styles.categoryName}>{category.name}</span>
              <span className={styles.categoryCount}>({category.count})</span>
            </Link>
          ))}
        </div>
      </section>

      {/* トレンドタグ */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>トレンドタグ</h3>
        <div className={styles.tags}>
          {trendTags.map((tag, index) => (
            <Link 
              key={index} 
              href={`/tag/${tag}`}
              className={styles.tag}
            >
              #{tag}
            </Link>
          ))}
        </div>
      </section>

      {/* おすすめ動画 */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>おすすめ動画</h3>
        <div className={styles.recommendedVideos}>
          {recommendedVideos.map((video) => (
            <Link 
              key={video.id} 
              href={`/video/${video.id}`}
              className={styles.recommendedVideo}
            >
              <div className={styles.recommendedThumbnail}>
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className={styles.recommendedImage}
                />
                <div className={styles.recommendedDuration}>
                  {video.duration}
                </div>
              </div>
              <div className={styles.recommendedInfo}>
                <h4 className={styles.recommendedTitle}>{video.title}</h4>
                <span className={styles.recommendedViews}>
                  {formatViews(video.views)} 回視聴
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 広告エリア */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>おすすめ商品</h3>
        <div className={styles.adArea}>
          <div className={styles.adPlaceholder}>
            <div className={styles.adContent}>
              <h4>関連商品</h4>
              <p>おすすめの商品がここに表示されます</p>
              <button className={styles.adButton}>
                詳細を見る
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 追加広告エリア */}
      <section className={styles.section}>
        <div className={styles.adArea}>
          <div className={styles.adPlaceholder}>
            <div className={styles.adContent}>
              <h4>スポンサー広告</h4>
              <p>広告エリア</p>
              <button className={styles.adButton}>
                クリック
              </button>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
} 