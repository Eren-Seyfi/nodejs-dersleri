// ornek1();

// function ornek1() {
//   console.log("örnek 1 çalıştı");
// }

// ornek1();

// ======================================================================

// const ornek2 = function () {
//   console.log("örnek 2 çalıştı");
// };
// ornek2();

// ======================================================================

// const ornek3 = () => {
//   console.log("örnek 3 çalıştı");
// };
// ornek3();

// ======================================================================

// const ornek4 = () => console.log("örnek 4 çalıştı");
// ornek4();
// ======================================================================

const [a, b] = (() => [1, 2, 3, 4, 5, 6])();
console.log(a); // 1
console.log(b); // 2
