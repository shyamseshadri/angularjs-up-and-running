// server.js (Express 4.0)
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();

app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
app.use(morgan('dev')); 					// log every request to the console
app.use(bodyParser()); 						// pull information from html in POST
app.use(methodOverride()); 					// simulate DELETE and PUT


var router = express.Router();

var notes = [
  {id: 1, label: 'First Note', author: 'Shyam'},
  {id: 2, label: 'Second Note', author: 'Brad'},
  {id: 3, label: 'Middle Note', author: 'Someone'},
  {id: 4, label: 'Last Note', author: 'Shyam'},
  {id: 5, label: 'Really the last Note', author: 'Shyam'}

];
var lastId = 6;

router.get('/note', function(req, res) {
  res.send(notes);
});
router.post('/note', function(req, res) {
  var note = req.body;
  note.id = lastId;
  lastId++;
  notes.push(note);
  res.send(note);
});


router.post('/note/:id/done', function(req, res) {
  var noteId = req.params.id;
  var note = null;
  for (var i = 0; i < notes.length; i++) {
    if (notes[i].id == req.params.id) {
      note = notes[i];
      break;
    }
  }
  note.label = 'Done - ' + note.label;
  res.send(notes);
});

router.get('/note/:id', function(req, res) {
  for (var i = 0; i < notes.length; i++) {
    if (notes[i].id == req.params.id) {
      res.send(notes[i]);
      break;
    }
  }
  res.send({msg: 'Note not found'}, 404);
});
router.post('/note/:id', function(req, res) {
  for (var i = 0; i < notes.length; i++) {
    if (notes[i].id == req.params.id) {
      notes[i] = req.body;
      notes[i].id = req.params.id;
      res.send(notes[i]);
      break;
    }
  }
  res.send({msg: 'Note not found'}, 404);
});

router.post('/login', function(req, res) {
  console.log('API LOGIN FOR ', req.body);
  res.send({msg: 'Login successful for ' + req.body.username});
});


app.use('/api', router);



app.listen(8000);
console.log('Open http://localhost:8000 to access the files now'); 			// shoutout to the user
