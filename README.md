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
-getProductAll()  get semua dengan harga beda2 per customer
-getProduct() get semua produk dan jasa
-getProductGoods() get semua produk saja
-getProductService() get semua jasa saja
-getProductDetail()
