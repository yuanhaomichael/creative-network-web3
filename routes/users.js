var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const cors = require('./cors');
var User = require('../models/user');
var passport = require('passport');
var authenticate = require('../authenticate');

router.use(bodyParser.json());

router.get('/', cors.corsWithOptions, function(req, res, next) {
	User.find({})
		.then(user => {
			res.statusCode = 200;
			res.setHeader( 'Content-Type', 'application/json');
			res.json(user);
		}, err => next(err))
		.catch(err => next(err));

});


router.post('/signup', cors.corsWithOptions, function(req, res, next){
  User.register(new User({username: req.body.username}), req.body.password, 
  (err, user) => {
    if(err){
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
      if(req.body.firstname){
        user.firstname = req.body.firstname;
      }
      if(req.body.lastname){
        user.lastname = req.body.lastname;
      }
      if(req.body.email){
        user.email = req.body.email;
      }
      if(req.body.mobile){
        user.mobile = req.body.mobile;
      }
      user.save((err, user) => {
        if(err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({err: err});
          return ;
        }
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Registration Successful'});
        });
      });
    }
  });
});


router.post('/login', cors.corsWithOptions, passport.authenticate('local'), function(req, res){

        var token = authenticate.getToken({_id: req.user._id});
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, token: token, status: 'Logged in.'});
})


router.get('/logout', cors.corsWithOptions, (req, res) => {
  if(req.session){
    req.session.destroy();  //remove all info
    res.clearCookie('session-id');
    res.redirect('/');
  }
  else{
    var err = new err('you are not logged in');
    err.status = 403;
    next(err);
  }
})

router.delete('/:userId', (req, res, next) => {
  User.findByIdAndRemove(req.params.userId)
  .then(users => {
    res.statusCode = 200;
    res.setHeader( 'Content-Type', 'application/json');
    res.json(users);
  }, err => next(err))
  .catch(err => next(err));
});


module.exports = router;

