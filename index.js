var trim = require("trim");
function build_attack(n) {
  var ret = "1";
  for (var i = 0; i < n; i++) {
    ret += " ";
  }
  return ret + "1";
}
var time = Date.now();
trim(build_attack(50000));
var time_cost = Date.now() - time;
console.log("time_cost: " + time_cost);
