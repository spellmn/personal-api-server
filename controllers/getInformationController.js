const Dealership = require('../models/dealerships');
const Tourcard = require('../models/tourcard');
const Hardrock = require('../models/hardrock');
const Slush = require('../models/slush');

const getDealerships = async(req,res,next) => {
  
  if (typeof req.query.id != 'undefined') {
        let dealership = await Dealership.find( { "_id" : req.query.id } ).sort( { "name": 1 } );
        res.send(dealership);
    } else {
        let dealership = await Dealership.find( { } ).sort( { "name": 1 } );
        res.send(dealership);
    }
//    let dealership = await Dealership.find().sort( { "name": 1 } );
//    res.send(dealership);
}

const deleteDealership = async(req,res,next) => {
    if (typeof req.query.id != 'undefined') {
        let dealership = await Dealership.find( { "_id" : req.query.id } ).sort( { "name": 1 } ).deleteOne();
        if (dealership.ok) {
            res.send ({status:200,success:true})
        }
        res.send ({status:400,success:false})
    }
}

const getTourcard = async(req,res,next) => {
    let tourcard = await Tourcard.find( { "year" : req.query.year, "association" : req.query.association } ).sort( { "name": 1 } );
    res.send(tourcard);
}

const getHardrock = async(req,res,next) => {
    let hardrock = await Hardrock.find( { } ).sort( { "name": 1 } );
    res.send(hardrock);
}

const getSlush = async(req,res,next) => {
    let slush = await Slush.find( { } ).sort( { "name": 1 } );
    res.send(slush);
}

const postTourcard = async(req, res, next) => {
    const tourcard = new Tourcard(req.body);
    await tourcard.save();
    res.send ({status:200,success:true})

//    let tourcard = await Tourcard.create(req.body);
    //console.log("In the post now");
//    console.log(req.body);
//    res.send ({status:200,success:true})
}

module.exports = {
    deleteDealership,
    getDealerships,
    getTourcard,
    getHardrock,
    getSlush, 
    postTourcard
};
