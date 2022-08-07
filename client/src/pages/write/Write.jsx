import './write.css'

export default function Write() {
  return (
    <div className='write'>
      <img
        className='writeImg'
        src='https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFya3xlbnwwfHwwfHw%3D&w=1000&q=80'
        alt=''
      />
      <form className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fa-solid fa-plus'></i>
          </label>
          <input type='file' id='fileInput' style={{ display: 'none' }} />
          <input
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            placeholder='Tell your story...'
            type='text'
            className='writeInput writeTest'
          ></textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}
