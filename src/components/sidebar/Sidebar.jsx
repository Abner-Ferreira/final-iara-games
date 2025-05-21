import { useState } from 'react';
import { FaHome, FaThLarge } from 'react-icons/fa';
import { MdRedeem } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
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

        <NavLink to="/" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
          <FaHome />
          {isExpanded && <span className={styles.label}>Jogos</span>}
        </NavLink>

        <NavLink to="/jogos-resgatados" className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
          <MdRedeem />
          {isExpanded && <span className={styles.label}>Jogos resgatados</span>}
        </NavLink>

      </nav>
    </aside>
  );
};

export default Sidebar;
