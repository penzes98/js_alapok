(function() {
  'use strict';
  
  // -------------------------------------------------------------------------------------------
  // -----------------------------------  OBJEKTUMOK  ------------------------------------------
  // -------------------------------------------------------------------------------------------
  
  // EscmaScript
  // https://en.wikipedia.org/wiki/ECMAScript
  
  //EcmaScript 2015 = ES6
  //pl a let kulcsszó ES6-ban jelent meg
  
  // ez egy üres object, így jelöljük
  let myObject = {};
  console.log('a myObject típusa: '+typeof(myObject));
  let myPlayer = {
    'name': 'John',     // kulcs: érték párok sorozata...
    'health': 100,      // "key": value
    'alive': true
  };
  console.log('a játékos neve: '+myPlayer.name);
  // véletlen számot generálunk 200 és 1 között
  let shoot = Math.floor((Math.random() * 200) + 1);
  if (myPlayer.alive) {
    myPlayer.health = myPlayer.health - shoot;
    console.log(shoot+'-al meglőttük a játékost');
    
    if(myPlayer.health <=0) {
      myPlayer.alive = false;
    }
  }
  
  //a felkiáltójel tagadást jelent
  if (!myPlayer.alive) {
    console.log(myPlayer.name+ ' is dead!!!');
  }
  else {
    console.log(myPlayer.name+ ' is alive!! HURRAY!!');
  }
  console.log(myPlayer.name+' has '+myPlayer.health+' health left');
  
  myPlayer.level = 1; // ezzel kibővítjük a myPlayer-t még egy property-vel
  
  //kibővítjük a myPlayer object-et de most egy függvényt kap nem egy változót
  myPlayer.levelUp = function() {
    myPlayer.level++;
    myPlayer.health = myPlayer.health + (myPlayer.level*100);
  };
  //meghivjuk  a myPlayer object levelUp property-jét ami függvény, ezért kell a zárójel
  myPlayer.levelUp();
  console.log(myPlayer.name+' has '+myPlayer.health+' health, at level: '+myPlayer.level);
  
  //how to loop trough object
  for (let key in myPlayer) {
    console.log('checking...'+key+'...');
    console.log(key+' értéke: '+myPlayer[key]);
  }
  
  // ez egy object-eket tartalmazó tömb
  let animals = [
    { name: 'Cirmi', class: 'cat' },
    { name: 'Bodri', class: 'dog' },
    { name: 'Jago', class: 'bird' },
    { name: 'Pali', class: 'bird' },
    { name: 'Buffy', class: 'dog' }
  
  ];
  console.log(animals);
  
  //how to loop trough array:
  //itt 'of' kulcsszót használunk, object-nél 'in'-t
  // requireres ES6+
  
  let dogs = [];
  for (let animal of animals) {
    if (animal.class === 'dog') {
      dogs.push(animal);
    }
  } //end of for
  
  console.log(dogs);
  
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
    bark() {
      console.log(this.name+': vau vau!');
    }
  }
  
  let dog1 = new Dog('Bodri');
  console.log('a kutya neve: '+dog1.name);
  dog1.bark();
  
  class MutantDog extends Dog {
    //mivel ez egy alosztály ezért kell a super() fgv... a this kulcsszót
    //nem tudjuk használni egy alosztályban amíg nem híjuk meg a super()-t
    constructor(name) {
      super(name);
      this.legscount = 3;
    }
  }
  
  let dog2 = new MutantDog('ASASD');
  console.log('a kutya neve: '+dog2.name);
  
  
  
  
})();