const Product=require('../models/product');

exports.getProducts=(req,res,next)=>{
    Product.fetchAll(products=>{
        res.render('shop/product-list',{
            prods:products,
            pageTitle:'All Shop',
            path:'/products'
        });
    });
    //you can pass more than one key value pair so as to acces them in pug file(dynamically).
};
exports.getIndex=(req,res,next)=>{
    Product.fetchAll(products=>{
        res.render('shop/index',{
            prods:products,
            pageTitle:'Shop',
            path:'/'
        });
    });
};
exports.getCart=(req,res,next)=>{
    res.render('shop/cart',{
        path:'/cart',
        pageTitle:'Your Cart'
    });
};
exports.getOrders=(req,res,next)=>{
    res.render('shop/orders',{
        path:'/orders',
        pageTitle:'Your Orders'
    });
};
exports.getCheckout=(req,res,next)=>{
    res.render('shop/checkout',{
        path:'/checkout',
        pageTitle:'Checkout'
    });
};