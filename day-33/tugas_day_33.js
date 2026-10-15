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

// ============================
// LANGKAH 2: PERBAIKI 7 ERROR
// ============================

const warung = {
  nama: "Warung Senja",
  saldoKas: 100000,

  // FIX: 1. saldoKas adalah property object, jadi perubahan harus memakai this.
  tambahKas(jumlah) {
    this.saldoKas += jumlah;
  },

  // FIX: 2. return membuat pemanggil menerima saldo yang sudah dikurangi.
  ambilKas(jumlah) {
    this.saldoKas -= jumlah;
    return this.saldoKas;
  },
};

warung.tambahKas(50000);
console.log(warung.saldoKas);
console.log(warung.ambilKas(30000));

// FIX: 3. bracket notation diperlukan karena nama property mengandung tanda hubung.
const kontak = { "no-wa": "08123" };
console.log(kontak["no-wa"]);

// FIX: 4. delete menghapus property, bukan mempertahankan property bernilai undefined.
const akun = { nama: "Rina", kataSandi: "abc123" };
delete akun.kataSandi;
console.log(akun);

// FIX: 5. for...of membaca setiap nilai array.
const menu = ["Kopi", "Teh", "Roti"];
for (let item of menu) {
  console.log(item);
}

// FIX: 6. for...in membaca key milik object.
const info = { nama: "Warung Senja", kota: "Yogyakarta" };
for (let kolom in info) {
  console.log(kolom + ": " + info[kolom]);
}

// FIX: 7. nama method yang benar adalah Object.keys.
console.log(Object.keys(info));

// Tujuh kesalahan: tambahKas memakai saldoKas tanpa this; ambilKas tidak return;
// kontak.no-wa dibaca sebagai operasi minus dan perlu kontak["no-wa"]; assignment
// undefined tidak menghapus kataSandi dan harus diganti delete; for...in array
// mencetak indeks sehingga harus for...of; for...of object bukan iterasi key
// sehingga harus for...in; Object.key salah nama dan harus Object.keys.
// Error console terjadi pada kontak.no-wa (ReferenceError pada wa) dan for...of info
// (TypeError: info is not iterable); selebihnya kode bisa berjalan tetapi hasilnya salah.
// Menetapkan akun.kataSandi = undefined tetap mempertahankan key, sehingga
// "kataSandi" in akun bernilai true; setelah delete, hasilnya false.
const akunDenganNilaiUndefined = { nama: "Rina", kataSandi: undefined };
console.log("kataSandi masih ada setelah diberi undefined:", "kataSandi" in akunDenganNilaiUndefined);
delete akunDenganNilaiUndefined.kataSandi;
console.log("kataSandi masih ada setelah delete:", "kataSandi" in akunDenganNilaiUndefined);


// =================================
// LANGKAH 3: KASIR BERBENTUK OBJECT
// =================================

const kasirKedai = {
  nama: "Kedai Senja",
  kota: "Yogyakarta",
  saldoKas: 0,
  jamOperasional: { buka: "08:00", tutup: "21:00" },
  menu: [
    { nama: "Kopi Susu", kategori: "minuman", harga: 18000, stok: 10 },
    { nama: "Es Teh", kategori: "minuman", harga: 7500, stok: 20 },
    { nama: "Roti Bakar", kategori: "makanan", harga: 15000, stok: 8 },
    { nama: "Nasi Goreng", kategori: "makanan", harga: 22000, stok: 12 },
    { nama: "Jus Jeruk", kategori: "minuman", harga: 12000, stok: 7 },
  ],
  keranjang: [],

  cariHarga(namaMenu) {
    for (let item of this.menu) {
      if (item.nama === namaMenu) {
        return item.harga;
      }
    }
    return 0;
  },

  tambahKeKeranjang(namaMenu, jumlah) {
    for (let item of this.menu) {
      if (item.nama === namaMenu && jumlah > 0 && item.stok >= jumlah) {
        this.keranjang.push({ nama: namaMenu, jumlah: jumlah });
        item.stok -= jumlah;
        return true;
      }
    }
    return false;
  },

  hitungSubtotal() {
    let subtotal = 0;
    for (let item of this.keranjang) {
      subtotal += this.cariHarga(item.nama) * item.jumlah;
    }
    return subtotal;
  },

  hitungDiskon(subtotal) {
    if (subtotal >= 100000) {
      return subtotal * 0.15;
    } else if (subtotal >= 50000) {
      return subtotal * 0.10;
    } else if (subtotal >= 25000) {
      return subtotal * 0.05;
    } else {
      return 0;
    }
  },

  cetakStruk() {
    const subtotal = this.hitungSubtotal();
    const diskon = this.hitungDiskon(subtotal);
    const pajak = (subtotal - diskon) * 0.11;
    const total = subtotal - diskon + pajak;

    console.log(`\n===== ${this.nama} =====`);
    for (let item of this.keranjang) {
      console.log(`${this.keranjang.indexOf(item) + 1}. ${item.nama} x${item.jumlah} @ Rp${this.cariHarga(item.nama)}`);
    }
    console.log(`Subtotal: Rp${subtotal}`);
    console.log(`Diskon  : Rp${diskon}`);
    console.log(`Pajak   : Rp${pajak}`);
    console.log(`Total   : Rp${total}`);
    console.log("========================");

    this.saldoKas += total;
  },

  menuMenipis() {
    const daftarMenuMenipis = [];
    for (let item of this.menu) {
      if (item.stok < 5) {
        daftarMenuMenipis.push(item.nama);
      }
    }
    return daftarMenuMenipis;
  },
};

