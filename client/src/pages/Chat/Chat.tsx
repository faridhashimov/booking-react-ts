import { MainNavbar, Navbar } from 'components'
import { FC } from 'react'
import { ChatInfoWidget, ChatsWidget, ChatWidget } from 'widgets/Chat'
import style from './Chat.module.css'

export const Chat: FC = () => {
    return (
        <>
            <MainNavbar />
            <Navbar />
            <div className={style.chatContainer}>
                <ChatsWidget />
                <ChatWidget />
                <ChatInfoWidget />
            </div>
        </>
    )
}
