let dataapi;
let urlfb = "https://api.openweathermap.org/data/2.5/weather?lat=-5.3263&lon=105.2814&appid=b0a56877a9703d534ecd4eecf8460a4a&units=metric"
// data gambar
let bgp;
let petaa;
let profil;
let logo;
let bawah;

//Data Digram Pie
let dataPekerjaan;
let urlKerja = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRr5G1-B5yF6Dn5OigF0aCSmFl8Lk68j9wsiY7l6J-3MlxxfdqLgfn3JNTIjl8wK8F5UGf6JJBdqgAk/pub?gid=0&single=true&output=csv"
let dataJenisKelamin;
let urlJenis = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQKOubY1bMw_dZsiEwjGrGeapneHzUnqEJYUTZVgbpxtIYOyf-ahy-vN7w395iI5mVHOxkz78yM7A-5/pub?gid=0&single=true&output=csv"
let dataPendidikan;
let urlPendidikan = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1R2nEAaKnG0-FrBZH6WN0WkzWmjqNSiYLgj5e7Hbk8yVrCa-cWpWzmqxxsHfBCp5P1oxraVDqnKAM/pub?gid=0&single=true&output=csv"
let dataSarana;
let urlSarana = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTkyC_KEpkqNl8xCoAMZqjwBxjUhP81aLPzu37yWBzRr7w7jDoydGbmItwIbe1z7C45aU_ktPqWUMVh/pub?gid=0&single=true&output=csv"
let dataUsia;
let urlUsia = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRWbDnkw2K5DvYLuQ5MPZ13633u2gJ-OaOiZJUul-sVxfOA1IMPyIR4Qxzl2ND_iDyyaVZTzHAi5Vdj/pub?gid=0&single=true&output=csv"


let RobotoMonoSemiBold;


function infoCuaca (p, q, data, fontSize){
  textSize (fontSize);
  fill('white')
  noStroke()
  textFont(RobotoMonoSemiBold)

  // Nama Desa
  text (data.name,
        posP = p + 1060,
        posQ = q + 1140,
        textSize (20))
  }



function preload(){
    dataapi = loadJSON(urlfb);
    RobotoMonoSemiBold = loadFont('RobotoMono-Bold.ttf')
    bgp = loadImage('bg.jpg')
    petaa = loadImage('peta.png')
    profil = loadImage('organisasi.jpg')
    logo = loadImage('Logo.png')
    bawah = loadImage('bawah.png')
    dataPekerjaan = loadTable(urlKerja, 'csv', 'header');
    dataJenisKelamin = loadTable(urlJenis, 'csv', 'header');
    dataPendidikan = loadTable(urlPendidikan, 'csv', 'header');
    dataSarana = loadTable(urlSarana, 'csv', 'header');
    dataUsia = loadTable(urlUsia, 'csv', 'header');
}


