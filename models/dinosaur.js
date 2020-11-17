const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
}



Dinosaur.prototype.dinoWithMostVisit = function (){
  return this.guestsAttractedPerDay.Math.max();
}

module.exports = Dinosaur;
