//array
console.log(`test array`);
const myArray =[1, 2, 3, 4, 5];
//loop with for
for (let i = 0; i < myArray.length; i++)
{
  console.log(myArray[i]);
}
//loop with for in
console.log("loop with for in: ");
for (i in myArray)
{
  console.log(myArray[i]-1);
}
//loop with for of
console.log("loop with for of: ");
for (i of myArray)
{
  console.log(i+1);
}
/////////////////////////////////////////
//test object
console.log(`test object`);
//tạo object với literal
const myObject1 = {
  prop1 : 4,
  prop2 : "abcd",
  prop3 : function getback() {return 6;}
};
// tạo object với từ khoá new, sau đó thêm properties
const myObject2 = new Object();
myObject2.prop1 = 65;
myObject2.prop2 = "abcd";
myObject2.prop3 = ()=>{return "xyz";};
// tạo object với constructor function
// tạo constructor
function makeObj(value1, value2, value3)
{
  this.prop1 = value1;
  this.prop2 = value2;
  this.prop3 = value3;
}
const myObject3 = new makeObj(1, 6, 8);
//access object with dot notation
console.log(`access with dot notation: ${myObject1.prop1}`);
//access object with bracket
console.log(`access object with bracket: ${myObject1["prop2"]}`);
//loop through object
for (let i in myObject2)
{console.log(myObject2[i]);}
// vì object 2 là object tự tạo, nên không iterable, do đó ta không thể dùng let...of
/*
for (let i of myObject2)
{console.log(i);}
*/


/////////////////////////////////////////
//call, apply, bind
//make function to test
function print_congrat (result1, result2)
{
  console.log(`welcome user ${this.name} has achieved ${result1} and ${result2} in math and programming`);
}
//make object to test
const user1 = {
  name : "MrRed"
}
const user2 = {
  name : "MissGreen"
}

console.log(`test call, apply, bind`);
//use call
print_congrat.call(user1, 10, 9);
//use apply (apply use array to call other parameters for function)
print_congrat.apply(user1,[10,10]); 
// use bind (cannot change)
print_congrat.bind(user2); //wrong
print_congrat(7,9);

///////////////////////////////////////////////
//prototype
//check __proto__
console.log(`test prototype`);
console.log(Object.getPrototypeOf(myObject3));
//set prototype for objects
//Dùng myObject2 làm prototype để tạo object khác với Object.create
const myObject4 = Object.create(myObject2);
//Thêm properties mới cho myObject4, đồng thời test method inherited từ myObject2
myObject4.prop4 = "welcome";
for(let i in myObject4)
{
  console.log(myObject4[i]);
}
//Gán trực tiếp một object thành prototype của một object đang có với Object.assign (đang lỗi, chưa biết vì sao)
/*
const myObject5 = {
  prop6 : "lalala"
}
Object.setPrototypeOf(myObject4.prototype, myObject5.prototype);
for(let i in myObject5)
{
  console.log(myObject5[i]);
}
*/

///////////////////////////////////////////
//ternary operator
function greater(a,b) {return a > b ? console.log(`${a} > ${b}`) : console.log(`${a} < ${b}`);}
console.log(`test ternary operator`);
greater(4,5);


///////////////////////////////////////////
//recursive function
function simple_array(n) {
  if (n < 1)
  {
    return [];
  }
  else 
  {
    const result_array = simple_array(n-1);
    result_array.unshift(n);
    return result_array; 
  }
}
//print result
console.log(`test recursive function`);
const result = simple_array(9);
for(let i in result)
{console.log(result[i]);}


////////////////////////////////////////////
//test object.freeze()
console.log(`test Object.freeze`);
Object.freeze(myObject1);
myObject1.prop1 = 6;
console.log(myObject1.prop1);


////////////////////////////////////////////
//test Arrow function
console.log(`test arrow functions`);

let begin = function(a,b) {return a+b;}
console.log(begin(4,5));

let begin2 = (a,b) => a+b;
console.log(begin2(4,7));

let begin3 = a => a*5;
console.log(begin3(6));

let begin4 = (a = 6) => a*6;
console.log(begin4());
console.log(begin4(5));


