import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          className='singlePostImg'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQisaV9jsiClJNeGVhZ_GE5YHq44RGISCZm1g&usqp=CAU'
          alt=''
        />
        <h1 className='singlePostTitle'>
          Lorem Ipsum dolor sit amet
          <div className='singlePostEdit'>
            <i className='singlePostIcon fa-solid fa-pen-to-square'></i>
            <i className='singlePostIcon fa-solid fa-trash-can'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author: <b>Safak</b>
          </span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
          ante a turpis tempus luctus. Etiam facilisis molestie quam et
          ultrices. Mauris id magna quis lectus sagittis sollicitudin.
          Suspendisse potenti. Donec mollis ligula at tristique suscipit. Sed eu
          purus gravida, faucibus eros vitae, dictum arcu. Nunc viverra in est
          in viverra. Etiam vel convallis tellus. Ut aliquam tellus nec nulla
          ornare, ac blandit massa ullamcorper. Phasellus viverra nulla et ante
          egestas, eu ullamcorper ante sollicitudin. Etiam mattis commodo
          faucibus. Nam facilisis magna et tortor interdum fermentum nec sit
          amet neque. Suspendisse luctus posuere libero vitae hendrerit.
          Pellentesque eu justo consectetur, iaculis lorem a, commodo mi.
          Vestibulum non suscipit arcu, non varius tortor. Aenean scelerisque
          volutpat risus et dictum. Etiam convallis nunc in est tempus,
          imperdiet fermentum est bibendum. Suspendisse rhoncus massa risus, ac
          congue arcu pretium id. Vestibulum consequat tortor vitae tristique
          volutpat. Duis pulvinar arcu quis ipsum accumsan interdum. Morbi
          malesuada quis ipsum eu venenatis. Sed feugiat, enim a tincidunt
          fringilla, nibh urna pharetra nunc, quis interdum libero ex vel
          tortor. Phasellus elementum rutrum orci ut porta. Nunc blandit, ipsum
          id scelerisque interdum, ipsum urna faucibus erat, vel vestibulum
          velit sem non leo. Phasellus et quam porta, aliquam arcu ac,
          condimentum nisi. Donec nec pretium massa. In eleifend neque at urna
          scelerisque dictum eget ut sapien. Nullam faucibus dui eu nisl pretium
          congue. Phasellus eleifend maximus justo, nec accumsan justo congue
          non. Pellentesque dictum lacus ac nunc accumsan condimentum ut
          sagittis quam. Sed non finibus quam. Pellentesque magna massa,
          imperdiet eu interdum sed, lobortis at tellus.
        </p>
      </div>
    </div>
  )
}
