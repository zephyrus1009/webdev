import React from 'react'
import Image from 'react-bootstrap/Image';
const page = () => {
  return (
    <div>
      <h1 className='mt-5 text-center'>WEBDEV MANUAL</h1>
      <h4 className='text-muted mb-5 text-center'>Author: Zephyrus1009@gmail.com</h4>
      <Image src="/images/webdev_wallpaper.jpg" alt="" fluid className='rounded'/>
      {/* Dùng Image của react bootstrap, thêm fluid để auto scale */}
      </div>
    
  )
}

export default page