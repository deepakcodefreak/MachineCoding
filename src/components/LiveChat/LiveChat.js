import React from 'react'
import styles from './liveChat.module.css'
import MessageWrappr from '../MessageWrapper/MessageWrappr';

function LiveChat({ selectedTicket }) {
    return (
        <div className={styles.liveChatContainer}>
            <header className={styles.liveChatHeader}>
                <img className={styles.productImage} src={selectedTicket.imageURL} alt={selectedTicket.title} />
                <div>
                    {selectedTicket.title}
                </div>
            </header>
            <main className={styles.mainBody}>
                {
                    selectedTicket.messageList.map((message) => {
                        return <MessageWrappr message={message} />
                    })
                }
            </main>
            <footer className={styles.liveChatInputContainer}>
                <input className={styles.inputMessage} />
            </footer>
        </div>
    )
}

export default LiveChat