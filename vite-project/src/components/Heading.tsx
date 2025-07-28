import styles from './Heading.module.css'

import type { ReactNode } from 'react';

type HeadingProps = {
  children: ReactNode;
  description?: ReactNode;
};

export function Heading({ children, description }: HeadingProps) {

  return (
    <>
    <h1 className={styles.cyan}>
     {children}
    </h1>
    <p>{description}</p>
    </>
  );
}