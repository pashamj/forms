import logo from './logo.svg';
import './App.css';
import styles from "./app.module.css"
import {useState} from "react";
import Select from 'react-select';
import {findAllByDisplayValue} from "@testing-library/react";
import * as yup from 'yup'


function App() {

    const [login, setLogin] = useState('')
    const [loginError, setLoginError] = useState(null)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(null)


    const onLoginChange = ({ target }) => {
        setLogin(target.value)
        let error = null
        if (!/[\w_]$/.test(target.value)) {
        error = 'недопустимые символы'
        }else if(target.value.length>20) {
        error = 'слишком много символов'
        }
        setLoginError(error)
    }

    const onPasswordChange = ( { target } ) => {
        setPassword(target.value)
        let error2 = null
        if (password.length < 5) {
            error2 = 'паорль должен содержать более 4 символов'
        }
        setPasswordError(error2)
    }

    const onLoginBlur = () => {
        if (login.length < 3) {
            setLoginError('Логин должен содержать более 3 символов')
        }
    }

    const onPasswordBlur = () => {
        if(password.length <5){
            setPasswordError('паорль должен содержать более 4 символов')
        }
    }

    const onSubmit = (event) => {
        console.log(login)
        event.preventDefault()
    }

    const onSubmitPass = (event) => {
        console.log(password)
        event.preventDefault()
    }

    return (
        <div className={styles.app}>
            <form onSubmit={onSubmit}>
                {loginError && <div className={styles.errorLabel}>{loginError}</div>}
                <input name='login'
                       value={login}
                       placeholder='login'
                       type="text"
                       onChange={onLoginChange}
                       onBlur={onLoginBlur}
                />

            </form>
            <form onSubmit={onSubmitPass}>
                {loginError && <div className={styles.errorLabel}>{passwordError}</div>}
                <input name='password'
                       value={password}
                       placeholder='password'
                       type="text"
                        onChange={onPasswordChange}
                       onBlur={onPasswordBlur}
                />

            </form>
            <button type='submit' disabled={loginError!==null || passwordError !==null}>Отрпавить форму</button>
        </div>
    )
}

export default App;
