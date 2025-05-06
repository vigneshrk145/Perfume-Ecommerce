import LayoutHeaderandFooter from '@/layoutheaderandfooter'
import React from 'react'

function Register() {
  return (
    <LayoutHeaderandFooter>
    <div>
      <div className="h-[70vh] bg-[#f7f3ec] flex items-center justify-center px-4">
  <div className="w-full max-w-md text-center">
    <h2 className="text-2xl font-semibold tracking-widest text-gray-900 mb-2">SIGN UP</h2>
    <p className="text-sm text-gray-600 mb-6">Please fill in the information below:</p>
    
    <form className="space-y-4">
      <input
        type="text"
        placeholder="First name"
        className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black bg-[#fdf9f2] placeholder-gray-500"
      />
      <input
        type="text"
        placeholder="Last name"
        className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black bg-[#fdf9f2] placeholder-gray-500"
      />
      <input
        type="email"
        placeholder="E-mail"
        className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black bg-[#fdf9f2] placeholder-gray-500"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black bg-[#fdf9f2] placeholder-gray-500"
      />
      <button
        type="submit"
        className="w-full py-3 bg-black text-white tracking-widest hover:bg-gray-800 transition"
      >
        CREATE ACCOUNT
      </button>
    </form>

    <p className="text-sm text-gray-600 mt-6">
      Already have an account?
      <a href="/login" className="text-black underline hover:text-gray-800">Login</a>
    </p>
  </div>
</div>

    </div>
    </LayoutHeaderandFooter>
  )
}

export default Register
