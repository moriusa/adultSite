'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 検索処理
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* ロゴ・サイト名 */}
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoIcon}>
              <span className={styles.logoEmoji}>🎬</span>
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
            <span className={styles.navIcon}>🏠</span>
            ホーム
          </Link>
          <Link href="/categories" className={styles.navLink}>
            <span className={styles.navIcon}>📂</span>
            カテゴリ
          </Link>
          <Link href="/ranking" className={styles.navLink}>
            <span className={styles.navIcon}>🏆</span>
            ランキング
          </Link>
          <Link href="/upload" className={styles.navLink}>
            <span className={styles.navIcon}>📤</span>
            投稿
          </Link>
        </nav>

        {/* 検索バー */}
        <form onSubmit={handleSearch} className={styles.searchContainer}>
          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="動画を検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
              <span className={styles.searchIcon}>🔍</span>
            </button>
            <div className={styles.searchSuggestions}>
              <div className={styles.suggestionItem}>人気検索: アニメ</div>
              <div className={styles.suggestionItem}>人気検索: 実写</div>
              <div className={styles.suggestionItem}>人気検索: 3D</div>
            </div>
          </div>
        </form>

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
              <button className={`${styles.authButton} ${styles.registerButton}`}>
                <span className={styles.buttonIcon}>✨</span>
                登録
              </button>
            </div>
          )}
        </div>

        {/* ハンバーガーメニュー（モバイル） */}
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="メニュー"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      {/* モバイルメニュー */}
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
            <input
              type="text"
              placeholder="動画を検索..."
              className={styles.mobileSearchInput}
            />
            <button className={styles.mobileSearchButton}>
              <span>🔍</span>
            </button>
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

      {/* 背景エフェクト */}
      <div className={styles.headerBackground}>
        <div className={styles.backgroundGradient}></div>
        <div className={styles.backgroundPattern}></div>
      </div>
    </header>
  );
} 