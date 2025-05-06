'use client'
import { CartProvider } from '@/context/addtocartcontext'
import React, { Suspense } from 'react'
import { Provider } from 'react-redux';
import { store } from "../store";


const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
  return (
    <div>
        <Suspense >
        <Provider store={store}>
        <CartProvider>
        {children}
      </CartProvider>
      </Provider>

        </Suspense>
      
    </div>
  )
}

export default GlobalProvider
