import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import Header from './components/header/Header';
import VideoCard from './components/VideoCard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Link from 'next/link';

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

// サンプルデータ
const featuredVideos = [
  {
    id: '1',
    title: '【新作】魅惑的なアニメーション作品 - 高品質な3Dアニメーション',
    thumbnail: 'https://via.placeholder.com/320x180/667eea/ffffff?text=Featured+1',
    duration: '12:34',
    views: 150000,
    likes: 8900,
    uploader: 'アニメーション作家A',
    uploadDate: '2024-01-15',
    category: 'アニメ',
    affiliateLink: 'https://example.com/affiliate1'
  },
  {
    id: '2',
    title: '実写作品 - プロフェッショナルな撮影技術',
    thumbnail: 'https://via.placeholder.com/320x180/764ba2/ffffff?text=Featured+2',
    duration: '8:45',
    views: 89000,
    likes: 5600,
    uploader: '実写作家B',
    uploadDate: '2024-01-14',
    category: '実写',
    affiliateLink: 'https://example.com/affiliate2'
  },
  {
    id: '3',
    title: '3Dゲーム作品 - 最新のグラフィック技術',
    thumbnail: 'https://via.placeholder.com/320x180/45B7D1/ffffff?text=Featured+3',
    duration: '15:20',
    views: 123000,
    likes: 7200,
    uploader: '3D作家C',
    uploadDate: '2024-01-13',
    category: '3D',
    affiliateLink: 'https://example.com/affiliate3'
  },
  {
    id: '4',
    title: 'コスプレ作品 - 美しい衣装と演技',
    thumbnail: 'https://via.placeholder.com/320x180/96CEB4/ffffff?text=Featured+4',
    duration: '10:15',
    views: 67000,
    likes: 4100,
    uploader: 'コスプレ作家D',
    uploadDate: '2024-01-12',
    category: 'コスプレ',
    affiliateLink: 'https://example.com/affiliate4'
  },
  {
    id: '5',
    title: 'オリジナル作品 - 独創的なストーリー',
    thumbnail: 'https://via.placeholder.com/320x180/FFEAA7/ffffff?text=Featured+5',
    duration: '18:30',
    views: 95000,
    likes: 6300,
    uploader: 'オリジナル作家E',
    uploadDate: '2024-01-11',
    category: 'オリジナル',
    affiliateLink: 'https://example.com/affiliate5'
  },
  {
    id: '6',
    title: '二次創作作品 - 人気作品のパロディ',
    thumbnail: 'https://via.placeholder.com/320x180/DDA0DD/ffffff?text=Featured+6',
    duration: '14:22',
    views: 110000,
    likes: 7800,
    uploader: '二次創作作家F',
    uploadDate: '2024-01-10',
    category: '二次創作',
    affiliateLink: 'https://example.com/affiliate6'
  }
];

const dailyRanking = [
  {
    id: '7',
    title: '【1位】デイリーランキング1位の作品',
    thumbnail: 'https://via.placeholder.com/320x180/FF6B6B/ffffff?text=Rank+1',
    duration: '16:45',
    views: 250000,
    likes: 15000,
    uploader: 'ランキング作家A',
    uploadDate: '2024-01-15',
    category: 'アニメ'
  },
  {
    id: '8',
    title: '【2位】デイリーランキング2位の作品',
    thumbnail: 'https://via.placeholder.com/320x180/4ECDC4/ffffff?text=Rank+2',
    duration: '11:30',
    views: 180000,
    likes: 12000,
    uploader: 'ランキング作家B',
    uploadDate: '2024-01-15',
    category: '実写'
  },
  {
    id: '9',
    title: '【3位】デイリーランキング3位の作品',
    thumbnail: 'https://via.placeholder.com/320x180/45B7D1/ffffff?text=Rank+3',
    duration: '13:20',
    views: 150000,
    likes: 9800,
    uploader: 'ランキング作家C',
    uploadDate: '2024-01-15',
    category: '3D'
  }
];

