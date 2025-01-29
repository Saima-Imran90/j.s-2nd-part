//-------------------------------------------//


// class App extends component{
//     <button onClick={()=>this.test()}>Test</button>
//     <button onClick={this.test.bind(this)}>Test</button>
//     }


// let item={
//     name:"Saima",
//     getName:function(){
//         console.log("Normal",this);
        
//     },
//     getNameArrow:()=>{
// console.log("Arrow",this);// arrow function parents ka "this" use krta hai

//     }
// }
// item.getName();
// item.getNameArrow()

//-------------------------------CLASSES--------------------------------////

// class Fruits{
//     name="orange"
//     constructor()
//     {
//         console.log("constructor",this.name)
        
//     }
//     getFruits(item){
//         return item
       
//     }
// }
// let f1=new Fruits
// console.log(f1.getFruits("apple"))

// class Fruits{
//         name="orange"
//         constructor()
//         {
//             console.log("constructor",this.name)
            
//         }
//         getFruits(){
//             return "apple"
           
//         }
//     }
//     let f1=new Fruits
//     console.log(f1.getFruits())

//--------------INHERITANCE--------------------//

//  class vege{
//     onion(){
// return "Onion is compulsory"
//     }
//     potato(){
//   return  "Potato,I like."
//     }
//  }
// class Vegetables{
//     constructor(){
//         console.log("constructor");
        
//     }
//     getVegetables(){
//         return "I buy spinach";
//     }
// }
// let veg1=new Vegetables;
// let veg2=new vege
// console.log(veg1.getVegetables());
// console.log(veg2.onion());
// console.log(veg2.potato());


// class vege{
//     onion(){
// return "Onion is compulsory"
//     }
//     potato(){
//   return  "Potato,I like."
//     }
//  }
// class Vegetables extends vege{
//     constructor(){

//         super()   ////super keyword to inherit parent characteristics
//         console.log("constructor");
        
//     }
//     getVegetables(){
//         return "I buy spinach";
//     }
// }
// let veg1=new Vegetables;
// let veg2=new vege
// console.log(veg1.onion());
// console.log(veg2.onion());
// console.log(veg1.potato());
// console.log(veg2.potato());



//------------------------LEXICAL SCOPE FOR THIS------------------------//


// let data={
//     list:"Friends",
//     names:["Sana","Saleha","Sufia"],
//     getFriends:function () {
//         this.names.map((item)=>{
//             console.log(this.list,item);
            
//         })
//     }
// }
// data.getFriends()

//-----------------------REST OPERATORS(...)--------------------------------///


// function fruits(a,b) {
//     console.log("Fruits",a,b);
    
// }fruits("apple","banana")

// function fruits(...a) {
//     console.log("Fruits",a);
    
// }fruits("apple","banana","orange","kiwi","melon");

// function fruits(a,...z) {
//         console.log("Fruits",z); //a parameter show nhi krega baki uske bad k krega.
        
//     }fruits("apple","banana","orange","kiwi","melon");
    
    
// function fruits(a,...z) {
//              console.log("Fruits",z); 
// } function Check(){
            
//          }fruits("apple","banana","orange","kiwi","melon",Check);
        
        

//---------------------------PROMISES---------------------------//


// let a=undefined;

// setTimeout(()=>{
//     a="Hello World"
// },3000);
// alert(a); // undefined due to set time out of 3sec

// let a=undefined;

// let promise=new Promise((resolved, reject) => {
//     setTimeout(()=>{
//         a="Hello World"
//         resolved("Hi")
//     },3000);
// })
// promise.then(()=>{
//     alert(a);
// })
