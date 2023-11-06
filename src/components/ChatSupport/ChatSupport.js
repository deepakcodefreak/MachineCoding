import React, { useEffect, useState } from 'react'
import styles from './chatSupport.module.css'
import TicketsList from '../TicketsList/TicketsList'
import LiveChat from '../LiveChat/LiveChat'
import { fetchSupportChats } from './../../Services/fetchSupportChats'

function ChatSupport() {

    const [supportTickets, setSupportTickets] = useState([])

    const [selectedTicket, setSelectedTicket] = useState(null)

    useEffect(() => {
        async function getSupportTickets() {
            const data = await fetchSupportChats()
            setSupportTickets(data)
        }
        getSupportTickets()
    }, [])

    return (
        <div className={styles.chatSupportContainer}>
            <TicketsList className={styles.ticketsList} supportTickets={supportTickets} setSelectedTicket={setSelectedTicket} selectedTicket={selectedTicket} />
            {selectedTicket && <LiveChat className={styles.liveChat} selectedTicket={selectedTicket} />}
        </div>
    )
}

export default ChatSupport