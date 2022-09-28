Writing dan Presentation Test
    RANGKUMAN WEEEK 1

Unix Command Line

    - Shell merupakan sebutan untuk perantara yang digunakan user dan sistem operasi dalam berkomunikasi
    - Contoh terminal basic atau basic shell pada windows adalah powershell dan CMD
    - Command Line merupakan sebutan untuk shell yang berbasis teks
    - Command Line interface merupakan tampilan dari sebuah terminal yang digunakan untuk menjalankan suatu program, mengelola file dan berinteraksi dengan komputer.

    Perintah dasar pada Unix Command Line

    pwd digunakan untuk melihat posisi directory terkini
    ls digunakan untuk melihat isi files suatu directory, ada juga ls - a untuk melihat isi files yang tersembunya atau dihidden
    cd merupakan command untuk berpindah directory
    mkdir digunakan untuk membuat directory baru
    Touch digunakan untuk membuat file directory
    ni digunakan untuk membuat file di windows
    mkdir merupakan command untuk membuat directory baru
    cp digunakan untuk menyalin file
    cp -r digunakan untuk menyalin directory
    mv digunakan untuk memindahkan atau mengubah nama file dan directory
    rm merupakan command untuk menghapus files
    rm -r digunakan untuk menghapus directory


Git dan Github

    Git merupakan tools dalam memversikan program
    Git digunakan sebagai version control system serta dapat digunakan untuk melacak segala perubahan pada suatu file atau folder maupun source code
    Vendor Git yaitu Github, Gitlab, Bitbucket. Github merupakan vendor git yang paling umum digunakan dan sebagai tempat penyimpanan Git Repository

Setup Awal GIT
Konfigurasi git
git config global user.name "fauzi"
git config global user.email fauziibnuhakim27@gmail.com
Melihat hasil konfigurasi dengan git config --list Config list
Membuat Repository
git init (dilakukan didalam folder yang dibuat)
git Status digunakan untuk melihat apakah terjadi perubahan atau tidak pada Git
git add untuk menambah file baru/file yang telah diubah pada Git
git remote menghubungkan remote repository dengan project local yang telah kita buat direktorinya
git commit -m "commit message" digunakan untuk menyimpan perubahan pada Git
git push -u origin master digunakan untuk mengirimkan/perubahan file ke remote repository
git branch -b [nama branch] digunakan untuk membuat branch baru
git checkout digunakan untuk berpindah branch
git merge digunakan untuk menggabungkan branch cabang ke branch master ( git merge origin/(nama branch))


HTML
Merupakan bahasa komputer yang digunakan untuk membuat kerangka atau struktur untuk Web pages (halaman website) di internet. Bagaimana peran HTML pada web development? Web browser seperti Chrome, Firefox, Edge, Safari, atau Opera akan membaca dokumen HTML. Dokumen HTML yang berisi tag-tag HTML akan memberitahu browser bagaimana cara menampilkan sebuah konten.

Kerangka HTML

<!DOCTYPE html>
<html lang="en">
<head>
	<title>Document</title>
</head>
<body>
	
</body>
</html>

Tag HTML
Tag adalah sebauh penanda awalan dan akhiran dari sebuah elemen di HTML. Tag dibuat dengan kurung siku (<...>), lalu di dalamnya berisi nama tag dan kadang juga ditambahkan dengan atribut. 
Tag selalu ditulis berpasangan. Ada tag pembuka dan ada tag penutupnya. Namun, ada juga beberapa tag yang tidak memiliki pasangan penutup. Tag penutup ditulis dengan menambahkan garis miring (/) di depan nama tag. 

Contoh pada Tag
<b>Tebal</b>
<i>Miring</i>


CSS (Cascading Style Sheets)

Definisi CSS
CSS adalah bahasa komputer yang digunakan untuk menambahkan design ke suatu halaman website di internet agar terlihat lebih cantik/menarik. CSS adalah singkatan dari Cascading Style Sheets. Kita ibaratkan HTML adalah kerangka yang memberi sturuktur pada website, maka CSS adalah baju yang memberi warna dan layout pada website. 

Cara Menggunakan CSS
a. Inline Style
    Menambahkan CSS langsung pada atribut HTML
b. Internal CSS
    Menggunakan element/tag <style> untuk menyisipkan kode CSS dan diletakan di dalam <head>
c. Eksternal CSS
    Menyisipkan kode CSS dengan cara membuat file CSS terpisah lalu menyambungkan dengan file HTML dengan menggunakan element. Element tersebut diletakan didalam element

CSS Syntax
CSS Syntax adalah syntax yang digunakan untuk menunjuk atau memilih HTML element mana yang ingin diberi style (dihias). CSS syntax terdiri dari selector, property, dan value. 

h1 {
	color: white;
}

Keterangan :
h1 : Selektor 
Color : Property 
White : Value


Algorithm and Pseudocode

    Algoritma adalah deskripsi berupa step-step yang dibutuhkan untuk mnyelesaikan suatu masalah
    Algoritma berfungsi untuk menyelesaikan masalah secara runut
    Kualitas suatu algoritma :
        Input & output harus jelas/ didefinisikan terlebih dahulu dengan tepat
        Setiap step harus benar -benar clear dan tidak ambigu
        Algoritma seharusnya tidak mengandung suatu code pada bahas pemrograman tertentu.
        algoritma harus dibuat agar dapat digunakan dlm bahas pemrograman apapun
    Kenapa harus mempelajari algotima :
        Pemrograman merupakn algoritma dan struktur data
        Data struktur dgunakan untk mngelola sebuah data
        Algoritma menyelesaikan suatu permsalahan menggunakan sebuah data tersebut.
    Contoh Algoritma

Input 1 = 10
Input 2 = 5
Output = Input 1 + Input 2
Print ("Result", output)

    Pseudocode merupakan tools yang digunakan untuk menulis algoritma.
    Panduan menulis pseudocode :
        Huruf kapital digunakan untuk menulis perintah
        1 statement hanya terdiri dari 1 baris
        Menggunakan indentasi
        Harus bersifat spesifik dan simple

    Jenis Pseudocode :
        Procedural : cara berpikir runut
        Conditional: jika dibutuhkan suatu percabangan masalah (if else)
        Looping : sebuah perintah yg diulang-ulang
        Recursive : sebuah perintah yang memanggil method/function didalam sebuah function
