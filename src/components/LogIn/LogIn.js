import { useRef } from 'react';
import './LogIn.css'
import { useDocumentTitle } from '../../utils/hooks';
import { useDispatch } from 'react-redux';
import { logIn } from '../../store/slices/auth';

export const LogIn = () => {

    const loginRef = useRef();
    const passwordRef = useRef();

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();


        const userData = {
            login: loginRef.current.value,
            password: passwordRef.current.value
        }
        dispatch(logIn())
    }
    useDocumentTitle('logIn')

    return (
        <>
        <h1>Вход</h1>
        <form onSubmit={handleSubmit} className='loginForm'>
            <input ref={loginRef} placeholder="Логин" required/>
            <input ref={passwordRef} type='password' placeholder="Пароль" required/>
            <button type="submit"> Вход </button>

        </form>
        </>
    )
}