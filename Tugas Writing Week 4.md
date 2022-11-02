Ringkasan Materi Week 4
Javascript Asynchronous – Fetch & Async Await

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

Async/await adalah fitur yang hadir sejak ES2017. Fitur ini mempermudah kita dalam menangani proses asynchronous. Async/Await merupakan sebuah syntax khusus yang digunakan untuk menangani Promise agar penulisan code lebih efisien dan rapih.


Git & Github Lanjutan

Version Control System (VCS) adalah sebuah sistem yang melakukan source code management (SCM) )untuk mengelola perubahan di setiap dokumen, program komputer, website, dan kumpulan pemrograman lainnya.

Git merupakan software berbasis Version Control System (VCS) yang bertugas untuk mencatat perubahan seluruh file atau repository suatu project. Developer software biasa menggunakan Git untuk distributed revision (VCS terdistribusi), hal ini bertujuan untuk menyimpan database tidak hanya ke satu tempat. Namun semua orang yang terlibat dalam penyusunan kode dapat menyimpan database ini.

GitHub merupakan layanan cloud yang berguna untuk menyimpan dan mengelola sebuah project yang dinamakan repository (repo git). Konsep kerja GitHub pada dasarnya sama dengan Git yaitu dapat menulis source code secara individu atau tim. User interface yang tersedia pada GitHub lebih menarik dan mudah dipahami oleh pengguna awal. Pekerjaan secara tim, pengguna juga bisa melihat siapa penulis kode dan tanggal berapa kode tersebut dibuat.

Begitupun Netlify juga menggunakan Git dan CI/CD untuk melakukan deployment. Kedua alat ini sangat membantu dalam melakukan deployment. Selain itu, Netlify juga menyediakan fitur untuk mengelola DNS, SSL atau HTTPS diberikan gratis, form, function, dan lain-lain.


Responsive Web Design

Responsive Web Design (RWD) adalah bertujuan membuat desain website kita dapat diakses dalam device apapun.

Viewport di HTML
<meta charset=”UTF-8”>
<meta name=”viewport” content=”width=device-width, initial-scale=1.0”>

Media Query
RWD sangat menyenangkan dan mudah jika kita menggunakan Media Query.
Jenis Media Query: Media Query untuk responsive web design umumnya hanya menggunakan 2 jenis media query, keduanya yaitu min-width dan max-width. 
Media Query digunakan untuk membuat beberapa styles tergantung pada jenis device. Ada 2 cara dalam menggunakan Media Query yaitu:
1.	Membuat file css berbeda untuk masing-masing device
2.	Menggabungkan 1 file css untuk setting styling berbagai device.

Tidak ada aturan baku besaran width dan beberapa banyak breakpoint yang harus dilakukan. Responsive Web Design dilakukan sesuai kebutuhan konten kita. J ika konten yang ditampilkan sudah tidak bisa diakses atau sulit dilihat pada width tertentu, sudah saatnya kamu menggunakan media query.


Bootstrap 5

Bootstrap adalah sebuah framework yang paling populer digunakan untuk membuat sebuah website. Bootstrap membuat front-end developer dapat membuat website dengan cepat, fokus pada responsive mobile, dan membuat website menjadi lebih interaktif tanpa membuat banyak CSS dan JavaScript dari nol.

Tujuan dan fungsi Bootstrap adalah untuk membuat website responsive dan mobile-first. Jadi, semua elemen antarmuka website dipastikan bisa bekerja secara optimal di semua ukuran layar, baik desktop maupun perangkat seluler.

Bootstrap adalah sebuah framework HTML, CSS, dan JavaScript yang berfokus untuk menyederhanakan pengembangan halaman web atau website. Bootstrap 5 mengubah tampilan elemen checks & radios menjadi lebih modern serta menambahkan elemen switch checkbox untuk form Anda. Sebagai sebuah framework, Bootstrap menyediakan template untuk mendefiniskan style dasar seluruh elemen HTML dalam sebuah website.