///////////////////////////////////////////
//spread operator
//make function to sum all argument
console.log(`test spread operator`);
const sum_arg = (...pars) => {
  let result = 0;
  for(let i in pars)
  {
    result += pars[i];
  }
  return result;
}
console.log(sum_arg(4,6,10));
//make array from array
const array1 = [4, 5, 6];
const array2 = [1,2,3,...array1];
console.log(array2);


/////////////////////////////////////////
//destructuring assignment





////////////////////////////////////////
//date and time
console.log(`test date and time`);
let today = new Date();
console.log(`now is ${today.getFullYear()}`);
let myBirthday = new Date("September 10 1989");
console.log(`i was born on ${myBirthday.getFullYear()}`);
let myAge = today.getFullYear() - myBirthday.getFullYear(); 
console.log(`so now i'm ${myAge}`);

////////////////////////////////////////
//test class
//class basic
class Human {
  constructor(race, height, skin, strength)
  {
    this.race = race;
    this.height = height;
    this.skin = skin;
    this.strength = strength;
  }
  notify() {
console.log(`${this.race} are ${this.height}, ${this.skin}, and ${this.strength}!`);
  }
}
const asian = new Human("asian","short", "yellow", "weak");
console.log(asian);
asian.notify();
const european = new Human("european", "tall", "white", "medium");
console.log(european);
european.notify();
const african = new Human("african", "tall", "black", "strong");
console.log(african);
african.notify();

//extend class
// tạo class SuperHuman from class Human
class SuperHero extends Human {
  constructor(race, height, skin, strength, super_power)
  {
    super(race, height, skin, strength);
    this.super_power = super_power;
  }
  notify() {
    super.notify();
  }
  proud(){
console.log(`I'm a ${this.race} Super Hero. My super power is ${this.super_power}`);
  }
}
const Shangchi = new SuperHero("asian", "short", "yellow", "weak", "Hyper Focus");
Shangchi.notify();
Shangchi.proud();
const Spiderman = new SuperHero("American", "tall", "white", "medium", "Speed");
Spiderman.notify();
Spiderman.proud();

///////////////////////////////////////////
//test Map
console.log(`test Map`)
//tạo Map cơ bản cách 1: từ 1 array dữ liệu dạng key value
const books = new Map([["fiction", 500],["non-fiction", 1000], ["self-help", 400]]);
console.log(books);
//tạo Map cơ bản cách 2: tạo Map rỗng sau đó dùng set method để thêm data
const fruits = new Map();
fruits.set("apples", 500);
fruits.set("bananas", 100);
fruits.set("mango", 1000);
console.log(fruits);
//tạo Map cơ bản cách 3: từ 1 object sẵn có, dùng Object.entries để lấy dữ liệu dạng key value và từ đó tạo Map
const myMap = new Map(Object.entries(myObject2));
console.log(myMap);

//Thay vì dùng string làm key thì map có thể dùng bất cứ dữ liệu gì làm key: Ví dụ dùng myObject2 làm key:
fruits.set(myObject2, 2000);
console.log(fruits);
//loop qua map
//Khác với object, map là iterable, nên ta có thể loop for với nó. Lưu ý: Không phải dạng number indexed nên không dùng được for...in
console.log(`test loop with Map`);
for(let i of fruits)
{console.log(i);}
// method keys sẽ trả về một iterable các key của Map, nên có thể loop qua các key này:
for(let i of fruits.keys())
{console.log(i);}
// method values sẽ trả về một iterable values của Map, nên có thể loop qua các value này: 
for(let i of fruits.values())
{console.log(i);}

//xoá phần tử nào đó trong Map với method delete
fruits.delete("apples");
console.log(fruits);
//xoá tất cả phần tử trong Map với method clear:
fruits.clear();
console.log(fruits);
// một số method khác của Map:
console.log(books.size); // kiểm tra kích thước với property size
console.log(books.has("fiction")); //kiểm tra xem key nào đó có tồn tại hay không


