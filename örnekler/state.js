// useState fonksiyonu, React'teki useState'in basitleştirilmiş bir versiyonudur.
// Bir değer tutar ve bu değeri değiştirmek ve almak için iki fonksiyon döndürür.
function useState(initialValue) {
  // _val adında bir değişken tanımlıyoruz ve başlangıç değeri olarak initialValue'yu atıyoruz.
  // Bu değişken, state'in kendisidir.
  let _val = initialValue;

  // Bu fonksiyon, mevcut state değerini döndürmek için kullanılır.
  const get = () => _val;

  // Bu fonksiyon, state'i güncellemek için kullanılır.
  // Aynı zamanda güncellenen değeri konsola yazdırır.
  const set = (newVal) => {
    _val = newVal; // _val değişkenine yeni değeri atar
    console.log("State updated:", _val); // Güncellenen değeri konsola basar
  };

  // Fonksiyon, iki elemanlı bir dizi döner:
  // 1. get: mevcut değeri almak için,
  // 2. set: yeni değer atamak için.
  return [get, set];
}

// Yukarıda tanımlanan useState fonksiyonunu çağırıyoruz.
// Başlangıç değeri olarak 0 veriyoruz.
const [getCount, setCount] = useState(0);

// getCount fonksiyonu çağrıldığında, mevcut state değeri olan 0 döner.
console.log(getCount()); // Ekrana 0 yazdırır

// setCount fonksiyonu çağrıldığında, state değeri 5 olarak güncellenir.
// Ayrıca konsola "State updated: 5" yazdırılır.
setCount(5); // State updated: 5

// getCount tekrar çağrıldığında artık yeni değeri (5) döndürür.
console.log(getCount()); // Ekrana 5 yazdırır
