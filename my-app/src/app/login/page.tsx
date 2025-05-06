import LayoutHeaderandFooter from '@/layoutheaderandfooter'
import React from 'react'

function Login() {
  return (
    <LayoutHeaderandFooter>
    <div>
      <div className="bg-[#f8f4ee] h-[70vh] flex items-center justify-center">
  <div className="w-full max-w-md px-6">
    <h1 className="text-center text-2xl font-semibold tracking-widest text-black mb-2">LOGIN</h1>
    <p className="text-center text-gray-700 mb-6">Enter your email and password to login:</p>

    <form className="space-y-4">
      <input 
        type="email" 
        placeholder="E-mail" 
        className="w-full px-4 py-3 border border-gray-300  bg-white"
      />
      <div className="relative">
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black bg-white"
        />
        <a href="#" className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-600 hover:underline">
          Forgot your password?
        </a>
      </div>
      <button 
        type="submit" 
        className="w-full bg-black text-white py-3 tracking-widest hover:bg-gray-800 transition">
        LOGIN
      </button>
    </form>

    <p className="text-center mt-6 text-gray-700">
  Don&apos;t have an account? <a href="/register" className="text-black hover:underline">Sign up</a>
</p>

  </div>
</div>
    </div>
    </LayoutHeaderandFooter>
  )
}

export default Login
