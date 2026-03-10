const renderHomePage = (req, res) => {
    res.render('index', {
        title: 'Travlr Getaways'
    });
};

module.exports = {
    renderHomePage
};