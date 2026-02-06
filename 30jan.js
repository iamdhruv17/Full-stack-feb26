// let i;
// let arr=[2,6,4,9,7,4,9,8,3,2,56,8,55,769,55,8,67,4,645]
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//     }
// }

// const person={leyyy:"hell"};
// console.log(person.leyyy);
// person.leyyy="hello";
// console.log(person.leyyy);

// const arr=["HTML","CSS","Javascript"];
// console.log(arr);
// arr.push("python");
// console.log(arr);



// const Sales="Toyota";

// function carType(name){
//     return name==="Honda"?name:"Sorry we don't sell this car";
// }
// const car={carn:"City",getCar:carType("Honda"),Special:Sales};
// console.log(car.carn);
// console.log(car.getCar);
// console.log(car.Special);





// const color=["Red","Green","Blue"];
// color.forEach((i)=>{console.log(i)});

// const numb=[1,2,3,4,5,6,7,8,9];
// numb.forEach((i,j)=>numb[j]=i+3);
// console.log(numb);

// for(const i in numb){
//     numb[i]=numb[i]+3;
//     }    console.log(numb);

// const us={name:"rabot",age:25,Hobby:"coding"};
// for(const i in us){
//     console.log(i,us[i]);
// }



// const lan=["html","css",]
// const color=["Red","Green","Blue"];
// for(const i of color){
//     console.log(i);
// }

// greet('user');
// function greet(name){
//     console.log("Hello"+" "+name);
//     console.log(`hello ${name}`);
// }

const fact=function(n){
    if(n==0||n==1)
        return 1;
    else return n*factorial(n-1);
}//ananomus function
console.log(fact(5));