////////////////////////////////////////////
//test set
console.log(`test set`);
//tạo set cách 1: tạo và khởi tạo set
const mySet1 = new Set(["VietNam", "Thailand", "Singapore"]);
console.log(mySet1);
//tạo set cách 2: tạo set rỗng sau đó thêm phần tử với add
const mySet2 = new Set();
mySet2.add("Indo");
mySet2.add("Malay");
mySet2.add("Myanmar");
mySet2.add("Laos")
console.log(mySet2);
//loop over set (không dùng được for ...in)
for(let i of mySet2)
{console.log(i);}
// truy cập phần tử xác định trong set
//Cách 1: dùng destructuring assignment
const [first,,third] = mySet2;
console.log(first);
console.log(third);
//Cách 2: Dùng spread syntax gán vào array, sau đó truy cập từ array
// tạo array abc với data được lấy từ set thông qua spread
const abc = [...mySet2];
console.log(`First element of mySet2: ${abc[0]}`);
//Cách 3: Vì method .values() của set giả về là một iterator, nên ta có thể dùng method next() để lấy dần giá trị ra:
const ite = mySet2.values();
console.log(ite.next());

//////////////////////////////////////////////
//test symbol
//Tạo symbol rồi dùng nó làm key cho property của object:
const mySymbol1 = Symbol();
myObject2[mySymbol1] = "Mongo";
console.log(myObject2);

/////////////////////////////////////////////
//test javascript error
console.log(`test javascript error`);
try {
if(Shangchi.super_power != "speed")
{
  throw "wrong type of super hero!"
}
}
catch(error)
{
console.log(`this is ${error}`);
}

////////////////////////////////////
//test iterable
console.log(`test iterables`);
//lặp qua iterables được tạo sẵn
// ví dụ ở đây là array
// cách 1: Dùng for...of như thường
const myArray1 =[4, 5, 6];
for(let i of myArray1)
{
  console.log(i);
}
//cách 2: Vì Symbol.iterator() của iterable sẽ trả về một iterator, nên ta có thể gọi method này rồi loop qua iterator
const iterator1 = myArray1[Symbol.iterator]();
for(let i of iterator1)
{
  console.log(i);
}
//tạo một hàm có tác dụng tương tự như Symbol.iterator() để hiểu cách hoạt động.
// làm như vậy được thì mới tạo iterable thủ công được.
//tạo 1 array để test
const myArray2 = ["cat","dog","bird"];
// tạo function tác dụng tương đương như Symbol.iterator()
//hàm giả về một iterator có phương thức next()
// tuỳ theo n mà next() lại trả về value và done tương ứng.
function manual_iterator(arr)
{
let n = 0;
return {
next(){ if(n < arr.length)
  {
return {
  value: arr[n++],//giả về rồi mới tăng n
  done: false

}
  }
  return {
    value: undefined,
    done: true
  }
}
}
}
//Gán hàm
const manualIterator = manual_iterator(myArray2);
console.log(manualIterator.next());
//như vậy, muốn làm cho object bất kỳ trở thành iterable thì ta sẽ tạo Symbol.operator thủ công cho nó:
// tạo object để test
const myObject6 = {
  texas : 100,
  florida : 200,
  newyork : 300
}
// bây giờ ta sẽ sửa để myObject6 có thể iterate (sửa thành myObject7 cho dễ so sánh).
const myObject7 = {
  [Symbol.iterator]() {
    let n = 0;
    const iterator = {
      next() {
      n++;
      if(n==1){
        return{value : 100, done : false};
      }
      else if(n==2){
        return {value: 200, done: false};
      }
      else if(n==3){
        return {value: 300, done: false};
      }
      return {value: undefined, done: true};
      }  
    }
    return iterator;
  }
};

for(let i of myObject7)
{
  console.log(i);
}

///////////////////////////////////
//test generator
console.log(`test generator`);
//tạo generator và gán cho biến
function* generatorfunc1() // định nghĩa generator
{
  yield console.log(1)
  yield console.log(2)
  yield console.log(3)
  return console.log('the end')
}
const gen1 = generatorfunc1(); // invoke và gán cho biến gen1
function* generatorfunc2() // định nghĩa generator
{
  console.log(`welcome!`);
  yield console.log(`888`);
  console.log(yield `abc`)
  return `the_end_2`
}
const gen2 = generatorfunc2(); // invoke và gán cho biến gen2
//dùng phương thức next() lướt qua generator
gen1.next(); // 1 false
gen1.next(); // 2 false
gen1.next(); // 3 false
gen1.next(); // the end true

