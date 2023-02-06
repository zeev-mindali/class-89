import Animal from "./cls/animal";
import Cat from "./cls/Cat";
import Cow from "./cls/Cow";
import Lion from "./cls/Lion";

console.log("statring\n=================");

let lion = new Lion("lev", 4, "brown", "ROARRRRR!!");
let mumu = new Cow("MushMush", 3, "white black", "mu mu", true);
let bumper = new Cat("Bumper", 4, "Asphalt", "Miouuuuu", 15);
let pagosh = new Cat("Pagosh", 3, "white", "miouuuu chatula", 12);

let catArray = [bumper, pagosh];

//console.log(mumu);
//mumu.makeSound();
bumper.drinkMilk(mumu);
lion.eatCow(mumu);
bumper.drinkMilk(mumu);

let zeev = new Animal("zeev", 48, "white", "haouuuuuuuu");
console.log("--=-=-=-=-=-=-=-=-=-=--");
console.log(zeev);

console.log(bumper.getLength());
