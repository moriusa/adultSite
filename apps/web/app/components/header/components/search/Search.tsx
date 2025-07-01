import React from 'react';
import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';

interface SearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const Search: React.FC<SearchProps> = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={styles.searchContainer}>
      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="動画を検索..."
          value={value}
          onChange={onChange}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          <FaSearch className={styles.searchIcon}/>
        </button>
      </div>
    </form>
  );
};

export default Search;
