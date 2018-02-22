console.log("hello");


(function() {
   'use strict'
    //minden amit ide írok az strick mode-ban fog futni
    //a strick mode szigorubb szabalyokkal futtatja
    //a javascript kodot, és tobb hibat fog kiirni a bongeszo
    //amit enélkül nem tenne meg
    
    // ez egy ujradeklarálhato változo lesz:
    var szoveg2 ="valami";
    console.log(szoveg2);
    // erre nem kapunk hibat mert a var kulcsszoval deklarált változót uhradeklarálhatjuk:
    var szoveg2 = "valami";
    
    let szoveg3 = "ezt let-el hoztuk létre";
    console.log(szoveg3);
    // alet kulcsszoval letrehozott valtozokat nem lehet ujradeklarálni,
    // a kovetkezo sort ha nem kommentezzük ki, hibat kapunk:
    //let szoveg3 = "ezt let-el hoztuk létre";
    
    // ez egy értékadás, nem deklarálás:
    szoveg3 = "uj erteket kap a szoveg3";
    
    // a console.log egy fuggveny aminek atadjuk a a szobeg3 valtozot
    // a console.log egy más ember által írt kód, ami azt csinálja a neki adott valtozoval, hogy kiirja a consol-ra
    console.log(szoveg3);
    // kiirathatunk egyszerre szoveget és változot is:
    let szam1 = 94;
    console.log("a szam1 valtozo értéke: " +szam1);
    
    
}() ); // itt van vege a strick mode-nak, ez utan mar nem fog strict mode-ban futni a kod


// implicit global változó lesz a szöveg
// global: a szoveg valtozo mindenhol elérhető lesz a kódban
// implicit global valtozot lehetoleg ne használjunk!
szoveg = "3";

console.log(szoveg);