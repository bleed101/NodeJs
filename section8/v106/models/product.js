// const products=[];
const fs=require('fs');
const path=require('path');

module.exports=class Product{
    constructor(t,imageUrl,description, price){
        this.title=t;
        this.imageUrl=imageUrl;
        this.description=description;
        this.price=price;
    }

    save(){
        // products.push(this);
        const p=path.join(
            (__dirname,'..','data'),
            'product.json'
            );
            fs.readFile(p,(err,fileContent)=>{
                // console.log(fileContent);//this line will through error because it has no such file.
                //handling err
                let products=[];
                if(!err)
                {
                    products=JSON.parse(fileContent);//helper fun in vanilla nodeJS
                }
                products.push(this);
                fs.writeFile(p, JSON.stringify(products),(err)=>{
                    console.log(err);

                })
            })
    }

    static fetchAll(cb){
        const p=path.join(
            (__dirname,'..','data'),
            'product.json'
            );
        fs.readFile(p,(err,fileContent)=>{
            if(err)
            {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        })
    }
};