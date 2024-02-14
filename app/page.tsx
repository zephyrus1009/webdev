import React from 'react'
import Image from 'react-bootstrap/Image';
const page = () => {
  return (
    <div>
      <Image src="/images/webdev_wallpaper.jpg" alt="" fluid/>
      {/* Dùng Image của react bootstrap, thêm fluid để auto scale */}
      </div>
    
  )
}

export default page