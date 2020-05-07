const obj=
{
    name:"DD",
    age:20,
    p(){console.log("hey "+ this.age);}
};
const f=(n)=>{
    console.log(n.name);
}
f(obj);
const f1=({name,age})=>{
    console.log(name+age);
}
f1(obj);
const {name}=obj;
console.log(name);
const a=['v','b'];
const [a1,a2]=a;
console.log(a);