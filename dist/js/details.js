"use strict";function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(e){_defineProperty(t,e,r[e])})}return t}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}require(["require.config"],function(){require(["url","template","header","footer","zoom","fly"],function(t,r,o){new(function(){function e(){_classCallCheck(this,e),this.getType(),this.addCart()}return _createClass(e,[{key:"getType",value:function(){var r=this,n=Number(location.search.slice(4));$.get(t.rapBaseUrl+"details/type",{id:n},function(e){if(1===e.res_code){var t=e.res_body.data;t=_objectSpread({},t,{id:n}),r.data=t,r.renderType(t)}})}},{key:"renderType",value:function(e){$("#details-container").html(r("list-details",{data:e})),this.zoom(),this.Binds()}},{key:"Binds",value:function(){$("#cart-container").on("click",".count_plus",function(){var e=$(this).prev().children(".shop_count").val();$(this).prev().children(".shop_count").val(++e)}),$("#cart-container").on("click",".count_minus",function(){var e=$(this).next().children(".shop_count").val();--e<1&&(e=1),$(this).next().children(".shop_count").val(e)})}},{key:"addCart",value:function(){var n=this;$("#details-container").on("click","#shopcart",function(e){$("<img src='".concat(n.data.image[0],"' style='width:20px;height:20px'>")).fly({start:{left:e.clientX,top:e.clientY},end:{left:$("#car-num").offset().left,top:$("#car-num").offset().top},onEnd:function(){this.destroy(),o.calcCartNum()}});var t=localStorage.getItem("cart");if(t){t=JSON.parse(t);var r=-1;t.some(function(e,t){return r=t,e.id===n.data.id})?t[r].num++:t.push(_objectSpread({},n.data,{num:1}))}else t=[_objectSpread({},n.data,{num:1})];localStorage.setItem("cart",JSON.stringify(t))})}},{key:"zoom",value:function(){$(".zoom-img").elevateZoom({gallery:"gal1",cursor:"pointer",galleryActiveClass:"active",borderSize:"1",borderColor:"#e0e0e0",imageCrossfade:!0,scrollZoom:!0})}}]),e}())})});