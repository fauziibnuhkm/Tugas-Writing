Ringkasan Materi Week 3
Javascript Array & Multidimensional Array

Array merupakan struktur data yang digunakan untuk menyimpan sekumpulan data dalam satu tempat. Setiap data dalam Array memiliki indeks, sehingga kita akan mudah memprosesnya. Indeks array selalu dimulai dari angka nol ( 0 ).
Array adalah tipe data list order yang dapat menyimpan tipe data apapun didalamnya. Array dapat menyimpan tipe data String, Number, Boolean dan lainnya.
Contoh Array:
let productTeam = [‘Product Manager’, ‘Front End Developer’, ‘Back End Developer’];
console.log(productTeam);

let randomData = [‘Ini String’, 20, true];
console.log(randomData);
Array memiliki 5 properti yang sering digunakan yaitu constructor, length, index, input dan prototype. Array memiliki method atau bisa disebut built-in methods, Artinya Javascript sudah memudahkan kita dengan menyediakan function/method umum yang bisa kita gunakan.

Javascript Object & Array of Object

Object adalah sebuah tipe data pada variable yang menyimpan properti dan fungsi(method).
Properti adalah data lengkap dari sebuah obejek, method adalah action dari sebuah objek.
Contoh Object:
let person = {
	name: ‘John De’, 
	age: 25,
	isVerified: true,
}
console.log(person);
console adalah global javascript object, log() adalah properti yang berupa function dari object console.
Kita bia menggunakan array of object untuk data yang lebih dari satu.

Javascript – Recursive

Recusrive adalah function yang memanggil dirinya sandiri sampai kondisi tertentu. Recursive kebanyakan digunakan untuk case matematika, fisika, kimia dan yang berhubungan dengan calculation.
Fungsi rekursif selalu memiliki kondisi yang menyatakan kapan fungsi tersebut berhenti. Kondisi ini harus dapat dibuktikan akan tercapai, karena jika tidak tercapai maka kita tidak dapat membuktikan bahwa fungsi akan berhenti, yang berarti algoritma kita tidak benar.
Fungsi rekursif selalu memanggil dirinya sendiri sambil mengurangi atau memecahkan data masukan setiap panggilannya. Hal ini penting diingat, karena tujuan utama dari rekursif ialah memecahkan masalah dengan mengurangi masalah tersebut menjadi masalah-masalah kecil.

Javascript Modules

Javascript adalah bahasa pemrograman single-thread yang artinya hanya dapat mengeksekusi satu task pada satu waktu atau biasa disebut synchronous. Pada konsep pemrograman (web development pada case kita) dikenal istilah Asynchronous. Asynchronous mengizinkan komputer memproses task yang lain sambil menunggu proses yang masih berlangsung.
Kita bisa membuat asynchronous secara simulasi artinya tidak murni asynchronous dengan beberapa cara:
1.	Callback
2.	Promises
3.	Async/Await

Callback function adalah function yang kita letakan di dalam argumen/parameter pada function, dan function tersebut akan dieksekusi setelah function pertama menyelesaikan tugasnya.
Promise adalah salah satu fitur baru di ES6, biasa digunakan untuk melakukan http request/fetch data dari API. Dalam pengambilan data, promise memiliki 3 kemungkinan state.
1.	Pending(sedang dalam proses)
2.	Fulfilled (berhasil)
3.	Rejected (gagal)
Async - await adalah salah satu fitur baru dari javascript yang digunakan untuk menangani hasil dari sebuah Promise. Sedangkan await berfungsi untuk menunda sebuah kode dijalankan sampai proses asynchronous berhasil.

Javascript – Web Storage

Web storage adalah salah satu Web API yang dapat menyimpan data secara lokal pada sisi client. Berbeda dengan objek atau array, data yang disimpan pada objek atau array JavaScript bersifat sementara, dan akan hilang jika terjadi reload atau pergantian URL pada browser. Sedangkan data yang disimpan pada Web Storage akan bertahan lebih lama karena data akan disimpan pada storage browser.
Web API menyediakan dua tipe Web Storage untuk kita gunakan, yakni sessionStorage dan localStorage.

Session Storage adalah penyimpanan website pada sisi klien yang digunakan untuk menyimpan data selama web-browser atau tab yang memuat halaman suatu website belum ditutup atau keluar (close). Session Storage dalam membangun sistem berbasis website biasanya digunakan untuk menyimpan user identity sebagai login status. 

Local Storage adalah jenis penyimpanan web yang memungkinkan situs dan aplikasi menyimpan dan mengakses data langsung di browser tanpa tanggalmasa berlaku atau kedaluwarsa. Artinya, data yang disimpan pada web browser akan tetap ada bahkan setelah jendela web browser ditutup. Local Storage hanya dapat dihapus dengan menggunakan JavaScript Command, atau dapat juga menghapushapus data di local storage dengan cara Clear Browser Cache.
