var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/test');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {});

var eventSchema = new mongoose.Schema({
  name: {type: String, unique: true, required: true},
  startDate: Date,  
  endDate: Date,
  place: String,
  description: String,
  attractions: String,
  area: String,
  price: Number
});

var Event = mongoose.model('Event', eventSchema);
module.exports = mongoose.model('Event', eventSchema);

router.post('/register', function(req, res){
  var name = req.body.name;
  var startDate = req.body.startDate;
  var endDate = req.body.endDate;
  var place = req.body.place;
  var description = req.body.description;
  var attractions = req.body.attractions;
  var area = req.body.area;
  var price = req.body.price;

  var newEvent = new Event();
  newEvent.name = name;
  newEvent.startDate = startDate;
  newEvent.endDate = endDate;
  newEvent.place = place;
  newEvent.description = description;
  newEvent.attractions = attractions;
  newEvent.area = area;
  newEvent.price = price;

  newEvent.save(function(err, savedEvent){

    if(err){
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send();
  })
});

router.get('/showAll', function(req, res, next){
  Event.find({},
              function(err, searchEvent){
                if(err){
                  console.log(err);
                  return res.status(500).send();
                }
                if(!searchEvent){
                  return res.status(404).send();
                }
                res.status(200).json(searchEvent);
              })
});

router.post('/detailByName', function(req, res, next){
    var name = req.body.name;
    Event.findOne({'name': name},
                function(err, searchEvent){
                  if(err){
                    console.log(err);
                    return res.status(500).send();
                  }
                  if(!searchEvent){
                    return res.status(404).send();
                  }
                  res.status(200).json(searchEvent);
                })
  });

  router.put('/update/:id', function(req, res){
    var id = req.params.id;
  
    Event.findOne({_id: id}, function(err, searchEvent){
      if(err){
        return res.status(500).send();
      }
        if(!searchEvent){
          return res.status(404).send();
        }
          if(req.body.name){
            searchEvent.name = req.body.name;
          }
          if(req.body.startDate){
            searchEvent.startDate = req.body.startDate;
          }
          if(req.body.endDate){
            searchEvent.endDate = req.body.endDate;
          }
          if(req.body.place){
            searchEvent.place = req.body.place;
          }
          if(req.body.description){
            searchEvent.description = req.body.description;
          }
          if(req.body.attractions){
            searchEvent.attractions = req.body.attractions;
          }
          if(req.body.area){
            searchEvent.area = req.body.area;
          }
          if(req.body.price){
            searchEvent.price = req.body.price;
          }        
         
          searchEvent.save(function(err, savedEvent){
          if(err){
            return res.status(500).send();
          }
            return res.status(200).send();
        })
    })
  });
  
  
  router.delete('/delete/:id', function(req, res){
    var id = req.params.id;
  
    Event.findOneAndRemove({_id: id}, function(err){
      if(err){
        return res.status(500).send();
      }
      return res.status(200).send();
    })
  });

module.exports = router;

