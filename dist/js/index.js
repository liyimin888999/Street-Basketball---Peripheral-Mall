"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}require(["require.config"],function(){require(["url","template","swiper","header","footer"],function(t,r,n){new(function(){function e(){_classCallCheck(this,e),this.getType(),this.banner()}return _createClass(e,[{key:"banner",value:function(){new n(".swiper-container",{autoplay:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}},{key:"getType",value:function(){var n=this;$.get(t.rapBaseUrl+"index/type",function(e){1===e.res_code&&n.renderType(e.res_body.list)})}},{key:"renderType",value:function(e){var n=r("list-monopoly",{list:e});$("#shoplist-container").html(n)}}]),e}())})});