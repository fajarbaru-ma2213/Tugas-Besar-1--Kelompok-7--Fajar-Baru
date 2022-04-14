//cuaca
let urlAPI ="https://api.openweathermap.org/data/2.5/weather?q=REJOMULYO&appid=1e7d6a61963583838b8ea02a9c6a6921&units=metric";
let dataAPI;


//Data Digram Pie
let dataPiejk;
let urljk = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9T9GJnmdnTIWXdIxBBkOuBmmuc_TDfCikBV1Pgs1_4g0JqDMCH_7MwmQvK0AqPkWgCl6_kN1yxTZ3/pub?gid=0&single=true&output=csv"

let dataPieAgama ;
let urlAgama = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS9JmowYjoh6-9bJzvVaFUXZ4Mw2eI349DX_Dvhii_N2Aj6BRenRYsBcNvRJk-oAL6n5VeEAZH850wg/pub?gid=0&single=true&output=csv"

let dataPendidikan;
let urlpen = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRBMbbatu1h1oK29etlCjPZ9tJOT5xMfNhEa2th5EFSrFIKgSSQMApOT04Vny5d5hRkIVLu4so5ZSuO/pub?output=csv"

let dataPekerjaan;
let urlpek = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZvTwIvSvkC2v6InahGm6Ma7oOOamYaC3jbW2bIThNF8qYkIXbuScTx1_Wg8W-K6W8Rv-RDQBvk7qf/pub?output=csv"


//insert gambar
//let latar;
//let semua;
//let sumber;
//let bawah;
//let peta;
//let organigram;
let RobotoMonoSemiBold;
let RobotoMonoMedium;
let RobotoMonoExtraLight;
r = 15


function infoCuaca (p, q, data, fontSize){
  textSize (fontSize);
  fill('white')
  noStroke()
  textFont(RobotoMonoExtraLight)

  // Nama Desa
  text (data.name,
        posP = p + 1060,
        posQ = q + 1140,
        textSize (20))
// Cuaca
  text(data.weather [0].main,
      posP= p + 1300,
      posQ= q + 1100,
      textSize (30))
  text('Cuaca',
      posP = p + 1300,
      posQ = q + 1120,
      textSize(13))
// temperatur
  text(data.main.temp+"°c",
      posP =p + 1060,
      posQ =q + 1180,
      textSize(40))

// kecepatan angin
  text('Kecepatan Angin',
      posP = p + 1300,
      posQ = q + 1200,
      textSize(13))
  text(data.wind.speed +" km/h ",
      posP =p + 1300 ,
      posQ =q +1180, 
      textSize (30))
// kelembaban
  text (data.main.humidity + " % ",
      posP = p + 1300,
      posQ = q + 1260 ,
      textSize (30))
  text('Kelembaban',
      posP = p + 1300,
      posQ = q +1260+20,
      textSize(13))
  }

function preload(){
  dataAPI = loadJSON(urlAPI);
  //latar = loadImage('Latar.jpg');
  //bawah = loadImage('bawah.jpg');
  //peta = loadImage('peta.jpg')
 // semua =loadImage('semua.jpg');
  //sumber = loadImage('sumber.jpg')
  //organigram = loadImage('Organigram.jpg');
  RobotoMonoSemiBold = loadFont('RobotoMono-Bold.ttf')
  RobotoMonoMedium = loadFont('RobotoMono-Medium.ttf')
  RobotoMonoExtraLight = loadFont('RobotoMono-Light.ttf')
  dataPiejk = loadTable(urljk, 'csv', 'header');
  dataPieAgama = loadTable(urlAgama, 'csv', 'header');
  dataPendidikan = loadTable(urlpen, 'csv', 'header');
  dataPekerjaan = loadTable(urlpek, 'csv', 'header');
}

function setup() {
  createCanvas(1600,3600);
  //noLoop(); // Run once and stop
  
}



