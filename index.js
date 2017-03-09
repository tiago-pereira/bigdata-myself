#!/usr/bin/env node

const os = require('os');
const fs = require('fs');
const program = require('commander');

program
 .version('0.0.1')
 .option('-c, --category <category>', 'Category of the log')
 .option('-m, --message <message>', 'Log message')
 .parse(process.argv);

const bgmDir = os.homedir()+'\\bgm';
const today = new Date();
const todayFile= bgmDir+'\\'+today.toISOString().slice(0, 10)+'.txt';


if(!fs.existsSync(bgmDir)){
  fs.mkdirSync(bgmDir);
}

if(!fs.existsSync(todayFile)){
  fs.writeFile(todayFile, 
    formatMessage(today, program.category, program.message),
    function(err){
      if (err) return console.log(err);
      console.log("Saved: "+ todayFile);
    }
  );
} else {
  fs.appendFile(todayFile,
    formatMessage(today, program.category, program.message),
    function(err){
      if (err) return console.log(err);
      console.log("Saved: "+ todayFile);
    }
  );
}

function formatMessage(date, category, message){
  category = category || 'Geral';
  message = message || 'Vazia';
  return date.getHours() + ":" + date.getMinutes() + ' - ' + category + ' - ' + message + '\n';
}
