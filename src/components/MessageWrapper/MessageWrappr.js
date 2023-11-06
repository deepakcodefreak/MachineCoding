import React from 'react'
import styles from './MessageWrapper.module.css'

function TextMessage({ message }) {
    return <div className={message.sender === 'BOT' ? styles.botMessage : styles.userMessage}>
        {message.message}
    </div>
}

function OptionedMessage({ message }) {
    return (
        <div className={styles.optionedMessageContainer}>
            <div className={styles.optionedMessageTitle}>
                {message.message}
            </div>
            <div className={styles.optionsContainer}>
                {
                    message.options.map((option) => {
                        return <div className={styles.option}>{option.optionText}</div>
                    })
                }
            </div>
        </div>
    )
}

function MessageWrappr({ message }) {
    return (
        <div className={message.sender === 'BOT' ? styles.leftAlign : styles.rightAlign}>
            {
                message.messageType === 'optionedMessage' ? <OptionedMessage message={message} /> : <TextMessage message={message} />
            }
        </div>
    )
}

export default MessageWrappr