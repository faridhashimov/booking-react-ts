import React, { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { MainNavbar } from '../../components'
import { IRegInfo } from '../../types'
import style from './Register.module.css'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '../../shared'
import { useRegisterMutation } from '../../api/fredbookingapi/fredbooking.api'

const Regsiter = () => {
    const [show, setShow] = useState<boolean>(false)
    let navigate = useNavigate()
    const [register, { isLoading, isError, isSuccess, error }] =
        useRegisterMutation()

    const {
        register: registerUser,
        handleSubmit,
        formState: { errors, disabled },
    } = useForm<IRegInfo>()

    useEffect(() => {
        if (isSuccess) {
            navigate('/login', { replace: true })
        }
    }, [isSuccess, navigate])

    console.log(isLoading)

    return (
        <div className={style.root}>
            <MainNavbar />
            <div className={style.wrapper}>
                <form
                    onSubmit={handleSubmit(async (data) => {
                        await register(data).unwrap()
                    })}
                    className={style.registerForm}
                >
                    <h1>Create an account</h1>
                    <div className={style.inputContainer}>
                        <label htmlFor="name">Name</label>
                        <input
                            {...registerUser('name', {
                                required: {
                                    value: true,
                                    message: 'Name is required',
                                },
                            })}
                            id="name"
                            type="text"
                            placeholder="Name"
                            autoComplete="off"
                        />
                    </div>
                    <ErrorMessage message={errors.name?.message} />
                    <div className={style.inputContainer}>
                        <label htmlFor="surname">Surname</label>
                        <input
                            {...registerUser('surname', {
                                required: {
                                    value: true,
                                    message: 'Surname is required',
                                },
                            })}
                            id="surname"
                            type="text"
                            placeholder="Surname"
                            autoComplete="off"
                        />
                    </div>
                    <ErrorMessage message={errors.surname?.message} />
                    <div className={style.inputContainer}>
                        <label htmlFor="email">Email adress</label>
                        <input
                            {...registerUser('email', {
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
                    <ErrorMessage message={errors.email?.message} />
                    <div className={style.inputContainer}>
                        <label htmlFor="password">Password</label>
                        <input
                            {...registerUser('password', {
                                required: {
                                    value: true,
                                    message: 'Password is required',
                                },
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message:
                                        'Password must be at least 8 characters long and include at least one letter, one number, and one special character',
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
                    <ErrorMessage message={errors.password?.message} />

                    {isError && (
                        <ErrorMessage
                            message={JSON.stringify(
                                error && 'data' in error && error.data
                            )}
                        />
                    )}
                    <button
                        disabled={disabled}
                        type="submit"
                        className={style.submitBtn}
                    >
                        Register
                    </button>
                    <div className={style.redirect}>
                        <Link to="/login">
                            Already have an account ? Log in
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

export default Regsiter
