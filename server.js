const experss = require('express');
const hbs = require('hbs');
const fs = require('fs-extra');

var app = experss();



app.use(experss.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.use( (req, res, next)=>{
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.writeFileSync('server.log', log + '\n');
    
    next();
})


hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getcurentlyear', ()=>{
    return  new Date().getFullYear();
})
hbs.registerHelper('uperCase', (text)=>{
    return text.toUpperCase();
})

// get post http req

app.get('/', (req, res) =>{
    res.render('home.hbs', {
        pageTitle:'safhye asli site',
        wellcomeMassage:'khosh amadide be appication',
       
    })
})

app.get('/about', (req, res) =>{
    res.render('about.hbs', {
        pageTitle:'darbareyeee maaaa......',
        
    });
    
})

app.listen(3000, () =>{
    console.log('server run on port 3000');
});