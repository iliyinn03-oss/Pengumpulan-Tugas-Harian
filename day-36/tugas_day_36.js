// ============================================================
// Tugas Day 36: Kasir Warung dengan Scope, Hoisting, dan Closure
// ============================================================

// ---------------------------
// Langkah 1: Tebak dulu, baru cek
// ---------------------------

// Potongan A
// Tebakan: "Dalam", "Luar", "Global", 85, "di dalam blok", "putaran 0", "putaran 1"
// Hasil asli: "Dalam", "Luar", "Global", 85, "di dalam blok", "putaran 0", "putaran 1"
const nama = "Global";

function luar() {
  const nama = "Luar";

  function dalam() {
    const nama = "Dalam";
    console.log(nama);
  }

  dalam();
  console.log(nama);
}

luar();
console.log(nama);

const diskonGlobal = 10;

function hitung(harga) {
  const diskonLokal = 5;
  return harga - diskonGlobal - diskonLokal;
}

console.log(hitung(100));

if (true) {
  let pesanBlok = "di dalam blok";
  console.log(pesanBlok);
}

for (let i = 0; i < 2; i++) {
  console.log("putaran", i);
}

// Percobaan error yang dicoba lalu dijadikan komentar:
// console.log(pesanBlok); // ReferenceError: pesanBlok is not defined
// console.log(i); // ReferenceError: i is not defined

// Penjelasan Potongan A:
// Ada tiga console.log(nama) yang beda karena JavaScript mencari variabel dari scope paling dekat ke paling luar. `diskonGlobal` bisa dipakai di `hitung()` karena closure menciptakan akses ke lingkungan luar, jadi fungsi masih ingat variabel global walau dideklarasi di luar fungsi. `pesanBlok` dan `i` error di luar blok karena `let` punya scope blok, jadi variabel itu hanya hidup di dalam blok dan tidak tersedia di luar.

// Potongan B
// Tebakan: "Halo!", undefined, lalu ReferenceError untuk lokasi dan salam
// Hasil asli: "Halo!", undefined, lalu ReferenceError: Cannot access 'lokasi' before initialization dan ReferenceError: Cannot access 'salam' before initialization
console.log(sapa());

function sapa() {
  return "Halo!";
}

console.log(warna);
var warna = "biru";
console.log(warna);

// Percobaan error:
// console.log(lokasi); // ReferenceError: Cannot access 'lokasi' before initialization
// const lokasi = "Sleman";

// console.log(salam()); // ReferenceError: Cannot access 'salam' before initialization
// const salam = function () {
//   return "Hai";
// };

// Penjelasan Potongan B:
// `sapa()` bisa dipanggil sebelum definisi karena function declaration di-hoist ke atas, sedangkan `var` di-hoist dengan nilai awal `undefined`. `const` tidak di-hoist secara siap pakai, jadi saat dipanggil sebelum inisialisasi terjadi temporal dead zone dan muncul error.

// Potongan C
// Tebakan: 1, 2, 3, 1, 4
// Hasil asli: 1, 2, 3, 1, 4
function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    return hitungan;
  };
}

const penghitungA = buatPenghitung();
const penghitungB = buatPenghitung();

console.log(penghitungA());
console.log(penghitungA());
console.log(penghitungA());
console.log(penghitungB());
console.log(penghitungA());

// Pertanyaan Potongan C:
// `penghitungA` terus bertambah karena closure menjaga variabel `hitungan` di lingkungan lexical fungsi `buatPenghitung`. Setiap kali `penghitungA` dipanggil, ia memakai variabel yang sama dari closure itu. `penghitungB` mulai dari 1 lagi karena fungsi `buatPenghitung()` dipanggil lagi dan membuat closure baru dengan variabel `hitungan` yang baru.


// -----------------------------------------------------
// Langkah 2: Perbaiki 8 Kesalahan
// -----------------------------------------------------

// FIX: variabel `pesanStok` dibuat di luar blok agar bisa dibaca saat console.log.
let pesanStok = "";
const stok = 10;
if (stok > 5) {
  pesanStok = "Stok aman";
}
console.log(pesanStok);

// FIX: hasil dari fungsi dipanggil dan dicetak agar variabel lokal `potongan` tidak ikut dipakai di luar fungsi.
function hitungPotongan(harga) {
  const potongan = harga * 0.1;
  return harga - potongan;
}
const hasilPotongan = hitungPotongan(50000);
console.log(hasilPotongan);

// FIX: function expression didefinisikan sebelum dipanggil, agar tidak terjadi TDZ.
const sambutan = function () {
  return "Selamat datang di Kedai Senja";
};
console.log(sambutan());

// FIX: `kota` dideklarasi sebelum dipanggil agar nilai tersedia dan tidak error.
let kota = "Yogyakarta";
console.log(kota);

