// var express = require('express');
// var app = express();
var mongoose = require('mongoose');

try {

  mongoose.connect('mongodb://cempay:1qaz2wsx@ds023603.mlab.com:23603/addressbook');

  var Schema = mongoose.Schema;

  var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
  });

  var Person = mongoose.model('Person', personSchema);

  var john = Person({
    firstname: 'John',
    lastname: 'Brown',
    address: '555 Main St.'
  });

  john.save(function(err) {
    if (err) throw err;
    console.log('person saved');
  });

  Person.find({}, function(err, persons) {
    if (err) throw err;
    console.log(persons);
  });
} catch(err) {
  console.log(err);
}
