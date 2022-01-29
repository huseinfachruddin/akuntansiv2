AKUNTANSI V2

Controller & Function

Auth/Auth :: Semua fungsi Autentifikasi dari Login,regesiter

User/RoleController :: Managemen Role
User/UserController :: Managemen User CRUD

AkunController :: managemen Akun
-getAkun() = get semua akun secara rekursuf
-setLabaDitahan() = untuk memasukan laba ditahan (fungsi ini gk pernah saya gunain)
-getAkunList() = get semua akun tanpa rekursif
-Report() = get akun dengan parameter nama
-reportName() = get akun dengan parameter nama
-getAkunIsCashIn() = get semua akun yang berlabel isCashin (pilihan kas masuk)
-getAkunIsCashOut() = get semua akun yang berlabel isCashout (pilihan kas keluar)
-getAkunIsCash = get semua akun kas (berlebel isCash)
-getAkunNotCash() = get semua akun bukan kas(tidah berlebel IsCash)
-getAkunIsHeader() = get semua akun yang menjadi Header atau perent (berlabel isHeader)
-createAkun() = membuat akun
-editAkun() = edit akun
-deleteAkun() = delete akun

CashController :: managemen kas (kas masuk,kas keluar,transfer kas)
-getCash() = get semua transaksi kas
-getCashIn() = get semua transaksi kas masuk
-getCashOut() = get semua transaksi kas keluar
-getCashTransfer() = get semua transaksi transfer kas
-getCashTransactionDetail() = lihat detail sebuah transaksi kas
-createCashIn() = membuat transaksi kas masuk
-createCashOut() = membuat transaksi kas keluar
-createCashTransfer = membuat transaksi transfer kas
-deleteCashTransaction() = delete transaksi kas
ContactController :: managemen Kontak
-getContact() = get semua kontak
-getContactCustomer = get semua kontak berlabel customer
-getContactSupplier() = get semua kontak berlabel supplier
-getContactDetail = get isi detail contact
-createContact = membuat kontak baru
-editContact() = edit kontak
-deleteContact() = delete kontak

ContacttypeController :: manajemen type kontak
-getContacttype() = get semua type kontak
-getContacttypeDetail() = get detail type kontak
-createContacttype() = membuat type kontak baru
-editContacttype() = edit type kontak
-deleteContacttype() = delete type kontak

LicenceController :: managemen lisensi
-getLicence() = get lisensi yang terpasang
-createLicence() = membuat lisensi / memasukan lisensi / mengaitkan lisensi
-editLicence() = edit lisensi
-deleteLicence() = delete lisensi

PriceproductController :: manageman harga per produk
-detailProductPrice() = get datail harga produk
-cratePrice() = membuat harga baru
-deletePrice() = hapus harga

ProductController :: managemen produk
-getProductAll() = get semua dengan harga beda2 per customer
-getProduct() = get semua produk dan jasa
-getProductGoods() = get semua produk saja
-getProductService() = get semua jasa saja
-getProductDetail() = detail produk atau jasa
-createProduct() = membuat produk baru
-editProduct() = edit produk
-deleteProduct() = delete produk

ProducttypeController :: managemen type produk
-getProducttype() = get semua type produk
-getProducttypeDetail() = get detail type produk
-createProducttype() = membuat type produk baru
-editProducttype() = edit type produk
-deleteProducttype() = delete type produk

ReportController :: Laporan Laba rugi
-AkunReportLaba() = ini adalah fungsi panjang sampe 400 an baris,dalamnya berisi untuk menjumlahkan semua transaksi yang sudah ada nan dijadikan laporan laba rugu... dibaca dan di pahami dengan seksama semoga anda paham.. berhenti sejenak jika lelah. :)

NB:: pada laporan laba hanya ada Pendapatan ,HPP ,Biaya

ReportNeracaController :: laporan Neraca
-AkunReportNeraca() = menghitung semua transaksi di jadikan laporan Neraca yang dimana Harta sama dengan Modal ditambah kewajiban
{ Harta = Modal + Kewajiban }
-labaBerjalan() = menghitung laba berjalan yang akan di panggil ke fungsi AkunReportNeraca()
lalu otomatis kan berpindah ke laba ditahan jika ganti tahun

SetingcashController :: managemen penyetingan kas seperti tambah dan hapus kas
-getCashData() = get semua kas dan menjumlahkan total transaksi keluar masuknya
-getCash() = get semua kas data akan return berbeda di setiap role
-createCash() = membuat kas baru
-editCash() = edit kas
-deleteCash = hapus kas

StockController :: managemen pembelian , penjualan
-getStockOutReport() = laporan penjualan
-getStockTransaction() = get semua transaksi penjualan dan pembelian
-getStockIn() = get transaksi pembelian
-getStockOut() = get transaksi penjualan
-getStockTransactionDetail() = get data setail data per transaksi
-createStockIn() = membuat pembelian baru
-createStockOut() = membuat penjualan baru
-pendingToIn() = merubah transaksi pesanan pembelian menjadi transaksi pembelian
-pendingToOut() = merubah transaksi pesanan penjualan menjadi transaksi penjualan
-deleteStockTransaction() = hapus transaksi penjualan atau pembelian