gen2.next(); // welcome! 888 false
gen2.next(); // abc (not show on screen) false
gen2.next('xyz'); // xyz the_end_2(not show on screen) true

// iterate over generator object (vì nó là iterable)
function*generatorfunc3()
{
  yield `abc`
  yield `def`
}
const gen3 = generatorfunc3();
for (let i of gen3)
{
  console.log(i);
}
// dùng spread operator để lấy dữ liệu
function*generatorfunc4()
{
  yield `ghi`
  yield `jkl`
}
const gen4 = generatorfunc4();
const gen5 = [...gen4];
console.log(gen5);
// yield delegation
function*generatorfunc5()
{
  yield `mno`
  yield `pqr`
}
function*generatorfunc6()
{
  yield `ghi`
  yield `jkl`
  yield* generatorfunc5()
}
const gen6 = generatorfunc6();
for(let i of gen6)
{
  console.log(i);
}
// tạo bộ đếm vô hạn với generator:
function* infi_counter()
{
  let i = 0;
  while(true)
  {
    yield i++;
  }
}

const counter_infi = infi_counter();
for( let i = 0; i < 20; i++) // dùng for... of sẽ gây lỗi vì đếm đến vô cùng; ở đây chỉ muốn test đếm ra vài lần.
{
  console.log(counter_infi.next());
}

/////////////////////////////////////
//test Promise
//thường ít khi ta tạo promise mà ta hay xử lý promise nhận được hơn.
//Cách 1: Viết theo kiểu promise chain, không xử lý reject
//Trường hợp URL đúng, hoặc không có lỗi thì không sao, nếu URL sai hoặc xảy ra error thì sẽ crash chương trình.
//lưu ý: Vế sau của promise là reject, ở đây ta lược đi thì coi như là không xử lý reject.
function getDataV1(URL) {
  let promise = fetch(URL);
  promise.then(response => response.text()).then(success => console.log(`getDataV1: AQI of ${success.data.city.name} is ${success.data.aqi}`));
}

// tạo URL để test
let URL_not_ok = "vnexpress.net";
let URL_ok= "http://api.waqi.info/feed/shanghai/?token=demo";
/*
// Dạng của dữ liệu aqicn dạng json, ta gán nó về một object và thử lấy dữ liệu ra: 
let aqidata = {
  status: "ok",
  data: {
     aqi: 70,
     time: {
        s: "2022-09-08 09:00:00"
     },
     city: {
        name: "Shanghai",
        url: "http://aqicn.org/city/shanghai/",
        geo: [
           "31.2047372",
           "121.4489017"
        ]
     },
     iaqi: {
        pm25: "..."
     }
  }
}
console.log(`aqi of ${aqidata.data.city.name} is ${aqidata.data.aqi}`);
*/

// Cách 2: Dùng promise chain, dùng .catch ở cuối để xử lý lỗi.
function getDataV2(URL) {
  let promise = fetch(URL); // tạo promise đầu tiên
  promise.then(success => 
    success.json()).then(success => console.log(`getDataV2: AQI of ${success.data.city.name} is ${success.data.aqi}`)).catch(`error happened`); 
}

// Cách 3: Tạo một hàm riêng để xử lý error khi fetch URL, như vậy báo lỗi chi tiết hơn.
//
function handleErrors(response) {
  if (!response.ok) {
      //throw Error(response.statusText);
      throw `URL error`;
  }
  return response.json();
}

function getDataV3(URL) {
  fetch(URL)
  .then(handleErrors)
  .then(function(aqi_data) {
      console.log(`getDataV3: AQI of ${aqi_data.data.city.name} is ${aqi_data.data.aqi}`);
  }).catch(
    /*
    function(error) {
      console.log(`error`);
      
  }
  */
 console.log('data error!')
  );
}

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for(let prop in canary)
{
  ownProps.push(prop);
}
console.log(ownProps);


function Dog(name) {
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
console.log(joinDogFraternity(fox));

