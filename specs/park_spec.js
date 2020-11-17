const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park('oldpark', 5, 15);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'oldpark');
  });


  it('should have a ticket price', function(){
    const actual = park.ticket_price;
    assert.strictEqual(actual, 5);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaur_collection;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to return the number of dino', function () {
    const actual = park.numberOfDino();
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur('titanaboa');
    const actual = park.numberOfDino();
    assert.strictEqual(actual, 1);
  });



  it('should be able to remove a dinosaur from its collection', function (){
    park.addDinosaur('titanaboa');
    park.addDinosaur('tricerotops');
    park.removeDino('tricerotops');
    const expected = ['titanaboa']
    const actual = park.dinosaur_collection;
    assert.deepStrictEqual(actual, expected);
  });
  
  

  

  // it('should be able to calculate the total number of visitors per day');

  // it('should be able to calculate the total number of visitors per year');

  // it('should be able to calculate total revenue for one year');

});
