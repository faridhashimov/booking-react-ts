import { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { MainNavbar } from '../../components'
import style from './Login.module.css'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../../api'
import { ErrorMessage } from '../../shared'
import { useDispatch } from 'react-redux'
import { loginUser } from 'store'

const Login = () => {
    const [show, setShow] = useState<boolean>(false)
    const [login, { isLoading, isError, isSuccess, error }] = useLoginMutation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    useEffect(() => {
        if (isSuccess) navigate('/', { replace: true })
    }, [isSuccess, navigate])

    console.log(isLoading)
    return (
        <div className={style.root}>
            <MainNavbar />
            <div className={style.wrapper}>
                <form
                    onSubmit={handleSubmit(async (data) => {
                        const result = await login(data).unwrap()
                        dispatch(loginUser(result))
                    })}
                    className={style.registerForm}
                >
                    <h1>Sign in</h1>

                    <div className={style.inputContainer}>
                        <label htmlFor="email">Email adress</label>
                        <input
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Email is required',
                                },
                                pattern: {
                                    value: /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
                                    message: 'Invalid email adress',
                                },
                            })}
                            id="email"
                            type="email"
                            placeholder="Email adress"
                        />
                    </div>
                    <div className={style.inputContainer}>
                        <label htmlFor="password">Password</label>
                        <input
                            {...register('password', {
                                required: {
                                    value: true,
                                    message: 'Password is required',
                                },
                            })}
                            id="password"
                            type={show ? 'text' : 'password'}
                        />
                        <div
                            onClick={() => setShow(!show)}
                            className={style.showPwd}
                        >
                            {show ? <FaEye /> : <FaEyeSlash />}
                        </div>
                    </div>
                    {isError && (
                        <ErrorMessage
                            message={JSON.stringify(
                                error && 'data' in error && error.data
                            )}
                        />
                    )}
                    <button type="submit" className={style.submitBtn}>
                        Sign in
                    </button>
                    <div className={style.redirect}>
                        <Link to="/register">
                            Do not have an account yet ? Register
                        </Link>
                    </div>
                </form>
                <div className={style.footer}>
                    <div className={style.terms}>
                        By signing in or creating an account, you agree with our
                        Terms & Conditions and Privacy Statement
                    </div>
                    <div className={style.copyright}>
                        All rights reserved. <br /> Copyright (2006-2022) –
                        Fredbooking.com™
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
