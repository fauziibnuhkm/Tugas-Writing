________________________________________
WEB SERVER
________________________________________

•	Web Server adalah suatu perangkat lunak (software) dalam server yang berfungsi untuk menerima permintaan (request) dari client atau browser berupa halaman website melalui protokol HTTP/ HTTPS, lalu merespon permintaan tersebut dalam bentuk halaman website berupa dokumen HTML atau PHP.
•	Web server terdiri dari 2 komponen penting:
o	Hardware
o	Software
•	Server HTTP adalah perangkat lunak yang memahami URL (alamat web) dan HTTP (protokol yang digunakan browser Anda untuk melihat halaman web).
Static Web Server VS Dynamic Web Server
•	Static Web Server, atau stack, terdiri dari komputer (perangkat keras) dengan server HTTP (perangkat lunak). disebut "static" karena server mengirimkan file yang dihosting apa adanya ke browser.

•	Dynamic Web Server terdiri dari server web static ditambah perangkat lunak tambahan, paling sering server aplikasi dan database. disebut "dynamic" karena server aplikasi memperbarui file yang dihosting sebelum mengirim konten ke browser Anda melalui server HTTP
Server Side Programming
•	Server web menunggu pesan permintaan klien, memprosesnya saat tiba, dan membalas browser web dengan pesan respons HTTP. Respons berisi baris status yang menunjukkan apakah permintaan berhasil atau tidak (mis. "HTTP/1.1 200 OK" untuk berhasil).
Isi respons yang berhasil atas permintaan akan berisi sumber daya yang diminta (misalnya halaman HTML baru, atau gambar, dll...), yang kemudian dapat ditampilkan oleh browser web.
•	Static Sites
Menunjukkan arsitektur web server dasar untuk situs static (situs static adalah situs yang mengembalikan konten hard-coded yang sama dari server setiap kali sumber daya tertentu diminta).
•	Dynamic Site
Dynamic Website adalah situs di mana beberapa konten respons dihasilkan secara dinamis, hanya bila diperlukan.


________________________________________
Node JS
________________________________________

1.	Node js merupakan runtime javascript yang digunakan oleh back-end developer yang dibangun di JS engine yang bernama V8, lalu V8 tersebut dari web browser Chrome.
2.	Runtime = menjalankan / meng eksekusi kode yang dibuat.
3.	Ditemukan oleh Ryan Dahl (2009)
4.	Build in module Node JS
o	Console
o	Process
o	OS
o	File System
o	Events
o	Util
5.	Menginstal package/library npm init atau npm i [nama package]
6.	Membuat web Server
7.	    let a = require(`http`);
8.	    a.createserver((req, res) => {
9.	    res.write(`hallo`);
10.	    res.end(); // untuk menghentikan respon agar tidak terjadi stuck
11.	    });
12.	     .listen(/*port*/, () => {
13.	     console.log("data berhasil");
    });
14.	createserver sebagai ngembaliin instance dari server.
15.	.listen ngejalanin server dan mulai connect/aktif.


________________________________________
Express Js Routing dan Middleware
________________________________________

1.	Express merupakan framework untuk back-end atau web server yang dibangun di node js melalui jalur API.
2.	Framework node = npm isntall express
3.	Framework untuk development npm install nodemon
4.	Middleware merupaka sebuah function yang bisa digunakan untuk memodifikasi Object Request & Object Response.
5.	Nodemon digunakan untuk development sebagai running program di node js.
6.	Menggunakan express js :

o	Buka vscode, new terminal npm init
o	instal expreess js npm instal express
o	buat file idx.js,
o	const express = require("express");
o	const idx = express();
o	const PORT = 3000;
o	//  running port
o	idx.listen(PORT, () => {
o	  console.log("running port " + PORT);
});
o	Setting script di file package.json
o	    {
o	      "name": "minggu_5",
o	      "version": "1.0.0",
o	      "description": "",
o	      "main": "index.js",
o	          "scripts": {
o	          "test": "echo \"Error: no test specified\" && exit 1",
o	          "start": "node idx.js",
o	          "dev": "nodemon idx.js"
o	      },
o	      "author": "reza",
o	      "license": "ISC",
o	      "dependencies": {
o	        "express": "^4.18.2"
o	      },
o	       // setelah di instal npm nodemon
o	      "devDependencies": {
o	        "nodemon": "^2.0.20"
o	      }
    }
o	instal nodemon untuk development npm i -D nodemon lanjut dengan npm run dev untuk menjalankan nodemon.


________________________________________
Design Database with MySQL
________________________________________

1.	Database atau basis data adalah kumpulan informadi yang disimpan di dalam komputer secara sistematik sehingga dapat diperiksa menggunakan suatu program komputer untuk memperoleh informasi dari basis data tersebut.
2.	Databaes memiliki fungsi :

o	Mengelompokkan data dan informasi sehingga lebih mudah dimengerti.
o	Mencegah terjadinya duplikat data maupun inkonsistensi data.
o	Mempermudah proses penyimpanan, akses, pembaharuan, dan menghapus data.
o	Menjaga kualitas data dan informasi yang diakses sesuai dengan yang diinput.
o	Membantu proses penyimpanan data yang besar.
o	Membantu meningkatkan kinerja aplikasi yang membutuhkan penyimpanan data.
3.	Manfaat menggunakan database :

