"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,r){return n&&_defineProperties(e.prototype,n),r&&_defineProperties(e,r),e}require(["require.config"],function(){require(["url","header"],function(t){new(function(){function e(){_classCallCheck(this,e),this.usernameInput=$("#username"),this.passwordInput=$("#password"),this.btn=$("#submit"),this.bindEvents()}return _createClass(e,[{key:"bindEvents",value:function(){var r=this;this.btn.on("click",function(){var e=r.usernameInput.val(),n=r.passwordInput.val();$.ajax({url:t.phpBaseUrl+"user/register.php",type:"post",data:{username:e,password:n},success:function(e){1===e.res_code&&(alert(e.res_message+", 即将跳转登录页"),location.href="login.html")},dataType:"json"})})}}]),e}())})});