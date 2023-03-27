import React from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import SideRightBar from '../SideRightBar'

function Layout({children, global, types, info}) {
  return (
    <div className='wrapper'>
      <Header global={global} />
      <div className="grid">
        <SideBar types={types} />
        {children}
        <SideRightBar info={info} />
      </div>
    </div>
  )
}

export default Layout