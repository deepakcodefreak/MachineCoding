import React from 'react'
import styles from './Ticket.module.css'

function Ticket({ ticket }) {
    return (
        <>
            <div>
                <img className={styles.ticketImage} src={ticket.imageURL} alt={ticket.title} />
            </div>
            <div className={styles.ticketInfo}>
                <div className={styles.titleAndOrderId}>
                    <div>
                        {ticket.title}
                    </div>
                    <div>
                        Order {ticket.orderId}
                    </div>
                </div>
                <div>
                    {ticket.messageList.length > 0 ? ticket.messageList[0].message : ''}
                </div>
            </div>
        </>
    )
}

export default Ticket