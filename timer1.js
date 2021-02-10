//Alarm clock / timer which will beep after a specified amount of time has passed. 
//The user can specify an unlimited number of alarms using command line arguments

const inputs = process.argv.slice(2)

for (input of inputs) {
  let inputSecs = input * 1000;
  setTimeout(()=> {
    process.stdout.write('\x07')
  }, inputSecs);
   inputSecs
}

//Need edge cases
