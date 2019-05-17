require.config({
  baseUrl: "/",
  paths: {
    "jquery": "libs/jquery/jquery-3.2.1",
    "header": "js/module/header",
    "footer": "js/module/footer",
    "list": "js/list",
    "login": "js/login",
    "register": "js/register",
    "details": "js/details",
    "cart": "js/cart",
    "url" : "js/module/url",
    "template" : "libs/art-template/template-web",
    "cookie" : "libs/jquery-plugins/jquery.cookie",
    "zoom": "libs/jquery-plugins/jquery.elevateZoom-3.0.8.min",
    "fly": "libs/jquery-plugins/jquery.fly.min",
    "swiper": "libs/swiper/js/swiper"
  },
	// 垫片， 给不满足AMD规范的插件又要依赖于别的模块
	shim: {
	  "cookie" : {
	    deps: ['jquery']
    },
    "zoom" : {
      deps: ['jquery']
    },
    "fly" : {
      deps: ['jquery']
    }
	}
})