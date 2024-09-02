import React from 'react'

export const Wrapper = ({ children }) => {
  return (
    <div className="container my-0 mx-auto py-4 px-2 min-h-screen">
      {children}
    </div>
  )
}
