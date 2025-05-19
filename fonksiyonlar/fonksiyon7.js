function* sayac() {
  yield "eren";
  yield "fatih";
  yield "ali";
  yield "ahmet";
}

const g = sayac();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
