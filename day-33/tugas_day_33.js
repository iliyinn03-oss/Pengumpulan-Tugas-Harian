// TUGAS DAY 33: KASIR WARUNG DENGAN OBJECT

// =========================
// LANGKAH 1: TEBAK DULU
// =========================

// Potongan A - tebakan sebelum dijalankan:
// produk.nama dan produk[kunci] menghasilkan "Kopi Susu".
// produk["harga"] menghasilkan 20000, produk.stok undefined.
// "kategori" in produk true, "stok" in produk false.
// Object.keys menghasilkan ["nama", "harga", "kategori"] dan Object.values
// menghasilkan ["Kopi Susu", 20000, "minuman"].
const produk = { nama: "Kopi Susu", harga: 18000, stok: 10 };

produk.harga = 20000;
produk.kategori = "minuman";
delete produk.stok;
let kunci = "nama";

console.log(produk.nama);
console.log(produk[kunci]);
console.log(produk["harga"]);
console.log(produk.stok);
console.log("kategori" in produk);
console.log("stok" in produk);
console.log(Object.keys(produk));
console.log(Object.values(produk));

// Hasil asli Potongan A sama dengan tebakan di atas. Dot notation memakai nama
// property langsung, sedangkan bracket notation bisa memakai nama property dari variabel.
// stok menjadi undefined karena property tersebut sudah dihapus dengan delete.

// Potongan B - tebakan sebelum dijalankan:
// belanja pertama mengembalikan dan mencetak 30000, lalu cekSaldo menampilkan Rina: Rp 30000.
// Belanja kedua mengubah saldo menjadi 20000; cekSaldo dan log terakhir menunjukkan saldo itu.
const dompet = {
  pemilik: "Rina",
  saldo: 50000,

  belanja(jumlah) {
    this.saldo -= jumlah;
    return this.saldo;
  },

  cekSaldo() {
    console.log(this.pemilik + ": Rp " + this.saldo);
  },
};

let sisa = dompet.belanja(20000);
console.log(sisa);
dompet.cekSaldo();
dompet.belanja(10000);
dompet.cekSaldo();
console.log(dompet.saldo);

// Hasil asli Potongan B sama dengan tebakan di atas. Belanja kedua tetap mengubah
// saldo di dalam object meski nilai return-nya tidak disimpan; this merujuk ke dompet.

// Potongan C - tebakan sebelum dijalankan:
// for...of array mencetak Senin, Selasa; for...in mencetak indeks 0, 1.
// for...in object mencetak "nama: Kopi" dan "harga: 18000".
// for...of string mencetak K, o, p, i satu per baris.
const hari = ["Senin", "Selasa"];

for (let nilai of hari) {
  console.log(nilai);
}

for (let indeks in hari) {
  console.log(indeks);
}

const kopi = { nama: "Kopi", harga: 18000 };

for (let kolom in kopi) {
  console.log(kolom + ": " + kopi[kolom]);
}

for (let huruf of "Kopi") {
  console.log(huruf);
}

// Hasil asli Potongan C sama dengan tebakan di atas.
// Tebakan percobaan for...of pada kopi: TypeError karena object biasa tidak iterable.
// Percobaan yang sudah dicoba lalu dinonaktifkan: TypeError: kopi is not iterable.
// for...in array memberi key/indeks, bukan isi; for...of membaca nilai iterable.
// Object biasa dapat disisir dengan for...in, tetapi tidak menyediakan iterator untuk for...of.
// for (let x of kopi) { console.log(x); }