// FIX: `total` diubah dengan `let` agar blok tidak mengganti variabel di luar scope.
let total = 100000;
if (true) {
  const totalBlok = 90000;
  console.log(totalBlok);
}
console.log(total);

// FIX: `saldoKas` di luar fungsi tidak di-shadowing dengan `let` di dalam fungsi, supaya saldo global berubah.
let saldoKas = 100000;
function tambahKas(jumlah) {
  saldoKas += jumlah;
}
tambahKas(50000);
console.log(saldoKas);

// FIX: `nomor` dibuat di luar fungsi yang dikembalikan agar nilai bertambah dari satu pemanggilan ke pemanggilan berikutnya.
function buatAntrean() {
  let nomor = 0;
  return function () {
    nomor++;
    return nomor;
  };
}
const ambilNomor = buatAntrean();
console.log(ambilNomor(), ambilNomor(), ambilNomor());

// FIX: `cekSaldo` mengembalikan variabel closure `saldo`, bukan `this.saldo` yang tidak ada.
function buatDompet(saldoAwal) {
  let saldo = saldoAwal;
  return {
    belanja(jumlah) {
      saldo -= jumlah;
    },
    cekSaldo() {
      return saldo;
    },
  };
}
const dompet = buatDompet(100000);
dompet.belanja(30000);
console.log(dompet.cekSaldo());

// Pertanyaan Langkah 2:
// 1. Kesalahan 1: `pesanStok` dibuat di dalam blok, jadi tidak bisa dibaca di luar; solusinya deklarasikan di luar blok. 2. Kesalahan 2: hasil fungsi tidak dipakai dan variabel lokal `potongan` tidak bisa diakses luar fungsi; solusinya simpan hasil fungsi lalu cetak. 3. Kesalahan 3: fungsi expression dipanggil sebelum didefinisikan; solusinya deklarasikan `const sambutan` sebelum `console.log`. 4. Kesalahan 4: `kota` dipanggil sebelum dideklarasi; solusinya deklarasikan variabel dahulu. 5. Kesalahan 5: `var total` di dalam blok mengganti nilai variabel luar; solusinya gunakan scope blok yang terpisah. 6. Kesalahan 6: `let saldoKas = 0` di dalam fungsi menutupi saldo luar; solusinya gunakan saldo luar atau kembalikan nilai. 7. Kesalahan 7: `nomor` dibuat ulang setiap pemanggilan fungsi; solusinya deklarasikan di luar fungsi closure. 8. Kesalahan 8: `this.saldo` tidak ada di object; solusinya gunakan closure `saldo`.
// Kesalahan yang menyebabkan error: `pesanStok`, `sambutan`, `kota`, dan `lokasi`/`salam` kalau diubah jadi kode asli. Kesalahan yang tidak error tetapi hasil salah: `potongan`, `total`, `saldoKas`, `nomor`, `this.saldo` karena semua itu tidak error, tetapi menghasilkan output yang salah.
// `let saldoKas = 0` di dalam `tambahKas` membuat saldo di luar tidak berubah karena variabel itu adalah variabel baru yang hanya ada di scope fungsi. Istilahnya adalah shadowing atau lexical scoping.
// `this.saldo` di dalam `cekSaldo` menghasilkan `undefined` karena `this` merujuk ke object yang dipanggil, tetapi property `saldo` tidak pernah dibuat sebagai properti object; `saldo` hanya ada di closure di fungsi `buatDompet`, bukan di `this`.

// ---------------------------
// Langkah 3: Bikin Kasir Sendiri
// ---------------------------

const NAMA_WARUNG = "kedai senja";
const TARIF_PAJAK = 0.11;

cetakJudul();

function cetakJudul() {
  console.log(NAMA_WARUNG.toUpperCase());
}

function buatKasir(namaKasir, modalAwal) {
  let saldoKas = modalAwal;
  let jumlahTransaksi = 0;
  const riwayat = [];

  return {
    catatPenjualan(namaMenu, harga, jumlah) {
      const subtotal = harga * jumlah;
      const pajak = subtotal * TARIF_PAJAK;
      const total = subtotal + pajak;

      saldoKas += total;
      jumlahTransaksi += 1;
      riwayat.push({ namaMenu, jumlah, total });
      return total;
    },
    ambilKas(jumlah) {
      if (jumlah > saldoKas) {
        return false;
      }

      saldoKas -= jumlah;
      return true;
    },
    cekSaldo() {
      return saldoKas;
    },
    lihatRiwayat() {
      return riwayat.slice();
    },
    ringkasan() {
      console.log(`${namaKasir} | Transaksi: ${jumlahTransaksi} | Saldo: ${saldoKas}`);
    },
  };
}

