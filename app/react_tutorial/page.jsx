import React from 'react'
import { Image } from 'react-bootstrap'
import CodeSnippet from '@/components/CodeSnippet'
const react_tutorial = () => {
  return (
    <div>
      <h1 className='my-5 text-center'>REACTJS - NEXTJS - MONGOOSE - TUTORIAL</h1>

<div>
<h2>REACTJS</h2>
      <h3>Setup một project reactjs</h3>
      <ul>
        <li>
          Dùng lệnh npx sau để tạo react app tại current folder
          <CodeSnippet code={`npx create-react-app ./`}/>
        </li>
        <li>
          hoặc có thể dùng lệnh npm sau:
          <pre>
            <code>npm init react-app my-app</code>
          </pre>
        </li>
        <li>
          Từ đó, dùng lệnh sau để chạy app:
          <pre>
            <code>npm start</code>
          </pre>
        </li>
      </ul>
      <h3>Cấu trúc cơ bản của Reactjs app</h3>
      <ul>
        <li>
          Trong folder public sẽ có một file html duy nhất. Mọi components sẽ
          được render vào div root như ảnh:
          <Image fluid src="/images/react basic structure - 1.png" alt="" />
        </li>
        <li>
          Tất cả các components... khác được code sẽ nằm trong folder src. Trong
          folder src có 2 file chính là App.js định nghĩa component App; và file
          index.js render App với file html đề cập ở trên.
        </li>
      </ul>
      <h3>Function Component</h3>
      <Image fluid src='images/function component mindmap.jpg'/>
      <h3>
        <a href="https://www.w3schools.com/react/react_useeffect.asp"
          >React Hook</a
        >
      </h3>
      <h4>Giới thiệu</h4>
      <ul>
        <li>Được thêm vào React từ version 16.8</li>
        <li>
          Hooks giúp các function components có thể access vào states và các
          features khác của React. Do đó, class components không còn cần thiết
          nữa.
        </li>
        <li>
          3 quy tắc khi dùng Hook như sau:
          <ul>
            <li>
              Hooks chỉ có thể được gọi bên trong React function components
            </li>
            <li>Hooks chỉ có thể được gọi ở top level của một component.</li>
            <li>Hook cannot be conditional</li>
          </ul>
        </li>
        <li>3 Hooks quan trọng nhất là: useState, useEffect, và useContext.</li>
        <li>để dùng được hooks thì phải import chúng trước.</li>
      </ul>
      <h4>useState</h4>
      <ul>
        <li>
          Tác dụng: giúp truy cập và thay đổi states (data hoặc properties)
          trong một function component.
        </li>
        <li>
          import useState:
          <CodeSnippet code={`import { useState } from "react";`}/>
        </li>
        <li>
          Khởi tạo useState: Bằng việc gọi useState, ta khởi tạo state với giá
          trị initial và giả về 2 giá trị: current state và function để update
          state.
          <ul>
            <li>
              Ví dụ 1: Khởi tạo với giá trị là empty string:
              <CodeSnippet code={`import { useState } from "react";
    
    function FavoriteColor() {
      const [color, setColor] = useState("");
    }`}/>
            </li>
            <li>
              Ví dụ 2: Khởi tạo với giá trị nào đó:
              <CodeSnippet code={`const [color, setColor] = useState("red");`}/>
            </li>
          </ul>
        </li>
        <li>
          Update state:
          <ul>
            <li>
              Không được thay đổi trực tiếp giá trị của state mà phải thực hiện
              thông qua function update state:
              <Image fluid src="/images/update states through function.png" alt="" />
            </li>
          </ul>
        </li>
        <li>
          states ở đây có thể là strings, numbers, booleans, arrays, objecst
          hoặc tổ hợp của các kiểu dữ liệu trên.
        </li>
        <li>
          Ta có thể tạo nhiều state hooks:
          <Image fluid src="/images/multiple state hooks.png" alt="" />
        </li>
        <li>
          Hoặc cũng có thể gom lại thành một object rồi dùng một state hook để
          quản lý:
          <Image fluid src="/images/single hook hold an object.png" alt="" />
        </li>
        <li>
          Dùng spread operator để update giá trị của state chứa object hoặc
          array. Vì khi state được update là tất cả giá trị sẽ được udpate đồng
          thời. Nên nếu ta viết như sau sẽ xoá hết brand, model, year:
          <CodeSnippet code={`setCar({color: "blue"})`}/>
          Do đó, ta phải dùng spread operator nếu muốn update giá trị nào đó, ví
          dụ ở đây là color:
          <Image fluid
            src="/images/use spread operator to update object state.png"
            alt=""
          />
        </li>
      </ul>
      <h4>useEffect</h4>

      <ul>
        <li>
          Giúp thực hiện các side effects trong components. Ví dụ về side effect
          là: fetching data, update DOM, timers.
        </li>
        <li>
          useEffect sẽ gồm 2 arguments: một hàm và một mảng (mảng là optional,
          không có cũng được).
          <CodeSnippet code={`useEffect(() => {}, [dependencies])`}/>
        </li>
        <li>các giá trị trong mảng gọi là dependencies.</li>
        <li>
          Các trường hợp hoạt động của useEffect:
          <ul>
            <li>
              TH1: Không có dependencies, useEffect sẽ chạy mỗi khi render:
              <CodeSnippet code={`useEffect(() => {
                  //Runs on every render
                });`}/>
            </li>
            <li>
              TH2: Dependencies là một empty array: useEffect sẽ chạy ở lần
              render đầu tiên:
              <CodeSnippet code={`useEffect(() => {
                    //Runs only on the first render
                  }, []);`}/>
            </li>
            <li>
              TH3: Nếu có dependencies: useEffect sẽ được thực thi mỗi khi các
              dependencies thay đổi giá trị:
              <CodeSnippet code={`useEffect(() => {
                    //Runs on the first render
                    //And any time any dependency value changes
                  }, [prop, state]);`}/>
            </li>
          </ul>
        </li>
        <li>
          mỗi component có thể có một hoặc nhiều states, cũng như một hoặc nhiều
          useEffect
        </li>
        <li>
          Ví dụ 1: cứ sau 1 giây thì biến count lại tăng 1. Do trong ví dụ này
          useEffect không có dependencies nên nó sẽ chạy mỗi khi render. Mà khi
          biến count thay đổi thì page sẽ render lại, do đó biến count sẽ liên
          tục tăng sau mỗi 1 giây.
          <Image fluid src="/images/useeffect run every render.png" alt="" />
        </li>
        <li>
          Ví dụ 2: Bằng cách gán empty array làm dependencies, useEffect chỉ
          chạy 1 lần duy nhất ở first render, nên count chỉ bằng 1:
          <Image fluid src="/images/useeffect run on first render.png" alt="" />
        </li>
      </ul>
      <h2>Optional chaining operator ?.</h2>
      <ul>
        <li>Đây là feature mới của Javascript.</li>
        <li>
          object?.prop cũng giống với object.prop đều giúp truy cập vào
          properties của object.
        </li>
        <li>
          Tuy nhiên, ?. có ưu điểm là: Nếu object null hoặc undefined hoặc
          properties đang muốn truy cập vào không tồn tại thì sẽ trả về
          undefined thay vì lỗi chương trình.
        </li>
        <li>
          Ví dụ 1:
          <CodeSnippet code={`const person = {
              name: "Alice",
              age: 25,
              address: {
                city: "New York",
                zip: 10001
              }
            };
            
            console.log(person?.name); // Alice
            console.log(person?.address?.city); // New York
            console.log(person?.phone?.number); // undefined`} />
        </li>
        <li>
          Ví dụ 2:
          <CodeSnippet code={`const person = {
              name: "Alice",
              age: 25,
              address: {
                city: "New York",
                zip: 10001
              }
            };
            
            const prop = "age";
            
            console.log(person?.[prop]); // 25
            console.log(person?.["address"]?.["zip"]); // 10001
            console.log(person?.["phone"]?.["number"]); // undefined`} />
        </li>
      </ul>
      <h3>useSearchParams, useMemo</h3>
      <ul>
        <li>
          useSearchParams là hook giúp truy cập cũng như thay đổi giá trị search
          parameters của URL.
        </li>
        <li>
          useMemo là hook giúp tự động theo dõi các dependencies nào đó, và gọi
          hàm khi các dependencies đó thay đổi.Ta thấy điều này rất hữu ích, ví
          dụ với các state nào đó tự động thay đổi mà thì ta có thể giao cho
          useMemo để theo dõi.
        </li>
        <li>
          Cú pháp của useMemo:
          <CodeSnippet code={`const memoizedValue = useMemo(calculateValue, dependencies);`}/>
          Trong đó: The calculateValue parameter is a function that returns the
          value that you want to cache. The dependencies parameter is an array
          of values that determine when the memoized value should be updated. If
          the dependencies have not changed since the last render, the memoized
          value will be reused. Otherwise, the calculateValue function will be
          called again and the new result will be cached.
        </li>
      </ul>
      <Image fluid src="/images/usesearchparams and usememo hooks example.png" alt="" />
</div>

<div>
<h2>NEXTJS</h2>
      <h3>Giới thiệu</h3>
      <p>
        Nextjs là một react framework, giúp lập trình web được tối ưu hơn, dễ
        dàng hơn so với chỉ dùng React. Một vài điểm khác biệt giữa Nextjs và
        React như sau:
      </p>
      <ul>
        <li>
          reactjs là client rendering (tức là server gửi các file cần thiết như
          html, javascript,... còn browser dựa trên các file đấy sẽ render ra
          giao diện) còn nextjs là server rendering (tức là server sẽ dùng các
          file cần thiết render ra giao diện luôn, sau đó mới gửi đến cho
          browser)
        </li>
        <li>
          client rendering thì ưu điểm là khi dùng thì sẽ có response nhanh hơn.
          Nhưng nhược điểm là SEO kém.
        </li>
        <li>
          Nextjs cho phép kết hợp cả client rendering và server rendering nên sẽ
          giải quyết được vấn đề trên.
        </li>
        <li>
          Lưu ý: Cần sự bố cục hợp lý giữa server component (load ban đầu nhanh hơn) và client component (lúc dùng tương tác mượt mà hơn) thì mới có ý nghĩa. Nếu đẩy hết thành client component thì vô nghĩa. Do đó trên page hiển thị, tất cả những phần không cần tương tác với người dùng như ảnh, text,...đều phải để trong server component (toàn bộ phần chính của page). Còn tất cả những phần có tương tác với người dùng như button, search,... thì phải tách ra thành component riêng dưới dạng client component và chèn vào.
          <Image fluid
            src="images\client component and sever side component.png"
            alt="client side components vs server components"
          />
        </li>
        <li>
          Vậy khi nào thì dùng server components, khi nào thì dùng client
          components? nextjs khuyến khích là đơn giản nhất thì lúc nào cũng dùng
          server component cho đến khi báo lỗi thì chuyển sang client
          components (cần thì tách ra thành component riêng). Còn muốn hiểu kỹ thì nhìn ảnh (khi muốn dùng các khả năng
          của React như tính tương tác, hook):
          <Image fluid
            src="images\when to use server components or client components.png"
            alt=""
          />
        </li>
        <li>
          Vấn đề route trong nextjs cũng đơn giản hơn. route trong nextjs là
          file-based route. Mỗi folder trong folder app sẽ là một rout và tên
          folder đó sẽ thành route path luôn. Ví dụ trong app có folder about
          thì path sẽ là https://localhost:3000/about
        </li>
        <li>
          Một lợi thế khác của nextjs là làm fullstack app nhờ vào API route.
        </li>
        <li>
          Nextjs cũng cung cấp code splitting một cách tự động, tức chia code
          javascript ra thành các phần cần thiết để load khi cần, cho phép ứng
          dụng load nhanh hơn
        </li>
      </ul>
      <h3>Cài đặt</h3>
      <ul>
        <li>
          Dùng npx để cài đặt, do đó nếu chưa cài npx thì phải cài npx trước:
          <pre><code>npm install -g npx</code></pre>
        </li>
        <li>
          Tạo folder, cd đến folder rồi Cài npm một cách tự động vào folder đó
          theo lệnh sau:
          <pre><code>npx create-next-app@latest ./</code></pre>
        </li>
        <li>
          Sau đó nó sẽ hỏi thì chọn Yes với TypeScript, ESLint, App Router. Chọn
          No với Tailwind CSS, src directory, customize import alias.
        </li>
      </ul>
      <h3>Chạy server và view trên browser</h3>
      <ul>
        <li>
          Đầu tiên phải chạy development server, ta dùng lệnh:
          <pre><code>npm run dev</code></pre>
          Lưu ý: Muốn tắt thì bấm Ctrl + C
        </li>
        <li>
          Sau đó, có thể mở trình duyệt lên và truy cập
          <a href="http://localhost:3000">http://localhost:3000</a> để xem được
          app.
        </li>
      </ul>
      <h3>Path trong Nextjs</h3>
      <ul>
        <li>./ là current fodler</li>
        <li>@ để chỉ root folder. Ví dụ, tại root folder có components folder thì path tới file nav.jsx trong folder đó như sau: @/components/nav.jsx</li>
      </ul>
      <h3>Basic Structure</h3>
      <ul>
        <li>Folder app chứa các file quan trọng nhất:</li>
        <li>
          Trong đó, layout.js là file trung tâm, tất cả giao diện muốn chia sẻ
          chung giữa các page phải nằm ở đây. Do đó, nó sẽ chứa navbar,
          footer,...tức là tất cả thẻ ta viết ở đây ví dụ như p, h, ...sẽ được
          share ở tất cả các giao diện. Đồng thời tất cả các component khác sẽ
          được coi như children của layout.js từ đó sẽ tuỳ biến đồng thời chia
          sẻ được giao diện.
        </li>
        <li>File page.js sẽ đại diện cho homepage của app.</li>
        <li>File global.css sẽ chứa css global cho toàn bộ app.</li>
        <li>
          Tất cả các file nằm trong folder app sẽ là server side component
        </li>
        
        <li>
          Nếu muốn biến một file thành client side component (như khi cần sử
          dụng state, hook hoặc các chức năng khác của react) thì ta phải thêm
          'use client' vào đầu file như ảnh:
          <Image fluid
            src="images\add use client to make client side component.png"
            alt=""
          />
        </li>
        <li>
          Thay đổi font cho app thực hiện ở file layout như ảnh:
          <Image fluid src='images/thay doi font.png' />
        </li>
      </ul>
      <h3>NextJS front-end route</h3>
      <ul>
        <li>
          Để tạo basic route trong NextJS thì chỉ cần tạo folder bên trong
          folder app. Tên của folder đó sẽ là route path. Và bên trong folder
          vừa tạo tạo một file page.js chứa nội dung cần hiển thị. Ví dụ trong
          ảnh là route cho đường dẫn /user bằng cách tạo folder user với file
          page.js bên trong nó.
          <Image fluid
            src="images\nextjs basic route by creating folder inside app folder.png"
            alt="nextjs basic route by creating folder inside app folder"
          />
        </li>
        <li>
          Để tạo nested route trong Nextjs thì chỉ cần lồng folder vào trong
          foder, và trong folder mới tạo cũng có file page.js. Ví dụ với route
          http://localhost:3000/posts thì ta tạo folder posts, còn với rout
          http://localhost:3000/posts/new thì ta tạo thêm folder new bên trong
          folder posts như hình:
          <Image fluid src="images\nested route example.png" alt="" />
        </li>
        <li>
          Dynamic route: để có thể dynamic route, với ví dụ ở đây là theo kiểu
          đường dẫn localhost:3000/posts/postId thì trong nextjs ta làm như sau:
          Tạo folder trong folder posts với tên ở trong ngoặc vuông là postId và
          file page.js thì trong phần return về sẽ refer đến postId đó như hình:
          <Image fluid src="images\dynamic route.png" alt="" />
        </li>
        <li>
          Để có thể share component trong một folder thôi, chứ không phải toàn
          app thì ta tạo thêm file layout.js trong folder đó. Ví dụ trong ảnh là
          share giữa tất các page trong folder posts và cả các folder con của
          nó.
          <Image fluid src="images\share components inside folder.png" alt="" />
        </li>
        <li>
          file loading.js file này sẽ được chạy khi file page.js đang được load.
          Do đó, được dùng để thể hiện loading spinner,... giúp người dùng biết
          trang web đang được load.
          <Image fluid src="images\file loading.png" alt="" />
        </li>
        <li>
          file error.js giúp catch, hiển thị lỗi, khi lỗi xảy ra. Do bắt lỗi nên
          cần phải là client component. Do đó trong file phải có 'use client'
        </li>
      </ul>
<h3>Nextjs dynamic route</h3>
<Image fluid src='images/nextjs api route.jpg'/>
      <h3>Metadata</h3>
      <p>Nextjs hỗ trợ 2 phương án là:</p>
      <ol>
        <li>
          static Metadata: Ở trang page ta sẽ export thêm một object metadata
          chứa title.
          <Image fluid src="images\static metadata.png" alt="" />
        </li>
        <li>
          dynamic metadata: Làm theo cách này ta sẽ giả về title một cách
          dynamic tuỳ theo page đang được truy cập, từ đó nâng cao hiệu quả SEO.
          <Image fluid src="images\dynamic metadata.png" alt="" />
        </li>
      </ol>

      <h3>Data fetching</h3>
      <p>fetch data chính là kéo data từ API (kể cả API ngoài hoặc chính là app/api của nextjs)</p>
      <p>Nextjs có 3 phương án data fetching là: </p>
      <ul>
        <li>
          Server side rendering (SSR) đảm bảo data luôn được update. Có thể nhận
          diện bằng cache: no-store
          <Image fluid src="images\SSR example.png" alt="" />
        </li>
        <li>
          Static Site Generation (SSG) phù hợp cho các web mà nội dung không
          thường xuyên thay đổi như tài liệu, blog,...đặc điểm là không có ache:
          no-store
          <Image fluid src="images\SSG example.png" alt="" />
        </li>
        <li>
          Incremental Static Generation (ISG) kết hợp cả SSR và SSG. Điểm khác
          là data sẽ được update sau mỗi khoảng thời gian nhất định (revalidate)
          <Image fluid src="images\ISG example.png" alt="" />
          <Image fluid src='images/nextjs fetch data.png'/>
          Nếu trong phương án này thời gian revalidate được set về 0 thì data sẽ luôn được update. Giống với trong trường hợp SSR.
        </li>
      </ul>

      <h3>Nextjs API</h3>
      <ul>
        <li>Hiểu ngắn gọn là nextjs hỗ trợ tạo API. API này có thể truy cập từ chính trong app thông qua fetch hoặc truy cập từ ngoài app. Vì vậy, nó phù hợp cho việc viết thêm mobile app,... để có thể lấy data từ web.</li>
      <li>
        Để làm được điều này thì tất cả các route muốn tạo phải là các folder
        trong folder API. Và trong mỗi folder đó ta sẽ tạo một file route.js
        File này sẽ chứa code hỗ trợ việc route.
      </li>
      <Image fluid src="images\api route example.png" alt="" />
      </ul>
      
      
      <h3>next-auth</h3>
      có thể tham khảo document về phần này tại
      <a href="https://next-auth.js.org/getting-started/introduction"
        >next-auth.js.org
      </a>
      <Image fluid src="images/nextauth_secret.png" alt="" />
      <p>Để tạo nextauth_secret thì có một vài cách sau:</p>
      <ul>
        <li>
          Cách 1: Copy lệnh <code>openssl rand -base64 32</code> vào terminal ở
          link:
          <a href="https://www.cryptool.org/en/cto/openssl"
            >https://www.cryptool.org/en/cto/openssl</a
          >
        </li>
        <li>
          Cách 2: (Chưa thử) Lấy ở link:
          <a href="https://generate-secret.vercel.app/32"
            >https://generate-secret.vercel.app/32</a
          >
        </li>
      </ul>

      <h3>Nexjs app Deployment</h3>
      <ol>
        <li>Đảm bảo project đã update lên github</li>
        <li>Deploy qua vercel</li>
        <li>
          Sau khi đã deploy project lên vercel thì sẽ được cấp domain. Tiếp
          theo, phải sửa environment trên vercel theo domain được cấp. Lưu ý:
          Các ảnh dưới dùng sai link, phải dùng link deployment.
          <Image fluid src="images/vercel domain.png" alt="" />
          <Image fluid src="images/vercel env.png" alt="" />
        </li>
        <li>
          Tiếp theo phải sửa cả api ở google cloud
          <Image fluid src="images/google api edit.png" alt="" />
        </li>
        <li>
          Sau khi chỉnh sửa xong, nếu cần thì redeploy để app cập nhật lại
          setting. Lưu ý: sau redeploy thì có thể deployment link sẽ thay đổi.
          Nếu có thay đổi thì cần vào google chỉnh lại link, cũng như chỉnh lại
          ở environment variables ở phần setting của project trên vercel.
          <Image fluid src="images/vercel redeploy.png" alt="" />
        </li>
      </ol>
      
</div>

<div>
<h2>Tạo database với mongoDB</h2>
      <h3>Tổng quan về database, mongoDB, mongoose</h3>
      <Image fluid src="images/mongodb mindmap.jpg" alt="" />
      <h3>Thiết lập kết nối với mongoDB database</h3>
      <ol>
        <li>
          Truy cập tại
          <a href="https://www.mongodb.com/">https://www.mongodb.com/</a>
        </li>
        <li>
          Vào database access tạo user database:
          <Image fluid src="images/mongodb-database-access.png" alt="" />
          <Image fluid src="images/mongodb - create user database.png" alt="" />
        </li>
        <li>
          Tiếp theo vào network access, add ip hiện tại và ip 0.0.0.0 để cho
          phép truy cập từ mọi nơi
          <Image fluid src="images/mongodb - network access.png" alt="" />
        </li>
        <li>
          Tiếp theo chuyển sang database, bấm connect, chọn driver, copy string
          có được vào biến MONGODB_URI trong file .env
          <Image fluid src="images/mongodb - connect.png" alt="" />
          <Image fluid
            src="images/copy mongodb string connection to env file.png"
            alt=""
          />
        </li>
      </ol>
</div>
<h3>Next auth, google cloud, </h3>
<Image fluid src='images/nextauth google provider mongodb mindmap.jpg'/>
<div>
      <h2>Mongoose basic</h2>
      <h3>Giới thiệu</h3>
      <ul>
        <li>
          mongoose là một thư viện hỗ trợ tạo dữ liệu và liên kết với mongodb.
        </li>
        <li>
          Dữ liệu dạng schema (tên, kiểu dữ liệu, giá trị) cũng chính là dạng dữ
          liệu sẽ được lưu trên MongoDB collection.
        </li>
        <li>Lưu ý: mongoose không đặt ở client component (vì bảo mật, vì client component chỉ dùng để render ui và quản lý các local state)</li>
      </ul>
      <h3>Tham khảo</h3>
      <ul>
        <li>
          <a
            href="https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/#connecting-to-mongodb"
            >getting started with mongodb and mongoose</a
          >
        </li>
        <li></li>
      </ul>
      <h3>
        <a href="https://mongoosejs.com/docs/queries.html"
          >Cách sử dụng mongoose</a
        >
      </h3>
      <h4>mongoose mindmap</h4>
      <Image fluid src="images/mongoose mindmap.jpg" alt="" />
      <h4>Create data with mongoose</h4>
      <Image fluid src="images/create data with mongoose.jpg" alt="" />
      <h4>Reading data with mongoose</h4>
      <Image fluid src="images/Reading data with mongoose.jpg" alt="" />
      <h4>Update data with mongoose</h4>
      <Image fluid src="images/update data with mongoose.jpg" alt="" />
      <h4>Delete data with mongoose</h4>
      <Image fluid src="images/Delete data with mongoose.jpg" alt="" />
      <h4>Data validation</h4>
      <ul>
        <li>
          Mục đích của data validation là tạo một số luật nhất định lên data
          schema. Ví dụ như các thông tin bắt buộc phải có, những chỗ bắt buộc
          phải viết hoa hay viết thường.
        </li>
        <li>
          Để làm được điều này thì ta thêm vào các method vào các vị trí cần
          thiết.
          <Image fluid src="images/mongoose validation.png" alt="" />
        </li>
        <li>
          Lưu ý: Vì phải thêm các method vào nên việc khai báo trông phức tạp
          hơn, nhưng 2 kiểu khai báo này là như nhau:
          <Image fluid src="images/schema type same definition.png" alt="" />
        </li>
      </ul>
      <h3>Multiple schemas</h3>
      <h4>Giới thiệu</h4>
      <ul>
        <li>
          Tư tưởng của mongodb là cố gắng lồng các data liên quan với nhau vào
          một schema. Còn nếu cùng lắm thì mới tách ra thành nhiều schema.
        </li>
        <li>
          Còn khi thật sự cần thiết thì mới tách thành schema khác nhau. Và nếu
          có điểm liên quan thì ta cũng có cách để liên kết các schema đó lại.
        </li>
      </ul>
      <h4>Liên kết các schema với nhau</h4>
      <p>Ta dùng ref để liên kết các schema.</p>
      <p>
        Giả sử ta đã có một model là User, bây giờ nếu ta tạo một model mới gọi
        là blogSchema thì ta có thể liên kết blogSchema với User như hình. Lưu ý
        ref và type.
      </p>
      <Image fluid src="images/link models in mongoose.png" alt="" />
      <p>
        Sau khi đã link được 2 model, thì giả sử tiếp theo ta tạo 2 document
        tương ứng thì ta có thể liên kết chúng với nhau. Liên kết thì có thể
        dùng các thông tin như email, id,... Chắc chắn nhất đỡ trùng thì thông
        qua id được phát tự động bởi mongodb, còn nếu dùng qua google cloud thì
        có thể dùng email. Trong ví dụ này là liên kết với nhau thông qua id,
        nhớ là khai báo model type cũng là ObjectId.
      </p>
      <Image fluid src="images/link documents in mongoose.png" alt="" />
      <h3>Method Populate</h3>
      <p>
        populate() dùng để liên kết các dữ liệu với nhau trên MongoDB (replace
        specified path in the document with document from other collections).
      </p>
      <p>
        Giả sử có 2 data schema. Thì chúng sẽ có thể được liên kết thông qua
        populate như 2 ví dụ dưới đây:
      </p>
      <p>Ví dụ 1:</p>
      <ol>
        <li>
          Tạo userschema.
          <Image fluid src="images/populate-1.1.png" alt="" />
        </li>
        <li>
          Từ userschema, tạo model User:
          <Image fluid src="images/populate-1.2.png" alt="" />
        </li>
        <li>
          Như vậy, khi một document được tạo mới từ model User trên database sẽ
          có dạng:
          <Image fluid src="images/populate-1.3.png" alt="" />
          Lưu ý: Trong userschema hoàn toàn không có id, _id ở đây là được
          mongoDB auto tạo.
        </li>
        <li>
          Sau đó, tạo promptschema và model Prompt
          <Image fluid src="images/populate-1.4.png" alt="" />
        </li>
        <li>
          Như vậy, nhờ ref sang User, và type là Schema.Types.ObjectID mà khi
          tạo một Prompt mới, ID của User đang login sẽ được truyền sang tương
          ứng:
          <Image fluid src="images/populate-1.5.png" alt="" />
          Lưu ý: _id của prompt là cũng được auto cấp mới, còn của creator là
          được link sang nhờ ObjectID.
        </li>
        <li>
          Từ đây, lệnh populate sẽ giúp ta thay đoạn ID đó bằng toàn bộ User
          tương ứng:
          <Image fluid src="images/populate-1.6.png" alt="" />
          <Image fluid src="images/populate-1.7.png" alt="" />
          Nếu không muốn lấy, toàn bộ thông tin sang, ví dụ chỉ lấy email và
          username thì ta có thể làm như sau:
          <Image fluid src="images/populate-1.8.png" alt="" />
        </li>
      </ol>
</div>

<div>
<h2>GOOGLE AUTHENTICATION</h2>
      Module NextAuth sẽ hỗ trợ chức năng đăng nhập với Google Auth trong một
      Nextjs app.
      <a
        href="https://www.telerik.com/blogs/how-to-implement-google-authentication-nextjs-app-using-nextauth"
        >Tham khảo tại đây</a
      >
      <Image fluid src="images\oauth-flow.png" alt="" />
      Dưới đây là tóm lược các ý chính của quá trình đăng nhập với google auth,
      nextauth:
      <ol>
        <li>
          Các bước 3, 5, 6, 7 là nextjs sẽ giúp ta. Tuy nhiên, ta cần đăng ký
          nextjs app của ta với google tại link:
          <a href="https://console.cloud.google.com"
            >https://console.cloud.google.com</a
          >
          <Image fluid src="images/google auth step 1.png" alt="" />
          <Image fluid src="images/google auth step 2.png" alt="" />
          <Image fluid src="images/google auth step 3.png" alt="" />
          <Image fluid src="images/google auth step 4.png" alt="" />
          <Image fluid src="images/google auth step 5.png" alt="" />
          <Image fluid src="images/google auth step 6.png" alt="" />
          <Image fluid src="images/google auth step 7.png" alt="" />
          <Image fluid src="images/google auth step 8.png" alt="" />
          Sau khi lấy được ID và secret thì có thể bỏ vào file .env đã tạo.
        </li>
        <li>
          Khi đăng ký xong ta sẽ có key và secret để cài vào app. Đồng thời, ta
          sẽ viết app lồng với provider (google)
        </li>
        <li>
          Thêm nữa, ta phải viết code để khi chưa đăng nhập thì hiện nút đăng
          nhập, khi đang chờ đăng nhập thì hiện waiting, khi đã đăng nhập thì
          hiện welcome,...kiểu như ảnh:
          <Image fluid src="images\before and after login example.png" alt="" />
        </li>
      </ol>
</div>

<div>
<h2>KIẾN THỨC THU ĐƯỢC KHI LÀM PROJECT NEXTJS PROMPTOPIA</h2>
      <ul>
        <li>
          Cài thêm các package bcript để harsh password, mongodb và mongoose để
          quản lý data, next-auth bằng lệnh:
          <pre><code>npm install bcrypt mongodb mongoose next-auth</code></pre>
        </li>
        <li>Cho file .env vào .gitignore</li>
        <li>
          Cấu trúc của project sẽ như sau:
          <Image fluid src="images\project promptopia structures.png" alt="" />

          <ol>
            <li>folder app xoá đi, tạo mới lại</li>
            <li>
              folder components tạo mới, sẽ chứa các components dùng chung được
            </li>
            <li>
              folder models tạo mới, sẽ chứa các models về data liên quan đến
              mongodb và mongoose
            </li>
            <li>folder public xoá đi tạo mới, sẽ chứa các assets: ảnh,...</li>
            <li>
              folder styles tạo mới, sẽ chứa các file liên quan đến styles.
            </li>
            <li>folder utils tạo mới, sẽ chứa các utilites sẽ dùng</li>
            <li>file .env tạo mới sẽ chứa các security keys</li>
          </ol>
        </li>
        <li>
          Khi gặp lỗi failed to compile hoặc module not found thì xoá \ ở file
          jsconfig
          <Image fluid src="images\nextjs failed to compile error.png" alt="" />
          <Image fluid
            src="images\nextjs failed to compile error-solution.png"
            alt=""
          />
        </li>
        <li>
          Nếu chèn ảnh ở ngoài vào app, thì phải thêm link của host vào file jsconfig:
        <Image fluid src='images/sua loi chen anh ngoai.png'/>
        </li>
      </ul>
</div>

<div>
<h2><a href="https://www.typescripttutorial.net/">TYPESCRIPT</a></h2>
      <h3>Giới thiệu</h3>
      <ul>
        <li>
          TypeScript là một ngôn ngữ lập trình mã nguồn mở được phát triển bởi
          Microsoft. TypeScript có thể được coi là một phiên bản nâng cao của
          JavaScript vì nó bổ sung tùy chọn kiểu tĩnh và lớp hướng đối tượng mà
          không có ở JavaScript.
        </li>
        <li>
          TypeScript cũng có thể giảm tỷ lệ mắc lỗi trong hệ thống và giúp tăng
          hiệu suất khi phát triển ứng dụng
        </li>
        <li>
          Trong javascript, các function parameter và parameter không có thông
          tin gì về kiểu dữ liệu yêu cầu, do đó gây khó khăn cho coder khi sử
          dụng.
        </li>
        <li>
          typescript cho phép việc xác định loai dữ liệu cần pass, nó còn có khả
          năng báo lỗi nếu dữ liệu đươc pass không đúng.
        </li>
        <li>Các file typescript sẽ có đuôi là .tsx</li>
      </ul>
      <h3>Cách sử dụng</h3>
      <ul>
        <li>
          Phải cài compiler của typescript. Bước này khi tạo nextjs app, chương
          trình sẽ hỏi có muốn dùng typescript không chính là để cài compiler.
          <pre>
      <code>npm install typescript --save-dev</code>
    </pre>
        </li>
        <li>
          Type assignment. Có 2 kiểu là explicit và implicit (minh bạch và hiểu
          ngầm):
          <ul>
            <li>
              Ví dụ về explicit:
              <pre>
          <code>let firstName: string = "Dylan";</code>
        </pre>
            </li>
            <li>
              Ví dụ về implicit (Trong trường hợp này data type sẽ được tự đoán
              dựa vào dữ liệu được gán):
              <pre>
  <code>let firstName = "Dylan";</code>
</pre>
            </li>
          </ul>
        </li>
        <li>
          typescript cũng có 3 kiểu dữ liệu primitive giống javascript, và còn
          có thêm 3 kiểu dữ liệu khác. Tham khảo thêm
          <a
            href="https://www.w3schools.com/typescript/typescript_special_types.php"
            >tại đây</a
          >
        </li>
      </ul>
      <Image fluid src="images/typescript mindmap.jpg" alt="" />
      <Image fluid src="images/typescript mot vai kieu du lieu dac biet.jpg" alt="" />
</div>

<div>
<h2>Tricks</h2>
      <ul>
        <li>
          Để tạo nhanh react class component thì ta cài extension es7 + và từ đó
          có thể gõ rafce trong file để tạo nhanh.
        </li>
        <li>
          Ctrl + click vào component nào thì sẽ mở ra file định nghĩa component
          đó.
        </li>
        <li>
          Cách viết nhanh dòng import: tạo file index trong folder component.
          trong file cần import thì double click vào tên component là sẽ tự thêm
          dòng import.
          <img src="images/quick import.png" alt="" />
        </li>
        <li>
          Để chọn nhiều vị trí cùng một lúc (để replace với cùng một giá trị)
          thì giữ Alt và dùng chuột để chọn.
        </li>
        <li>
          So sánh class và className: Thực tế là vẫn dùng được class trong
          react, tuy nhiên tóm gọn lại thì nên dùng className: n React,
          className is used instead of class because class is a reserved keyword
          in JavaScript and JSX is an extension of JavaScript 12. Therefore,
          using class instead of className would result in a syntax error. In
          addition, className is the only supported attribute for specifying CSS
          classes in React. However, in React 16, attributes can be passed
          through to the DOM, which means that class can be used instead of
          classNameNonetheless, it is still recommended to use className over
          class for consistency and backwards compatibility with previous
          versions of React
        </li>
      </ul>
</div>

    </div>
  )
}

export default react_tutorial