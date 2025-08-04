

import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect, use } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {

    const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault(); // Prevent default anchor behavior
    setTheme(
      prevTheme => {
      const nextTheme =  prevTheme === 'dark' ? 'light' : 'dark'
      return nextTheme;
  }); 
  }

  // useEffect(() => {
  //   console.log('useEffect sem dependencias', Date.now())
  // }) // Executado toda vez que o component renderiza na tela

  //   useEffect(() => {
  //   console.log('useEffect com array deps vazio', Date.now())
  // }, []) //Executa apenas quando o react monta o component na tela pela primeira vez

     useEffect(() => {
     console.log(Date.now())
     document.documentElement.setAttribute('data-theme', theme)

     return () => {
      console.log('Olha, esse component será atualizado')
     }

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
      <SunIcon /> 
     </a>

    </nav>
  );
}