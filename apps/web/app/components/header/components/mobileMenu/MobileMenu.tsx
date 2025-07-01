import React from 'react';
import Link from 'next/link';
import styles from './MobileMenu.module.css';
import Search from '../search/Search';

interface MobileMenuProps {
  isMenuOpen: boolean;
  searchValue: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, searchValue, onSearchChange, onSearchSubmit }) => (
  <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
    <div className={styles.mobileMenuContent}>
      <nav className={styles.mobileNav}>
        <Link href="/" className={styles.mobileNavLink}>
          <span className={styles.mobileNavIcon}>🏠</span>
          ホーム
        </Link>
        <Link href="/categories" className={styles.mobileNavLink}>
          <span className={styles.mobileNavIcon}>📂</span>
          カテゴリ
        </Link>
        <Link href="/ranking" className={styles.mobileNavLink}>
          <span className={styles.mobileNavIcon}>🏆</span>
          ランキング
        </Link>
        <Link href="/upload" className={styles.mobileNavLink}>
          <span className={styles.mobileNavIcon}>📤</span>
          投稿
        </Link>
      </nav>
      <div className={styles.mobileSearch}>
        <Search value={searchValue} onChange={onSearchChange} onSubmit={onSearchSubmit} />
      </div>
      <div className={styles.mobileAuth}>
        <button className={styles.mobileLoginButton}>
          <span>🔑</span>ログイン
        </button>
        <button className={styles.mobileRegisterButton}>
          <span>✨</span>登録
        </button>
      </div>
    </div>
  </div>
);

export default MobileMenu; 