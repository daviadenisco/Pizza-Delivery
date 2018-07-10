let express = require('express');
let app = express();
const PizzaDeliverer = require('./app/PizzaDeliverer');
const DualPizzaDeliverer = require('./app/DualPizzaDeliverer');

app.get('/', function (req, res) {
    res.send("Little Nero's Pizza")
})

app.get('/pizzadeliverer', function(req, res) {
  let directions = req.query["directions"];
  let answer = PizzaDeliverer.uniqueDeliveryLocations(directions);
  console.log("answer: ", answer);
  res.send({answer});
});

app.get('/dualpizzadeliverer', (req, res) => {
  let directions = req.query["directions"];
  let answer = DualPizzaDeliverer.uniqueDeliveryLocations(directions);
  res.send({answer});
});

app.listen(3000);
