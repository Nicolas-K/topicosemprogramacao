var express = require('express');
var router = express.Router();

var mongoose = require('mongoose'), Schema = mongoose.Schema;
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/test');
//mongoose.connect('mongodb://<topicosmaster>:<senha1234>@ds111082.mlab.com:11082/topicos');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {});

var Event = require('mongoose').model('Event').schema;

var userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  birth: {type: Date, required: true},
  education: {type: String, required: true},
  interest: {type: String, required: true},
  CPF_RG: String
});

var User = mongoose.model('User', userSchema);

router.post('/register', function(req, res){
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var birth = req.body.birth;
  var education = req.body.education;
  var interest = req.body.interest;
  var CPF_RG = req.body.CPF_RG;

  var newUser = new User();
  newUser.name = name;
  newUser.email = email;
  newUser.password = password;
  newUser.birth = birth;
  newUser.education = education;
  newUser.interest = interest;
  if(CPF_RG) newUser.CPF_RG = CPF_RG;

  newUser.save(function(err, savedUser){

    if(err){
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send();
  })
});


router.post('/login', function(req, res){
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({email: email, password:password},
              function(err, searchUser){
                if(err){
                  console.log(err);
                  return res.status(500).send();
                }
                if(!searchUser){
                  return res.status(404).send();
                }
                return res.status(200).send();
              })
});

router.get('/showAll', function(req, res, next){
  User.find({},
              function(err, searchUser){
                if(err){
                  console.log(err);
                  return res.status(500).send();
                }
                if(!searchUser){
                  return res.status(404).send();
                }
                res.status(200).json(searchUser);
              })
});

router.put('/update/:email', function(req, res){
  var email = req.params.email;

  User.findOne({email: email}, function(err, searchUser){
    if(err){
      return res.status(500).send();
    }
      if(!searchUser){
        return res.status(404).send();
      }
        if(req.body.name){
          searchUser.name = req.body.name;
        }
       if(req.body.email){
          searchUser.email = req.body.email;
       }
        if(req.body.password){
          searchUser.password = req.body.password;
       }
        if(req.body.birth){
          searchUser.birth = req.body.birth;
        }
       if(req.body.education){
          searchUser.education = req.body.education;
       }
       if(req.body.interest){
         searchUser.interest = req.body.interest;
        }
       if(req.body.CPF_RG){
         searchUser.CPF_RG = req.body.CPF_RG;
       }
       
       searchUser.save(function(err, savedUser){
        if(err){
          return res.status(500).send();
        } 
          return res.status(200).send();
      })
  })
});

router.delete('/delete/:email', function(req, res){
  var email = req.params.email;

  User.findOneAndRemove({email: email}, function(err){
    if(err){
      return res.status(500).send();
    }
    return res.status(200).send();
  })
});

router.put('/subscribe/:id', function(req, res){
  var id = req.params.id;
  var email = req.body.email;
  var Evento = require('mongoose').model('Event').schema;

  User.findOne({email: email}, function(err, searchUser){
    if(err){
      return res.status(500).send();
    }
      if(!searchUser){
        return res.status(404).send();
      }

      Event.eventSchema.find({_id: id}, function(err, searchEvent){
        if(err){
          return res.status(500).send();
        }
        if(!searchEvent){
          return res.status(404).send();
        }
        
        searchUser.subscriptions.push(searchEvent);
       
        searchUser.save(function(err, savedUser){
          if(err){
            return res.status(500).send();
          } 
            return res.status(200).send();
        })
      })
  })
});

module.exports = router;