const categories = [
  { name: 'アニメ', icon: '🎬', count: 1234, color: '#FF6B6B' },
  { name: '実写', icon: '📹', count: 2345, color: '#4ECDC4' },
  { name: '3D', icon: '🎮', count: 567, color: '#45B7D1' },
  { name: 'ゲーム', icon: '🎲', count: 890, color: '#96CEB4' },
  { name: 'コスプレ', icon: '👗', count: 432, color: '#FFEAA7' },
  { name: 'オリジナル', icon: '✨', count: 678, color: '#DDA0DD' }
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        {/* ヒーローセクション */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroGradient}></div>
            <div className={styles.heroPattern}></div>
            <div className={styles.floatingElements}>
              <div className={styles.floatingElement} style={{ '--delay': '0s' } as any}>🎬</div>
              <div className={styles.floatingElement} style={{ '--delay': '2s' } as any}>📹</div>
              <div className={styles.floatingElement} style={{ '--delay': '4s' } as any}>🎮</div>
              <div className={styles.floatingElement} style={{ '--delay': '6s' } as any}>✨</div>
            </div>
          </div>
          
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleLine}>高品質な動画</span>
                <span className={styles.heroTitleLine}>コンテンツをお届け</span>
              </h1>
              <p className={styles.heroDescription}>
                最新のアニメーション、実写、3D作品を楽しめる
                <br />
                次世代のアダルトサイト
              </p>
              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>10,000+</span>
                  <span className={styles.statLabel}>動画</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>1M+</span>
                  <span className={styles.statLabel}>視聴者</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>作家</span>
                </div>
              </div>
              <div className={styles.heroButtons}>
                <button className={`${styles.heroButton} ${styles.primaryButton}`}>
                  <span className={styles.buttonIcon}>🎬</span>
                  今すぐ視聴開始
                </button>
                <button className={`${styles.heroButton} ${styles.secondaryButton}`}>
                  <span className={styles.buttonIcon}>📂</span>
                  カテゴリを見る
                </button>
              </div>
            </div>
            
            <div className={styles.heroVisual}>
              <div className={styles.heroImage}>
                <img 
                  src="https://via.placeholder.com/500x400/667eea/ffffff?text=Hero+Visual"
                  alt="ヒーロー画像"
                  className={styles.heroImg}
                />
                <div className={styles.heroOverlay}>
                  <div className={styles.playButton}>
                    <span>▶</span>
                  </div>
                </div>
              </div>
              <div className={styles.heroBadges}>
                <div className={styles.badge}>
                  <span className={styles.badgeIcon}>🔥</span>
                  <span className={styles.badgeText}>人気</span>
                </div>
                <div className={styles.badge}>
                  <span className={styles.badgeIcon}>⭐</span>
                  <span className={styles.badgeText}>高評価</span>
                </div>
                <div className={styles.badge}>
                  <span className={styles.badgeIcon}>🆕</span>
                  <span className={styles.badgeText}>新着</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* カテゴリセクション */}
        <section className={styles.categoriesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>カテゴリ</h2>
              <Link href="/categories" className={styles.viewAll}>
                すべて見る →
              </Link>
            </div>
            <div className={styles.categoriesGrid}>
              {categories.map((category, index) => (
                <Link 
                  key={index} 
                  href={`/category/${category.name}`}
                  className={styles.categoryCard}
                  style={{ '--category-color': category.color } as any}
                >
                  <div className={styles.categoryIcon}>
                    <span>{category.icon}</span>
                  </div>
                  <div className={styles.categoryInfo}>
                    <h3 className={styles.categoryName}>{category.name}</h3>
                    <span className={styles.categoryCount}>{category.count} 作品</span>
                  </div>
                  <div className={styles.categoryArrow}>→</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className={styles.content}>
          <div className={styles.mainContent}>
            {/* 注目動画 */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionIcon}>🔥</span>
                  注目動画
                </h2>
                <Link href="/featured" className={styles.viewAll}>
                  すべて見る →
                </Link>
              </div>
              <div className={styles.videoGrid}>
                {featuredVideos.map((video, index) => (
                  <div 
                    key={video.id} 
                    className={styles.videoCardWrapper}
                    style={{ '--animation-delay': `${index * 0.1}s` } as any}
                  >
                    <VideoCard {...video} />
                  </div>
                ))}
              </div>
            </section>

            {/* デイリーランキング */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionIcon}>🏆</span>
                  デイリーランキング
                </h2>
                <Link href="/ranking" className={styles.viewAll}>
                  すべて見る →
                </Link>
              </div>
              <div className={styles.rankingGrid}>
                {dailyRanking.map((video, index) => (
                  <div 
                    key={video.id} 
                    className={styles.rankingCard}
                    style={{ '--rank': index + 1 } as any}
                  >
                    <div className={styles.rankingBadge}>
                      <span>{index + 1}</span>
                    </div>
                    <VideoCard {...video} />
                  </div>
                ))}
              </div>
            </section>

            {/* 最新投稿 */}
            <section className={styles.section}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionIcon}>🆕</span>
                  最新投稿
                </h2>
                <Link href="/latest" className={styles.viewAll}>
                  すべて見る →
                </Link>
              </div>
              <div className={styles.videoGrid}>
                {featuredVideos.slice(0, 3).map((video, index) => (
                  <div 
                    key={`latest-${video.id}`} 
                    className={styles.videoCardWrapper}
                    style={{ '--animation-delay': `${index * 0.1}s` } as any}
                  >
                    <VideoCard {...video} />
                  </div>
                ))}
              </div>
            </section>
          </div>

          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  );
}
