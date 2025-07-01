import React from 'react';
import styles from './HamburgerMenu.module.css';

interface HamburgerMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isMenuOpen, toggleMenu }) => (
  <button
    className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
    onClick={toggleMenu}
    aria-label="メニュー"
  >
    <span className={styles.hamburgerLine}></span>
    <span className={styles.hamburgerLine}></span>
    <span className={styles.hamburgerLine}></span>
  </button>
);

export default HamburgerMenu; 