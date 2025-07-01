'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* サイト情報 */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>AdultSite</h3>
            <p className={styles.description}>
              高品質な動画コンテンツをお届けするアダルトサイトです。
              安全で快適な視聴体験を提供いたします。
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                🐦
              </a>
              <a href="#" className={styles.socialLink} aria-label="Discord">
                💬
              </a>
              <a href="#" className={styles.socialLink} aria-label="YouTube">
                📺
              </a>
            </div>
          </div>

          {/* ナビゲーション */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>ナビゲーション</h4>
            <nav className={styles.nav}>
              <Link href="/" className={styles.navLink}>ホーム</Link>
              <Link href="/categories" className={styles.navLink}>カテゴリ</Link>
              <Link href="/ranking" className={styles.navLink}>ランキング</Link>
              <Link href="/upload" className={styles.navLink}>投稿</Link>
              <Link href="/favorites" className={styles.navLink}>お気に入り</Link>
            </nav>
          </div>

          {/* サポート */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>サポート</h4>
            <nav className={styles.nav}>
              <Link href="/help" className={styles.navLink}>ヘルプ</Link>
              <Link href="/contact" className={styles.navLink}>お問い合わせ</Link>
              <Link href="/report" className={styles.navLink}>違反報告</Link>
              <Link href="/suggestions" className={styles.navLink}>ご要望</Link>
            </nav>
          </div>

          {/* 法的情報 */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>法的情報</h4>
            <nav className={styles.nav}>
              <Link href="/terms" className={styles.navLink}>利用規約</Link>
              <Link href="/privacy" className={styles.navLink}>プライバシーポリシー</Link>
              <Link href="/disclaimer" className={styles.navLink}>免責事項</Link>
              <Link href="/age-verification" className={styles.navLink}>年齢確認</Link>
            </nav>
          </div>
        </div>

        {/* 年齢確認警告 */}
        <div className={styles.ageWarning}>
          <div className={styles.warningContent}>
            <h5 className={styles.warningTitle}>⚠️ 年齢確認</h5>
            <p className={styles.warningText}>
              このサイトは18歳以上の方を対象としています。
              未成年者の方はアクセスをお控えください。
            </p>
          </div>
        </div>

        {/* コピーライト */}
        <div className={styles.copyright}>
          <p>&copy; 2024 AdultSite. All rights reserved.</p>
          <p className={styles.disclaimer}>
            このサイトのコンテンツは全て18歳以上の成人向けです。
          </p>
        </div>
      </div>
    </footer>
  );
} 