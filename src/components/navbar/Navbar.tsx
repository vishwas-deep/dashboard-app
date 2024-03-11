import './navbar.scss'
const Navbar = () => {
  return (
      <div className='navbar'>
          <div className='navbar__logo'>
              <img src='logo.svg' alt='' />
              <span>Admin Dashboard</span>
          </div>
          <div className='navbar__icons'>
              <img src='search.svg' alt='' className='navbar__icons__icon' />
              <img src='app.svg' alt='' className='navbar__icons__icon' />
              <img src='expand.svg' alt='' className='navbar__icons__icon' />
              <div className='navbar__icons__notifications'>
                  <img src='notifications.svg' alt='' />
                  <span>1</span>
              </div>
              <div className='navbar__icons__user'>
                  <img src='noavatar.png' alt='' />
                  <span>Vishvash</span>
              </div>
              <img src='user.svg' alt='' className='navbar__icons__icon' />
              <img src='setting.svg' alt='' className='navbar__icons__icon' />
          </div>
    </div>
  )
}

export default Navbar