function draw() {
  background('white');
  noStroke()
  
//Background
  image(latar,0,0,1600,900);
  fill(51,66,87,200);
  rect(0,0,1600,900);
  
//Logo
  image(semua,450,187,781,493);
  
//Organigram
  //rect(100,1502,800,500)
  image(organigram,10,1400,1000,625)
  
//Peta Desa
  //fill('yellow')
  //rect(1000,1380,500,500)
  fill('black')
  textFont(RobotoMonoMedium)
  textSize (20)
  text ("Peta Desa",1200,1410)
  
  image(peta,1040,1440,500,400)
  
//Tentang Rejomulyo
  fill('white')
  rect(100,952,800,500);
  textSize(20)
  textFont(RobotoMonoMedium)
  fill('black')
  text("Tentang Rejomulyo",410,980)
  
  textSize(18)
  textFont(RobotoMonoExtraLight)
  text("Desa Rejomulyo terbentuk diawali dari datangnya Bapak Rasman dari Jawa .",110,1020)
  text("ke Lampung mengikuti istrinya yang masih keturunan belanda bernama Jeane ",110,1040+r)
  text("Lavre. Pada tanggal 8 Januari 1951 setelah melalui persidangan kampung ",110,1060+2*r)
  text("tersebut Desa Rejomulyo resmi menjadi perkampungan. ",110,1080+3*r)
  text("Desa Rejomulyo merupakan salah satu dari 21 Desa di Wilayah Kecamatan ",110,1110+4*r)
  text("Jati Agung dengan batas wilayah sebelah utara merupakan Desa Sukadamai ",110,1130+5*r)
  text("Kec. Natar, sebelah selatan Desa Karang Anyar Kec. Jati Agung, sebelah ",110,1150+6*r)
  text("barat Desa Pancasila Kec. Natar, sebelah timur Desa Karang Rejo Kec. ",110,1170+7*r)
  text("Jati Agung. Desa Rejomulyo mempunyai luas wilayah seluas 1.500 Ha Desa ",110,1190+8*r)
  text("Rejomulyoterletak ditempat strategis karena merupakan jalur perlintasan ",110,1210+9*r)
  text("menuju Kab. Lampung Timur dan Metro. Hingga saat ini Desa Rejomulyo ",110,1230+10*r)
  text("pernah dipimpin oleh 12 Kepala Desa dan memiliki sebanyak 8 dusun.",110,1250+11*r)
  
  
//Dashboard Text
  fill('white');
  textFont(RobotoMonoSemiBold);
  textSize(30);
  text("Dashboard",30,60);

//Bawah
  image(bawah,0,3455,1600,145)


  
//Informasi Cuaca
  rect(1000,950,500,400)
  fill('black')
  textFont(RobotoMonoMedium)
  textSize (20)
  judul = ('Informasi Cuaca')
  text (judul,1160,980)
  
  fill (51,66,87,200);
  rect (1045,1060,422,250,20);

  // info cuaca
  infoCuaca (0, 0, dataAPI, 500/20)
  
  textFont(RobotoMonoExtraLight)
  fill(0);
  noStroke();
  textSize(18);
  
  var currentYear = year();
  var currentMonth = month();
  var currentDay = day();
  var currentHour = hour();
  var currentMinute = minute();
  var currentSecond = second();
  var currentDate = currentDay + '/' + nf(currentMonth, 2) + '/' + nf(currentYear, 2);
  var currentTime = currentHour + ':' + nf(currentMinute, 2) + ':' + nf(currentSecond, 2);

  // tanggal
  text(currentDate, 1050, 1050);
  //waktu
  text(currentTime, 1350,1050);
  image(sumber,1060,1200,200,85)
  
//Data Umur
  fill('white')
  rect(100,2051,800,400)
  fill('black')
  
  textFont(RobotoMonoMedium)
  textSize(30)
  text("Data Statistik Desa Rejomulyo",250,2000)
  textSize(18)
  text("Data Usia",450,2080)
  
  textFont(RobotoMonoExtraLight)
  rect(180,2100,1,300)
  rect(180,2400,600,1)
  fill('#94D2BD')
  rect(215,2120,75,280)
  fill('#E9D8A6')
  rect(340,2160,75,240)
  fill('#EE9B00')
  rect(465,2300,75,100)
  fill('#CA6702')
  rect(590,2375,75,25)
  
  //jumlah data
  textSize(16)
    fill ('black');
    text(0,170,2400);
    text(500,150,2350);
    text(1000,140,2300);
    text(1500,140,2250);
    text(2000,140,2200);
    text(2500,140,2150);
    text(3000,140,2100);
  
  text('0-30 Thn', 215,2420);
  text('30-60 Thn', 340,2420);
  text('60-90 Thn', 465,2420);
  text('>90 Thn', 590,2420);
  
  anglesjk = dataPiejk.getColumn('x')
  pieChartjk(200, anglesjk);
  
  anglesagama = dataPieAgama.getColumn('x')
  pieChartagama(200, anglesagama);
  
  anglespen = dataPendidikan.getColumn('x')
  pieChartpen(200, anglespen);
  
  anglespek = dataPekerjaan.getColumn('Y')
  pieChartpek(200, anglespek);
}

function pieChartjk(diameterjk, dataPeijk) {
  let lastAnglejk = 0;
  var piecolorjk = ['#364F6B ','#FC5185 '];
  for (var i = 0; i < dataPeijk.length; i++) {
    fill(piecolorjk[i]);
    arc(
      275,
      2670,
      diameterjk,
      diameterjk,
      lastAnglejk,
      lastAnglejk + radians(anglesjk[i])
    );
    lastAnglejk += radians(anglesjk[i]);
  }
  //Data Jenis Kelamin
  fill('white')
  //rect(100,2503,350,400)
  fill('black')
  //text
  textSize(18)
  textFont(RobotoMonoMedium)
  text("Data Jenis Kelamin",180,2538)
  textFont(RobotoMonoExtraLight)
  text("Laki-Laki         = 3408",140,2828)
  text("Perempuan         = 3011",140,2858)
  
  //penanda warna
  fill(piecolorjk[0]) ;
  circle(300,2823,18);
  fill(piecolorjk[1]) ;
  circle(300,2853,18);
}

