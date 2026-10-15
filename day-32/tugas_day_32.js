// TUGAS DAY 32: KASIR WARUNG DENGAN ARRAY DAN FUNCTION

// =========================
// LANGKAH 1: TEBAK DULU
// =========================

// Potongan A - tebakan sebelum dijalankan:
// terakhirDibuang: "Jus"
// pertamaDibuang: "Air"
// menu: ["Kopi", "Roti", "Susu"]
// irisan: ["Roti", "Susu"]
// indexOf("Susu"): 2
// indexOf("Nasi"): -1
// includes("Kopi"): true
// elemen terakhir: "Susu"
let menu = ["Kopi", "Teh", "Roti", "Susu"];

menu.push("Jus");
menu.unshift("Air");
let terakhirDibuang = menu.pop();
let pertamaDibuang = menu.shift();
menu.splice(1, 1);
let irisan = menu.slice(1, 3);

console.log(terakhirDibuang);
console.log(pertamaDibuang);
console.log(menu);
console.log(irisan);
console.log(menu.indexOf("Susu"));
console.log(menu.indexOf("Nasi"));
console.log(menu.includes("Kopi"));
console.log(menu[menu.length - 1]);

// Hasil asli Potongan A: "Jus", "Air", ["Kopi", "Roti", "Susu"],
// ["Roti", "Susu"], 2, -1, true, "Susu".
// menu dan irisan berbeda karena slice membuat array baru. push, unshift,
// pop, shift, dan splice mengubah array asal; slice tidak mengubahnya.

// Potongan B - tebakan sebelum dijalankan:
// cetakTambah menampilkan 5 ketika y diisi, lalu x menampilkan 5 dan y undefined.
function tambah(a, b) {
  return a + b;
}

function cetakTambah(a, b) {
  console.log(a + b);
}

let x = tambah(2, 3);
let y = cetakTambah(2, 3);
console.log(x);
console.log(y);

// Hasil asli Potongan B: 5, 5, undefined.
// tambah mengembalikan hasil dengan return, sedangkan cetakTambah hanya
// menampilkan hasil. Karena tidak mengembalikan nilai, pemanggilannya memberi undefined.

// Potongan C - tebakan sebelum dijalankan:
// diskon 20% menghasilkan 40000, diskon default 10% menghasilkan 45000.
// cekAngka(-5) menghasilkan "negatif"; teks di bawah return tidak tercetak.
// cekAngka(5) menghasilkan "bukan negatif".
const hitungDiskonPersen = (harga, persen = 10) => harga - (harga * persen) / 100;
console.log(hitungDiskonPersen(50000, 20));
console.log(hitungDiskonPersen(50000));

function cekAngka(n) {
  if (n < 0) {
    return "negatif";
    console.log("Baris ini muncul atau tidak?");
  }
  return "bukan negatif";
}

console.log(cekAngka(-5));
console.log(cekAngka(5));

// Hasil asli Potongan C: 40000, 45000, "negatif", "bukan negatif".
// Parameter persen memiliki nilai default 10 jika tidak dikirim sebagai argumen.
// Baris console.log setelah return tidak pernah tercapai karena return langsung mengakhiri function.

// Jika semua tebakan tepat, tebakan paling sulit adalah hasil undefined pada Potongan B,
// karena mencetak sesuatu di dalam function tidak sama dengan mengembalikannya.

// ============================
// LANGKAH 2: PERBAIKI 7 ERROR
// ============================

let daftarBelanja = ["Kopi", "Teh", "Roti"];

// FIX 1: push menambah "Susu" di akhir, bukan unshift di depan.
daftarBelanja.push("Susu");

// FIX 2: splice menghapus elemen dari array asli; slice hanya membuat irisan baru.
daftarBelanja.splice(1, 1);

// FIX 3: includes menghasilkan boolean untuk mengecek keberadaan "Roti".
let adaRoti = daftarBelanja.includes("Roti");

// FIX 4: indeks terakhir adalah panjang array dikurangi satu.
let terakhir = daftarBelanja[daftarBelanja.length - 1];

// FIX 5: return mengembalikan nilai hasil perhitungan diskon.
function hitungDiskon(harga, persen) {
  return harga - (harga * persen) / 100;
}

// FIX 6: return diperlukan agar hasil pajak dikembalikan oleh function.
const hitungPajak = (subtotal) => {
  return subtotal * 0.11;
};

// FIX 7: definisikan function expression sebelum dipanggil agar nilainya sudah tersedia.
const hitungTotal = (subtotal, pajak) => subtotal + pajak;

console.log(daftarBelanja, adaRoti, terakhir);
console.log(hitungDiskon(100000, 20));
console.log(hitungPajak(80000));
console.log(hitungTotal(80000, 8800));

// Hasil: ["Kopi", "Roti", "Susu"] true "Susu", 80000, 8800, 88800.
// Tujuh kesalahan dan perbaikannya: unshift diganti push; slice diganti splice;
// indexOf diganti includes; indeks length diganti length - 1; return ditambahkan
// ke hitungDiskon; return ditambahkan ke hitungPajak; hitungTotal didefinisikan
// sebelum dipanggil.
// Kesalahan urutan hitungTotal menimbulkan ReferenceError karena const belum siap.
// Kesalahan lain tidak langsung menimbulkan error, tetapi mengubah daftar atau hasil
// menjadi tidak sesuai, termasuk menghasilkan undefined akibat return yang hilang.
// Kedua function tidak mengembalikan ekspresi hitungannya: function biasa maupun
// arrow function dengan kurung kurawal perlu return yang ditulis secara eksplisit.

