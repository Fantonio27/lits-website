const Header = (props: any) => {
  return (
    <div className='mb-5'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='yellow text-3xl poppins'>{props.Title.title}</h1>
          <p className='text-15 quicksand'>{props.Title.text}</p>
        </div>
        <div>
          {
            props.submit ?
              <div>
                  <button className='px-5 py-2 bg-sky-500 rounded-md  text-15 quicksand'>Subtmit</button>
                  <a href="" className='px-5 py-2  rounded-md  text-15 quicksand'>Cancel</a>
              </div>
              :
              <a href="" className='px-5 py-2 bg-sky-500 rounded-md  text-15 quicksand'>Create {props.Title.buttonText}</a>
          }
        </div>
      </div>
    </div>
  )
}

export default Header