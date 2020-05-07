// const f=callback=>{
//     setTimeout(()=>{callback('done!')},1500);
// }
// setTimeout(()=>{console.log('delay');
// f(text=>{console.log(text)});},2000);
// console.log('hello');
// console.log('hi!');

//Promise
const f=()=>{
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Done!');
        },1500);
    });
    return promise;
};
setTimeout(()=>{console.log('Delay');
f()
.then(text=>{
    console.log(text);
    return f();
})
.then(text2=>{
    console.log(text2);
});
},2000);
console.log("hello!");
console.log('hi!');
var a=100,b=3;
console.log(`ans ${a+b}`);
// let classes = 'header';
// classes += (isLargeScreen() ?
//   '' : item.isCollapsed ?
//     ' icon-expander' : ' icon-collapser');