// TRY: 練習問題 １
const plus1 = function (x) {
  return x + 1
}
// 関数名:
// 引数:
// 返り値:

// TRY: 練習問題 ２
// f1: 1, 4, 7, 10, 13, 16, ...

const f1 = function (n) {
  return 3 * n + 1
}

console.log(f1(3))

// f2: 1, 10, 100, 1000, 10000, ...

const f2 = function (n) {
  return 10 ** n
}

console.log(f2(4))

// f3: 2, 14, 107, 1010, 10013, ...

const f3 = function (n) {
  return f1(n) + f2(n)
}

console.log(f3(2))

// TRY: 練習問題３
// ① ２つの引数を受け取り、それらをかけ合わせた値を返す関数 multiply を作成して正しく動くかテストしてください。

const multipy = function (x, y) {
  return x * y
}

console.log(multipy(6, 7))

// ② ２つの引数を受け取り、それらを足し合わせた結果を四捨五入した値を返す関数 plusRound を作成して正しく動くかテストしてください.

const plusround = function (x, y) {
  return Math.round(x + y)
}

console.log(plusround(2.3, 3.8))
