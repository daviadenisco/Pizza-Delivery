let chai = require('chai');
let path = require('path');

chai.should();

let DualPizzaDeliverer = require(path.join(__dirname, '../app/', 'DualPizzaDeliverer'));

//
describe('DualPizzaDeliverer', () => {
    let dualPizzaDeliverer;
    let directions = '^>v<^';

      beforeEach(() => {
        dualPizzaDeliverer = DualPizzaDeliverer.uniqueDeliveryLocations(directions);
      });

      it('should return three', function () {
        dualPizzaDeliverer.should.equal(3);
      });

      it('should change with new input', () => {
        directions = '^>v<^<<<';
        dualPizzaDeliverer.should.equal(5);
      });

      it('only accepts a string', () => {
        () => {
          var directions = 234;
          dualPizzaDeliverer.should.throw(Error);
        }
    });
  });
