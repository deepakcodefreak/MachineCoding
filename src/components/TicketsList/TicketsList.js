import React, { useEffect, useState } from 'react'
import styles from './ticketsList.module.css'
import Ticket from '../Ticket/Ticket';

function TicketsList({ supportTickets, setSelectedTicket, selectedTicket }) {

    const [searchTerm, setSearchTerm] = useState('')
    const [filteredTicketsList, setFilteredTicketsList] = useState([])

    useEffect(() => {
        const updatedSupportTickets = supportTickets.filter((ticket) => {
            if (ticket.orderId.toLowerCase().includes(searchTerm) || ticket.title.toLowerCase().includes(searchTerm)) {
                return true;
            }
            return false
        })
        setFilteredTicketsList(updatedSupportTickets)
    }, [supportTickets, searchTerm])

    useEffect(() => {
        setFilteredTicketsList(supportTickets)
    }, [supportTickets])


    return (
        <div className={styles.ticketsListContainer}>
            <div className={styles.filterContainer}>
                <div className={styles.filterHeading}>Filter by Title / Order ID</div>
                <input placeholder='Start typing to search...' className={styles.filterInput} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            {
                filteredTicketsList.map((ticket, index) => {
                    return (
                        <button className={styles.ticketBtn} style={{ background: selectedTicket?.selectedTicketIndex === index ? 'lightgray' : '' }} onClick={() => setSelectedTicket({ ...ticket, selectedTicketIndex: index })}>
                            <Ticket ticket={ticket} />
                        </button>)
                })
            }
        </div>
    )
}

export default TicketsList