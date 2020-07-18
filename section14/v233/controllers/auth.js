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
    res.setHeader('Set-Cookie','loggedIn=true; HttpOnly')
    res.redirect('/');
};