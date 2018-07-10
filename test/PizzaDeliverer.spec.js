let chai = require('chai');
let path = require('path');

chai.should();

let PizzaDeliverer = require(path.join(__dirname, '../app/', 'PizzaDeliverer'));

describe('PizzaDeliverer', () => {
    let pizzaDeliverer;
    let directions = '^>>';

    beforeEach(() => {
      pizzaDeliverer = PizzaDeliverer.uniqueDeliveryLocations(directions);
    });

    it('should return 4', function () {
      pizzaDeliverer.should.equal(4);
    });

    it('should change with new input', () => {
      console.log("directions: ", directions);
      directions = '^>>>';
      console.log("new directions: ", directions);
      pizzaDeliverer.should.equal(5);
    });

    it('only accepts a string', () => {
      () => {
        var directions = 234;
        pizzaDeliverer.should.throw(Error);
      }
  });
});
