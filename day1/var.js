// Difference between var and let
function main()
{
    {
        var y = 1; // avalaible throughout the whole function
        let x = 2; // only available inside the scope that is declared in scope
        console.log(x); 
    }
    // console.log(x); // gives not defined error since x is not in this scope 
    console.log(y);
        let stringName = "f_Nishant" // indentation doesnt matter
    console.log(stringName);
    const age = 21;
    // age = 19 // const variable cannot be reassigned
    let nu;
    console.log(nu??(nu=3)); // ?? check if the variable is null if it is null it asign a value
}

function JsObjects()
{
    // Js Objects are nothing but python dictionaries
    // key and values
    const person = {
        firstName : "Nishant",
        lastName : "Gay"
    };

    console.log(person.firstName + " " + person.lastName);
}

// using New and function to create a perason object
function Human(male, colour, age)
{
    this.male = male;
    this.colour = colour;
    this.age = age;
    this.bark = function (){
        console.log(this.colour + " " + this["male"]);
    }
}


// calling functions
//main();
//JsObjects();

Nishant = new Human("female", "pink", "-1");
//console.log(Nishant.colour + " " + Nishant["male"]);
Nishant.bark();
delete Nishant.age;
console.log(Nishant);

// update html content
document.getElementById("b1").addEventListener('click',function() {
    const now =  new Date();
    const timeString = now.toLocaleDateString();
    document.getElementById("time").innerHTML = `the time is(-w-)/ ${timeString} `;
});
