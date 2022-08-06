import { useState } from 'react'
import style from './Subscribe.module.css'

const Subscribe = () => {
    const [email, setEmail] = useState<string>('')
    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <div className={style.mainContainer}>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.header}>
                        <h3>Save time, save money!</h3>
                        <p>Sign up and we'll send the best deals to you</p>
                    </div>
                    <form
                        onSubmit={onFormSubmit}
                        className={style.subscription}
                    >
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            placeholder="Your email"
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Subscribe
