const User = require('../models/user');

////////////////////////////////////////////////////////////////

const getLogin = (req, res) => {
    const errorMessage = req.flash('errorMessage')[0];
    res.status(200)
        .render('auth/login', {
            pageTitle: 'Login',
            errorMessage
        });
};

const postLogin = (req, res) => {
    const { email, password } = req.body;
    User.findOne({ where: { email }})
        .then((user) => {
            if (!user) {
                req.flash('errorMessage', '錯誤的 Email 或 Password。');
                return res.redirect('/login');
            }
            if (user.password === password) {
                console.log('login: 成功');
                req.session.isLogin = true;
                return res.redirect('/')
            } 
            req.flash('errorMessage', '錯誤的 Email 或 Password。');
            res.redirect('/login');
        })
        .catch((err) => {
            console.log('login error:', err);
        });
};

const postLogout = (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/login')
    });
}

module.exports = {
    getLogin,
    postLogin,
    postLogout,
};