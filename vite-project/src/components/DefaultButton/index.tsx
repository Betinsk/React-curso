import styles from './styles.module.css';

type DefaultButtonProps = {
 icon: React.ReactNode; // Icon to be displayed in the button
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>; // Extend button props for additional attributes

export function DefaultButton({icon, color='green', ...props}: DefaultButtonProps) {

  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
      
    </>
  );
}