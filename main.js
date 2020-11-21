console.log('test');

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
