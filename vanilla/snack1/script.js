let bikes = [
  {
    "name": "Bianchi",
    "weight":1
  },
  {
    "name": "Shimano",
    "weight":2
  },
  {
    "name": "Atala",
    "weight":3
  }
]

var lightestBike = bikes.weight > bikes.weight

for (var key in bikes) {
  if(bikes[key] === lightestBike) {
    console.log(lightestBike)
    break;
  }
}
