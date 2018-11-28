const fs = require("fs");

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}

const evaluateCmd = (userInput) => {
  const userInputArray = userInput.split(" ");
  const command = userInputArray[0];

  switch (command) {
    case "echo":
      commandLibrary.echo(userInputArray.slice(1).join(" "));
      break;
    case "cat":
      commandLibrary.cat(userInputArray.slice(1));
      break;
    case "head":
      commandLibrary.head(userInputArray.slice(1));
      break;
    case "tail":
      commandLibrary.tail(userInputArray.slice(1));
      break;
    default:
      errorHandler();
      break;
/*    case "sort":
      commandLibrary.sort(userInputArray.slice(1));
      break;
    case "wc":
      commandLibrary.sort(userInputArray.slice(1));
      break;
    case "uniq":
      commandLibrary.sort(userInputArray.slice(1));
      break;
*/  }
}

const commandLibrary = {
  "echo": function(userInput) {
      done(userInput);
  },
  "cat": function(fullPath) {
      const fileName = fullPath[0];
      fs.readFile(fileName, (err, data) => {
        if (err) throw err;
          done(data);
      });
  },
  "head": function(fullPath) {
      const fileName = fullPath[0];
      fs.readFile(fileName, (err, data) => {
        if (err) throw err;
          let lines = data.split("\n");
          for (let i = 0; i < 5; i++) {
            console.log(lines[i] + "\n");
            }
          }       
      )
  },
  "tail": function(fullPath) {
      const fileName = fullPath[0];
      fs.readFile(fileName, (err, data) => {
        if (err) throw err;
          let lines = data.split("\n");
          for (let i = data.length - 1; i >= i-5; i--) {
            console.log(lines[i] + "\n");
            }
          }
      )
  },
  "errorHandler": function() {
      console.log("Function not found");
  },
  
  /*,
  "sort": function(fullPath) {
      const fileName = fullPath[0];
      const arrOfVals = [];
      fs.readFile(fileName, (err, data) => {
        if (err) throw err; 
        const newData = process.stdout.write(data);
        console.log(typeof newData);
        for (obj in data) {
          arrOfVals.push(obj.val); 
        }
        for (val in arrOfVals) {
          console.log(val);
        }
      });

  } */ 
};

exports.commandLibrary = commandLibrary;
exports.evaluateCmd = evaluateCmd;

