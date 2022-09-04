import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MainNavbar } from '../../components'
import { IRegInfo } from '../../types'
import style from './Register.module.css'


const Regsiter = () => {
    const [show, setShow] = useState<boolean>(false)
    const [inputs, setInputs] = useState<Partial<IRegInfo>>({
        name: '',
        surname: '',
        email: '',
        password: '',
    })
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    const onRegister = (e: React.FormEvent) => {
        e.preventDefault()
    }

    console.log(inputs)

    return (
        <div className={style.root}>
            <MainNavbar />
            <div className={style.wrapper}>
                <form onSubmit={onRegister} className={style.registerForm}>
                    <h1>Create an account</h1>
                    <div className={style.inputContainer}>
                        <label htmlFor="name">Name</label>
                        <input
                            onChange={onInputChange}
                            name="name"
                            id="name"
                            type="text"
                            placeholder="Name"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className={style.inputContainer}>
                        <label htmlFor="surname">Surname</label>
                        <input
                            onChange={onInputChange}
                            name="surname"
                            id="surname"
                            type="text"
                            placeholder="Surname"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className={style.inputContainer}>
                        <label htmlFor="email">Email adress</label>
                        <input
                            onChange={onInputChange}
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Email adress"
                            required
                        />
                    </div>
                    <div className={style.inputContainer}>
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={onInputChange}
                            name="password"
                            id="password"
                            type={show ? 'text' : 'password'}
                            required
                        />
                        <div
                            onClick={() => setShow(!show)}
                            className={style.showPwd}
                        >
                            {show ? <FaEye /> : <FaEyeSlash />}
                        </div>
                    </div>
                    <button type="submit" className={style.submitBtn}>
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
