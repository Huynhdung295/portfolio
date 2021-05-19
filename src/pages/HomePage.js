import React from 'react'
import Header from '../components/Header/Header'
import FullPage from '../settings/FullPage'
import MessengerCustomerChat from "react-messenger-customer-chat";
function HomePage() {
    return (
        <div>
            <Header/>
            <FullPage />
            <MessengerCustomerChat pageId="100330828425458" appId="916945135550346" />
        </div>
    )
}

export default HomePage
