Writing and Presentation Test Week 6

DATABASE MYSQL BASIC

Database adalah kumpulan informasi yang disimpan didalam komputer secara sistematik dan saling berelasi. Database merupakan sekumpulan tabel yang berisikan informasi untuk diolah yang kemudian data tersebut bisa digunakan di dalam sebuah sistem.
Untuk membuat Database diperlukan sebuah software yang dinamakan dengan DBMS(Database Management System)
DBMS adalah software yang dapat digunakan oleh user untuk berkomunikasi dengan data yang ada dalam media penyimpanan.

Istilah pada Database
•	Table: Table adalah kumpulan value yang dibangun oleh baris dan kolom, yang didalamnya berisikan atribut dari sebuah data.
Berikut contoh dari tabel:
•	Field: Field adalah kolom dari sebuah tabel dimana masing-masing field memiliki tipe data masing-masing.
•	Record: Record merupakan kumpulan nilai yang saling terkait. Record merupakan isi dari sebuah tabel.
•	SQL: SQL atau Structured Query Language merupakan suatu bahasa (Language) yang digunakan untuk mengakses database.

SQL adalah Bahasa Query yang digunakan untuk melakukan interaksi di RDMS (Relational Database Management System).
o	Membuat, Menampilkan dan menghapus data didalam database
o	Mengatur “Permission” (siapa saja yang bisa mengakses data
o	Membuat dan menghapus Database.

•	DDL (Data Definition Language)
DDL merupakan kumpulan perintah SQL yang digunakan untuk membuat, mengubah dan menghapus struktur dan definisi metadata dari objek-objek Database.
Contoh perintah membuat tabel mahasiswa

create table mahasiswa(
    kode_mahasiswa varchar(10) auto_increment,
    nama varchar(50),
    jurusan varchar(50),
    primary key(nim)
);

•	ALTER
Alter digunakan untuk mengubah struktur dari tabel yang ada, seperti untuk menambahkan atau menghapus kolom/field. Membuat atau menghapus primary key, mengubah jenis kolom/field yang ada, juga mengubah kolom atau nama tabel.
Menambah Primary Key
ALTER TABLE nama_tabel ADD Primary key (nama field) ALTER TABLE pasien ADD PRIMARY KEY (KdPasien)
Menambah Kolom/Field
ALTER TABLE nama_tabel ADD Nama_Field Tipe_Data(Ukuran) ALTER TABLE table pasien ADD Alamat Pasien varchar(50)
Mengubah struktur tabel untuk field Alamat Pasien dari Length (50) menjadi (40) ALTER TABLE pasien ALTER COLUMN Alamat Pasien varchar(40)

•	DROP
Perintah Drop digunakan untuk menghapus Database, Table, dan View atau Index.
DROP DATABASE nama-databas
DML (Data Manipulation Language)

•	SELECT
Perintah SELECT digunakan untuk menyeleksi data berdasarkan syarat yang diberikan.
Dengan menggunakan perintah SELECT ini record didalam tabel tertentu yang berjumlah ribuan bahkan jutaan dapat ditampilkan.
SELECT COLUMN_NAME FROM TABLE_NAME
SELECT DISTINCT COLUMN_NAME FROM TABLE_NAME

•	INSERT
INSERT digunakan untuk memasukkan data ke kolom-kolom yang terdapat pada tabel/vie.
INSERT INTO NAMA_TABLE (nama_field1, nama field2, ...nama_fieldN) VALUES (valuel, value2,...., valueN)

•	UPDATE
Digunakan untuk melakukan editing pada isi dari kolom (field) yang dipilih. Hal ini dilakukan untuk memperbaiki data lama / terjadi kesalahan.
UPDATE table_name SET column_name ="new data" WHERE key_column = 1;

•	DELETE
Digunakan untuk menghapus data dalam tabel yang menjadi target.
DELETE FROM table_name WHERE condition;

Database Relationships

Database relationship adalah relasi atau hubungan antara beberapa tabel dalam bahasa yang kita miliki.
Relasi antar tabel dihubungkan oleh Primary key dan foreign key.
	Primary key adalah atribut yang tidak hanya mengidentifikasi secara unik suatu kejadian, tapi juga mewakili setiap kejadian suatu entitas.
	create table mahasiswa(
	    nim int primary key auto_increment,
	    nama varchar(50),
	    jurusan varchar(50),
	);
	
	nim pada tabel mahasiswa di jadikan primary key
	Foreign key adalah atribut yang melengkapi relationship dan menunjukan hubungan antara tabel induk dengan tabel anak.
	create table fav_movie(
	    id_favMovie int primary key auto_increment,
	    id_mahasiswa int,
	    FOREIGN KEY (id_mahasiswa) REFERENCES mahasiswa(nim)
	);
  
Beberapa tipe database relationships:
•	One To One Relationships
•	One to Many and Many to One Relationships
•	Many to Many Relationships
•	Self Referencing Relationships

Contoh kasus :
•	One To One Relationships :
Tabel mahasiswa dan tabel alamat yakni 1 mahasiswa hanya memiliki 1 alamat begitu pula sebaliknya 1 alamat ahnya di miliki 1 mahasiswa.

•	One to Many and Many to One Relationships :
tabel Customers dan tabel order barang. yakni 1 customer dapat memiliki banyak order barang.

•	Many to Many Relationships : tabel order dan tabel item yakni 1 order dapat memiliki banyak item begitu sebaliknya 1 item memiliki banyak order.

------------------------
DATABASE MYSQL LANJUTAN
------------------------

SQL Table Join
Join, adalah penggabungan tabel yang dilakukan melalui kolom/key tertentu yang memiliki nilai terkait untuk mendapatkan satu set data dengan informasi lengkap.
•	Inner Join : menampilkan data hanya yang sesuai di kedua tabel.
•	SELECT * FROM karyawan INNER JOIN gaji ON karyawan.karyawan_id = gaji.karyawan_id;
•	Left Join : menampilkan semua data sebelah kiri dari tabel yang di joinkan dan menampilkan data sebelah kanan yang cocok dengan kondisi join. Jika tidak ditemukan kecocokan, maka akan di set NULL secara otomatis
•	SELECT * FROM karyawan LEFT JOIN gaji ON karyawan.karyawan_id = gaji.karyawan_id;
•	Right Join : menampilkan semua data sebelah kanan dari tabel yang di joinkan dan menampilkan data sebelah kiri yang cocok dengan kondisi join. Jika tidak ditemukan kecocokan, maka akan di set NULL secara otomatis.
•	SELECT * FROM gaji RIGHT JOIN karyawan ON gaji.karyawan_id = karyawan.karyawan_id;

NoSQL
Database NoSQL adalah database yang tidak memiliki perintah SQL.
Konsep penyimpanannya semi struktural atau tidak struktural, dan tidak harus memiliki relasi layaknya tabel-tabel MySQL.
Tujuan dari penggunaan database noSQL adalah untuk model data spesifik dan memiliki skema fleksibel dalam mengembangkan aplikasi modern, contoh: aplikasi yang bersifat real time.

Kelebihan NoSQL di banding Relasional Database.
•	NoSQL bisa menampung data yang terstruktur, semi terstruktur dan tidak terstruktur.
•	Menggunakan OOP dalam pengaksesan/manipulasi data.
•	NoSQL tidak mengenal schema tabel yang kaku.

Keys di SQL
•	Super Key
o	Kumpulan dari satu atau lebih dari satu key yang dapat digunakan untuk mengidentifikasi record secara unik dalam sebuah tabel
o	Super Key adalah superset dari Candidate Key.
•	Candidate Key
o	kumpulan satu atau lebih fields/columns yang dapat mengidentifikasi record secara unik dalam tabel.
o	Bisa jadi ada beberapa Candidate Keys di dalam satu tabel
o	Setiap Candidate Key bisa digunakan sebagai Primary Key.
o	Candidate Key adalah super key yang tidak mempunyai value yang berulang
•	Primary Key
o	kumpulan satu atau lebih fields/columns dari sebuah tabel yang secara unik mengidentifikasi sebuah record dalam tabel database.
o	Valuenya tidak boleh berupa null ataupun duplicate value.
o	Hanya boleh salah satu Candidate Key yang bisa menjadi Primary Key.
•	Alternate Key
o	key yang bisa digunakan menjadi primary key.
o	Pada dasarnya, Key ini merupakan candidate key yang tidak dijadikan primary key.
•	Unique Key
o	Kumpulan dari satu atau lebih fields/columns di sebuah table database yang secara unik mengidentifikasi sebuah record dalam table database tersebut.
o	Hampir sama dengan Primary key, namun value dari Unique Key bisa berupa satu buah null value di dalam sebuah table database, dan Unique Key tidak bisa memiliki duplicate values
•	Foreign Key
o	Field di sebuah table database yang menjadi Primary Key di table database lain.
o	Value dari Foreign key bisa menerima multiple null dan duplicate values.

-----------------------------------------------------
EXPRESS JS MIDDLEWARE AUTHENTICATION & AUTHORIZATION
-----------------------------------------------------

Authentication
Merupakan metode terhadap seorang pengguna mengkonfirmasi sebagai pengguna valid yang dapat mengakses sebuah akun atau informasi tertentu.

Authorization
Merupakan proses penentuan terhadap pengguna yang terautentikasi tersebut diizinkan atau ditolak untuk melakukan satu atau lebih akses terhadap sistem.

Encryption
Merupakan proses pengubahan data menjadi format yang tidak bisa dibaca terkecuali apabila ada seseorang yang memiliki kunci untuk mengubah kembali data yang terenkripsi

Jenis Autentikasi
•	Single Factor Authentication

Autentikasi yang sangat sederhana dan banyak digunakan di masa sekarang. Autentikasi ini berupa memasukan sebuah identitas seperti password dan username.
•	Two Factor Authentication

Autentikasi ini dibuat setelah Single Factor Authentication dipakai yaitu adanya tambahan autentikasi seperti OTP dan sidik jari atau wajah.
•	Multi Factor Authentication
Autentikasi yang mewajibkan pengguna untuk memverifikasi 3 jenis identitas seperti ID pengguna (password dan username), sidik jari, dan beberapa pertanyaan yang berhubungan dengan pengguna.

Membuat Authentication dan Authorization

Untuk penerapanya bisa menggunakan Express JS dengan bantuan module jsonwebtoken.
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

const users = [
    {id : 1, email :"guntur@gmail.com", password: "123"}
];

const KEY = "asdfjsdaklf234234";

router.post("/Login", (req, res) =>{
    const {email, password } = req.body;

    const userData = users.find((item) => 
    email === item.email && password === item.password);

    const token = jwt.sign(
        {
          id: userData.id,
        },
        KEY
      );

    if (userData) {
        return res.json({
            message : "secces login",
            token 
        });
    }
    else{
        res.statusCode = 401;
        res.json({
            message : "email or password are incorratct",
        });
    }
});

module.exports = router;

-----------------------------------------------------------
BUILD WEB SERVICE and RESTFUL API WITH EXPRESS & SEQUELIZE
-----------------------------------------------------------

Sequelize
Sequelize adalah ORM (Object Relational Mapping) Node JS yang berbasis promise. Sequelize mendukung sebagian besar relational Database seperti MySQL, PostgresQL, MariaDB, SQLite dan Miscrosoft SQL Server.
Dengan fitur fitur di Sequelize, kita bisa mengelola dan mengatur data di database kita dengan cepat, dan efisien.

ORM
ORM adalah suatu metode/teknik pemrograman yang digunakan untuk mengkonversi data dari lingkungan bahasa pemrograman berorientasi objek (OOP) dengan lingkungan database relational.

Membuat CRUD Dengan Express dan Sequelize
Setelah Model tersedia, maka model tersebut bisa kita gunakan untuk membuat CRUD.
Beberapa endpoint RESTFul :
•	Get All Todos
Untuk Kita akan membuat sebuah routing entuk get all todo dengan syntax berikut
const todoModel = require('./models').Todo;

app.get('/todos', async function (req, res){
    try{
        const todos = await todoModel.findAll();

        res.status(200).json(todos);
    }catch (error) {
        res.status(500).json({
            massage : error.massage || "internal server error"
        });
    }
});
•	Get Todo Detail By Id
Untuk Kita akan membuat sebuah routing entuk get detail todo berdasarkan Id todo dengan syntax berikut :
const todoModel = require('./models').Todo;

app.get('/todos/:todoId', async function (req, res){
    try{
        const todos = await todoModel.findOne({ id: Number(todoId)});

        res.status(200).json(todos);
    }catch (error) {
        res.status(500).json({
            massage : error.massage || "internal server error"
        });
    }
});
