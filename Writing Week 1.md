Ringkasan Materi Week 1
Javascript Scope dan Functiong
Scope adalah konsep dalam flow data variable. Menentukan suatu variable bisa diakses pada scope tertentu atau tidak.
Selanjutnya yaitu Blocks adalah code yang berada diluar curly braces{}. Conditional, function dan looping menggunakan blocks.
Global Scope berarti variable yang kita buat dapat diakses dimanapun dalam satu file. Agar menjadi Global Scope, suatu variable haris dideklarasikan diluar blocks.
Local Scope berarti kita mendeklarasikan variable didalam blocks seperti function, conditional dan looping. Maka variable hanya bias diakses didalam blocks saja, tidak bias diakses diluar blocks.
Function
Function adalah sub-program yang bisa digunakan kembali baik di dalam program itu sendiri, maupun di program yang lain. Fungsi di dalam Javascript adalah sebuah objek. Karena memiliki properti dan juga method.
Ada 4 cara untuk membuat function pada javascript:
1. Menggunakan cara biasa;
2. Menggunakan ekspresi;
3. Menggunakan tanda panah (‘=>’);
4. Menggunakan Constructor.
Parameter dan Argument
Parameter adalah syarat input yang harus dimasukkan ke dalam suatu fungsi dan dideklarasikan bersama dengan deklarasi fungsi. Sementara argument adalah nilai yang dimasukan ke dalam suatu fungsi, sesuai dengan persyaratan parameter, di mana argument dituliskan bersamaan dengan pemanggilan fungsi.
Javascript DOM
Javascript DOM (Document Object Model) arartinya dokumen (HTML) yang dimodelkan dalam sebuah objek. Objek dari dokumen ini menyediakan sekumpulan fungsi dan atribut/data yang bisa kita manfaatkan dalam membuat program Javascript. Inilah yang disebut API (Application Programming Interface).
Jadi, ketika halaman website kita diload, browser kita akan membuat Document Object Model dari halaman website kita. Strukturnya kira-kira seperti ini:
Dengan adanya DOM ini, JavaScript diberi akses untuk membuat HTML menjadi dinamis, seperti:
•	Mengubah element HTML pada halaman website.
•	Mengubah attribute HTML pada halaman website.
•	Mengubah CSS style pada halaman website.
•	Menambah dan/atau menghapus element maupun attribute HTML.
•	Menambah HTML event (contoh: efek klik pada mouse, hover pada mouse, dan lain-lain) pada halaman website.
•	Berinteraksi dengan semua HTML event di website.
DOM dapat dimanipulasi menggunakan bahasa scripting atau bahasa pemrograman, yaitu JavaScript. Kode JavaScript yang dijalankan di browser environment akan memiliki akses terhadap objek document dan window untuk memanipulasi DOM. Dengan demikian, dokumen web dapat terhubung atau berinteraksi dengan scripts atau bahasa pemrograman.
Manipulasi Atribut Elemen
Suatu elemen yang telah terdaftar dalam DOM Tree terkadang perlu mengutak-atik atribut dari elemen tersebut agar tampilan lebih dinamis. Contohnya seperti mengubah resource dari elemen <img> agar gambar yang ditampilkan dapat berubah. Untuk mencapai ini, kita memerlukan method setAttribut() dari objek bertipe Element. Method ini menerima dua parameter, yaitu nama atribut dan value dari atribut itu sendiri.
Memanipulasi Style Elemen
Selain memanipulasi atribut elemen, kamu juga bisa memanipulasi style elemen untuk mendapat tampilan yang dinamis. Untuk melakukan manipulasi ini, kita bisa memanfaatkan interface CSSStyleDeclaration. Interface ini merepresentasikan object yang merupakan isi dari blok deklarasi di CSS.
Objek CSSStyleDeclaration dapat ditangkap menggunakan tiga cara sebagai berikut.
•	Melalui properti style dari objek HTMLElement. 
Objek CSSStyleDeclaration ini merepresentasikan style yang diterapkan secara inline. Contoh: <p style=”color: blue”>.
•	Melalui interface CSSStyleSheet dari property style yang berada di objek CSSStyleRule. 
Contoh: document.styleSheets[0].cssRules[0].style akan mengembalikan objek CSSStyleDeclaration pada berkas CSS pertama dan rule CSS pertama.
•	Melalui function getComputedStyle() dari objek window.
Method ini akan mengembalikan objek yang mengandung nilai-nilai seluruh properti CSS dari elemen tertentu setelah menerapkan CSS yang dituliskan dan menghitung komputasi dasar dari nilai yang tersedia.
Menambahkan Events  Pada Elemen 
Event merupakan hal yang tidak bisa dipisahkan ketika kita ingin membuat halaman website yang interaktif. Event ini adalah kemampuan JavaScript untuk menerima keadaan atau kejadian dari suatu elemen. Event dapat dipicu dengan aksi user, seperti mengeklik tombol mouse, menekan tombol keyboard, dsb. Selain itu, Event juga bisa dipicu secara terprogram, seperti memanggil HTMLElement.click() dari elemen atau mendefinisikan event dan mengirimnya ke target menggunakan method EventTarget.dispatchEvent().
Untuk menerapkan event handler pada elemen, terdapat interface yang telah diimplementasikan pada interface Node sehingga Node beserta turunannya (document, window, HTMLElement, dsb) dapat menerapkan event, yaitu interface EventTarget. Contohnya adalah menerapkan method addEventListener(). Method ini merupakan salah satu method dari interface EventTarget guna menyiapkan function yang akan dipanggil kapan pun event tersebut dipicu pada elemen target.
