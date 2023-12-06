const Header = (props: any) => {
  const { Title, submit, method, table } = props
  return (
    <div className='mb-5'>
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='yellow text-3xl poppins'>{Title.title}</h1>
          <p className='text-15 quicksand'>{Title.text}</p>
        </div>
        <div>
          {
            submit ?
              <div>
                <button className='px-5 py-2 bg-sky-500 rounded-md  text-15 quicksand' onClick={submit}>Submit</button>
                <a href={method == "create"? `../${table}`: `../../${table}`} className='px-5 py-2  rounded-md  text-15 quicksand'>Cancel</a>
              </div>
              :
              method != "view" &&
              <a href={`${table}/create`} className='px-5 py-2 bg-sky-500 rounded-md  text-15 quicksand'>Create {Title.buttonText}</a>
          }
        </div>
      </div>
    </div>
  )
}

export default Header