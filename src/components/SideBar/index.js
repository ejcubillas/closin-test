// import 
import { Link, useLocation } from 'react-router-dom';
import SideBarCSS from './sidebar.module.css';
import { HomeIcon, MarketplaceIcon } from '../../icons';

const SideBar = () => {
  const location = useLocation();
  const menuItem = [
    {
      label: 'Home',
      to: '/',
      icon: (state) => (<HomeIcon state={state}/>)
    },
    {
      label: 'Marketplace',
      to: '/marketplace',
      icon: (state) => (<MarketplaceIcon state={state}/>)
    }
  ]

  return (
    <div className={SideBarCSS.container}>
      {
        menuItem.map((menu, i) => {
          const state = location.pathname === menu.to ? 'active' : 'inactive';
          return (
            <Link key={i} to={menu.to} className={SideBarCSS.link}>
              <div
                
                className={
                  state === 'active' ? 
                  SideBarCSS.activeIcon : 
                  SideBarCSS.inactiveIcon
                }>
                {menu.icon(state)}
                <p 
                  className={
                    state === 'active' ?
                    SideBarCSS.activeLabel :
                    SideBarCSS.inactiveLabel
                  }
                >{menu.label}</p>
              </div>
            </Link>
          )
          
        })
      }
    </div>
  )
}

export default SideBar;