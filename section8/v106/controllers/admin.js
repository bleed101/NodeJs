const Product=require('../models/product');

exports.getAddProduct=(req,res,next)=>{
    // res.sendFile(path.join(__dirname,'..','views','add-product.html'));
    res.render('admin/add-product',{
        pageTitle:'Add products',
        path:'/admin/add-product',
        productCSS:true,
        activeProduct:true,
        formsCSS:true});
};

exports.postAddProduct=(req,res,next)=>{
    const title = req.body.title;
    const imageUrl=req.body.imageUrl;
    const price=req.body.price;
    const description=req.body.description;
    const product=new Product(title,imageUrl,price,description);
    product.save();
    res.redirect('/');
};
exports.getProducts=(req,res,next)=>{
    Product.fetchAll(products=>{
        res.render('admin/products',{
            prods:products,
            pageTitle:'Admin Products',
            path:'/admin/products'
        });
    });
}
