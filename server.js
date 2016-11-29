var express = require('express');
var bodyParser = require('body-parser')
var Sequelize = require('sequelize');

var app = express();

app.use(bodyParser.json())

var dirname = __dirname
// var dirname = '/home/user/redirect-front'

/*------------------Sequelize--------------------*/
var sequelize = new Sequelize('database', null, null, {
  dialect:'sqlite',
  storage: dirname+'/database.db',
});

var MainLinks = sequelize.define('mainlinks', {
   title: Sequelize.STRING,
   description: Sequelize.TEXT,
   defaultLink: Sequelize.STRING,
});

var SubLinks = sequelize.define('sublinks', {
   title: Sequelize.STRING,
   description: Sequelize.TEXT,
   link: Sequelize.STRING,
   rule: Sequelize.STRING,
   ruleType: Sequelize.TEXT,
});

MainLinks.hasMany(SubLinks)

sequelize.sync();

function saveToDB(Table, data) {
   Table.create(data);
   Table.sync();
}

function loadFromDB(Table, res, condition = {}) {
   Table
      .findAll({
         where: condition
      })
      .then(function(notes){
         // console.log('loadFromDB... ')
         res.end(JSON.stringify( notes.map(temp => temp.dataValues) ));
   });
}
// saveToDB(MainLinks, {
//    title: 'Sequelize.STRING',
//    description: 'Sequelize.TEXT',
//    defaultLink: 'Sequelize.STRING',
// });
// saveToDB(SubLinks, {
//    title: 'Sequelize.STRING',
//    description: 'Sequelize.TEXT',
//    link: 'Sequelize.STRING',
//    rule: 'Sequelize.STRING',
//    ruleType: 'Sequelize.TEXT',
//    mainlinkId: 1,
// });
/*------------------End Sequelize--------------------*/
/*------------------HTTP GET--------------------*/
app.get('/', function (req, res) {
   //res.sendFile( dirname + 'index.html' );
   console.log("GET /");  
   //console.log(res);
   loadFromDB(MainLinks, res);
})

app.get('/mainlinks/', function (req, res) {
   console.log("GET /mainlinks/");  
   loadFromDB(MainLinks, res);
})

function getId(url) {
   let end = url[url.length-1]!='/'? url.length : url.length -1
   let begin = end - 1;
   while (url[begin] != '/') { begin -= 1 }
   let id = parseInt(url.substring(begin+1,end));
   return id? id: -1
}

app.get('/mainlinks/*/', function (req, res) {
   console.log("GET " + req.url);  
   let id = getId(req.url); 
   loadFromDB(MainLinks, res, {id});
})

app.get('/sublinks/', function (req, res) {
   console.log("GET /mainlinks/");  
   loadFromDB(SubLinks, res);
})

function getMainId(url) {
   let begin = url.indexOf('=')
   let end = url.indexOf('/', begin)
   end = end!==-1? end:url.length
   let mainId = parseInt(url.substring(begin+1,end));
   return mainId? mainId: -1
}

app.get('/sublinks/mainId=*/', function (req, res) {
   console.log("GET " + req.url);  
   let mainlinkId = getMainId(req.url);
   loadFromDB(SubLinks, res, {mainlinkId});
})

app.get('/sublinks/*/', function (req, res) {
   console.log("GET " + req.url);  
   let id = getId(req.url); 
   loadFromDB(SubLinks, res, {id});
})

/*------------------End HTTP GET--------------------*/
/*------------------Static--------------------*/
app.get('/index.html', function (req, res) {
   console.log("GET /index.html")
   res.sendFile( dirname + '/index.html' );  
})

app.get('/bundle.js', function (req, res) {
   console.log("GET /bundle.js")
	res.sendFile( dirname + '/bundle.js' );
})

app.get('/style.css', function (req, res) {
   console.log("GET /style.css")
	res.sendFile( dirname + '/style.css' );
})
/*------------------End Static--------------------*/
// app.get('/process_get', function (req, res) {
//    // Prepare output in JSON format
//    response = {
//       first_name:req.query.first_name,
//       last_name:req.query.last_name
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));
// })
/*------------------HTTP POST--------------------*/
app.post('/', function (req, res) {
   console.log("POST /");
   console.log(req.body)
   res.send('Hello, POST /');
})
app.post('/add/mainlink/', function (req, res) {
   console.log("POST /add/mainlink/");
   console.log(req.body)
   saveToDB(MainLinks, {
      title: 'Sequelize.STRING',
      description: 'Sequelize.TEXT',
      defaultLink: 'Sequelize.STRING',
   });
   // loadFromDB(MainLinks, res);
})
/*------------------End HTTP POST--------------------*/
//DELETE
// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
   console.log("Got a DELETE request for /del_user");
   res.send('Hello DELETE');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
// app.get('/ab*cd', function(req, res) {   
//    console.log("Got a GET request for /ab*cd");
//    res.send('Page Pattern Match');
// })

var server = app.listen(5000, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})