require(['require.config'], () => {
	require(['url', 'template', 'header', "footer", "zoom","fly"], (url,template,header) => {
		class Details {
			constructor() {
				this.getType();
				this.addCart();
			}
			// 获取分类数据
			getType() {
				// 从url取到id， 携带id请求详情数据, 渲染详情页
				let id = Number(location.search.slice(4));
				// this.id = id; // 将来加入购物车等逻辑还需要id
				$.get(url.rapBaseUrl + "details/type", { id }, res => {
					if (res.res_code === 1) {
						let { data } = res.res_body;
						data = { ...data, id };
						// 把当前数据存下来
						this.data = data;
						this.renderType(data);
					}
				})
			}
			renderType(data) {
				$("#details-container").html(template("list-details", { data }));
				this.zoom();
				this.Binds();
			}
			Binds() {
				let _this = this;
				//加
				$("#cart-container").on("click", ".count_plus", function () {
					//let id = $(this).parent().data("id");
                    //数量
					let num = $(this).prev().children(".shop_count").val();
                    $(this).prev().children(".shop_count").val(++num);
                });
				//减
                $("#cart-container").on("click", ".count_minus", function (){
                    //let id = $(this).parent().data("id");
					let num = $(this).next().children(".shop_count").val();
                    if( --num < 1 ){
                        num = 1;
                    }
                    $(this).next().children(".shop_count").val(num);
				});
			}
			addCart() {
				// 事件委托
				$("#details-container").on('click', '#shopcart', e => {
					// 完成抛物线加购物车动画
					$(`<img src='${this.data.image[0]}' style='width:20px;height:20px'>`).fly({
						start: {
							left: e.clientX,
							top: e.clientY
						},
						end: {
							left: $("#car-num").offset().left,
							top: $("#car-num").offset().top
						},
						onEnd: function () {
							this.destroy(); //销毁抛物体
							header.calcCartNum();// 调用一次计算购物车数量的方法
						}
					});
					// 先把cart取出来
					let cart = localStorage.getItem('cart');
					if (cart) {
						cart = JSON.parse(cart);
						let index = -1;
						if (cart.some((shop, i) => {
							index = i;
							return shop.id === this.data.id;
						})) {
							// 有这条数据
							cart[index].num++;
						} else {
							// 没有这条数据
							cart.push({ ...this.data, num: 1 });
						}
					} else {
						cart = [{ ...this.data, num: 1 }];
					}
					// 重新存cart
					localStorage.setItem('cart', JSON.stringify(cart));
				})
			}
			zoom() {
				// 放大镜插件
				$(".zoom-img").elevateZoom({
					gallery: 'gal1',
					cursor: 'pointer',
					galleryActiveClass: 'active',
					borderSize: '1',
					borderColor: '#e0e0e0',
					imageCrossfade: true,
					scrollZoom: true
				});
			}
		}
		new Details();
	})
})