const express = require("express");
const lodash = require("lodash");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("./cors");
var authenticate = require("../authenticate");

const Ideas = require("../models/ideas");

const ideasRouter = express.Router();
ideasRouter.use(bodyParser.json());

/**
 * A schema for operations on the entire idea database.
 * @GET: View all ideas in the database.
 * @POST: Create a new idea.
 * @PUT: Not supported.
 * @DELETE: Dangerous operation, though it's doable.
 */
ideasRouter
  .route("/")
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(cors.cors, (req, res, next) => {
    if (!lodash.isEmpty(req.query)) {
      const { video, industry, videoStyle, budget } = req.query;
      console.log({ video, industry, videoStyle, budget });
      let query = {};
      const videoParams = video && video.split(",");
      const industryParams = industry && industry.split(",");
      const videoStyleParams = videoStyle && videoStyle.split(",");
      const budgetParams = budget && budget.split(",");
      if (videoParams[0]) {
        query = { ...query, type: { $in: videoParams } };
      }
      if (industryParams[0]) {
        query = { ...query, industry: { $in: industryParams } };
      }
      if (videoStyleParams[0]) {
        query = { ...query, style: { $in: videoStyleParams } };
      }
      if (budgetParams[0]) {
        query = { ...query, budget: budgetParams[0] };
      }
      console.log({ query: query });
      return Ideas.find(query)
        .populate("creator")
        .then(
          (ideas) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(ideas);
          },
          (err) => next(err)
        )
        .catch((err) => next(err));
    }
    return Ideas.find({})
      .populate("creator")
      .then(
        (ideas) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(ideas);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

// .get(cors.cors, (req, res, next) => {
// console.log(req.query);
// if (req.query) {
//   const { video, industry, videoStyle, budget } = req.query;
//   const videoParams = video?.split(",");
//   const industryParams = industry?.split(",");
//   const videoStyleParams = videoStyle?.split(",");
//   const budgetParams = budget?.split(",");
//   console.log({
//     videoParams,
//     industryParams,
//     videoStyleParams,
//     budgetParams
//   });
//   return Ideas.find({
//     industry: { $in: industryParams },
//     budget: { $in: budgetParams }
//   })
//     .populate("creator")
//     .then(
//       (ideas) => {
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "application/json");
//         res.json(ideas);
//       },
//       (err) => next(err)
//     )
//     .catch((err) => next(err));
// }
// return Ideas.find({})
//   .populate("creator")
//   .then(
//     (ideas) => {
//       res.statusCode = 200;
//       res.setHeader("Content-Type", "application/json");
//       res.json(ideas);
//     },
//     (err) => next(err)
//   )
//   .catch((err) => next(err));
// });

// //sample API to query the right idea record based on filtering
//  .get(cors.cors, type, industry, style, budget, (req, res, next) =>{
// 	Ideas.find(
// 		{ [
// 		    type: {$in: type},
// 			industry: {$in: industry},
// 			style: { $in: style},
// 			budget: { $in: budget }
// 		  ]
// 		}
// 	)
// 	//sample API to query the right idea record based on filtering
// 	.populate('creator')
// 	.then(ideas => {
// 		res.statusCode = 200;
// 		res.setHeader( 'Content-Type', 'application/json');
// 		res.json(ideas);
// 	}, err => next(err))
// 	.catch(err => next(err));

// })

//  .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
// 	Ideas.create(req.body)
// 	.then(ideas => {
// 		console.log('Idea Created', ideas);
// 		res.statusCode = 200;
// 		res.setHeader( 'Content-Type', 'application/json');
// 		res.json(ideas);

// 	}, err => next(err))
// 	.catch(err => next(err));
// })

//  .put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
// 	res.statusCode = 403;
// 	res.end('put operation not supported')
// })

//  .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
// 	Ideas.remove({})
// 	.then(ideas => {
// 		res.statusCode = 200;
// 		res.setHeader( 'Content-Type', 'application/json');
// 		res.json(ideas);
// 	}, err => next(err))
// 	.catch(err => next(err));
// })

/**
 * A schema for operations on each idea record.
 * @GET: View a specified idea.
 * @POST: Not supported.
 * @PUT: Change a specified idea.
 * @DELETE: Delete a specified idea.
 */
ideasRouter
  .route("/:ideaId")
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(cors.cors, (req, res, next) => {
    Ideas.findById(req.params.ideaId)
      .populate("creator")
      .then(
        (ideas) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(ideas);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

/**
 * A schema for operations on each idea record.
 * @GET: View embedLinks of specific creatorId.
 */
ideasRouter
  .route("/creator/:creatorId")
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(cors.cors, (req, res, next) => {
    Ideas.find({ creator: req.params.creatorId })
      .then(
        (ideas) => {
          let data = ideas.length
            ? ideas.map((idea) => {
                return {
                  embedLink: idea.embedLink,
                  title: idea.title,
                  client: idea.client,
                };
              })
            : ideas;
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(data);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

// .post(cors.corsWithOptions, authenticate.verifyUser,(req, res, next) => {
// 	res.statusCode = 403;
// 	res.end('post operation not supported on /Ideas/' + req.params.ideaId
//   );
// })

// .put(cors.corsWithOptions, authenticate.verifyUser,(req, res, next) => {

// 	Ideas.findByIdAndUpdate(req.params.ideaId, {
// 		$set: req.body
// 	},{new: true})
// 	.then(ideas => {
// 		res.statusCode = 200;
// 		res.setHeader('Content-Type', 'application/json');
// 		res.json(ideas);
// 	}, err => next(err))
// 	.catch(err => next(err));
// })

// .delete(cors.corsWithOptions, authenticate.verifyUser,(req, res, next) => {
// 	Ideas.findByIdAndRemove(req.params.ideaId)
// 	.then(ideas => {
// 		res.statusCode = 200;
// 		res.setHeader( 'Content-Type', 'application/json');
// 		res.json(ideas);
// 	}, err => next(err))
// 	.catch(err => next(err));
// });

/**
 * A schema for operations on the case study info of an idea record.
 * @GET: Get all case study info.
 * @POST: Post case study info.
 * @PUT: Not Supported.
 * @DELETE: Delete case study info.
 */
ideasRouter
  .route("/:ideaId/caseStudy")
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(cors.cors, (req, res, next) => {
    Ideas.findById(req.params.ideaId)
      .then(
        (idea) => {
          if (idea != null) {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(idea.caseStudy);
          } else {
            err = new Error("idea " + req.params.ideaId + " not found");
            err.status = 404;
            return next(err);
          }
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

// .post(cors.corsWithOptions, authenticate.verifyUser,(req, res, next) => {
// 	Ideas.findById(req.params.ideaId)
// 	 .then(idea => {
// 		if(idea != null){
// 			req.body.author = req.user._id;
// 			idea.caseStudy.push(req.body);
// 			idea.save()
// 			.then(idea =>{
// 				Ideas.findById(idea._id)
// 					.populate('creator')
// 					.then(idea => {
// 						res.statusCode = 200;
// 						res.setHeader( 'Content-Type', 'application/json');
// 						res.json(idea.caseStudy);
// 					})
// 			})

// 		}
// 		else {
// 			err = new Error('idea ' + req.params.ideaId + ' not found');
// 			err.status = 404;
// 			return next(err);
// 		}
// 	}, err => next(err))
// 	.catch(err => next(err));
// })

// .put(cors.corsWithOptions, authenticate.verifyUser,(req, res, next) => {
// 	res.statusCode = 403;
// 	res.end('put operation not supported on /Ideas/' + req.params.ideaId
//   );
// })

// .delete(cors.corsWithOptions, authenticate.verifyUser,(req, res, next) => {
// 	Ideas.findById(req.params.ideaId)
// 	.then(idea => {
// 		if(idea!= null){
// 			for(var i = (idea.caseStudy.length-1); i>=0; i--) {
// 				idea.caseStudy.id(idea.caseStudy[i]._id).remove();
// 		     }
// 		     idea.save()
// 		 	.then(idea =>{
// 					res.statusCode = 200;
// 					res.setHeader( 'Content-Type', 'application/json');
// 					res.json(idea.caseStudy);
// 				}, err => next(err));
// 		}
// 		else {
// 			err = new Error('idea ' + req.params.ideaId + ' not found');
// 			err.status = 404;
// 			return next(err);
// 		 }
// 		}, err => next(err))
// 		.catch(err => next(err));
// });

/**
 * A schema for operations on the case study info of an idea record.
 * @PUT: Change case study info.
 */
ideasRouter
  .route("/:ideaId/caseStudy/:caseStudyId")
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .put(cors.cors, authenticate.verifyUser, (req, res, next) => {
    Ideas.findById(req.params.ideasId)
      .then(
        (ideas) => {
          if (
            ideas != null &&
            ideas.caseStudy.id(req.params.caseStudyId) != null
          ) {
            if (req.body.description) {
              ideas.caseStudy.id(req.params.caseStudyId).description =
                req.body.description;
            }
            if (req.body.brandchallenge) {
              ideas.caseStudy.id(req.params.caseStudyId).brandchallenge =
                req.body.brandchallenge;
            }
            if (req.body.views) {
              ideas.caseStudy.id(req.params.caseStudyId).views = req.body.views;
            }
            if (req.body.ctr) {
              ideas.caseStudy.id(req.params.caseStudyId).ctr = req.body.ctr;
            }
            if (req.body.daysfinished) {
              ideas.caseStudy.id(req.params.caseStudyId).daysfinished =
                req.body.daysfinished;
            }
            if (req.body.assetsdelivered) {
              ideas.caseStudy.id(req.params.caseStudyId).assetsdelivered =
                req.body.assetsdelivered;
            }
            if (req.body.channels) {
              ideas.caseStudy.id(req.params.caseStudyId).channels =
                req.body.channels;
            }
            ideas.save().then(
              (ideas) => {
                Ideas.findById(ideas._id)
                  .populate("creator")
                  .then((ideas) => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");
                    res.json(ideas);
                  });
              },
              (err) => next(err)
            );
          } else if (ideas == null) {
            err = new Error("ideas " + req.params.ideasId + " not found");
            err.status = 404;
            return next(err);
          } else {
            err = new Error(
              "caseStudy " + req.params.caseStudyId + " not found"
            );
            err.status = 404;
            return next(err);
          }
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

module.exports = ideasRouter;