// Properti dinamis ditambah dengan bracket notation, diperiksa, lalu dihapus.
const KASIR_KUNCI_WEBSITE = "website";
kasirKedai[KASIR_KUNCI_WEBSITE] = "https://kedaisenja.example";
console.log("Website ada:", KASIR_KUNCI_WEBSITE in kasirKedai);
delete kasirKedai[KASIR_KUNCI_WEBSITE];
console.log("Website ada setelah dihapus:", KASIR_KUNCI_WEBSITE in kasirKedai);

console.log("Jam operasional:");
for (let kolom in kasirKedai.jamOperasional) {
  console.log(`${kolom}: ${kasirKedai.jamOperasional[kolom]}`);
}
console.log("Menu pertama:");
for (let kolom in kasirKedai.menu[0]) {
  console.log(`${kolom}: ${kasirKedai.menu[0][kolom]}`);
}
console.log("Object.keys jam:", Object.keys(kasirKedai.jamOperasional));
console.log("Object.values jam:", Object.values(kasirKedai.jamOperasional));

let jumlahHurufA = 0;
for (let huruf of kasirKedai.nama) {
  if (huruf === "a") {
    jumlahHurufA++;
  }
}
console.log('Jumlah huruf "a" kecil pada nama kedai:', jumlahHurufA);

// for...of pada object biasa akan error: TypeError: kasirKedai is not iterable.
// Percobaan yang sengaja dinonaktifkan supaya program selanjutnya tetap berjalan:
// for (let item of kasirKedai) { console.log(item); }

// Skenario gagal: menu tidak ditemukan dan jumlah melebihi stok sama-sama false.
console.log("Tambah menu yang tidak ada:", kasirKedai.tambahKeKeranjang("Bakso", 1));
console.log("Tambah melebihi stok:", kasirKedai.tambahKeKeranjang("Jus Jeruk", 100));
// Hasil kedua uji gagal: false dan false.

// Skenario 1: Kopi Susu x1 dan Es Teh x1.
kasirKedai.tambahKeKeranjang("Kopi Susu", 1);
kasirKedai.tambahKeKeranjang("Es Teh", 1);
kasirKedai.cetakStruk();
// Hasil struk skenario 1: subtotal 25500, diskon 1275 (5%),
// pajak 2664.75, total 26889.75.

// Keranjang dikosongkan untuk skenario berikutnya; stok yang sudah terjual tetap berkurang.
kasirKedai.keranjang = [];

// Skenario 2: Kopi Susu x2, Nasi Goreng x1, dan Roti Bakar x1.
kasirKedai.tambahKeKeranjang("Kopi Susu", 2);
kasirKedai.tambahKeKeranjang("Nasi Goreng", 1);
kasirKedai.tambahKeKeranjang("Roti Bakar", 1);
kasirKedai.cetakStruk();
// Hasil struk skenario 2: subtotal 73000, diskon 7300 (10%),
// pajak 7227, total 72927.
console.log("Saldo kas sesudah dua skenario:", kasirKedai.saldoKas);
console.log("Menu menipis setelah skenario 2:", kasirKedai.menuMenipis());
// Menu menipis setelah skenario 2: [] karena stok tiap menu tersisa minimal 5.
// Hasil bisa berbeda dari sebelum transaksi karena tambahKeKeranjang mengurangi stok.

// Dot notation dipakai pada kasirKedai.nama; bracket notation juga menerima
// property dinamis, dan wajib berguna untuk property seperti "no-wa" yang berisi tanda hubung.
// Di method saldoKas harus ditulis this.saldoKas agar yang berubah adalah property kedai.
// Jika this dihapus, saldoKas tidak didefinisikan sebagai variabel lokal/global:
// ReferenceError: saldoKas is not defined. Percobaan baris di method: saldoKas += total;
// for...of dipakai pada array keranjang/menu untuk mendapat setiap nilai; for...in dipakai
// pada jamOperasional untuk mendapat key. Menggantinya akan memberi key alih-alih nilai,
// atau mencoba menjalankan for...of pada object yang tidak iterable.
// Array dan string dapat di-for...of karena iterable, sedangkan kasirKedai object biasa tidak.
// Object.keys menghasilkan ["buka", "tutup"], sedangkan Object.values menghasilkan
// ["08:00", "21:00"]; yang satu mengambil key dan yang lain mengambil nilainya.
// cariHarga dan hitungSubtotal memakai return agar hasil dapat dipakai pemanggil.
// cetakStruk boleh hanya mencetak; jika hitungSubtotal cuma console.log, variabel subtotal
// di cetakStruk akan menjadi undefined dan perhitungan diskon/pajak/total tidak berjalan benar.

// Contoh parameter adalah namaMenu pada cariHarga; "Kopi Susu" yang dikirim saat pemanggilan
// adalah argumen. Dot notation mengakses nama property tetap, sedangkan bracket notation
// dapat memakai isi variabel sebagai nama property.