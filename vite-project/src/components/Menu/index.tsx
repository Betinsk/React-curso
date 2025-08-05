

import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {

    const [theme, setTheme] = useState<AvailableThemes>(() => {
      const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark'
    return storageTheme;
    });

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault(); // Prevent default anchor behavior
    setTheme(
      prevTheme => {
      const nextTheme =  prevTheme === 'dark' ? 'light' : 'dark'
      return nextTheme;
  }); 
  }

     useEffect(() => {
     document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
  }, [theme]) //Executa apenas quando o valor de theme muda

  return (
    <nav className={styles.menu}>
    <a className={styles.menuLink} href='#' title='Home'>  
      <HouseIcon />
     </a>

     <a className={styles.menuLink} href='#'  title='Historico'>  
      <HistoryIcon />
     </a>

      <a className={styles.menuLink} href='#'  title='Configurações'>  
      <SettingsIcon />
     </a>

      <a className={styles.menuLink} href='#'  title='Tema claro/escuro'
      onClick={handleThemeChange}>

      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      
     </a>

    </nav>
  );
}