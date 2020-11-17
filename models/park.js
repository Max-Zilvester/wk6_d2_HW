const Park = function(name, ticket_price){
    this.name = name;
    this.ticket_price = ticket_price;
    this.dinosaur_collection = []
}

Park.prototype.numberOfDino = function () {
    return this.dinosaur_collection.length;
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaur_collection.push(dinosaur);
}

Park.prototype.removeDino = function (dinosaur) {
    const indexOfDino = this.dinosaur_collection.indexOf(dinosaur);
    this.dinosaur_collection.splice(indexOfDino, 1);
}

module.exports = Park;