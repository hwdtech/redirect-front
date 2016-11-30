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

function editNoteOfDB(Table, id, data) {
   Table.findById(id).then(function (note) {
         if (note) { note.updateAttributes(data) }
      })
   Table.sync();
}

function deleteNoteOfDB(Table, id) {
   Table.findById(id).then(function (note) {
         note.destroy();
      })
   Table.sync();
}

function loadFromDB(Table, res, prepare, condition = {}) {
   Table
      .findAll({
         where: condition
      })
      .then(function(notes) {
         res.end(JSON.stringify( notes.map(temp => prepare(temp.dataValues)) ));
   });
}
/*------------------End Sequelize--------------------*/
/*------------------HTTP GET--------------------*/
function prepareSubLinkDataToLoad(data) {
   data.rule = JSON.parse(data.rule)
   console.log('Prepare(load)',data.rule)
   return data
}

function prepareMainLinkDataToLoad(data) {
   return data
}

app.get('/', function (req, res) {
   //res.sendFile( dirname + 'index.html' );
   console.log("GET /");  
   //console.log(res);
   loadFromDB(MainLinks, res, prepareMainLinkDataToLoad);
})

app.get('/mainlinks/', function (req, res) {
   console.log("GET /mainlinks/");  
   loadFromDB(MainLinks, res, prepareMainLinkDataToLoad);
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
   loadFromDB(MainLinks, res, prepareMainLinkDataToLoad, {id});
})

app.get('/sublinks/', function (req, res) {
   console.log("GET /mainlinks/");  
   loadFromDB(SubLinks, res, prepareSubLinkDataToLoad);
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
   loadFromDB(SubLinks, res, prepareSubLinkDataToLoad, {mainlinkId});
})

app.get('/sublinks/*/', function (req, res) {
   console.log("GET " + req.url);  
   let id = getId(req.url); 
   loadFromDB(SubLinks, res, prepareSubLinkDataToLoad, {id});
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
/*------------------HTTP POST--------------------*/
function prepareSubLinkDataToSave(data) {
   data.rule = JSON.stringify(data.rule)
   console.log('Prepare(save)',data.rule)
   //console.log('unPrepare', JSON.parse(data.rule))
   return data
}

app.post('/add/mainlink/', function (req, res) {
   console.log("POST " + req.url); 
   saveToDB(MainLinks, req.body);
})

app.post('/add/sublink/', function (req, res) {
   console.log("POST " + req.url); 
   saveToDB(SubLinks, prepareSubLinkDataToSave(req.body));
})

app.post('/patch/mainlink/', function (req, res) {
   console.log("POST " + req.url + req.body.id);
   editNoteOfDB(MainLinks, req.body.id, req.body.data)
})

app.post('/patch/sublink/', function (req, res) {
   console.log("POST " + req.url + req.body.id);
   editNoteOfDB(SubLinks, req.body.id, prepareSubLinkDataToSave(req.body.data))
})
/*------------------End HTTP POST--------------------*/
/*------------------HTTP PATCH--------------------*/
// app.patch('/patch/mainlink/', function (req, res) {
//    console.log("PATCH " + req.url + req.body.id); 
// })
// app.patch('/patch/sublink/', function (req, res) {
//    console.log("PATCH " + req.url + req.body.id);
// })
/*------------------EndHTTP PATCH--------------------*/
/*------------------HTTP DELETE--------------------*/
app.delete('/del/mainlink/', function (req, res) {
   console.log("DELETE " + req.url + req.body.id); 
   deleteNoteOfDB(MainLinks, req.body.id);
   res.send('DELETE SUCCESS');
})

app.delete('/del/sublink/', function (req, res) {
   console.log("DELETE " + req.url + req.body.id); 
   deleteNoteOfDB(SubLinks, req.body.id);
   res.send('DELETE SUCCESS');
})
/*------------------End HTTP DELETE--------------------*/
/*------------------Init server--------------------*/
var server = app.listen(5000, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
/*------------------End Init server--------------------*/