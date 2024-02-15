import CodeSnippet from '@/components/CodeSnippet'
import React from 'react'
import { Image } from 'react-bootstrap'

const js_tutorial = () => {
  return (
    <div>
<h1 className='my-4 text-center'>JAVASCRIPT TUTORIAL</h1>
<p>
          Series về javascript rất hay tại 
          <a
            href="https://www.digitalocean.com/community/tutorial_series/how-to-code-in-javascript"
            > Digital Ocean</a
          >
        </p>

        <h2>SEMICOLON IN JS</h2>
        <ul>
          <li>js không yêu cầu chặt chẽ về sử dụng ;</li>
          <li>
            Nên đa phần trường hợp thì dùng hay không là do phong cách, còn js
            đã có cơ chế tự động thêm dấu ;
          </li>
          <li>
            Tuy nhiên, vẫn có những trường hợp bắt buộc dùng hoặc không được
            dùng. Xem chi tiết tại
            <a href="https://www.codingem.com/javascript-semicolon-usage/"
              >đây</a
            >
          </li>
        </ul>

        <h2>
          <a
            href="https://www.thatsanegg.com/blog/what%E2%80%99s-the-difference-between-event-handlers-addeventlistener-in-js/"
            >EVENT HANDLER VS EVENT LISTENER</a
          >
        </h2>
        <p>
          For a given element, you can only have one event handler per event
          type, but you can have multiple event listeners. In general, it’s
          advised to use event listeners.
        </p>

<div>
<h2>LET VS VAR VS CONST</h2>
        <ul>
          <li>var và let, const đều dùng để khai báo biến dữ liệu</li>
          <li>
            var có thể redeclare, update dữ liệu
            <pre><code
              >var camper = "James"; 
              var camper = "David"; 
              camper ="abcd" 
              console.log(camper);</code
            ></pre>
          </li>

          <li>
            let có thể update dữ liệu, không thể redeclare. Ví dụ dưới đây sẽ
            báo lỗi
            <pre><code
              >let camper = "James"; 
              let camper = "David";</code
            ></pre>
          </li>

          <li>
            const không thể redeclare, không thể update dữ liệu khi đã được gán.
            Lưu ý: However, it is important to understand that objects
            (including arrays and functions) assigned to a variable using const
            are still mutable. Using the const declaration only prevents
            reassignment of the variable identifier.
          </li>
        </ul>
</div>

<div>
<h2 className='text-capitalize'>IMMEDIATELY INVOKED FUNCTION (IIFE)</h2>
        <p>
          Hàm được khởi tạo và chạy ngay tức thì gọi là IIFE. Cho hàm vào () và
          thêm () vào cuối để gọi:
        </p>
        <p>Lưu ý: hàm phải là anonymous (không có tên)</p>
        <CodeSnippet code={`(function() {
              console.log("A cozy nest is ready");
            })();`}/>

</div>

<div>
<h2>STRING</h2>
        <h3>Escaping literal quotes</h3>
        <p>
          When you are defining a string you must start and end with a single or
          double quote. What happens when you need a literal quote: " or '
          inside of your string? In JavaScript, you can escape a quote from
          considering it as an end of string quote by placing a backslash (\) in
          front of the quote.
        </p>
        <pre>
          <code
          >const sampleStr = "Alan said, \"Peter is learning
          JavaScript\".";</code
        >
        </pre>

        <h3>" and '</h3>
        <ul>
          <li>
            Có thể dùng " hoặc ', nhưng phải dùng đầu cuối tương đương, không
            lẫn lộn
          </li>
          <li>
            Có thể không dùng \ bằng cách dùng kết hợp " và '
            <pre><code
              >const conversation = 'Finn exclaims to Jake, "Algebraic!"';</code
            ></pre>

            Tuy nhiên, phải cẩn thận vì string sẽ kết thúc ngay khi gặp quote
            tương ứng, trong trường hợp này là '.
          </li>
        </ul>
        <h3>Escape characters</h3>
        <p>
          Escape characters được sử dụng để thể hiện các ký tự như tab, new
          line,... trong string.
        </p>
        <figure>
          <Image fluid
            id="escape-char-img"
            src="images\escape-characters.png"
            alt="escape characters"
          />
          <figcaption>Một số escape characters</figcaption>
        </figure>
        <pre><code>const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";</code></pre>
        <h3>string methods</h3>
        <figure>
          <Image fluid src="images\js string methods.png" alt="string methods" />
          <figcaption>string methods</figcaption>
        </figure>
        <p>
          Xem chi tiết về cách dùng các string method tại
          <a href="https://www.w3schools.com/js/js_string_methods.asp">đây</a>
        </p>
</div>

<div>
<h2>
          <a href="https://www.w3schools.com/js/js_scope.asp"
            >JS SCOPE</a
          >
        </h2>
        <ul>
          <li>
            <b>block scope: </b>let, const nằm trong {} bất kỳ (không phải của
            function) thì sẽ là block scope. Không áp dụng với var, vẫn là
            global scope
          </li>
          <li>
            <b>function scope: </b>let, const và var nằm trong {} của function
            thì đều có function scope. Tuy nhiên, nếu không khai báo thì biến sẽ
            automatically global scope
            <CodeSnippet code={`function myFunction() { carName = "Volvo"; }`}/>
          </li>
          <li>
            <b>global scope: </b>Nếu let, var, const nằm ngoài mọi {} thì đều là
            global scope. Có thể truy cập được từ bất kỳ câu lệnh nào ở file
            javascript.
          </li>
        </ul>
</div>

<div>
<h2>SO SÁNH DỮ LIỆU KHÁC KIỂU</h2>
        <p>
          == trong js có thể so sánh dữ liệu khác kiểu, gọi là
          <b>Type Coercion</b>Vd:
        </p>
        <pre><code
          >1 == 1 // true 
          1 == 2 // false 
          1 == '1' // true
          "3" == 3 // true</code
        ></pre>

        <p>
          Khi không muốn so sánh dữ liệu khác kiểu thì dùng Strict Equality ===
        </p>
        <p>Hiểu tương tự cho != và !==</p>
        <pre><code
          >3 === 3 // true 
          3 === '3' // false</code
        ></pre>
</div>

<div>
<h2>REGULAR EXPRESSIONS</h2>
        <h3>Ý nghĩa</h3>
        <p>
          hay còn gọi là regex hoăc regexp là các patterns được dùng để thực
          hiện so sánh, tìm kiếm, thay thế.. với string.
        </p>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"
          >Tham khảo tại đây</a
        >
</div>

<div>
<h2>
          <a href="https://www.w3schools.com/js/js_arrays.asp"
            >ARRAY</a
          >
        </h2>
        <p>
          Array về bản chất cũng là object. Tuy nhiên, sự khác nhau như sau:
          Array là dạng numbered indexes còn object là dạng named indexes. Do
          đó, tuỳ vào muốn dạng indexes nào thì ta tạo array hay object cho phù
          hợp.
        </p>
        <h2>Cách loop trong data structure với for..in và for..of</h2>
        <p>
          Ngoài cách dùng cấu trúc for thông thường để loop qua array thì với
          các cấu trúc dữ liệu phức tạp ta dùng for..in và for..of để loop qua.
        </p>
        <p>
          Điểm khác biệt giữa for..in và for..of là for..in thì lướt qua chỉ số
          của các property (returns a list of keys on the object being
          iterated). Còn for..of thì thì lướt qua giá trị của property (với điều
          kiện các property phải ở dạng index tức là được đánh số) (returns a
          list of values of the numeric properties of the object being
          iterated).
        </p>
        <p>
          Do đó, dùng for..of thì tiện viết code hơn, tuy nhiên dùng for..in thì
          đỡ nhầm hơn.
        </p>
        <CodeSnippet code={`var arr = [3, 5, 7];
          arr.foo = "hello";
              
          for (var i in arr) {
            console.log(i); // logs "0", "1", "2", "foo"
          }
              
          for (var i of arr) {
            console.log(i); // logs "3", "5", "7"
            // it doesn't log "3", "5", "7", "hello"
          }`}/>


        <p>Tham khảo thêm tại:</p>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of"
              >mdn</a
            >
          </li>
          <li>
            <a
              href="https://stackoverflow.com/questions/29285897/what-is-the-difference-between-for-in-and-for-of-statements"
              >stackoverflow</a
            >
          </li>
        </ul>
</div>

<div>
<h2>
          <a href="https://www.w3schools.com/js/js_objects.asp"
            >OBJECT</a
          >
        </h2>

        <h3>Cấu trúc của một object</h3>
        <p>
          Ví dụ về cấu trúc của một object gồm có các properties và methods:
        </p>
        
        <CodeSnippet code={`const person = { 
            firstName: "John", 
            lastName : "Doe", 
            id       : 5566, 
            fullName : function() { 
              return this.firstName + " " + this.lastName; 
            } 
          };`}/>
        <p>
          Lưu ý: Ta có thể hiểu bản chất method ở đây cũng giống như là property
          bình thường, nhưng value của nó được lấy từ kết quả trả về của một
          hàm.
        </p>
        <h3>Cách truy cập Object</h3>
        <p>Lưu ý về cách truy cập thông qua dot notation và bracket []</p>
        <CodeSnippet code={` a.b; 
            a["b"] `}/>

<CodeSnippet code={`const contacts = [ { firstName: "Akira", lastName: "Laine", number:
            "0543236543", likes: ["Pizza", "Coding", "Brownie Points"], }, {
            firstName: "Harry", lastName: "Potter", number: "0994372684", likes:
            ["Hogwarts", "Magic", "Hagrid"], }, { firstName: "Sherlock", lastName:
            "Holmes", number: "0487345643", likes: ["Intriguing Cases", "Violin"],
            }, { firstName: "Kristian", lastName: "Vos", number: "unknown", likes:
            ["JavaScript", "Gaming", "Foxes"], }, ]; 
            function lookUpProfile(name, prop) 
            { 
            for (let i = 0; i < contacts.length; i++) 
            { if(contacts[i]["firstName"] == name) 
            {
            if(contacts[i].hasOwnProperty(prop)) 
            { return contacts[i][prop]; } 
            else { return "No such property"; } 
            } 
            } 
            return "No such contact"; 
  
            } 
            lookUpProfile("Akira", "likes"); `}/>


        <p>
          Tham khảo thêm
          <a
            href="https://dmitripavlutin.com/access-object-properties-javascript/"
            >tại đây</a
          >:
        </p>
        <p>
          Tham khảo thêm tại
          <a
            href="https://www.digitalocean.com/community/tutorials/understanding-objects-in-javascript"
            >Digital ocean</a
          >
          về cách loop qua tất các properties của object:
        </p>
        <CodeSnippet code={`const gimli = { 
          name: "Gimli", 
          race: "dwarf", 
          weapon: "battle axe", 
        };`}/>
        <CodeSnippet code={`for (let key in gimli) { 
          console.log(gimli[key]); 
        }`}/>
        
        <p>
          Lưu ý: Với object tự tạo thì ta chỉ dùng được for...in còn muốn dùng
          for...of thì phải làm cho object trở thành iterable
        </p>
        <h3>Cách tạo một object</h3>
        <p>Cách khởi tạo object:</p>
        <ul>
          <li>
            Cách 1: Object literal: Dùng {}
            <CodeSnippet code={`// Initialize object literal with curly brackets
              const objectLiteral = {};`}/>
          </li>
          <li>
            Cách 2: Dùng object constructor với new keyword:
            <CodeSnippet code={`// Initialize object constructor with new Object
              const objectConstructor = new Object();`}/>
          </li>
        </ul>
        <p>
          2 cách trên thì object literal thường được dùng hơn. 2 cách đều tạo ra
          empty object. Sau khi tạo empty object thì ta có thể thêm các
          properties cho nó sau:
        </p>
        <CodeSnippet code={`const person = new Object();
          person.firstName = "John";
          person.lastName = "Doe";
          person.age = 50;
          person.eyeColor = "blue";`}/>
        <p>
          Trong cách 1 thì ta có thể khởi tạo luôn các properties cho Object:
        </p>
        <CodeSnippet code={`const person = {
          firstName: "John",
          lastName: "Doe",
          age: 50,
          eyeColor: "blue"
        };`}/>
        <h3>Tạo nhiều object cùng loại thông qua constructor function</h3>
        <p>
          Muốn tạo nhiều object tương tự như nhau thì rõ ràng ta có thể copy
          code rồi thay tên. Tuy nhiên, ta thấy làm vậy dài, thủ công và không
          chuyên nghiệp. Do đó, ta sẽ dùng constructor để tạo khuôn cho các
          object.
        </p>
        <p>
          Bản chất của constructor function chính là ta dùng function để giả về
          giá trị. Ví dụ:
        </p>
        <ul>
          <li>
            Bước 1: Tạo constructor function
            <CodeSnippet code={`function Person(first, last, age, eye) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eye;
    }`}/>
          </li>
          <li>
            Bước 2: Tạo ra các object bằng việc gọi constructor function:
            <CodeSnippet code={`const myFather = new Person("John", "Doe", 50, "blue");
      const myMother = new Person("Sally", "Rally", 48, "green");`}/>
          </li>
        </ul>
        <p>
          <b>Lưu ý: </b>Ta không thêm được property hay method vào constructor
          giống như cách làm với object được, mà phải thêm thẳng vào phần khai
          báo constructor.
        </p>
        <h3>Built-in JavaScript Constructors</h3>
        <p>javascript có một số built-in constructor như sau:</p>
        <CodeSnippet code={`new String()    // A new String object
  new Number()    // A new Number object
  new Boolean()   // A new Boolean object
  new Object()    // A new Object object
  new Array()     // A new Array object
  new RegExp()    // A new RegExp object
  new Function()  // A new Function object
  new Date()      // A new Date object`}/>
        <p>
          Tức là ta có thể tạo các biến theo kiểu object thông qua từ khoá new,
          ví dụ:
        </p>
        <code>firstName = new String("John")</code>
        <p>
          Tuy nhiên, có lưu ý là không nên tạo dữ liệu kiểu object như vậy, mà
          nên tạo theo kiểu primitive data:
        </p>
        <CodeSnippet code={`let x1 = "";             // new primitive string
    let x2 = 0;              // new primitive number
    let x3 = false;          // new primitive boolean
    const x4 = {};           // new Object object
    const x5 = [];           // new Array object
    const x6 = /()/          // new RegExp object
    const x7 = function(){}; // new function`}/>
        <h3>Bảo vệ code với closure</h3>
        <p>
          closure chỉ việc một function luôn có thể truy cập vào môi trường mà
          nó được tạo ra (ý chỉ biến khai báo bên ngoài nó thì thành biến gần
          như là global với nó). Do đó, ta lợi dụng điều này để bảo vệ code khỏi
          bị truy cập từ bên ngoài. Ta sẽ khai báo biến bên trong constructor và
          viết hàm bên trong constructor. Khi đó, hàm này có thể truy cập vaò
          biến, trong khi ta không thể truy cập vào biến từ bên ngoài. Ví dụ:
        </p>
        <p>
          Nếu viết code thế này thì weight là property và có thể dễ dàng sửa từ
          code bên ngoài.
        </p>
        <CodeSnippet code={`function Bird() {
          this.weight = 15;
        }
        
        let mockingBird = new Bird();
        console.log(mockingBird.weight);
        mockingBird.weight = 20;
        console.log(mockingBird.weight);`}/>
        <p>
          Còn nếu viết như sau, thì weight chỉ có thể truy cập được từ bên trong
          constructor do đó không thể sửa được từ code bên ngoài. Do đó, đây là
          một cách để bảo vệ code.
        </p>
        <CodeSnippet code={`function Bird() {
        let weight = 15;
        this.getWeight = function() {
          return weight;
        }
      }
      
      let mockingBird = new Bird();
      console.log(mockingBird.getWeight());
      console.log(mockingBird.getWeight(20)); // không thể sửa code để ra kết quả 20 được.`}/>

        <h3>constructor property và instanceof method</h3>
        <p>
          Để check xem object là loại nào (constructor tạo ra nó là gì) thì ta
          có thể dùng 2 cách:
        </p>
        <ul>
          <li>
            Dùng constructor property:
            <CodeSnippet code={`function Dog(name) {
            this.name = name;
          }
          
          // Only change code below this line
          function joinDogFraternity(candidate) {
          if(candidate.constructor === Dog)
          {
            return true;
          }
          else {
            return false;
          }
          }`}/>
          </li>
          <li>
            Dùng instanceof method:
            <CodeSnippet code={`function Dog(name) {
              this.name = name;
            }
            const fox = new Dog('fox');
            // Only change code below this line
            function joinDogFraternity(candidate) {
            if(candidate instanceof Dog)
            {
              return true;
            }
            else {
              return false;
            }
            }
            console.log(joinDogFraternity(fox));`}/>
          </li>
        </ul>
</div>

<div>
<h2>THIS, CALL, APPLY, BIND</h2>
        <h3>this</h3>
        <figure>
          <Image fluid src="images\this in javascript.png" alt="this in javascript" />
          <figcaption>this in javascript</figcaption>
        </figure>
        <p>
          Lưu ý: Trong arrow functions thì this sẽ go up to the next level of
          execution. Điều này cũng có lợi ích, ví dụ như trong ví dụ 2, nếu
          không sử dụng arrow function thì this sẽ đề cập tới event mà không
          phải là this.buttonText trong class (như vậy sẽ không thay đổi được
          nội dung của buttontext).
        </p>
        <p>Ví dụ 1:</p>
        <CodeSnippet code={`const whoAmI = {
          name: 'Leslie Knope',
          regularFunction: function() {
            console.log(this.name)
          },
          arrowFunction: () => {
            console.log(this.name)
          },
        }
        
        whoAmI.regularFunction() // "Leslie Knope"
        whoAmI.arrowFunction() // undefined`}/>
        <p>Ví dụ 2</p>
        <CodeSnippet code={`const button = document.createElement('button')
          button.textContent = 'Click me'
          document.body.append(button)
          
          class Display {
            constructor() {
              this.buttonText = 'New text'
          
              button.addEventListener('click', event => {
                event.target.textContent = this.buttonText
              })
            }
          }
          
          new Display()`}/>
        <h3>call, apply, and bind</h3>
        <p>
          Có những hàm có sử dụng this, tuy nhiên lại không có parameters. Do
          đó, khi gọi các hàm này một cách thông thường thì sẽ không sử dụng
          được. Ví dụ:
        </p>
        <CodeSnippet code={`const book = {
          title: 'Brave New World',
          author: 'Aldous Huxley',
        }
        
        function summary() {
          console.log(this.title + 'was written by ' + this.author)
        }
        
        summary()`}/>

        <p>
          Tác dụng của call, apply và bind đều là giúp gọi những hàm kiểu này
          với các parameters cần thiết.
        </p>
        <CodeSnippet code={`summary.call(book)
          // or:
          summary.apply(book)`}/>
        <p>Sự khác nhau giữa call, apply và bind như sau:</p>
        <ul>
          <li>
            Khi cần nhiều hơn một parameter thì cấu trúc viết các parameters
            trong call là one by one (tức là liệt kê riêng từng parameter ra),
            trong khi của apply là dạng array.
            <CodeSnippet code={`function longerSummary(genre, year) {
            console.log(
              this.title + 'was written by ' + this.author + 'It is a'+ genre + 'novel written in ' + year
            )
          }`}/>
            <CodeSnippet code={`longerSummary.call(book, 'dystopian', 1932)`}/>
            <CodeSnippet code={`longerSummary.apply(book, ['dystopian', 1932])`}/>
          </li>
          <li>
            Trong khi call và apply có tác dụng một lần khi thực hiện câu lệnh,
            thì bind sẽ gắn chặt parameter vào hàm luôn, và cũng không thể bind
            giá trị khác đè lên. Ví dụ: Trong ví dụ này thì dòng lệnh bind book2
            là không có tác dụng.
            <CodeSnippet code={`const braveNewWorldSummary = summary.bind(book)

braveNewWorldSummary() // Brave New World was written by Aldous Huxley.

const book2 = {
  title: '1984',
  author: 'George Orwell',
}

braveNewWorldSummary.bind(book2)

braveNewWorldSummary() // Brave New World was written by Aldous Huxley.`}/>
          </li>
        </ul>
        <p><b>Ví dụ dùng bind để set giá trị cho this</b></p>
        <p>
          Trong ví dụ này thì ta thấy object user có một property là function và
          function này dùng this để refer đến chính object function. Tuy nhiên,
          nếu như ta không dùng bind để gắn object user vào function đó thì sẽ
          thấy không có tác dụng.
        </p>
        <figure>
          <Image fluid
            src="images\use bind to set value for this.png"
            alt="use bind to set value for this"
          />
          <figcaption>Dùng bind để set giá trị cho this</figcaption>
        </figure>
        <p>
          Trong ví dụ tương tự này, nếu không dùng bind thì sẽ gọi đến global
          variable.
        </p>
        <CodeSnippet code={`var name = "xxx";
            var user = {
        name: "yyy",
            showInfo: function(){
                  console.log("Name:" + this.name);
            }
            }
            
            var showData= user.showInfo;
            var showDataBind = user.showInfo.bind(user)
            showData() // call global data : return Name: xxx
            showDataBind() // call local data: return Name: yyy`}/>
</div>



    </div>
  )
}

export default js_tutorial