import HeaderBox from '@/components/headerBox/HeaderBox'
import RightSidebar from '@/components/rightSidebar/RightSidebar'
import TotalBalanceBox from '@/components/totalBalanceBox/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {
    firstName: 'Mir',
    lastName: 'Karim',
    email: 'makarim178@gmail.com'
  }
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1750.37}
          />
        </header>

        RECENT TRANSACTION
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50},{ currentBalance: 678.90}]}
      />
    </section>
  )
}

export default Home