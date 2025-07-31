import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labelText: string; // Optional label text
} & React.ComponentProps<'input'>; // Extend input props for additional attributes

export function DefaultInput({id, type, labelText, ...rest}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input className={styles.input} 
      type={type} id={id} 
      {...rest}
       placeholder="Dê um nome para a tarefa" />
    </>
  );
}