function setup() {
    createCanvas(1600,3000);
 
    
  }
  
  
  
  function draw() {
    background('white');
    noStroke()

    //background
    image(bgp,0,0,1600,900);
    fill(51,66,87,200);
    rect(0,0,1600,900);

    //Peta Fajar Baru
    fill('black')
    textFont(RobotoMonoSemiBold)
    textSize (17)
    text ("Peta Fajar Baru",220,950)
  
    image(petaa,100,900,500,550)

    //Struktur Kelurahan
    
    image(profil,350,1300,800,550)

    //Logo
    image(logo,530,10,400,180)

    //bawah
    image(bawah,10,2800,1500,200)

    //Fajar Baru
    fill('white')
    textFont(RobotoMonoSemiBold)
    textSize (64)
    text ("Desa Fajar Baru",450,450)

    //Info Desa Fajar Baru
  fill('white')
  rect(800,982,790,300);
  textSize(20)
  textFont(RobotoMonoSemiBold)
  fill('black')
  text("Tentang Desa",910,950)
  
  textSize(17)
  textFont(RobotoMonoSemiBold)
  text("Pada mulanya Desa Fajar Baru merupakan bagian dari Desa Karang",650,1020)
  text("Anyar, yang pada tahun 1959 disebut dengan susukan Fajar Baru. ",650,1040)
  text("Selanjutnya tahun 1960 memisahkan diri dari Desa Karang Anyar dengan ",650,1060+2)
  text("kades A. Sastro Rejo. Tahun 1965 kembali menggabungkan diri dengan ",650,1080+3)
  text("Desa Karang Anyar yang waktu itu dipimpin Kades Hadi Sumarto. ",650,1110+4)
  text("Padatahun 1968-1984 Desa Karang Anyar dipimpin oleh Kades Aliesan Hakim. ",650,1130+5)
  text("Pada tahun tersebut diadakan pemekaran desa dan sebagai penjabat Kades ",650,1150+6)
  text("Bapak Aliesan membuat sebutan Desa Fajar Baru Kecamatan Jati Agung  ",650,1170+7)
  text("Kabupaten Lampung Selatan dan pada tanggal 20 Oktober 1986 ditetapkan ",650,1190+8)
  text("menjadi Desa Persiapan dengan Kepala Desa Persiapan bapak Aliesan dan ",650,1210+9)
  text("menjabat selama 5 tahun",650,1230+10)
 

  //Input sudut setiap data
    anglespek = dataPekerjaan.getColumn('x')
    pieChartpek(200, anglespek);
    anglesjen = dataJenisKelamin.getColumn('x')
    pieChartjen(200, anglesjen);
    anglespen = dataPendidikan.getColumn('x')
    pieChartpen(200, anglespen);
    angleslul = dataSarana.getColumn('x')
    pieChartlul(200, angleslul);
    anglesus = dataUsia.getColumn('x')
    pieChartus(200, anglesus);
  
  }

    function pieChartpek(diameterpek, dataPekerjaan) {
        let lastAnglepek = 0;
        var piecolorpek = ['#FA8072','#F4A460 ','#2E8B57 ','#A0522D ','#4682B4 ', '#87CEEB','#6A5ACD']
        for (var i = 0; i < dataPekerjaan.length; i++) {
          fill(piecolorpek[i])
          arc(
            720,2000,
            diameterpek,
            diameterpek,
            lastAnglepek,
            lastAnglepek + radians(anglespek[i])
          );
          lastAnglepek += radians(anglespek[i]);
        }
        //Data Pekerjaan
        fill('white')
        //rect(545,2953,350,450)
        textSize(18)
        textFont(RobotoMonoSemiBold)
        fill('black')
        text("Data Pekerjaan",660,1850)
        
        textSize(12)
        textFont(RobotoMonoSemiBold)
        text("Karyawan                    = 963",600,2130)
        text("Wiraswasta                  = 368",600,2150)
        text("Petani                      = 527",600,2170)
        text("Peternak                    = 80",600,2190)
        text("Buruh Tani                  = 869",600,2210)
        text("Pengrajin                   = 50",600,2230)
        text("Lainnya                     = 379",600,2250)
        

        //Warna
        fill(piecolorpek[0]) ;
        ellipse(780,2125,10,10);
        fill(piecolorpek[1]) ;
        ellipse(780,2145,10,10);
         fill(piecolorpek[2]) ;
        ellipse(780,2165,10,10);
         fill(piecolorpek[3]) ;
        ellipse(780,2185,10,10);
         fill(piecolorpek[4]) ;
        ellipse(780,2205,10,10);
         fill(piecolorpek[5]) ;
        ellipse(780,2225,10,10);
         fill(piecolorpek[5]) ;
        ellipse(780,2245,10,10);
         fill(piecolorpek[6]) ;
        
      }
      
      function pieChartjen(diameterjen, dataJenisKelamin) {
        let lastAnglejen = 0;
        var piecolorjen = ['#94D2BD ','#EE9B00']
        for (var i = 0; i < dataJenisKelamin.length; i++) {
          fill(piecolorjen[i])
          arc(
            275,2000,
            diameterjen,
            diameterjen,
            lastAnglejen,
            lastAnglejen + radians(anglesjen[i])
          );
          lastAnglejen += radians(anglesjen[i]);
        }
        //Data Jenis Kelamin
        fill('white')
        //rect(545,2953,350,450)
        textSize(18)
        textFont(RobotoMonoSemiBold)
        fill('black')
        text("Data Jenis Kelamin",195,1850)
        
        textSize(12)
        textFont(RobotoMonoSemiBold)
        text("Pria                = 3890",170,2130)
        text("Wanita              = 4054",170,2150)
        

        //penanda warna
        fill(piecolorjen[0]) ;
        ellipse(300,2130,10);
        fill(piecolorjen[1]) ;
        ellipse(300,2150,10);
         
    }

    function pieChartpen(diameterpen, dataPendidikan) {
      let lastAnglepen = 0;
      var piecolorpen = ['#D8BFD8','#005F73 ','#0A9396 ','#94D2BD ','#E9D8A6 ', '#EE9B00','#CA6702']
      for (var i = 0; i < dataPendidikan.length; i++) {
        fill(piecolorpen[i])
        arc(
          1200,2000,
          diameterpen,
          diameterpen,
          lastAnglepen,
          lastAnglepen + radians(anglespen[i])
        );
        lastAnglepen += radians(anglespen[i]);
      }
      //Data Pendidikan
      fill('white')
      //rect(545,2953,350,450)
      textSize(18)
      textFont(RobotoMonoSemiBold)
      fill('black')
      text("Data Pendidikan",1150,1850)
      
      textSize(12)
      textFont(RobotoMonoSemiBold)
      text("TK                         = 190",1100,2130)
      text("SD                         = 1237",1100,2150)
      text("SMP                        = 1052",1100,2170)
      text("SMA/SMU                    = 974",1100,2190)
      text("Akademi/D1-D3              = 203",1100,2210)
      text("Sarjana                    = 92",1100,2230)
      text("PascaSarjana               = 18",1100,2250)
      

      //penanda warna
      fill(piecolorpen[0]) ;
      ellipse(1275,2125,10,10);
      fill(piecolorpen[1]) ;
      ellipse(1275,2145,10,10);
       fill(piecolorpen[2]) ;
      ellipse(1275,2165,10,10);
       fill(piecolorpen[3]) ;
      ellipse(1275,2185,10,10);
       fill(piecolorpen[4]) ;
      ellipse(1275,2205,10,10);
       fill(piecolorpen[5]) ;
      ellipse(1275,2225,10,10);
       fill(piecolorpen[6]) ;
      ellipse(1275,2245,10,10);
   
    }

    //chart sarana prasarana
    function pieChartlul(diameterlul, dataSarana) {
      let lastAnglelul = 0;
      var piecolorlul = ['#D8BFD8','#005F73 ','#0A9396 ','#94D2BD ']
      for (var i = 0; i < dataSarana.length; i++) {
        fill(piecolorlul[i])
        arc(
          480,2420,
          diameterlul,
          diameterlul,
          lastAnglelul,
          lastAnglelul + radians(angleslul[i])
        );
        lastAnglelul += radians(angleslul[i]);
      }
      //Data Sarana
      fill('white')
      //rect(545,2953,350,450)
      textSize(18)
      textFont(RobotoMonoSemiBold)
      fill('black')
      text("Sarana Prasarana",400,2300)
      
      textSize(12)
      textFont(RobotoMonoSemiBold)
      text("Prasarana Kesehatan        = 6",330,2550)
      text("Prasarana Pendidikan       = 12",330,2570)
      text("Prasarana Ibadah           = 26",330,2590)
      text("Prasarana Umum             = 5",330,2610)
      
      

      //penanda warna
      fill(piecolorlul[0]) ;
      ellipse(505,2545,10,10);
      fill(piecolorlul[1]) ;
      ellipse(505,2565,10,10);
       fill(piecolorlul[2]) ;
      ellipse(505,2585,10,10);
       fill(piecolorlul[3]) ;
      ellipse(505,2605,10,10);
     
   
    }

    //Chart Usia
    function pieChartus(diameterus, dataUsia) {
      let lastAngleus = 0;
      var piecolorus = ['#D8BFD8','#005F73 ','#0A9396 ']
      for (var i = 0; i < dataUsia.length; i++) {
        fill(piecolorus[i])
        arc(
          880,2420,
          diameterus,
          diameterus,
          lastAngleus,
          lastAngleus + radians(anglesus[i])
        );
        lastAngleus += radians(anglesus[i]);
      }
      //Data Usia
      fill('white')
      //rect(545,2953,350,450)
      textSize(18)
      textFont(RobotoMonoSemiBold)
      fill('black')
      text("Data Usia",830,2300)
      
      textSize(12)
      textFont(RobotoMonoSemiBold)
      text("0-15 Tahun               = 267",730,2550)
      text("15-65 Tahun              = 1373",730,2570)
      text("65 + Tahun               = 1689",730,2590)
      
      
      //penanda warna
      fill(piecolorus[0]) ;
      ellipse(900,2545,10,10);
      fill(piecolorus[1]) ;
      ellipse(900,2565,10,10);
       fill(piecolorus[2]) ;
      ellipse(900,2585,10,10);
    
    }