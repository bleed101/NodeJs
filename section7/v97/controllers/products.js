const Product=require('../models/product');

exports.getAddProduct=(req,res,next)=>{
    // res.sendFile(path.join(__dirname,'..','views','add-product.html'));
    res.render('add-product',{
        pageTitle:'Add products',
        path:'/admin/add-product',
        productCSS:true,
        activeProduct:true,
        formsCSS:true});
};

exports.postAddProduct=(req,res,next)=>{
    const product=new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts=(req,res,next)=>{
    Product.fetchAll(products=>{
        res.render('shop',{
            prods:products,
            pageTitle:'Shop',
            path:'/',
            hasProducts:products.length>0,
            productCSS:true,
            activeShop:true});
    });
    //you can pass more than one key value pair so as to acces them in pug file(dynamically).
};