const h=['a','b'];
for(let x of h)
console.log(x);
console.log(h.map(h=>'1-> '+h));
console.log(h);
//v18
const c=[h];
console.log(c);
const c1=h.slice();
console.log(c1);
const c2=[...h];//spread op.
console.log(c2);
const fun=(...args)=>{//rest op.
    return  args;
};
console.log(fun(1,2,3,4));
var obj={
    a:1,
    b:2,
};
const c3={...obj};
console.log(c3);
