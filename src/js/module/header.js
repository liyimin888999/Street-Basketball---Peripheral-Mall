define(['jquery', 'cookie'], $ => {
  function Header() {
    this.container = $("#header-container");
    this.load().then(() => {
      this.search();
      this.isLogin();
      this.calcCartNum();
    });

  }
  // 对象合并
  $.extend(Header.prototype, {
    load() {
      return new Promise(resolve => {
        this.container.load('/html/module/header.html', () => {
          // load异步执行结束
          resolve();
        });
      })
    },

    search() {
      var _this = this;
      $("#search-input").on("keyup", function () {
        _this.inputValue = $(this).val();
        _this.addUl(_this.inputValue);
      }).blur(() => {
        setTimeout(() => {
          $("#uls").hide();
        }, 100)
        $("#uls").on("click", "li", function () {
          $("#search-input").val($(this).html());
        })
      }).focus(() => {
        _this.inputValue = $("#search-input").val();
        _this.addUl(_this.inputValue);
      });
    },
    /**
    *添加搜索内容框 
    */
    addUl(inputValue) {
      if (inputValue) {
        $("#uls").remove();
        $.getJSON("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=?&wd=" + inputValue,
          function (res) {
            let arr = res.s;
            if (arr.length !== 0) {
              $(".search-input").append("<ul id='uls'>");
              arr.forEach(function (item, index) {
                $("#uls").append("<li>" + item + "</li>");
              });
            }
          }
        );
      } else {
        $("#uls").hide();
      }
    },
    //登录
    isLogin() {
      this.loginBtn = $("#login-btn");
      this.afterLogin = $("#after-login");
      this.nameSpan = $("#name");
      this.logout = $("#exit");
      let username = $.cookie("username");
      if (username) {
        this.loginBtn.hide();
        this.afterLogin.show();
        this.nameSpan.html(username);
      }
      this.logout.on("click", () => {
        // 退出登录
        if (confirm("确定要退出吗？")) {
          $.removeCookie("username", { path: '/' });
          this.loginBtn.show();
          this.afterLogin.hide();
        }
      })
    },
    calcCartNum() {
      let cart = localStorage.getItem('cart');
      let num = 0;
      if (cart) {
        // 计算总数量
        cart = JSON.parse(cart);
        // 以总数量为例
        num = cart.reduce((n, shop) => {
          n += Number(shop.num);
          return n;
        }, 0);

      }
      $("#cart-num").html(num);
    }
  })

  return new Header();
});