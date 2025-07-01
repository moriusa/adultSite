'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { FaFolderOpen, FaHome, FaMedal } from 'react-icons/fa';
import { MdArticle } from 'react-icons/md';
import Search from './components/search/Search';
import MobileMenu from './components/mobileMenu/MobileMenu';
import { RiMovieAiFill } from 'react-icons/ri';
import HamburgerMenu from './components/hamburgerMenu/HamburgerMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 検索処理
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* ロゴ・サイト名 */}
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoIcon}>
              <RiMovieAiFill className={styles.logoEmoji}/>
            </div>
            <h1 className={styles.logoText}>
              <span className={styles.logoPrimary}>Adult</span>
              <span className={styles.logoSecondary}>Site</span>
            </h1>
          </Link>
        </div>

        {/* デスクトップナビゲーション */}
        <nav className={styles.nav}>
          <Link href="/" className={`${styles.navLink} ${styles.active}`}>
            <FaHome className={styles.navIcon}/>
            ホーム
          </Link>
          <Link href="/categories" className={styles.navLink}>
            <FaFolderOpen className={styles.navIcon}/>
            カテゴリ
          </Link>
          <Link href="/ranking" className={styles.navLink}>
            <FaMedal className={styles.navIcon} />
            ランキング
          </Link>
          <Link href="/upload" className={styles.navLink}>
            <MdArticle className={styles.navIcon}/>
            投稿
          </Link>
        </nav>

        {/* 検索バー */}
        <div className={styles.searchContainer}>
          <Search
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onSubmit={handleSearch}
          />
        </div>

        {/* ユーザーメニュー */}
        <div className={styles.userMenu}>
          {isLoggedIn ? (
            <div className={styles.userDropdown}>
              <button className={styles.userButton}>
                <div className={styles.userAvatar}>
                  <span>👤</span>
                </div>
                <span className={styles.userName}>ユーザー</span>
                <span className={styles.dropdownArrow}>▼</span>
              </button>
              <div className={styles.dropdownMenu}>
                <Link href="/profile" className={styles.dropdownItem}>
                  <span>👤</span>プロフィール
                </Link>
                <Link href="/favorites" className={styles.dropdownItem}>
                  <span>❤️</span>お気に入り
                </Link>
                <Link href="/settings" className={styles.dropdownItem}>
                  <span>⚙️</span>設定
                </Link>
                <div className={styles.dropdownDivider}></div>
                <button className={styles.dropdownItem}>
                  <span>🚪</span>ログアウト
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.authButtons}>
              <button className={`${styles.authButton} ${styles.loginButton}`}>
                <span className={styles.buttonIcon}>🔑</span>
                ログイン
              </button>

            </div>
          )}
        </div>

        {/* ハンバーガーメニュー（モバイル） */}
        <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>

      {/* モバイルメニュー */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        searchValue={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
        onSearchSubmit={handleSearch}
      />

      {/* 背景エフェクト */}
      <div className={styles.headerBackground}>
        <div className={styles.backgroundGradient}></div>
        <div className={styles.backgroundPattern}></div>
      </div>
    </header>
  );
} 