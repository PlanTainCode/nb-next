import React from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import SideRightBar from '../SideRightBar'

function Layout({children, global}) {
  return (
    <div className='wrapper'>
      <Header global={global} />
      <div className="grid">
        <SideBar />
        {children}
        <SideRightBar />
      </div>
    </div>
  )
}

export default Layout