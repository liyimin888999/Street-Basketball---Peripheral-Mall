"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,r){return n&&_defineProperties(e.prototype,n),r&&_defineProperties(e,r),e}require(["require.config"],function(){require(["url","jquery","cookie"],function(t,s){new(function(){function e(){_classCallCheck(this,e),this.usernameInput=s("#username"),this.passwordInput=s("#password"),this.btn=s("#login"),this.remember=s("#remember"),this.bindEvents()}return _createClass(e,[{key:"bindEvents",value:function(){var r=this;this.btn.on("click",function(){var n=r.usernameInput.val(),e=r.passwordInput.val();s.ajax({url:t.phpBaseUrl+"user/login.php",type:"post",data:{username:n,password:e},success:function(e){1===e.res_code&&r.loginSucc(n)},dataType:"json"})})}},{key:"loginSucc",value:function(e){var n=this.remember.prop("checked")?{expires:10}:{};n=Object.assign({path:"/"},n),console.log(n),s.cookie("username",e,n),alert("登录成功，即将跳转首页"),location.href="/"}}]),e}())})});