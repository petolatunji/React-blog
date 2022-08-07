import './navbar.css'
import { Link } from 'react-router-dom'

export default function navbar() {
  const user = false
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className=' topIcon fa-brands fa-facebook-square'></i>
        <i className=' topIcon fa-brands fa-instagram-square'></i>
        <i className=' topIcon fa-brands fa-twitter-square'></i>
        <i className=' topIcon fa-brands fa-pinterest-square'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/'>
              HOME
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/'>
              ABOUT
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/'>
              CONTACT
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/write'>
              WRITE
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/'>
              {user && 'LOGOUT'}
            </Link>
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <img
            className='topImg'
            src='https://scontent.flos1-1.fna.fbcdn.net/v/t39.30808-6/271651168_4974978229200279_6626026464683738377_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHmFQQAoTjATMegyDMrBuwnAjYlc4ecd58CNiVzh5x3n52JuGcOXVPQhi3iT9dPWse6nIW-5kmL0aTSarJ_kKNp&_nc_ohc=rvfmI9FOIMMAX-bAh9w&_nc_zt=23&_nc_ht=scontent.flos1-1.fna&oh=00_AT-tx5W9WRTlm_hTLosNYX2o7TGT4np97s5gBNAexny4jg&oe=62DC1863'
            alt='pics'
          />
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/login'>
                LOGIN
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/register'>
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className=' topSearchIcon fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  )
}
