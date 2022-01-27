const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('./cors');
var authenticate = require('../authenticate');


const Creatives = require('../models/creatives');

const creativesRouter = express.Router();
creativesRouter.use(bodyParser.json());


/**
 * A schema for operations on the entire creatives database. 
 * @GET: View all creatives in the database.
 * @POST: Register a new creative.
 * @PUT: Not supported.
 * @DELETE: Dangerous operation, though it's doable. 
 */
creativesRouter.route('/')
.options(cors.corsWithOptions, (req, res) => {res.sendStatus(200);})

 .get(cors.cors, (req, res, next) =>{
	Creatives.find({})
	.populate('ideas')
	.populate('userAccount')
	.then(creatives => {
		res.statusCode = 200;
		res.setHeader( 'Content-Type', 'application/json');
		res.json(creatives);
	}, err => next(err))
	.catch(err => next(err));

})

 .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
	Creatives.create(req.body)
	.then(creatives => {
		console.log('Creatives Created', creatives);
		res.statusCode = 200;
		res.setHeader( 'Content-Type', 'application/json');
		res.json(creatives);

	}, err => next(err))
	.catch(err => next(err));
})


 .put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
	res.statusCode = 403;
	res.end('put operation not supported')
})
 
 .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
	Creatives.remove({})
	.then(creatives => {
		res.statusCode = 200;
		res.setHeader( 'Content-Type', 'application/json');
		res.json(creatives);
	}, err => next(err))
	.catch(err => next(err));
})



/**
 * A schema for operations on each creatives record. 
 * @GET: View a specified creative.
 * @POST: Not supported.
 * @PUT: Change a specified creative's info.
 * @DELETE: Delete a specified creative. 
 */
creativesRouter.route('/:creativesId') 
.options(cors.corsWithOptions, (req, res) => {res.sendStatus(200);})

.get(cors.cors, (req, res, next) =>{
	Creatives.findById(req.params.creativesId)
	.populate('ideas')
	.populate('userAccount')
	.then(creatives => {
		res.statusCode = 200;
		res.setHeader( 'Content-Type', 'application/json');
		res.json(creatives);
	}, err => next(err))
	.catch(err => next(err));
})

.post(cors.corsWithOptions, authenticate.verifyUser,(req, res, next) => {
	res.statusCode = 403;
	res.end('post operation not supported on /creatives/' + req.params.creativesId
  );
})


.put(cors.corsWithOptions, authenticate.verifyUser,(req, res, next) => {
	
	Creatives.findByIdAndUpdate(req.params.creativesId, {
		$set: req.body
	},{new: true})
	.then(creatives => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json(creatives);
	}, err => next(err))
	.catch(err => next(err));
})

.delete(cors.corsWithOptions, authenticate.verifyUser,(req, res, next) => {
	Creatives.findByIdAndRemove(req.params.creativesId)
	.then(creatives => {
		res.statusCode = 200;
		res.setHeader( 'Content-Type', 'application/json');
		res.json(creatives);
	}, err => next(err))
	.catch(err => next(err));
});





module.exports = creativesRouter;