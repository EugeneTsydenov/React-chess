import {ChangeEvent, FC} from "react";
import styles from './MyInput.module.css'
interface MyInputProps {
  children: string;
  type: string;
  value: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
}

const MyInput: FC<MyInputProps> = (
  {
    children ,
    type = 'text',
    value = '',
    onChange,
    disabled = false,
    required = false,
  }
) => {
  return <input
    type={type}
    placeholder={children}
    value={value}
    onChange={(e) => onChange(e)}
    disabled={disabled}
    required={required}
    className={styles.Input}
  />
};

export default MyInput;