const express = require('express');

////////////////////////////////////////////////////////////

const router = express.Router();

router.get('/login', (req, res) => {
    res.status(200)
        .render('login', {
            path: '/login',
            pageTitle: 'Login'
        });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        res.redirect('/');
    } else {
        console.log('欄位尚未填寫完成！')
    }
});

router.post('/logout', (req, res) => {
    // TODO: 實作 logout 機制
    res.redirect('/login')
});

module.exports = router;