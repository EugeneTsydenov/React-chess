import {ChangeEvent, FC, FormEvent, useContext, useState} from "react";
import MyInput from "../ui/MyInput/MyInput";
import MyForm from "../ui/MyForm/MyForm";
import MyButton from "../ui/MyButton/MyButton";
import styles from './LoginForm.module.css'
import {Context} from "../../main.tsx";

const LoginForm: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {store} = useContext(Context);

  function handleUsername(e: ChangeEvent<HTMLInputElement>): void {
    setUsername(e.target.value);
  }

  function handlePassword(e: ChangeEvent<HTMLInputElement>): void {
    setPassword(e.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>):Promise<void> {
    console.log(1)
    event.preventDefault();
    await store.login(username, password)
  }

  return (
    <MyForm method='POST' onSubmit={handleSubmit}>
      <div className={styles.InputWrapper}>
        <h5>Enter your username</h5>
        <MyInput
          type="text"
          onChange={handleUsername}
          value={username}
        >
          Enter your username
        </MyInput>
      </div>
      <div className={styles.InputWrapper}>
        <h5>Enter password</h5>
        <MyInput
          type="password"
          onChange={handlePassword}
          value={password}
        >
          Enter password
        </MyInput>
      </div>
      <MyButton type="submit" disabled={false}>
        Login
      </MyButton>
    </MyForm>
  );
};

export default LoginForm;