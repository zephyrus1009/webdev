import React from 'react'
import CodeSnippet from '@/components/CodeSnippet';
const css_tutorial = () => {

  return (
    <div>

<h1 className='my-5 text-center'>CSS Tutorial</h1>

<h2>SASS/ SCSS</h2>
        <ul>
          <li>SASS (Syntactically Awesome StyleSheets) là một CSS Preprocessor giúp viết CSS được rõ ràng, hiệu quả hơn. SCSS cũng là SASS, nhưng kiểu viết khác và được ra đời muộn hơn. Nên nói thì là SASS nhưng chủ yếu là dùng SCSS.</li>
          <li>Có thể dùng editor bất kỳ viết SASS, sau đó làm cách nào đó để chuyển từ file .sass thành file .css thì sau đó mới render được.</li>
          <li>Cách chuyển thứ nhất là dùng phần mềm Koala. Tuy nhiên, nhược điểm là viết xong chuyển... không nhanh và trực quan. Cách thứ hai là dùng extension live sass compiler trong vs code. </li>
          <li>Dùng VS code còn có ưu điểm là đã tích hợp sẵn check cú pháp... cho scss.</li>
          <li>Link tham khảo về cách viết SASS/SCSS <a href="https://codelearn.io/sharing/giai-cuu-dong-do-nat-css-voi-phuong-phap-sass">tại đây</a></li>
        </ul>      

        <h2>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors"
            >CSS selector</a
          >
        </h2>

        <h2>IMG CSS PROPERTIES</h2>
        <p>Nhìn chung với img thì ta quan tâm đến 2 hướng:</p>
        <ul>
          <li>
            style cho img khi nó đứng một mình, chi tiết tại
            <a href="https://www.w3schools.com/css/css3_images.asp">đây</a>
          </li>
          <li>
            chỉnh kích thước cho img với object-fit khi nó ở trong một parent
            nào đó (quan trọng với biểu diễn dạng grid), chi tiết tại
            <a href="https://www.w3schools.com/css/css3_object-fit.asp">đây</a>
          </li>
        </ul>
        <p>
          Còn nói chung thì ta sẽ quan tâm đến thiết lập sao cho img nằm trong
          thiết kế dạng grid được gọn gàng:
        </p>
<ol>
  <li>Xác định trước kích thước của parent chứa img</li>
  <li>Thiết lập img để nó fit vào kích thước parent chứa nó. Lưu ý: Phải
            giới hạn cả width và height vì chỉ giới hạn height không thì width
            dù có tự resize xuống thì kích thước vẫn khác với width của parent
            nên sẽ overflow. Ở đây, ta giới hạn max chỉ bằng 100% width của
            parent. Sau đó chọn object-fit là cover (cắt ảnh) hoặc contain
            (resize ảnh lại để nhìn trọn vẹn ảnh, nhưng có thể bị bé).
            <CodeSnippet code={`img { height: 90%; width: 100%; display: block; object-fit: cover;}`} />
          </li>
</ol>

<h2>TRICKS</h2>
        <p>Các mẹo hay về WebDev</p>
        <ul>
          <li>
            Khi style css thì ban đầu nên thêm dòng này để tất các element có
            border, nhờ đó sẽ dễ xác định vị trí, kích thước. Khi xong thì bỏ
            đi:
            <CodeSnippet code={`* { box-sizing: border-box; border: 1px solid; }`} />
          </li>
        </ul>

    </div>
  )
}

export default css_tutorial