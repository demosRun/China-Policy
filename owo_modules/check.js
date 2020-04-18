
var screenInfo = {
  ua: navigator.userAgent
}
function _addClass (className) {
  if (window.navigator.userAgent.indexOf("MSIE") < 1) {
    document.body.classList.add(className)
  } else {
    var owoList = document.querySelectorAll('.page')
    for (var index = 0; index < owoList.length; index++) {
      var element = owoList[index];
      element.className += " " + className
    }
    
  }
}

// 判断浏览器类型
screenInfo.isWindowsPhone = /(?:Windows Phone)/.test(screenInfo.ua),
screenInfo.isSymbian = /(?:SymbianOS)/.test(screenInfo.ua) || screenInfo.isWindowsPhone, 
screenInfo.isAndroid = /(?:Android)/.test(screenInfo.ua), 
screenInfo.isFireFox = /(?:Firefox)/.test(screenInfo.ua), 
screenInfo.isChrome = /(?:Chrome|CriOS)/.test(screenInfo.ua),
screenInfo.isTablet = /(?:iPad|PlayBook)/.test(screenInfo.ua) || (screenInfo.isAndroid && !/(?:Mobile)/.test(screenInfo.ua)) || (screenInfo.isFireFox && /(?:Tablet)/.test(screenInfo.ua))
screenInfo.isIPhone = /(?:iPhone)/.test(screenInfo.ua) && !screenInfo.isTablet,
screenInfo.isPc = !screenInfo.isIPhone && !screenInfo.isAndroid && !screenInfo.isSymbian;

if (screenInfo.isPc) {
  _addClass('pc')
} else {
  _addClass('phone')
}

function getScreenInfo() {
  screenInfo.width = document.documentElement.clientWidth || document.body.offsetWidth || window.innerWidth
  screenInfo.height = document.documentElement.clientHeight || document.body.offsetHeight || window.innerHeight
    // 屏幕长宽比
  screenInfo.scale = (screenInfo.width / screenInfo.height).toFixed(2)

  // 判断横屏还是竖屏
  if (screenInfo.scale > 1) {
    document.body.classList.remove('vertical')
    _addClass('horizontal')
  } else {
    document.body.classList.remove('horizontal')
    _addClass('vertical')
  }
}

getScreenInfo()

var timer = null
if (window.addEventListener) {
  window.addEventListener('resize', function () {
    window.clearTimeout(timer)
    timer = setTimeout(function() {
      getScreenInfo()
    }, 300)
  })
}
