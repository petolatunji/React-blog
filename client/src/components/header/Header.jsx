import './header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img
        className='headerImg'
        src='https://flo.health/uploads/media/sulu-1200x630/08/698-Flower%20baby%201.jpg?v=1-0&inline=1'
        alt='pics'
      />
    </div>
  )
}
