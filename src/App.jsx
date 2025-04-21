import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './css/app.module.css';
import Sidebar from './components/sidebar/Sidebar';
import Rotas from './routes/Rotas';

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.content}>
          <Rotas />
        </div>
      </div>
    </Router>
  );
};

export default App;
