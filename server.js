const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));

const dirname = __dirname;
// var dirname = '/home/user/redirect-front'

/* ------------------Sequelize-------------------- */
const sequelize = new Sequelize('database', null, null, {
  dialect: 'sqlite',
  storage: `${dirname}/database.db`,
});

const MainLinks = sequelize.define('mainlinks', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  defaultLink: Sequelize.STRING,
});

const SubLinks = sequelize.define('sublinks', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  link: Sequelize.STRING,
  rule: Sequelize.STRING,
  ruleType: Sequelize.TEXT,
});

MainLinks.hasMany(SubLinks);

sequelize.sync();

function saveToDB(Table, res, data) {
  Table.create(data).then(() => {
    // res.end(JSON.stringify(note.dataValues)) // may be...
    res.end('Created');
  });
  Table.sync();
}

function editNoteOfDB(Table, res, id, data) {
  Table.findById(id).then((note) => {
    if (note) {
      note.updateAttributes(data);
      // res.end(JSON.stringify(note.dataValues)) // may be...
      res.end('Edited');
    } else {
      res.end('Error! Node does`t exist!');
    }
  });
  Table.sync();
}

function deleteNoteOfDB(Table, id) {
  Table.findById(id).then((note) => {
    note.destroy();
  });
  Table.sync();
}

function loadFromDB(Table, res, prepare, condition = {}) {
  Table
    .findAll({
      where: condition,
    })
    .then((notes) => {
      res.end(JSON.stringify(notes.map(temp => prepare(temp.dataValues))));
    });
}
/* ------------------End Sequelize-------------------- */
/* ------------------HTTP GET-------------------- */
function prepareSubLinkDataToLoad(data) {
  return Object.assign({}, data, {
    rule: JSON.parse(data.rule),
  });
}

function prepareMainLinkDataToLoad(data) {
  return data;
}

app.get('/', (req, res) => {
  console.log('GET /');
  loadFromDB(MainLinks, res, prepareMainLinkDataToLoad);
});

app.get('/mainlinks/', (req, res) => {
  console.log('GET /mainlinks/');
  loadFromDB(MainLinks, res, prepareMainLinkDataToLoad);
});

function getId(url) {
  const end = url[url.length - 1] !== '/' ? url.length : url.length - 1;
  let begin = end - 1;
  while (url[begin] !== '/') { begin -= 1; }
  const id = parseInt(url.substring(begin + 1, end), 10);
  return id ? id : -1;
}

app.get('/mainlinks/*/', (req, res) => {
  console.log(`GET ${req.url}`);
  const id = getId(req.url);
  loadFromDB(MainLinks, res, prepareMainLinkDataToLoad, { id });
});

app.get('/sublinks/', (req, res) => {
  console.log('GET /mainlinks/');
  loadFromDB(SubLinks, res, prepareSubLinkDataToLoad);
});

function getMainId(url) {
  const begin = url.indexOf('=');
  let end = url.indexOf('/', begin);
  end = end !== -1 ? end : url.length;
  const mainId = parseInt(url.substring(begin + 1, end), 10);
  return mainId ? mainId : -1;
}

app.get('/sublinks/mainId=*/', (req, res) => {
  console.log(`GET ${req.url}`);
  const mainlinkId = getMainId(req.url);
  loadFromDB(SubLinks, res, prepareSubLinkDataToLoad, { mainlinkId });
});

app.get('/sublinks/*/', (req, res) => {
  console.log(`GET ${req.url}`);
  const id = getId(req.url);
  loadFromDB(SubLinks, res, prepareSubLinkDataToLoad, { id });
});
/* ------------------End HTTP GET-------------------- */
/* ------------------HTTP POST-------------------- */
function prepareSubLinkDataToSave(data) {
  return Object.assign({}, data, {
    rule: JSON.stringify(data.rule),
  });
}

app.post('/add/mainlink/', (req, res) => {
  console.log(`POST ${req.url}`);
  saveToDB(MainLinks, res, req.body);
});

app.post('/add/sublink/', (req, res) => {
  console.log(`POST ${req.url}`);
  saveToDB(SubLinks, res, prepareSubLinkDataToSave(req.body));
});

app.post('/patch/mainlink/', (req, res) => {
  console.log(`POST ${req.url}${req.body.id}`);
  editNoteOfDB(MainLinks, res, req.body.id, req.body.data);
});

app.post('/patch/sublink/', (req, res) => {
  console.log(`POST ${req.url}${req.body.id}`);
  editNoteOfDB(SubLinks, res, req.body.id, prepareSubLinkDataToSave(req.body.data));
});
/* ------------------End HTTP POST-------------------- */
/* ------------------HTTP PATCH-------------------- */
// app.patch('/patch/mainlink/', function (req, res) {
//    console.log("PATCH " + req.url + req.body.id);
// })
// app.patch('/patch/sublink/', function (req, res) {
//    console.log("PATCH " + req.url + req.body.id);
// })
/* ------------------EndHTTP PATCH-------------------- */
/* ------------------HTTP DELETE-------------------- */
app.delete('/del/mainlink/', (req, res) => {
  console.log(`DELETE ${req.url}${req.body.id}`);
  deleteNoteOfDB(MainLinks, req.body.id);
  res.send('DELETE SUCCESS');
});

app.delete('/del/sublink/', (req, res) => {
  console.log(`DELETE ${req.url}${req.body.id}`);
  deleteNoteOfDB(SubLinks, req.body.id);
  res.send('DELETE SUCCESS');
});
/* ------------------End HTTP DELETE-------------------- */
/* ------------------Init server-------------------- */
const server = app.listen(5000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
/* ------------------End Init server-------------------- */