o	Tidak ada redudansi data, database dapat membantu meminimalkan redudansi data. Redundansi adalah munculnya banyak data dalam file yang berbeda.
o	Integritas data terjaga, database memastikan integritas data yang tinggi, di mana database akan memastikan keakuratan, aksesbilitas, konsistensi, dan kualitas tinggi pada suatu data.
o	Menjaga independensi data, database menjaga independensi data di mana orang lain tidak dapat mengubah data, meski data bisa diakses.
o	Kemudahan berbagi data, menggunakan perangkat lunak database bisa digunakan untuk berbagi data atau informasi dengan sesama pengguna lainnya.
o	Pemeliharaan keamanan data, database memastikan keamanan informasi dan data, di mana kamu dapat memasukkan kode akses untuk data tertentu yang tidak dapat diakses.
o	Kemudahan akses data, dengan adanya database kamu dapat mempermudah dalam mengakses dan memperoleh data karena semua data telah tertata dengan baik.
4.	Di dalam design database ada attributes pada tiap entity nya.
5.	Entity-relationship diagram (ERD) merupakan sebuah model untuk menyusun database agar dapat menggambarkan data yang mempunyai relasi dengan database yang akan didesain.
6.	Di dalam ERD ada komponen-komponen seperti :
o	Entitas : Kumpulan objek yang dapat diidentifikasikan secara unik atau saling berbeda.
 
o	Atribut yang berfungsi untuk mendeskripsikan karakteristik dari entitas tersebut yang merupakan hal pembeda atribut dengan entitas.
 
o	Relasi : Hubungan antara sejumlah entitas yang berasal dari himpunan entitas yang berbeda. Gambar relasi diwakili oleh simbol belah ketupat.
 
7.	Membuat table

o	Mahasiswa
o	create table mahasiswa(
o	    -> Nim int,
o	    -> nama varchar,
o	    -> Jurusan varchar,
o	    -> PRIMARY KEY(Nim);
    Query OK, 0 rows affected (2.408 sec)
o	Matakuliah
o	create table matakuliah(
o	    -> Id int,
o	    -> Matkul varchar,
o	    -> sks int,
o	    -> PRIMARY KEY(Id);
    Query OK, 0 rows affected (2.408 sec)
Menentukan Atribbutes dari Entity
•	Menentukan attributes apa saja yang akan datanya kita simpan di dalam sebuah entity.
•	Attributes yang di perlukan didalam entity kemungkinan sudah ada di dalam requirements document, atau mungkin juga diperlukan penafsiran kita sendiri sebagai database developer.
Menentukan Relasi Antar Entity
•	Didalam requrement mungkin sudah dijelaskan relasi dari beberapa entity.
•	Namun terkadang didalam requirement juga tidak dijelaskan mengenai relasi, dan kita sebagai database developer menafsirkan relasi antar entity
Membuat SQL Table dari Entity
•	Setelah kita punya ERD, maka kita akan lanjut dengan create table berdasarkan dengan data yang kita punya.
•	Pada kali ini kita akan menggunakan terminal untuk menjalankan query SQL . Membuat table

o	Mahasiswa
o	create table mahasiswa(
o	    -> Nim int,
o	    -> nama varchar,
o	    -> Jurusan varchar,
    -> PRIMARY KEY(Nim);
o	Matakuliah
o	create table matakuliah(
o	    -> Id int,
o	    -> Matkul varchar,
o	    -> sks int,
    -> PRIMARY KEY(Id);
    
________________________________________
RESTFul API
________________________________________
1.	REST (Representational State Transfer) dibuat pada tahun 2000.
2.	Rest API Architectural Styles

o	Organized in terms of : Compliance with six architectural contraints.
o	Format : XML,JSON,HTML, dan PlainText
o	Learning Curve : Easy
o	Community : Large
o	Use Case :
	Public APIs
	Simple Resource-Driven apps
3.	Rules milik Rest yang harus dimiliki ;
o	Uniform Interface : Mudah dipelajari, sama bentuknya dengan API
o	Client Server : Web browser sebagai client, server untuk buat API
o	Stateless : Tidak tergantung oleh data user
o	Cacheable
o	Layered System
o	Codeon demand : sifat (optional)
4.	RestFul = WEB API dengan rest memiliki 6 prinsip diatas.
5.	HTTP = Komunikasi web dengan server dengan API sebagai jalur yang menjalankan http/ssh.
6.	HTTP Nethod ;
o	Get -> Ambil data
o	Post -> Kirim data
o	Delete -> Hapus data
o	Put/Patch -> Put untuk update data sebagian atau semua data, Patch untul update hanya sebagian saja.
7.	API bisa dikonsumsi oleh Mobile/web/dekstop/IOT.
8.	Database hanya bisa diakses oleh server, Lalu API hanya bisa akses sampai di server.
 
9.	Menggunakan kebabcase(-) bukan(_)
10.	Status Code
o	2xx -> Sukses
o	3xx -> Redirect
o	4xx -> Client Eror -> disebabkan oleh pengguna
o	5xx -> Server Eror -> disebabkan oleh server

