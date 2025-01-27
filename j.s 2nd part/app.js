//-------------------------find and find index------------//


// let numbers=[10,20,30,2,8,100]
// let result=numbers.find(function(item){
//     return item<10;
// })
// console.log(result);




// let numbers=[10,20,30,2,8,100]
// let result=numbers.findIndex(function(item){
//     return item<10;
// })
// console.log(result);




// let numbers=[10,20,30,2,8,100]

//  let result=numbers.find((item)=>item<10)

//  console.log(result);//arrow function



// let numbers=[10,20,30,2,8,100]

//  let result=numbers.find ((item)=>item>10 && item<30 )

//  console.log(result); // conditions can apply


// let numbers=[10,20,30,2,8,100]

// function data(item){
//     return item<100
// }

// let result=numbers.find(data)
// console.log(result);/// fuction can use in it also


// let data=[
//     {id:10},
//     {id:8},
//     {id:50},
//     {id:40},
//     {id:20},
// ]
// function details(item) {
//     return item.id<50
// }

// let result=data.find(details)
// console.log(result);


// let data=[
//     {id:10,name:"a"},
//     {id:8,name:"b"},
//     {id:50,name:"c"},
//     {id:40,name:"d"},
//     {id:20,name:"e"},
// ]
// function details(item) {
//     return item.id<50
// }

// let result=data.find(details)
// console.log(result);

// let data=[
//        {id:10,name:"a"},
//        {id:8,name:"b"},
//        {id:50,name:"c"},
//        {id:40,name:"d"},
//        {id:20,name:"e"},
//    ]
//    function details(item) {
//        return item.id;
//    }
    
//    let result=data.find(details)
//    console.log(result);// give first index number

//--------------------------FUNCTIONS VS ARROW FUNCTIONS------------------------
// let data=[10,20,30,40,100]
//     function test() {
//         return 1;
//     }


//     let test2=function()
//     {
//         return 2;
//     }

//     let test3=()=>{
//         return 3;
//     }

//     console.log(test());
//     console.log(test2());
//     console.log(test3());


// let data=[10,20,30,40,100]
// let newData=data.map(function(item){
//     return item*2
// })
//     console.log(newData);


 

// let data=[10,20,30,40,100]

// let newData=data.map((item)=>item*2)
//     console.log(newData);
    
  