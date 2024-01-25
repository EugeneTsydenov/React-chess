import { FC, FormEvent, ReactNode } from "react";
import styles from "./MyForm.module.css";

interface MyFormPropTypes {
  children: ReactNode;
  method: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const MyForm: FC<MyFormPropTypes> = ({ children, method, onSubmit }) => {
  return (
    <form className={styles.Form} action={method} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default MyForm;