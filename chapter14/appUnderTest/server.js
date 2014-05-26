/**
 * Created by abhiroop on 5/6/14.
 */
var express = require('express'),
  http = require('http'),
  passport = require('passport'),
  morgan = require('morgan'),
  compress = require('compression'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  LocalStrategy = require('passport-local').Strategy,
  serverStatic = require('serve-static'),
  FIFA = require('./fifa').FIFA;

var USER = {username: 'admin', password: 'admin'};

var app = express();
app.use(morgan());
app.use(compress());
app.use(bodyParser());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
app.use(methodOverride());
app.use(cookieParser());

app.use(session({
  secret : 'almvnirtgd#$DFsa25452*AYD*D*S!@!#adsda))Ddsadsax',
  cookie: {httpOnly: true, secure: false, maxAge: 86400000},
  store: new session.MemoryStore()
}));

app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(function(username, password, done) {
  if (USER.username === username) {
    if (password === USER.password) {
      done(null, USER);
    } else {
      done(null, false, {msg: 'Incorrect password'});
    }
  } else {
    done(null, false, {msg: 'Could not find user with username ' + username});
  }
}));



app.use('/', serverStatic(__dirname + '/app'));

var isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.send({
      msg: 'Please login to access this information'
    }, 400);
  }
};

app.get('/api/team', function(req, res) {
  res.send(FIFA.TEAMS_LIST);
});

app.post('/api/login', function(req, res, next) {
  passport.authenticate('local', function(err, user) {
    if (err) {return next(err); }
    if (!user) { return res.send({loginStatus: false, msg: 'Unable to login'}, 400); }
    req.logIn(user, function(err) {
      if (err) { return res.send({msg: 'Error logging in', err: err}, 500); }
      return res.send({loginStatus: true, user: user});
    });
  })(req, res, next);
});

app.get('/api/session', isLoggedIn, function(req, res) {
  res.send({
    loginStatus: true,
    user: req.user
  });
});

app.get('/api/team/:code', isLoggedIn, function(req, res) {
  var code = req.params.code;
  res.send(FIFA.TEAM_DETAILS[code]);
});

app.get('/api/logout', function(req, res) {
  req.logout();
  res.redirect('/#/login');
});

var port = process.env.PORT || 8000;
app.listen(port);
console.log('Please go to http://localhost:' + port);

