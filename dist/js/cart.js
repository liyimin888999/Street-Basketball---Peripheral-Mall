"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var c=0;c<t.length;c++){var n=t[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,c){return t&&_defineProperties(e.prototype,t),c&&_defineProperties(e,c),e}require(["require.config"],function(){require(["template","header","footer"],function(c,e){new(function(){function e(){_classCallCheck(this,e),this.getType()}return _createClass(e,[{key:"getType",value:function(){var e=localStorage.getItem("cart");e?(e=JSON.parse(e),this.render(e)):alert("购物车为空，快去选购吧")}},{key:"render",value:function(e){var t=c("cart-template",{cart:e});$("#cart-container").html(t),this.Binds(),this.allMoney()}},{key:"Binds",value:function(){var c=this;$("#cart-container").on("click",".count_plus",function(){var e=$(this).parent().data("id"),t=$(this).prev().children(".shop_count").val();$(this).prev().children(".shop_count").val(++t),c.setlocalStorage(t,e),c.allMoney()}),$("#cart-container").on("click",".count_minus",function(){var e=$(this).parent().data("id"),t=$(this).next().children(".shop_count").val();--t<1&&(t=1),$(this).next().children(".shop_count").val(t),c.setlocalStorage(t,e),c.allMoney()}),$(".shop_count").keyup(function(){var e=$(this).val(),t=$(this).parent().parent().data("id");(""==e||e<=0||null==e||null==e)&&(e=1),c.setlocalStorage(e,t),c.allMoney()}),$("#cart-container").on("click",".deleteBtn",function(){if(confirm("确定要删除？")){var e=$(this).data("id");$(this).parent().parent().remove(),c.delShop(e)}}),$("#cart-container").on("click",".checkbox",function(){c.checkbox(),c.allMoney()}),$(".cart_operate").on("click","#check",function(){c.allcheck(),c.allMoney()})}},{key:"allcheck",value:function(){$("#check").prop("checked")?$(".checkbox").prop("checked",!0):$(".checkbox").prop("checked",!1)}},{key:"checkbox",value:function(){var c=this;this.i=0,$(".checkbox").each(function(e,t){t.checked&&c.i++}),this.i!=$(".checkbox").length?$("#check").get(0).checked=!1:$("#check").get(0).checked=!0}},{key:"setlocalStorage",value:function(e,c){var t=JSON.parse(localStorage.getItem("cart")),n=0;t.some(function(e,t){return n=t,e.id==c})&&(t[n].num=e,localStorage.setItem("cart",JSON.stringify(t)))}},{key:"delShop",value:function(t){var e=JSON.parse(localStorage.getItem("cart")).filter(function(e){return e.id!==t});localStorage.setItem("cart",JSON.stringify(e))}},{key:"allMoney",value:function(){var c=0;$(".checkbox").each(function(e,t){t.checked&&(c+=Number($(t).parent().parent().children(".sum-price").children("b").html()))}),$("#allprice").html(c)}}]),e}())})});