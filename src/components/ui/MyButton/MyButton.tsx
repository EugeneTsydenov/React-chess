import {FC, ReactNode} from 'react';
import styles from './MyButton.module.css'
interface MyButtonPropTypes {
  children: ReactNode;
  type: "submit" | "reset" | "button";
  disabled: boolean
}

const MyButton: FC<MyButtonPropTypes> = ({children ,type , disabled = false}) => {
  return <button className={styles.Button} type={type} disabled={disabled}>
    {children}
  </button>
};

export default MyButton;