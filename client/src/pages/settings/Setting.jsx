import './setting.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Setting() {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile picture</label>
          <div className='settingsPP'>
            <img
              src='https://static4.depositphotos.com/1004999/269/i/450/depositphotos_2693490-stock-photo-beautiful-park.jpg'
              alt=''
            />
            <label htmlFor='fileInput'>
              <i className=' settingsPPIcon fa-solid fa-user-large'></i>
            </label>
            <input type='file' id='fileInput' style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type='text' placeholder='Peter' />
          <label>Email</label>
          <input type='email' placeholder='peter@gmail.com' />
          <label>Password</label>
          <input type='password' />
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