function pieChartagama(diameter, dataPeiAgama) {
  let lastAngle = 0;
  var piecoloragama = ['#005F73 ','#0A9396 ','#94D2BD ','#E9D8A6 '];
  for (var i = 0; i < dataPeiAgama.length; i++) {
    fill(piecoloragama[i])
    arc(
      720,
      2670,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(anglesagama[i])
    );
    lastAngle += radians(anglesagama[i]);
  }
  
  fill('white')
  //rect(545,2503,350,400)
  
  fill('black')
  textFont(RobotoMonoMedium)
  text("Data Agama",660,2538)
  
  textFont(RobotoMonoExtraLight)
  text("Islam        = 6272",615,2800)
  text("Katholik     = 93",615,2820)
  text("Kristen      = 45",615,2840)
  text("Hindu        = 9",615,2860)
  
  
  fill(piecoloragama[0]) ;
  circle(730,2795,16);
  fill(piecoloragama[1]);
  circle(730,2815,16);
  fill(piecoloragama[2]);
  circle(730,2835,16);
  fill(piecoloragama[3]) ;
  circle(730,2855,16);
  
}

function pieChartpen(diameter, dataPendidikan) {
  let lastAngle = 0;
  var piecolorpen = ['#001219','#005F73 ','#0A9396 ','#94D2BD ','#E9D8A6 ', '#EE9B00','#CA6702','#BB3E03']
  for (var i = 0; i < dataPendidikan.length; i++) {
    fill(piecolorpen[i])
    arc(
      275,3120,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(anglespen[i])
    );
    lastAngle += radians(anglespen[i]);
  }
  // Data Pendidikan
  fill('white')
  //rect(100,2953,350,450)
  textSize(18)
  textFont(RobotoMonoMedium)
  fill('black')
  text("Data Pendidikan",195,2989)
  
  textSize(12)
  textFont(RobotoMonoExtraLight)
  text("Tdk/Blm Sekolah      = 1096",170,3250)
  text("Blm Tamat SD         = 93",170,3270)
  text("SD/Sederajat         = 2048",170,3290)
  text("SLTP/Sederajat       = 1299",170,3310)
  text("SLTA/Sederajat       = 1225",170,3330)
  text("DIPLOMA              = 14",170,3350)
  text("STRATA I             = 48",170,3370)
  text("STRATA II            = 1",170,3390)
  
  fill(piecolorpen[0]) ;
  circle(300,3245,10);
  fill(piecolorpen[1]) ;
  circle(300,3265,10);
   fill(piecolorpen[2]) ;
  circle(300,3285,10);
   fill(piecolorpen[3]) ;
  circle(300,3305,10);
   fill(piecolorpen[4]) ;
  circle(300,3325,10);
   fill(piecolorpen[5]) ;
  circle(300,3345,10);
   fill(piecolorpen[6]) ;
  circle(300,3365,10);
   fill(piecolorpen[7]) ;
  circle(300,3385,10);
}
function pieChartpek(diameterpek, dataPekerjaan) {
  let lastAnglepek = 0;
  var piecolorpek = ['#001219','#005F73 ','#0A9396 ','#94D2BD ','#E9D8A6 ', '#EE9B00','#CA6702']
  for (var i = 0; i < dataPekerjaan.length; i++) {
    fill(piecolorpek[i])
    arc(
      720,3120,
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
  textFont(RobotoMonoMedium)
  fill('black')
  text("Data Pekerjaan",660,2989)
  
  textSize(12)
  textFont(RobotoMonoExtraLight)
  text("Wiraswasta                   = 267",600,3250)
  text("Mengurus Rumah Tngga         = 1373",600,3270)
  text("Tidak Bekerja                = 1689",600,3290)
  text("Petani                       = 473",600,3310)
  text("Karyawan BUMN                = 188",600,3330)
  text("Buruh                        = 632",600,3350)
  text("Pelajar                      = 585",600,3370)
  
  //penanda warna
  fill(piecolorpek[0]) ;
  ellipse(780,3245,10,10);
  fill(piecolorpek[1]) ;
  ellipse(780,3265,10,10);
   fill(piecolorpek[2]) ;
  ellipse(780,3285,10,10);
   fill(piecolorpek[3]) ;
  ellipse(780,3305,10,10);
   fill(piecolorpek[4]) ;
  ellipse(780,3325,10,10);
   fill(piecolorpek[5]) ;
  ellipse(780,3345,10,10);
   fill(piecolorpek[5]) ;
  ellipse(780,3365,10,10);
  
}