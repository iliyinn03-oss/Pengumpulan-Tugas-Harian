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