// implicit global változó lesz a szöveg
// global: a szoveg valtozo mindenhol elérhető lesz a kódban
// implicit global valtozot lehetoleg ne használjunk!
szoveg = '3';

console.log(szoveg);


// szekvencia: a program az utasitásokat, sornként hajtja végre egymás után

//innentol minden strict mode-ban van:
console.log('hello');


(function() {
  'use strict';
    //minden amit ide írok az strick mode-ban fog futni
    //a strick mode szigorubb szabalyokkal futtatja
    //a javascript kodot, és tobb hibat fog kiirni a bongeszo
    //amit enélkül nem tenne meg
    
    // ez egy ujradeklarálhato változo lesz:
  var szoveg2 ='valami';
  console.log(szoveg2);
    
    // erre nem kapunk hibat mert a var kulcsszoval deklarált változót uhradeklarálhatjuk:
  var szoveg2 = 'valami';
    
  let szoveg3 = 'ezt let-el hoztuk létre';
  console.log(szoveg3);
    // alet kulcsszoval letrehozott valtozokat nem lehet ujradeklarálni,
    // a kovetkezo sort ha nem kommentezzük ki, hibat kapunk:
    //let szoveg3 = "ezt let-el hoztuk létre";
    
    
    
    // automatic semicolon insertion,
    // ha kihagyjuk a pontosvesszőt, akkor a javascript
    // megprobálja betenni helyettünk, (ez néha sikerül, néha nem...)
    
    // ez egy értékadás, nem deklarálás:
  szoveg3 = 'uj erteket kap a szoveg3';
    
    // a console.log egy fuggveny aminek atadjuk a a szobeg3 valtozot
    // a console.log egy más ember által írt kód, ami azt csinálja a neki adott valtozoval, hogy kiirja a consol-ra
  console.log(szoveg3);
    
    // kiirathatunk egyszerre szoveget és változot is:
  let szam1 = 94;
  console.log('a szam1 valtozo értéke: ' +szam1);
    
    // szoveg tipusa string:
  console.log('szoveg3 tipusa: '+typeof(szoveg3));
    // a szam1 tiousát is kiiratjuk:
  console.log('szam1 változó tipusa: '+typeof(szam1));
    
  szam1 = 34;
    
    
  let a = 3;
  let b = 9;
  // kicseréljül két változó értékét, egy harmadik (segédváltozó) segitségével
  console.log('a értéke: '+a+' b értéke: '+b);
  let c = a;
  a = b;
  b = c;
  console.log('a értéke: '+a+' b értéke: '+b);
  
   // boolean változó tipus
   // logikai változó, két értéke lehet, true vagy false
  let kapcsolo = false;
  
    // elágazás, ha a feltételben lévő rész igaz akkor a {}-ben lévő rész lefut
  if (kapcsolo === true) {
    console.log('A kapcsolo be van kapcsolva');
  }
  else{
    console.log('A kapcsolo ki van kapcsolva');
  }
  
  let nev = 'Geza';
    // 3db egyenloseggel hasonlitunk össze értékeket!!
    // a 3db egyenlosegjel a tipust is hasonlitja
    // a 2db egyenlosegjel nem hasonlit tipust: pl
    // 3 == '3' > true
    // 3 === '3' > false
  if( nev === 'Geza') {
    console.log('Geza kék az ég');
  }
    // hoisting
  console.log('a palack értéke: '+palack); // ebben a sorban már létezik 
    // a palack változo csak még nem kapott értéket, ezért "undefined"
    // csak a var kulcsszoval deklarált változokra érvényes a hoisting
  var palack = 'szilva';
  
  let szam = 0;
  // ez olyan mint ha azt irnám hogy szam = szam + 1
  szam++;
  szam+=4;
  console.log('szam értéke: '+szam);
  
  //-------------------------------------------------------------------------------------------
  // ------------------------------------CIKLUSOK----------------------------------------------
  // ------------------------------------------------------------------------------------------
  
  //a {} -ban lévő rész addig fut, amíg a while-ban lévő feltétel igaz
  while ( szam >= 0) {
    szam--;
    console.log('a szambol levontunk egyet: '+szam);
  }
  
  //végtelen ciklus:
  //while (true){
  //}
  
  //ezt a változó tipust tömbnek hívjuk
  //több elemet tartalmazhat a tömb
  let szamok = [3,4,5,6,7,8,9];
  //javascript-ben a tömb is object
  console.log('a szamok tipusa: '+typeof(szamok));
  console.log('a tömb 0. eleme: '+szamok[0]);
  
  //for ciklusban meg kell adni hoyg mettül meddig menjünk
  //és azt is hogy hányassával lépkedjünk, az i++ azt jelenti hogy egyesével megyünk
  for(let i=0; i <szamok.length; i++){
    console.log('a szam: '+szamok[i]);
  }
  
  //ellenőrizzük hogy van e 9es a tömb-ben:
  for (let i = 0; i < szamok.length; i++) {
    if (szamok[i] === 9) {
      console.log('van 9es a számok között');
    }
  }
  let j = 0;
  while ( j < szamok.length ) {
    console.log('a szam: '+szamok[j]);
    j++;
  }
  
  // -------------------------------------------------------------------------------------------
  // --------------------------------------FÜGGVÉNYEk--------------------------------------------
  // -------------------------------------------------------------------------------------------
  
  // 1. function statement
  // erre érvényes a hoisting
  
  // ez egy olyan kódresz, amit késöbb újra fel tudunk használni
  // az összeadás függvénynek két bemeneti paramétere van
  function osszeadas (szam1, szam2) {
    // a szam1 és szam2 number tipusunak kell hogy legyen (mindkettő feltétel 
    // igaz kell hogy legyen, ezért rakunk köze && (AND) jelet)
    if ((typeof(szam1) === 'number') && (typeof(szam2) === 'number') ) {
      let eredmeny = szam1 + szam2;
      console.log ('az eredmeny: '+eredmeny);
    }
    else {
      console.log('error, nem számot kaptam!');
    }
  }
  
  // itt használjuk fel az összeadás függvényünket
  osszeadas(6,9);
  osszeadas('34',9);
  
  
  // 2. function expression
  // erre nem érvényes a hoisting
  
  let convertToNumber = function(szam) {
    let konvertaltSzam = parseInt(szam);
    if (isNaN(konvertaltSzam)) {
      konvertaltSzam = 0;
      console.log('NaN-t kaptunk ezért nullázzuk');
    }
    else{
      console.log('konvertálás sikeres volt');
    }
  };
  
  convertToNumber('34');
  convertToNumber('asfssg');
  
  //camelCasing = aMásodikSzótólMindenSzóKezdőBetűjétNagyBetűvelÍrok
  //JS-ben gyakran használjuk
  
  function pontosIdo() {
    // lokális változo, csak ebben a függvényben van értelme
    // variable scope : local
    let ido = 5;
    console.log('a pontos idő :'+ido);
    //erre a fuggvenyre is ervenyes a scope, ezt csak a pontosIdo-n belul tudom használni
    //closure: ha kettőfüggvény van egymásban akkor a belső függvény hozzáfér a külső függvény változóihoz 
    function pontosIdo2() {
      console.log('az ido értéke: '+ido);
    }
    pontosIdo2();
  }
  
  //itt használjuk a pontosIdo fuggvenyt
  pontosIdo();
  
  //pontosIdo2();
  //az ido valtozonak itt nincs ertelme, mert a pontosIdo fgv-en belul daklaráltuk
  // console.log('a pontos ido: '+ido);
  
  
  // IIFE: Immidiately Invoked Function Expression:
  //ez egy névtelen függvény
  (function() {
    console.log('ez egyből meghívódik');
  })();
  
  
  
  
  
  
}() ); // itt van vege a strick mode-nak, ez utan mar nem fog strict mode-ban futni a kod


