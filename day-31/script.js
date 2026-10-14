for (let i = 20; i >= 1; i--) {
    console.log(i);
}
console.log("mulai1"); 
//Contoh menghasilkan output : 20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1, mulai!


//=============================================================================================


let total = 0;

for (let i = 1; i <= 100; i++) {
    total += i;
}

console.log ("Total:", total);  //Contoh menghasilkan output : 5050


//=============================================================================================

const buah = ["Apel", "Jeruk", "Mangga", "Anggur", "lemon", "pepaya", "semangka", "nanas", "kiwi", "pisang", "sirsak", "manggis", "salak", "jambu", "belimbing", "markisa", "rambutan", "durian", "cempedak", "kedondong", "duku"];

for (let i = 0; i < buah.length; i++) {
    console.log (i + 1 + ".", buah[i]);
}
//output : 
// 1. Apel, 
// 2. Jeruk,
// 3. Mangga, 
// 4. Anggur
// 5. lemon
// 6. pepaya
// 7. semangka
// 8. nanas  
// 9. kiwi
// 10. pisang
// 11. sirsak
// 12. manggis
// 13. salak
// 14. jambu
// 15. belimbing
// 16. markisa
// 17. rambutan
// 18. durian
// 19. cempedak
// 20. kedondong
// 21. duku   



//==============================================================================================

let angkaRahasia = 25;
let tebakan = 0;
let percobaan = 0;

while (tebakan !== angkaRahasia) {
  percobaan++;
  tebakan = Math.floor(Math.random() * 30) + 1; // Angka acak 1-30
  console.log("Percobaan ke-" + percobaan + ": menebak angka", tebakan);
}

console.log(
  "Berhasil menebak angka",
  angkaRahasia,
  "dalam",
  percobaan,
  "percobaan.",
);


//==============================================================================================
let konfirmasi;

do {
  konfirmasi = prompt("Ketik 'ya' untuk melanjutkan:");
} while (konfirmasi !== "ya");

console.log("Pengguna telah mengkonfirmasi. Melanjutkan proses...");


//Output :
// Memeriksa posisi ke-1
// Memeriksa posisi ke-2


//==============================================================================================

for (let i = 1; i <= 200; i++) { 
  if (i === 20) { 
    console.log("Target ditemukan pada posisi ke-" + i + ". Pencarian dihentikan."); 
    break; 
  } 
  
  console.log("Memeriksa posisi ke-" + i); 

  // output :
  // Memeriksa posisi ke-1
  // Memeriksa posisi ke-2
  //...
  // Memeriksa posisi ke-19
  // Target ditemukan pada posisi ke-20. Pencarian dihentikan.


//==============================================================================================

const nilai = [89, -5, 94, -10, 77, 61];

console.log("Nilai valid:");
for (let i = 0; i < nilai.length; i++) {
  if (nilai[i] < 0) {
    continue; // Lewati nilai negatif
  }
  console.log("-", nilai[i]);
}
// Output:
// Nilai valid:
// - 89
// - 94
// - 77
// - 61
}

//==============================================================================================

const daftarNilai = [78, 45, 92, -3, 88, 55, 100, 0, 67];
let jumlah = 0;
let valid = 0;
let invalid = 0;

for (let i = 0; i < daftarNilai.length; i++) {
  const nilai = daftarNilai[i];

  // Lewati nilai yang tidak valid (di luar rentang 0–100)
  if (nilai < 0 || nilai > 100) {
    console.log("Nilai tidak valid dilewati:", nilai);
    invalid++;
    continue;
  }

  jumlah += nilai;
  valid++;
}

const rataRata = jumlah / valid;

console.log("---");
console.log("Total data    :", daftarNilai.length);
console.log("Data valid    :", valid);
console.log("Data tidak valid:", invalid);
console.log("Rata-rata     :", rataRata.toFixed(2));
// Output:
// Nilai tidak valid dilewati: -3
// ---
// Total data    : 9
// Data valid    : 8
// Data tidak valid: 1
// Rata-rata     : 65.63

//