const kasirPagi = buatKasir("Rina", 100000);
const kasirMalam = buatKasir("Dodi", 50000);

kasirPagi.catatPenjualan("Nasi Goreng", 20000, 2);
kasirPagi.catatPenjualan("Es Teh", 5000, 3);
kasirPagi.catatPenjualan("Kopi", 12000, 2);

kasirMalam.catatPenjualan("Mie Ayam", 18000, 2);
kasirMalam.catatPenjualan("Bakso", 25000, 1);

console.log(kasirPagi.ambilKas(20000));
console.log(kasirPagi.ambilKas(999999));

kasirPagi.ringkasan();
kasirMalam.ringkasan();

// Buktikan data privat: `kasirPagi.saldoKas` tidak muncul karena `saldoKas` ada di closure dan bukan property object.
console.log(kasirPagi.saldoKas);
kasirPagi.saldoKas = 999999;
console.log(kasirPagi.cekSaldo());

// Buktikan salinan: `lihatRiwayat()` mengembalikan salinan array agar push pada salinan tidak memengaruhi riwayat asli.
const riwayatPagi = kasirPagi.lihatRiwayat();
riwayatPagi.push({ namaMenu: "Bonus", jumlah: 1, total: 0 });
console.log(kasirPagi.lihatRiwayat().length);

function buatPenghitungDiskon(persen) {
  return (harga) => harga * (1 - persen / 100);
}

const diskon10 = buatPenghitungDiskon(10);
const diskon25 = buatPenghitungDiskon(25);
console.log(diskon10(80000));
console.log(diskon25(80000));

// Shadowing: variabel global dan variabel lokal dalam fungsi sama nama, tetapi kedua scope berbeda.
let namaToko = "Warung Utama";
function contohShadowing() {
  let namaToko = "Warung Dalam";
  console.log("Dalam function:", namaToko);
}
console.log("Global:", namaToko);
contohShadowing();

// Pertanyaan Langkah 3:
// 1. `kasirPagi.saldoKas` menghasilkan `undefined` karena `saldoKas` bukan property object; itu adalah variabel privat di closure yang hanya bisa diakses melalui method, misalnya `cekSaldo()`. Hubungannya dengan closure adalah fungsi method menutup variabel `saldoKas` dari lingkungan `buatKasir` dan menggunakannya meskipun `buatKasir` sudah selesai berjalan.
// 2. `kasirPagi` dan `kasirMalam` terpisah karena setiap pemanggilan `buatKasir()` membuat environment baru dengan variabel `saldoKas`, `jumlahTransaksi`, dan `riwayat` yang berbeda. Jadi closure tiap kasir menyimpan data sendiri-sendiri.
// 3. Setelah `buatKasir` selesai dijalankan, variabel yang masih diingat adalah `saldoKas`, `jumlahTransaksi`, dan `riwayat` karena method-object yang dikembalikan masih menutup (closure) lingkungan lexical itu. Karena masih ada referensi dari method ke lingkungan tersebut, variabel itu tidak hilang.
// 4. `TARIF_PAJAK` bisa dipakai di dalam method karena JavaScript mencari variabel dari scope luar ketika fungsi dibuat. Mekanismenya disebut lexical scoping atau closure.
// 5. `cetakJudul()` bisa dipanggil sebelum didefinisikan karena function declaration di-hoist ke awal. Jika dibuat dengan `const` dan dipanggil sebelum inisialisasi, akan muncul `ReferenceError` karena temporal dead zone. Contoh: `const cetakJudul = () => ...;` lalu `cetakJudul();` sebelum deklarasi -> error.
// 6. `persen` tidak dikirim lagi saat `diskon10(80000)` dipanggil karena `diskon10` sudah menutup nilai `persen` dari saat `buatPenghitungDiskon(10)` dipanggil. Inilah fungsi closure: ia "mengingat" nilai dari lingkungan luar.

// Bonus: Tebak hasil perulangan `let` dan `var`
// Tebakan: for let => 0 1 2; for var => 3 3 3
const fungsiLet = [];
for (let i = 0; i < 3; i++) {
  fungsiLet.push(() => i);
}
console.log(fungsiLet[0](), fungsiLet[1](), fungsiLet[2]());

const fungsiVar = [];
for (var j = 0; j < 3; j++) {
  fungsiVar.push(() => j);
}
console.log(fungsiVar[0](), fungsiVar[1](), fungsiVar[2]());

// Penjelasan bonus:
// `let` membuat binding baru di setiap iterasi, jadi tiap fungsi menangkap nilai `i` yang berbeda. `var` hanya punya satu binding untuk seluruh loop, sehingga semua fungsi menangkap nilai akhir yang sama, yaitu 3, saat fungsi dipanggil setelah loop selesai.

