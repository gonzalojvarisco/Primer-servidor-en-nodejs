const items = [
    {id: 1, name:'producto1'},
    {id: 2, name:'producto2'},
    {id: 3, name:'producto3'}
];


const index = (req, res) => {
    res.render('index', {
        title: 'My webStore'
    })
}

const listOfProducts = (req, res, next) => {
    res.render('products', {
        title: 'List of products',
        items: items
    })
}

const newProducts = (req, res, next) => {
    const {newItem} = req.body; // <<= forma simpliicada o req.body.newItem;
    items.push({
        id: items.length + 1,
        name: newItem
    });

res.redirect('/products');
}

module.exports = {
    index,  // o index = index.  Como las variables tienen el mismo nombre se puede poner directo index solo
    listOfProducts,
    newProducts
}