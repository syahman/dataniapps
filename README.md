33 JAM HACKATON 2015 : DATA TERBUKA SEKTOR AWAM 
==================


Aplikasi Data Tani adalah aplikasi yang akan membantu para petani, penternak dan nelayan atau mereka yang berminat dengan Agro Pertanian untuk mendapatkan maklumat setempat tentang statistik, trend dan jangkaan dalam bidang pertanian.

Aplikasi ini dibangunkan bersempena pertandingan "33 Jam HACKATHON: Data Terbuka Sektor Awam" anjuran 
Unit Pemodenan Tadbiran dan Perancangan Pengurusan (MAMPU) dengan kerjasama Telekom Malaysia Berhad, 
GITN Sdn Bhd dan Multimedia Development Corporation (MDeC).

Aplikasi ini dibangunkan oleh kumpulan #codehijau yang diangotai oleh 4 orang 
penjawat awam daripada KDN, JPN & KPKT.

PENAFIAN
==================
Pihak pembangun Data Tani tidak bertanggungjawab terhadap sebarang kehilangan atau 
kerosakan yang dialami kerana menggunakan maklumat dalam aplikasi ini. Data yang diambil dari 
laman Data Terbuka Sektor Awam (data.gov.my) adalah hak milik Kerajaan Malaysia. 
Terma dan Syarat penggunaannya boleh dirujuk di [pautan ini](http://data.gov.my/folders/others/Terma_Penggunaan_Data_Terbuka_01042015.pdf) 

SCREENSHOTS
==================
![image](https://cloud.githubusercontent.com/assets/2078663/9829914/51b2f8b2-594c-11e5-9726-d849354355a2.png)

![image](https://cloud.githubusercontent.com/assets/2078663/9829915/52a9edf2-594c-11e5-94f4-3ab3dae1d2d5.png)

![image](https://cloud.githubusercontent.com/assets/2078663/9829913/51ad4642-594c-11e5-96c9-b4f3996aa2f6.png)

![image](https://cloud.githubusercontent.com/assets/2078663/9829912/51567524-594c-11e5-8168-117d93e56373.png)

Aplikasi ini dibangunkan dengan menggunakan Kendo UI Core (Mobile) dan Cordova. 
Sila ikut arahan pemasangan (in English).

## Prerequisites to run/build app

* [NodeJS](http://nodejs.org/) & [NPM](https://www.npmjs.org/) (installed globally)
  * [Bower](http://bower.io/) (installed globally)
* A browser. Its intended to run on mobile browsers but can run on any browser. Therefore you can immediately download this code, install all the dependencies, and run/build this application.

## Install npm and bower dependencies

It's assume you have forked or downloaded this repository and will run the following commands in the terminal from the directory you downloaded


```sh
$ sudo npm install
```

then

```sh
$ bower install
```

## Build, server, and watch development code

To build, serve, and watch src changes during development run the following gulp task:

```sh
$ gulp dev
```

This task will start a server, open a browser, and serve the app at localhost:3027 (from `wwwDev` directory) and reload upon any changes made in `src` directory (i.e. watching for changes so application can be rebuilt and reloaded in browser). The `gulp dev` build process is ran during development to manage tasks required to build the application. You can kill the server & watching using Ctrl + C.

Run `gulp dev` at least once before you run the `gulp prod`.

## Build & serve production code 

To build, test, and server production code run the following gulp task:

```sh
$ gulp prod
```

This task will take files from `wwwDev` directory and produce a production ready version of the application saved in the `wwwProd` directory. This command also will spin up a server, open a browser, and serve the production ready files at http://localhost:3028. This command must be manually re-run, it's not being watched for changes in the src files. You can kill the server using Ctrl + C.

Do a build only after you have run `gulp dev` at least once and the `wwwProd` directory has been created.



