import './post.css'

import React from 'react'

export default function Post() {
  return (
    <div className='post'>
      <img
        className='postImg'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWFpphklfscjczyL46L_lNbS9DEkr8hnJdHQ&usqp=CAU'
        alt='pht'
      />

      <div className='postInfo'>
        <div className='postsCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>Lorem Ipsum dolor sit amet</span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        tincidunt, ipsum non consectetur lacinia, ex tortor fermentum dui, eu
        semper elit velit sit amet dui. Praesent a tincidunt tellus. Donec id
        fringilla velit. Nam posuere feugiat ultrices. Nunc laoreet libero
        sapien, id aliquet arcu vehicula ut. Vestibulum eu sagittis lectus.
        Vivamus sodales est nunc, ut tristique tellus viverra ac. Nam dictum
        libero a dictum dictum. Fusce at mi dui. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam tincidunt, ipsum non consectetur
        lacinia, ex tortor fermentum dui, eu semper elit velit sit amet dui.
        Praesent a tincidunt tellus. Donec id fringilla velit. Nam posuere
        feugiat ultrices. Nunc laoreet libero sapien, id aliquet arcu vehicula
        ut. Vestibulum eu sagittis lectus. Vivamus sodales est nunc, ut
        tristique tellus viverra ac. Nam dictum libero a dictum dictum. Fusce at
        mi dui.
      </p>
    </div>
  )
}
