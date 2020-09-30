var tools = (function () {
  function getTarget (ev) {
    var e = ev || window.Event;
    return e.target || e.srcElement;
  }

  function digitalize (str) {
    return Number(str.replace(/\s+/g, '')) || 0;
  }

  return {
    getTarget: getTarget,
    digitalize: digitalize
  }
})();

var compute = (function () {
  function plus (a, b) {
    return a + b;
  }
  function minus (a, b) {
    return a - b;
  }
  function mul (a, b) {
    return a * b;
  }
  function div (a, b) {
    return a / b;
  }
  return {
    plus: plus,
    minus: minus,
    mul: mul,
    div: div
  }
})();
