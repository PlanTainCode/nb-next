import React from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import SideRightBar from '../SideRightBar'

function Layout({children, global, types, info}) {
  const [bar, setBar] = React.useState(false)

  const toggleBar = () => {
    setBar(!bar)
  }
  return (
    <div className='wrapper'>
      <Header global={global} func={toggleBar} />
      <div className="grid">
        <SideBar types={types} callBar={bar} />
        {children}
        <SideRightBar info={info} />
      </div>
    </div>
  )
}

export default Layout