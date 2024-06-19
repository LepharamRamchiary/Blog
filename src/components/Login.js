import React from 'react'
import { GoogleLoginButton, GoogleLogoutButton } from './GoogleAuth';


function Login() {

  const onSuccess = (res) => {
    console.log("Login Success! Current User: ", res.profileObj);
  }

  const onFailure = (res) => {
    console.log("Login Failed res:", res)
  }

  // const onSuccessed = () => {
  //   console.log("Log out Sucessfull!");
  // }

  return (
    <div className='flex min-h-screen bg-gray-600'>
      <div className='flex max-w-3xl mx-auto justify-center mt-12'>
        <div className='flex gap-2 bg-transparent h-11 items-center justify-cente py-2 px-4  rounded'>
          {/* <button>Continue with google</button> */}
          <GoogleLoginButton onSuccess={onSuccess} onFailure={onFailure} />
          {/* <GoogleLogoutButton onLogoutSuccess={onLogoutSuccess} /> */}
        </div>
      </div>

    </div>
  )
}

export default Login
