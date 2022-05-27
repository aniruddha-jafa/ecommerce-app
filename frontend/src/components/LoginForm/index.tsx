const Main = () => {
  return (
    <form
      className='
    card shadow-xl
    bg-base-100
    flex flex-col justify-center items-center
    gap-4 py-12 px-4
    mx-auto mt-12 md:mt-24
    max-w-md h-fit
    '
    >
      <div className='form-control w-full max-w-xs'>
        <input
          type='email'
          name='email'
          placeholder='Email'
          required={true}
          className='
          peer
          input input-bordered 
          w-full max-w-xs
          hover:border-gray-500
          focus:outline-none focus:border-info focus:ring-1 focus:ring-info

          invalid:border-error
          hover:invalid:border-current
          focus:invalid:border-error focus:invalid:ring-error
          '
        />
        <label className='label invisible peer-invalid:visible'>
          <span className='label-text-alt text-error'>Email is invalid</span>
        </label>
      </div>
      <div className='form-control w-full max-w-xs'>
        <input
          type='password'
          name='password'
          placeholder='********'
          required={true}
          className='
    peer
    input input-bordered 
    w-full max-w-xs
    hover:border-gray-500
    focus:outline-none focus:border-info focus:ring-1 focus:ring-info

    invalid:border-error
    hover:invalid:border-current
    focus:invalid:border-error focus:invalid:ring-error
    '
        />
        <label className='label invisible peer-invalid:visible'>
          <span className='label-text-alt text-error'>Password is invalid</span>
        </label>
      </div>
      <button
        type='submit'
        className='
        btn btn-wide btn-primary
        md:mt-8
        bg-gradient-to-l from-primary to-primary-focus
        '
      >
        Login
      </button>
      <div className='mt-2'>
        Don&apos;t have an account?{' '}
        <a className='link' href='/auth/signup'>
          Sign up
        </a>
      </div>
    </form>
  )
}

export default Main
