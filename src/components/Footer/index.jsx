import React from 'react'

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className='bg-blue-950 text-white py-3'>
      <div>
            <p className='mb-0 text-center'> &copy; {year}. All Rights Reserved. </p>
      </div>
    </footer>
  )
}

export default Footer