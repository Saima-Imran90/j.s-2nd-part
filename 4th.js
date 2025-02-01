//------------------------Global Function------------//

//------------------IsFinite()-----------------------//

//console.log(isFinite(10));//default function
//console.log(isFinite (undefined));

//console.log(isFinite("a"));

//console.log(isFinite(10/1));sirf no. ko  "true" return karega
//console.log(isFinite(10/0)); false due to zero

//console.log(isFinite(null));


//console.log(isFinite({}));


//----------------------IsNaN()----------------------------//

// console.log(isNaN("Saima"));// true not a number
// console.log(isNaN(10)); //false
// console.log(isNaN("20")); //false
// console.log(isNaN("Saima33")); //true
//console.log(isNaN({}));  true
//console.log(isNaN(null)); false


//-------------------------------------------DESTRUCTURING ARRAY--------------------------------------------//

//let fruits=["apple","orange","kiwi"];
// // let [fruit1]=fruits; // first ko catch krega yani apple

// let [fruit1,fruit2,fruit3]=fruits;

// console.log(fruit1);
// console.log(fruit2);
// console.log(fruit3);


//let [fruit1, ,fruit3]=fruits; //agr jo nahi chahye value wo empty chorden

// let [fruit1, ,fruit3,fruit4]=fruits; // fruit4 is undefined
// console.log(fruit4);


// let fruits=["apple","orange","kiwi","melon"];
// let [fruit1,fruit2,fruit3,fruit4="unknown fruit"]=fruits //agr value na mili to unknown fruit catch krega

// console.log(fruit4);




//  let fruits=["apple","orange","kiwi","melon"];
//  let[fruit1,...fruitx]=fruits //apple ko chor k rest k sarey fruits dega

//  console.log(fruitx);
 

//---------------------------------Destructuring Object------------------------------------------//


// let user={name:"Saima",email:"smalldeeds1234@gmail.com",mobile:9999}
//  let{mobile,...email}=user
//  console.log(email)


//---------------------------SPREAD OPERATOR---------------------------------------//


//let fruits=["apple","mango","kiwi"];

// function Printit(a,b,c) {
//     console.log(a,b,c); 

// }
// Printit(fruits[0],fruits[1],fruits[2])

// Printit(...fruits) // spread operator used when parameter pass by us and spread all




// function Printit(...a) //rest operator used in function when created abd we have to get parameter and squeez all parameters.
// {
//     console.log(a); 

// }

// Printit(...fruits)


// let fruit1=["apple","orange","banana"]
// let fruit2=["mango","guava","kiwi"]

// let fruits=[...fruit1,...fruit2]
// console.log(fruits);


// let fruit1=["apple","orange","banana"]
// let fruits=["mango",...fruit1,"guava","kiwi"]
// console.log(fruits);


//let fruit1=["apple","orange","banana"]



// let fruits=["mango","guava","kiwi"]

// let fruit3=[...fruits]
// fruit3.push("MELON")

// console.log(fruit3);
// console.log(fruits);

//----------------------EXPONENTIAL OPERATOR--------------------------------------//


// console.log(2*6); // simple multiply
// console.log(2**4); // 2*2*2*2  four times multiply like power
// console.log(10**4); //10000
// console.log(10**2); //100
// console.log(10**-2);//0.01
// console.log(10**NaN);//NaN
// console.log(10**null);//1

// console.log(2**3**2);//512 pehle 3**2 solve krega than 2**3 ko karega
// console.log(2**(3**2));//512 pehle is men b 3**2 solve krega than 2**3 ko karega



//-------------------------------------------GENERATOR-----------------------------------------------//


function* steps(){

    let x = 10;
    let y = 20;

console.log(10+20);
yield "step 1 is completed"
console.log(10*20);

yield "step 2 is completed"
console.log(10-20);
yield "step 3 is completed"


return "All  steps are completed"


}

let stp=steps();
function getsteps(){
    console.log(stp.next());
    
}





















































































































 

























































