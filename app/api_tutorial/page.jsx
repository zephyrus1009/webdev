import React from 'react'
import { Image } from 'react-bootstrap'
const page = () => {
  return (
    <div>
      <h1 className='my-4 text-center'>API TUTORIAL</h1>
      <h2><a href="https://rapidapi.com/hub">RapidAPI</a></h2>
      <h3>Giới thiệu</h3>
      Là một web tổng hợp nhiều API về đủ mọi chủ đề.
      <h3>Cách sử dụng</h3>
      <ul>
        <li>B1: Đăng ký</li>
        <li>B2: Tìm API phù hợp nhu cầu, subscribe và làm theo hướng dẫn.</li>
        <li>
          B3: Lấy thông tin để sửa code: quan trọng là url và header.
          <Image fluid src="images/rapidapi-example.png" alt="" />
        </li>
        <li>
          Có thể bấm testendpoint để xem response example, từ đó copy sang để
          viết code data type typescript cho nhanh.
          <Image fluid src="images/rapidapi-example-2.png" alt="" />
        </li>
      </ul>
    </div>
  )
}

export default page