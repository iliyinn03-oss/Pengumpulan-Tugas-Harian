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

// ============================
// LANGKAH 3: BIKIN KASIR SENDIRI
// ============================

const kasirNamaMenu = ["Kopi Susu", "Es Teh", "Roti Bakar", "Nasi Goreng", "Jus Jeruk"];
const kasirHargaMenu = [18000, 7500, 15000, 22000, 12000];
let kasirKeranjang = [];

// Buktikan push mengubah array aslinya dengan melihat isi sebelum dan sesudah.
console.log("Keranjang sebelum push:", kasirKeranjang);
kasirKeranjang.push("Kopi Susu", "Es Teh", "Roti Bakar", "Nasi Goreng");
console.log("Keranjang sesudah push:", kasirKeranjang);

// unshift menambahkan item prioritas di depan, pop membatalkan item terakhir,
// dan splice mengganti satu item pada indeks 2.
kasirKeranjang.unshift("Jus Jeruk");
kasirKeranjang.pop();
kasirKeranjang.splice(2, 1, "Nasi Goreng");

console.log("Ada Kopi Susu di keranjang:", kasirKeranjang.includes("Kopi Susu"));
const kasirPaketCepat = kasirKeranjang.slice(0, 3);
console.log("Paket cepat:", kasirPaketCepat);

// Pemanggilan sebelum deklarasi function declaration tetap bisa dijalankan.
console.log("Uji deklarasi function sebelum definisi:", kasirCariHarga("Kopi Susu"));

// Jika baris ini diaktifkan sebelum deklarasi kasirHitungSubtotal di bawah,
// hasilnya ReferenceError: Cannot access 'kasirHitungSubtotal' before initialization.
// console.log(kasirHitungSubtotal());

function kasirCariHarga(namaMenu) {
  const kasirIndeksMenu = kasirNamaMenu.indexOf(namaMenu);
  if (kasirIndeksMenu === -1) {
    return 0;
  }
  return kasirHargaMenu[kasirIndeksMenu];
}

const kasirHitungSubtotal = () => {
  let kasirSubtotal = 0;
  for (let kasirIndeksItem = 0; kasirIndeksItem < kasirKeranjang.length; kasirIndeksItem++) {
    kasirSubtotal += kasirCariHarga(kasirKeranjang[kasirIndeksItem]);
  }
  return kasirSubtotal;
};

const kasirHitungDiskon = (subtotal) => {
  if (subtotal >= 100000) {
    return subtotal * 0.15;
  } else if (subtotal >= 50000) {
    return subtotal * 0.10;
  } else if (subtotal >= 25000) {
    return subtotal * 0.05;
  } else {
    return 0;
  }
};

const kasirHitungPajak = (nilai, tarif = 0.11) => nilai * tarif;

function kasirCetakStruk(subtotal, diskon, pajak) {
  const kasirTotalAkhir = subtotal - diskon + pajak;
  console.log("\n===== STRUK WARUNG =====");
  for (let kasirIndeksItem = 0; kasirIndeksItem < kasirKeranjang.length; kasirIndeksItem++) {
    console.log(`${kasirIndeksItem + 1}. ${kasirKeranjang[kasirIndeksItem]}`);
  }
  console.log(`Subtotal: Rp${subtotal}`);
  console.log(`Diskon  : Rp${diskon}`);
  console.log(`Pajak   : Rp${pajak}`);
  console.log(`Total   : Rp${kasirTotalAkhir}`);
  console.log("========================");
}

// Skenario 1 memakai keranjang hasil push, unshift, pop, dan splice di atas.
let kasirSubtotal = kasirHitungSubtotal();
let kasirDiskon = kasirHitungDiskon(kasirSubtotal);
let kasirPajak = kasirHitungPajak(kasirSubtotal - kasirDiskon);
kasirCetakStruk(kasirSubtotal, kasirDiskon, kasirPajak);
// Skenario 1: ["Jus Jeruk", "Kopi Susu", "Nasi Goreng", "Roti Bakar"]
// Hasil: Subtotal 67000, Diskon 6700 (10%), Pajak 6633, Total 66933.

// Skenario 2 mengganti isi keranjang agar memperoleh tingkat diskon yang berbeda.
kasirKeranjang = [];
kasirKeranjang.push(
  "Nasi Goreng",
  "Nasi Goreng",
  "Nasi Goreng",
  "Kopi Susu",
  "Roti Bakar",
  "Jus Jeruk",
);
kasirSubtotal = kasirHitungSubtotal();
kasirDiskon = kasirHitungDiskon(kasirSubtotal);
kasirPajak = kasirHitungPajak(kasirSubtotal - kasirDiskon);
kasirCetakStruk(kasirSubtotal, kasirDiskon, kasirPajak);
// Skenario 2: ["Nasi Goreng", "Nasi Goreng", "Nasi Goreng", "Kopi Susu", "Roti Bakar", "Jus Jeruk"]
// Hasil: Subtotal 111000, Diskon 16650 (15%), Pajak 10378.5, Total 104728.5.

// splice mengganti item di keranjang (kasirKeranjang.splice(2, 1, "Nasi Goreng"))
// dan mengubah array aslinya; slice(0, 3) mengambil tiga item ke array baru.
// kasirCariHarga memakai return supaya pemanggil mendapat angka; jika hanya mencetak,
// kasirHitungSubtotal akan menambahkan undefined dan subtotal tidak terhitung dengan benar.
// Contoh parameter adalah namaMenu pada kasirCariHarga; argumennya "Kopi Susu"
// saat function dipanggil. Parameter adalah nama penampung, sedangkan argumen adalah nilai kiriman.
// kasirHitungPajak menerima satu argumen karena tarif default-nya 0.11; argumen kedua
// dapat diberikan untuk memakai tarif pajak yang berbeda.
// Function declaration kasirCariHarga dapat dipanggil sebelum definisinya karena hoisting.
// KasirHitungSubtotal berupa const function expression belum tersedia sebelum baris deklarasinya;
// percobaan yang dikomentari akan menghasilkan ReferenceError seperti tertulis di atas.

// BONUS: batalkan item jika ditemukan dan laporkan apakah penghapusan berhasil.
function kasirBatalkanItem(namaMenu) {
  const kasirIndeksItem = kasirKeranjang.indexOf(namaMenu);
  if (kasirIndeksItem === -1) {
    return false;
  }
  kasirKeranjang.splice(kasirIndeksItem, 1);
  return true;
}

// Hasil bonus: kasirBatalkanItem("Nasi Goreng") menghasilkan true;
// kasirBatalkanItem("Bakso") menghasilkan false.
console.log("Bonus, batalkan Nasi Goreng:", kasirBatalkanItem("Nasi Goreng"));
console.log("Bonus, batalkan Bakso:", kasirBatalkanItem("Bakso"));
