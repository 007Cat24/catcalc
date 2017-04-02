var AutoUpdater = require('auto-updater');
 
    var autoupdater = new AutoUpdater({
     pathToJson: '',
     autoupdate: false,
     checkgit: true,
     jsonhost: 'raw.githubusercontent.com',
     contenthost: 'codeload.github.com',
     progressDebounce: 0,
     devmode: false
    });
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var pi = 3.1415926535
function golfScore(par, strokes) {

  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes == par - 1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par + 1) {
    return "Bogey";
  } else if (strokes == par + 2) {
    return "Double Bogey";
  } else if (strokes >= par + 3) {
    return "Go Home!";
  }


  return "Error";

}


golfScore(4, 7);
console.log('      ')
console.log("Welcome to CatCalc, the free and magical golf calculator.")
console.log('      ')

 autoupdater.on('git-clone', function() {
      console.log("You have a clone of the repository. Use 'git pull' to be up-to-date");
    });
    autoupdater.on('check.up-to-date', function(v) {
      console.info("You have the latest version: " + v);
    });
    autoupdater.on('check.out-dated', function(v_old, v) {
      console.warn("Your version is outdated. " + v_old + " of " + v);
      autoupdater.fire('download-update'); // If autoupdate: false, you'll have to do this manually. 
      // Maybe ask if the'd like to download the update. 
    });
    autoupdater.on('update.downloaded', function() {
      console.log("Update downloaded and ready for install");
      autoupdater.fire('extract'); // If autoupdate: false, you'll have to do this manually. 
    });
    autoupdater.on('update.not-installed', function() {
      console.log("The Update was already in your folder! It's read for install");
      autoupdater.fire('extract'); // If autoupdate: false, you'll have to do this manually. 
    });
    autoupdater.on('update.extracted', function() {
      console.log("Update extracted successfully!");
      console.warn("RESTART THE APP!");
    });
    autoupdater.on('download.start', function(name) {
      console.log("Starting downloading: " + name);
    });
    autoupdater.on('download.progress', function(name, perc) {
      process.stdout.write("Downloading " + perc + "% \033[0G");
    });
    autoupdater.on('download.end', function(name) {
      console.log("Downloaded " + name);
    });
    autoupdater.on('download.error', function(err) {
      console.error("Error when downloading: " + err);
    });
    autoupdater.on('end', function() {
      console.log("The app is ready to function");
    });
    autoupdater.on('error', function(name, e) {
      console.error(name, e);
    });
 
    // Start checking 
    autoupdater.fire('check');

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
    else if (val == 2) {
      rl.question('Awesome! Please enter the area of the crater (in km squared): ', function (area) {
        rl.question("Okay, and what's the perimeter? :", function (perimeter) {
          console.log("Calculating...")
          console.log(' ')
          var counter = 4 * pi * area
          var denominator = perimeter * perimeter
          var circularityRatio = counter / denominator
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
