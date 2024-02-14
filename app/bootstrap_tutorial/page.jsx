import React from 'react'
import CodeSnippet from '@/components/CodeSnippet'
import { Image } from 'react-bootstrap'
const bootstrap_tutorial = () => {
  return (
    <div>

<h1 className='my-4'>BOOTSTRAP TUTORIAL</h1>

<h2>GIỚI THIỆU</h2>
          <ul>
            <li>Là một framework hỗ trợ frontend từ đầu đến đuôi.</li>
            <li>
              Có thể download về cài offline hoặc lấy link chèn để dùng online,
              hoặc cài qua các package manager như npm.
            </li>
            <li>Dùng online có nhiều ưu điểm hơn.</li>
            <li>Có 2 thư viên bootstrap: Một dùng để hỗ trợ thuần frontend, một được hỗ trợ để tối ưu code với react. Nên ta sẽ dùng cách sau, vì ta chủ yếu tạo các nextjs app.</li>
          </ul>

          <h2>BOOTSTRAP REACT</h2>
      <h3>Giới thiệu</h3>
      <ul>
        <li>
          Cũng là bootstrap, nhưng đã được tối ưu code để dùng với react. Nên ta
          dùng thư viện này, chứ không dùng thư viện bootstrap thường
        </li>
        <li>
          Tài liệu tham khảo tại
          <a
            href="https://react-bootstrap.github.io/docs/getting-started/introduction"
            >trang chủ</a
          >
        </li>
      </ul>
      <h3>Cách cài đặt Bootstrap react</h3>
      <ul>
        <li>
          Cài package:
          <CodeSnippet code={`npm install react-bootstrap bootstrap`}/>
        </li>
        <li>
          Chèn style vào layout.js:
          <CodeSnippet code={`import 'bootstrap/dist/css/bootstrap.min.css';`}/>
        </li>
      </ul>

      <h2>Hướng dẫn dùng bootstrap</h2>
       <Image fluid src="/images/bootstrap mindmap.jpg" alt=""/> 
       <Image fluid src="/images/text-color.png" alt="bootstrap text colors"/>
<Image fluid src="/images/background color.png" alt="bootstrap background colors"/>
<Image fluid src="/images/bootstrap grid size.png" alt="bootstrap grid size"/>
<Image fluid src="/images/bootstrap-button-styles.png" alt="bootstrap button styles"/>

<h2>Một số khái niệm cần nhớ</h2>

<ul>
  <li><a href="https://icons.getbootstrap.com/"
    >Icon Bootstrap (Để dùng được thì cũng có thể thông qua mấy cách
    như: Download về, cài qua npm, hoặc dùng CDN)</a
  ></li>
  <li>Tooltips: Giúp khi hover vào thì sẽ hiện lên một mẩu thông tin nhỏ để làm rõ đối tượng.</li>
</ul>

    </div>
  )
}

export default bootstrap_tutorial