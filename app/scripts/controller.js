// Description:
//   controller.js - add orderList if you add local scripts.

var orderList = [
  // [ コマンド名, スクリプトのパス, 引数の説明 ]
  ['weather', 'echo "https://wttr.in/Osaka?lang=ja"', '引数なし, 天気予報'],
  ['hello-sh', 'scripts/shell/hello.sh', '引数なし, shellscriptの動作確認'],
  ['hello-py', 'scripts/python/hello.py', '引数なし, pythonの動作確認'],
  ['coin', 'scripts/python/coin-rate.py', '引数あり, coin ETH XRP'],
];

module.exports = function (robot) {
  robot.respond("/(.*)/i", function (msg) {
    var args = msg.match[1]

    if(args == 'gg'){
      return false;
    }
    if(validate(args)){
      msg.send("```\nno!!\n```");
      return false;
    }
    else if(args == ""){
      var command_list = "`command list`\n";
      for(var i = 0; i < orderList.length; i++){
        command_list += '_*';
        command_list += orderList[i][0];
        command_list += '*_ ';
        if(orderList[i][3]){
          command_list += '_';
          command_list += orderList[i][3];
          command_list += '_';
        }
        command_list += '\n';
        command_list += '>';
        command_list += orderList[i][2];
        command_list += '\n\n';
      }
      msg.send(command_list);
      return false;
    }

    var str = args.split(/\s/);
    var order = str[0];
    var index = orderList.findIndex(function(element, index, array) { return element.indexOf(order) >= 0; });

    if(index === -1){
      msg.send('nothing order');
      return false;
    }
    var command = orderList[index][1];
    if(str.length >= 1){
      for(i=1;i<str.length;i++){
         command += " " + str[i];
      }
    }
    var exec = require('child_process').exec;
    exec(command, function (error, stdout, stderr) {
      msg.send(stdout);
    });
  })
};

function validate(val){
  var reg = new RegExp(/[!"#$%&'()\*\+,;<=>?@\[\\\]^`{|}~]|xsetuid/g);
  if(reg.test(val)){
    return true;
  }else{
    return false;
  }
}

