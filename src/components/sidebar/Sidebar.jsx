import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaThLarge, FaShoppingCart, FaHome } from 'react-icons/fa';
import styles from './sidebar.module.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => setIsExpanded(prev => !prev);

  return (
    <aside className={`${styles.sidebar} ${isExpanded ? styles.expanded : ''}`}>
      <nav className={styles.nav}>
        <button className={styles.iconButton} onClick={toggleSidebar}>
          <FaThLarge />
          {isExpanded && <span className={styles.label}>Menu</span>}
        </button>

        <NavLink to="/jogos" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
          <FaHome />
          {isExpanded && <span className={styles.label}>Jogos</span>}
        </NavLink>

        <NavLink to="/historico" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
          <FaShoppingCart />
          {isExpanded && <span className={styles.label}>Histórico</span>}
        </NavLink>

      </nav>
    </aside>
  );
};

export default Sidebar;
