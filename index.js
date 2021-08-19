// Write your solution here!
   const cats = ["Milo", "Otis", "Garfield"]

   function destructivelyAppendCat(Ralph) {
       cats.push(Ralph);
   }
   function destructivelyPrependCat(Bob) {
       cats.unshift(Bob);
   }
   function destructivelyRemoveLastCat() {
       cats.pop();
   }
   function destructivelyRemoveFirstCat() {
       cats.shift();
   }
   function appendCat(Broom) {
       const cats2 = [...cats, Broom];
       return cats2;
   }
   function prependCat(name) {
       const cats3 = [name, ...cats];
       return cats3;
   }
   function removeLastCat() {
       const cats4 = cats.slice(0, -1);
       return cats4;
   }
   function removeFirstCat() {
       const cats5 = cats.slice(1);
       return cats5;
   }