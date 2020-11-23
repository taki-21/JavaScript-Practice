// console.log('test');

/*
abcde
*/

// 変数

//昔
// var test = 123;
// var test = "テスト"
// console.log(test);

//今
// 変数自体を上書きすることができない　（NG）
// 変数の中身は上書きすることができる　（OK）
// let test = 123;
// test += 123
// console.log(test);

// const test1 = 1234;

//Javascriptは動的型付け言語　→　変数の型を自動的に判定してくれる
// 静的型付け言語は自分で変数の型を指定する必要がある　ex) Java Go

// const x = 123;
// const text = "あいうえお";
// // 定数は大文字で定義されこともある
// console.log(typeof x);
// console.log(typeof text);
// console.log(test1);

// const array = [1, 2, 3, 4]
// console.log(array[2])

// const baseball = [
//   ["中日", "巨人"],
//   ["日ハム", "西武", "ロッテ"]
// ]
// console.log(baseball[1][1])

// // オブジェクト
// const member = {
//   // キー: バリュー
//   "name": "本田",
//   "height": 170,
//   "hobby": "サッカー"
// }
// console.log(member.name)

// const member_2 = {
//   "special1": {
//     "honda": {
//       "name": "本田",
//       "height": 170,
//       "hobby": "サッカー"
//     },
//     "kagawa": {
//       "name": "本田",
//       "height": 170,
//       "hobby": "サッカー"
//     }
//   },
//   "special2": {
//     "honda": {
//       "name": "本田",
//       "height": 170,
//       "hobby": "サッカー"
//     },
//     "kagawa": {
//       "name": "本田",
//       "height": 170,
//       "hobby": "サッカー"
//     }

//   }
// }
// console.log(member_2)

/* プログラミングの基本は
 1. 順次進行
 2. 条件分岐
 3. 繰り返し
*/

// 条件分岐
// const height = 20000

// if (height === 90) {
//   console.log("身長は90cmです")
// } else if (height > 100) {
//   console.log("身長が100cm以上あります")
// }
// else {
//   console.log("身長は90cmではありません")
// }

// == :　一致
// ===: 型も一致

// 三項演算子
// 条件 ? 真 : 偽
// const score = 100
// const comment = score > 80 ? "good" : "bad"

// console.log(comment)

// 繰り返し
// for
// for of(ES6から)一番使いやすい


// const scores = [10, 20, 30]

// for ( score of scores){
//   console.log(score)
// }
// // for (初期値; 繰り返す条件;増減　++ --)
// for (let i = 0; i <= 10; i++){
//   console.log(i)
// }

//switch
// if こっちの方が使いやすい

// const data = 2;

// switch (data) {
//   case 1:
//     console.log('1です');
//     break;
//   case 2:
//     console.log('2です');
//     break;
//   case 3:
//     console.log('3です');
//     break;
// }

// 関数
/*
  1. 組み込み関数：　すでに準備されている関数
  2. ユーザー定義関数：　自分で自由に作れる関数
*/
// function test() {
//   console.log('Hello World');
// }
// test();

// function getComment(string) {
//   console.log(string);
// }

// getComment('Hello')

// function getNumberOfComment() {
//   return 5;
// }

// console.log(getNumberOfComment());

// function sumPrice(int1, int2) {
//   let int3 = int1 + int2;
//   return int3
// }

// const total = sumPrice(4, 2)
// console.log(total)

// const test = 'テスト'
// const test_2 = 'です'
// console.log(test.concat(test_2))

// const text = 'あいうえお';
// console.log(text.replace('あい', 'かき'))


// const myMap = new Map;

// myMap.set('id', 3)
// myMap.set('name', '本田')

// console.log(myMap)

// name = myMap.get('name')
// console.log(name)
// const valueList = myMap.values();
// console.log(valueList)

// for (value of valueList) {
//   console.log(value)
// }

// const fruits = new Array();
// const fruits = [
//   'apple', 'banana'
// ];

// console.log(fruits)

// fruits.push('orange')
// console.log(fruits)

// // callback: 引数に関数をとる
// // forEachメソッドは与えられた関数を、配列の各要素に対して一度ずつ実行する。
// fruits.forEach(function (input) {
//   console.log(input)
// });

// function getItem() {



//コールバック関数は名前がない関数（無名関数、匿名関数）

// ES6 アロー関数

// // 関数の名前あり
// const getItem = () => {
//   console.log('アロー')
// }
// getItem()

// //　名前なし
// fruits.forEach(input => console.log(input));

// //Array.filter
// const score = [10, 20, 30, 40, 50, 60];
// const newScore = score.filter(value => value >= 30)
// console.log(newScore);

// // Array.find
// const members = ['本田', '香川', '長友']
// const member = members.find(member => member === '長友')
// console.log(member)

// // Array.map 配列を元に新しい配列を作る
// const userList = [19, 23, 234, 3];
// const userIdList = userList.map(user => `user_${user}`)
// console.table(userIdList)

// const postalCode = '123-4567';

// // JavaScriptはcamelCase
// // HTML/CSSは大文字小文字を区別しない
// // 英語 動詞 + 名刺
// function checkPostalCode(string) {
//   const replaced = string.replace('-', '');
//   const length = replaced.length;
//   if (length === 7) {
//     return true
//   }
//   return false;
// }

// console.log(checkPostalCode(postalCode))

// Javascriptはすべてオブジェクトで扱う

//-------------------------------------------------

// const test = document.getElementById('test')
// // el.classList.add()
// test.classList.add('red')
// const testList = document.querySelector('.test_list')
// testList.classList.remove('blue')
// console.log(test)
// console.log(testList)

// const input = document.getElementById('test');
// input.type = 'text';
// input.placeholder = 'あああ';
// input.name = 'test';
// input.textContent = 'テストです'
// input.setAttribute('type', "text")
const target = document.getElementById('target')
const newDiv = document.createElement('div')
newDiv.id = 'hello';
newDiv.classList.add('red');
newDiv.textContent = 'テスト';
target.appendChild(newDiv)
// console.log(input)

// const anchor = document.createElement('a');
// anchor.href = 'http://google.com';
// anchor.target = '_blank'
// console.log(anchor)

// const target = document.getElementById();
