// 2 ciclos; 4 <> 6 // 5
// Todas las cadenas hasta 2444 son =< 4
// Primera cadena == 5; (2444, 34, 14, 7, 5)

// De 1 a 100.000 todas las cadenas son =< 5
// A partir de 3000, todos los intervalos de 500 tienen cadenas de 5, y ninguno cadenas de 2 desde 2000

// Cuando llegamos a 30.000 (cadena de 3), las cadenas de 3 escasean

// Hasta 1.000, los numeros convergen el 56.50% de veces en 4, el 33.30% en 5 y el 10.20% en 6
// Hasta 10.000, los numeros convergen el 69.15% de veces en 4, el 26.70% en 5 y el 4.15% en 6
// Hasta 15.000, los numeros convergen el 69.05% de veces en 4, el 27.25% en 5 y el 3.70% en 6
// Hasta 50.000, los numeros convergen el 64.12% de veces en 4, el 34.06% en 5 y el 1.82% en 6
// Hasta 100.000, los numeros convergen el 63.34% de veces en 4, el 35.09% en 5 y el 1.56% en 6

var I;
var mi = 1;
var interval = 1000;
var cadenas = TAFFY([]);

var fiveCount = 0;
var fourCount = 0;
var sixCount = 0;

function setup() {
  createCanvas(400, 400);
  background(150);

  // Plotting(56.5, 69.15, 69.05, 64.12, 63.34, 4)
  // Plotting(33.3, 26.7, 27.25, 34.06, 35.09, 5)
  // Plotting(10.2, 4.15, 3.7, 1.82, 1.56, 6)
  //
  // Plotting(44.9, 47.93, 48.15, 49.09, 49.09, 1)

  // noCanvas();
  // Run(mi);
}

function Plotting(y1, y2, extraY, y3, y4, st) {
  y1 = map(y1, 0, 100, height, 0);
  y2 = map(y2, 0, 100, height, 0);
  extraY = map(extraY, 0, 100, height, 0);
  y3 = map(y3, 0, 100, height, 0);
  y4 = map(y4, 0, 100, height, 0);
  x1 = map(1000, 0, 100000, 10, width);
  x2 = map(10000, 0, 100000, 10, width);
  extraX = map(15000, 0, 100000, 10, width);
  x3 = map(50000, 0, 100000, 10, width);
  x4 = map(100000, 0, 100000, 10, width);

  var r = 5;

  if (st == 4) {
    stroke(255, 0, 0)
    fill(255, 0, 0)
  } else if (st == 5) {
    stroke(0, 255, 0)
    fill(0, 255, 0)
  } else if (st == 6) {
    stroke(0, 0, 255)
    fill(0, 0, 255)
  } else {
    stroke(0)
    fill(0, 0)
    r = 2
  }
  ellipse(x1, y1, r);
  ellipse(x2, y2, r);
  ellipse(extraX, extraY, r);
  ellipse(x3, y3, r);
  ellipse(x4, y4, r);
  noFill();
  curve(10,height,10,height,x1,y1,x2,y2);
  curve(10,height,x1,y1,x2,y2,x3,y3);
  curve(x1,y1,x2,y2,x3,y3,x4,y4);
  curve(x2,y2,x3,y3,x4,y4,x4,y4);
}

function Next() {
  mi += interval;
  Run(mi);
}

function CalcLargestChain() {
  var mx = cadenas().max("len");
  var mn = cadenas().min("len");
  console.log("Max " + mx + ",  Min " + mn)
  // cadenas({len:m}).get()
}

function Run(mi) {
  cadenas = TAFFY([]);
  for (var i = mi; i < interval + mi; i++) {
    I = i;
    cadenas.insert({num:i})
     var recursivo = Recursivo(i, "");
  }
  // CalcLargestChain();
  console.log("Cuatro: " + fourCount + "           Cinco: " + fiveCount + "           Seis: " + sixCount);
}

function Recursivo(i, sec) {
  if (i == 5 || i == 4 || i == 6) {
    if (i == 5) {fiveCount ++;} else if (i == 4) {fourCount ++;} else {sixCount ++;}
    sec += i.toString();
    var value = sec.split(", ").length;
    cadenas({num:I}).update({len: value});
    return;
  } else {
    sec += i.toString();
    sec += ", ";
    Recursivo(Nombre(i).length, sec);
  }
}

function Nombre(i) {
	var nombre = "";
	while (i > 0) {
   if (i > 15 && i < 20) {
     nombre += "dieci";
     i -= 10;
   } else if (i > 20 && i < 30) {
     nombre += "veinti";
     i -= 20;
   } else if (i > 30 && i < 40) {
     nombre += "treintay";
     i -= 30;
   } else if (i > 40 && i < 50) {
     nombre += "cuarentay";
     i -= 40;
   } else if (i > 50 && i < 60) {
     nombre += "cincuentay";
     i -= 50;
   } else if (i > 60 && i < 70) {
     nombre += "sesentay";
     i -= 60;
   } else if (i > 70 && i < 80) {
     nombre += "setentay";
     i -= 70;
   } else if (i > 80 && i < 90) {
     nombre += "ochentay";
     i -= 80;
   } else if (i > 90 && i < 100) {
     nombre += "noventay";
     i -= 90;
   } else if (i > 100 && i < 200) {
     nombre += "ciento";
     i -= 100;
   } else if (i > 199 && i < 500) {
     var first = parseFloat(i.toString().charAt(0));
     nombre += Nombre(first);
     nombre += "cientos"
     i -= (parseFloat(first) * 100);
   } else if (i > 499 && i < 1000) {
     var first = 100 * parseFloat(i.toString().charAt(0));
     nombre += baseDatos({num:first}).first().nom;
     i -= (parseFloat(first));
   } else if (i > 999 && i < 2000) {
     nombre += "mil";
     i -= 1000;
   } else if (i > 1999 && i < 1000000) {
     var len = i.toString().length;
     var first = parseFloat(i.toString().substring(0, len-3));
     nombre += Nombre(first);
     nombre += "mil";
     i -= 1000 * (parseFloat(first));
   } else {
     nombre += baseDatos({num:i}).first().nom;
     i -= i;
   }
 }
 return nombre;
}

var baseDatos = TAFFY([
  {num: 1, nom:"uno"},
  {num: 2, nom:"dos"},
  {num: 3, nom:"tres"},
  {num: 4, nom:"cuatro"},
  {num: 5, nom:"cinco"},
  {num: 6, nom:"seis"},
  {num: 7, nom:"siete"},
  {num: 8, nom:"ocho"},
  {num: 9, nom:"nueve"},
  {num: 10, nom:"diez"},
  {num: 11, nom:"once"},
  {num: 12, nom:"doce"},
  {num: 13, nom:"trece"},
  {num: 14, nom:"catorce"},
  {num: 15, nom:"quince"},
  {num: 20, nom:"veinte"},
  {num: 30, nom:"treinta"},
  {num: 40, nom:"cuarenta"},
  {num: 50, nom:"cincuenta"},
  {num: 60, nom:"sesenta"},
  {num: 70, nom:"setenta"},
  {num: 80, nom:"ochenta"},
  {num: 90, nom:"noventa"},
  {num: 100, nom:"cien"},
  {num: 500, nom:"quinientos"},
  {num: 600, nom:"seiscientos"},
  {num: 700, nom:"setecientos"},
  {num: 800, nom:"ochocientos"},
  {num: 900, nom:"novecientos"},
  {num: 1000, nom:"mil"}
])
