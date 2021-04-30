const express = require ('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'First WebSite'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact Page'});
});

router.get('/nosotros', (req, res) => {
    res.render('nosotros.html', { title: 'Nosotros'});
});


module.exports = router;