(function (doc) {
  var calculator = doc.getElementsByClassName('J_calculator')[0],
      result     = calculator.getElementsByClassName('result')[0],
      inputs     = calculator.getElementsByTagName('input'),
      btns       = calculator.getElementsByClassName('btn-group')[0];
  
  function init () {
    bindEvent();
  }

  function bindEvent () {
    btns.addEventListener('click', handleBtnClick, false);
  }

  function handleBtnClick (ev) {
    var tar = tools.getTarget(ev);
        tagName = tar.tagName.toLowerCase();
    
    if(tagName === 'button') {
      var method = tar.getAttribute('data-method');

      var fValue = tools.digitalize(inputs[0].value),
          sValue = tools.digitalize(inputs[1].value);


      console.log(fValue, sValue, method);
           
      renderReuslt(compute[method](fValue, sValue));
    }
  }

  function renderReuslt (num) {
    console.log(num);
    result.innerText = num;
  }

  init();

})(document);