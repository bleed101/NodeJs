exports.getLogin = (req, res, next) => {
// console.log(    req.get('Cookie')
// .split('=')[1]);
    const isLoggedIn=req
    .get('Cookie')
    .split('=')[1]==='true';
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated:isLoggedIn
    });
};
exports.postLogin = (req, res, next) => {
    req.session.isLoggedIn=true;
    res.redirect('/');
};