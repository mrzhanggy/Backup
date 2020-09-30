// var oCalculator = document.getElementsByClassName('J_calculator')[0],
//     oResult     = document.getElementsByClassName('result')[0],
//     fInput      = document.getElementsByTagName('input')[0],
//     sInput      = document.getElementsByTagName('input')[1],
//     oBtnGroup   = document.getElementsByClassName('button-group')[0];


// oBtnGroup.addEventListener('click', onBtnClick, false);


// function onBtnClick(ev) {
//   var e = ev || window.event,
//         tar = e.target || e.srcElemnt,
//         tagName = tar.tagName.toLowerCase();

//   if(tagName === 'button') {
//     var method = tar.getAttribute('data-method');
//     handleBtnClick(method);
//   }
// }


// function handleBtnClick(method) {

//   fVal = Number(fInput.value.replace(/\s+/g, '')) || 0;
//   sVal = Number(sInput.value.replace(/\s+/g, '')) || 0;

//   console.log(method);
//   switch(method) {
//     case 'plus':
//       oResult.innerText = fVal + sVal;
//       break;
//     case 'minus':
//       oResult.innerText = fVal - sVal;
//       break;
//     case 'mul':
//       oResult.innerText = fVal * sVal;
//       break;
//     case 'div':
//       oResult.innerText = fVal / sVal;
//       break;
//   }
// }


// 独立作用域
(function(doc) {
  var oCalculator = doc.getElementsByClassName('J_calculator')[0],
      oResult     = oCalculator.getElementsByClassName('result')[0],
      oInputs      = oCalculator.getElementsByTagName('input'),
      oBtnGroup   = oCalculator.getElementsByClassName('button-group')[0];

  var init = function() {
    bindEvent();
  }

  function bindEvent() {
    oBtnGroup.addEventListener('click', handleBtnClick, false);
  }

  function handleBtnClick(ev) {
    var tar = tools.getTarget(ev),
        tagName = tar.tagName.toLowerCase();

    if (tagName === 'button') {
      var method = tar.getAttribute('data-method');

      fValue = tools.digitalize(oInputs[0].value);
      sValue = tools.digitalize(oInputs[1].value);

      // compute -> tools.js
      renderResult(compute[method](fValue, sValue));
      
    }
  }

  function renderResult (result) {
    oResult.innerText = result;
  }

  init();

})(document, tools);
