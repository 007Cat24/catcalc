
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var pi = 3.1415926535;
function golfScore(par, strokes) {

  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes === par - 1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else if (strokes >= par + 3) {
    return "Go Home!";
  }


  return "Error";

}


golfScore(4, 7);
console.log("      ")
console.log("Welcome to CharlyCalc, the basic calculator.")
console.log("      ")


rl.question('Please tell me your name: ', function (name) {
  rl.question('Okay, ' + name + ' Select your option. Enter "1" for the golf calculator, and "2" for the circularity calculator (for craters): ', function (val) {
    if (val == 1) {
      rl.question('So, hello ' + name + ' , please tell me the par now: ', function (par) {
        rl.question('Okay, and how many strokes did you need to finish it? ', function (strokes) {
          var nick = golfScore(par, strokes)
          console.log('Your golf nickname is ' + nick + '.')
          rl.close();
          process.stdin.destroy();
        });

      });
    }
    else if (val === 2) {
      rl.question('Awesome! Please enter the area of the crater (in km squared): ', function (area) {
        rl.question("Okay, and what's the perimeter? :", function (perimeter) {
          console.log("Calculating...");
          console.log(" ");
          var counter = 4 * pi * area;
          var denominator = perimeter * perimeter;
          var circularityRatio = counter / denominator;
          var roundedtwo = Number((circularityRatio).toFixed(2));
          var roundedthree = Number((circularityRatio).toFixed(3));
          console.log('The circularity ratio is '+ roundedtwo + '.')
          if (roundedthree < 0.925) {
            console.log('The ratio is under 0.925, this means that the object struck at an angle below 20 degrees and created a butterfly ejecta pattern.')
          } else if (roundedthree > 0.925) {
            console.log("The ratio is over 0.925, this means that the object struck at an angle over 20 degrees and didn't create a butterfly ejecta pattern.")
          }
          rl.close();
          process.stdin.destroy();
        });
      });
    }


  });
  });
