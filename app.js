// // var let & Const
// // q 01     // Globally Scope

// var a = 2; // ye sab globally acces hote he
// let b = 3;
// // const c = 4;  // const ko initilize bhi krna hota he sirf declare nhi hota

// console.log(a);
// console.log(b);
// // console.log(c);


// q 02     // function Scope
// function abc(){
//     // var a = 5;  //  ye sab ke sab function scope he
//     // let b = 2;
//     // // const c = 6;  //const ko initilize bhi krna hota he sirf declare nhi hota
// }

// abc()
// // console.log(a);
// // console.log(b);
// // console.log(c);


// // q 03    // Block Scope
// num = 3;
// if(num){
//     var a = 4; // var bock scope nhi he ye bahir console se bhi execute hojata he
//     let b = 5; // let or const dono blockscope he jo andar hi execute hote he
//     // const c = 1; // const ko initilize bhi krna hota he sirf declare nhi hota
// }
// console.log(b);
// console.log(a);
// // console.log(c);




// // q 04     // hoidting with var
// // var hoist       // itna variable or name file ke top pe chala jata he is called hoisting
//                   // ye sirf var me hoist hota he let&Const me nhi

// console.log(hoist);
// let hoist = "hoisting";



// // q 05    //  hoisting with let and const
// console.log(tryHoist);   //  error aega ye acess nhi krta initillize karo ForExample
//                          //   ye hoisting nhi hota is lye thats it.
// console.log(constHoist); // error aega ye acess nhi krta initillize karo ForExample
//                          //   ye hoisting nhi hota is lye thats it.

// let tryHoist = "LetHoisting";
// const constHoist = "constHoisting";



// // q 06      // redeclared
// // var varName = "Aa";  
// // var varName = "Aa"; // ye declare ho jae ga

// let letName = "Ba";  // error aega one time declare hota he 
// let letName = "Ba";

// const constName = "Cc"; // error aega one time declare hota he 
// const constName = "Cc";



// // q 07    // reassigned
// var sameName = "asigned";
// sameName = "Reasigned"       // ye dono let or var reassigned hote he

// let letName = "assignedlet"
// letName = "Resassignedlet"  //  ye dono let or var reassigned hote he

// const constName = "assigned" // error Assignment to constant variable ye reassign nhi hoga
// constName = "Reassigned"  // const hum is lye used krte he jo hum bad me change na kare
//                          //  jese na redeclared na reassign hota he

// console.log(sameName);
// console.log(letName);
// console.log(constName);



// // q 08      // Temporal Dead Zone  (TDZ)

// {
//     console.log(dead);   // Why? is lye ke (TDZ) block scope ke start se lekr variable ke declare 
//                     // or initillize hone se pehle tak hota he . agr is period ke doran hum acess
//                // karen to reference error aege dead is not define (sirf let & const used Concept)
//                     // var me ye concept nhi hota wajah wo hoisting ho jata he 
//     let dead = "deadlet"

//     console.log(constDead);
//     const constDead = "constDead"
// }



// q 09    // var let & const  used in one example

// var a = 23    // global scope
// {
// console.log(a);  
// }


// var a = 23;
// var a = 34;   // redeclared
// a = 12;      // reassign
// console.log(a);  


// console.log(a);  // hoisting
// var a = 23;
// var a = 34;   // redeclared
// a = 12;      // reassign




// let used in one example
// abc()
// function abc(){
//     let exp = "letexample"  // ye sirf function ke andar acessible he 
//     console.log(exp);
    
// }

// {
//     let exp = "letexample"  // ye sirf blockscope ke andar acessible he 
//     console.log(exp);
    
// }

// let assig = "letassigned"
// assig = "changestring"   // reassigned
// console.log(assig);




// const used in one example 
// const permenantSet = "name&value";  // is ka istimal tab hota he jab hum dobara changes na kares
                                    // reassign   redeclared  ye hota bhi nhi he
// console.log(permenantSet);     // one time used no change





