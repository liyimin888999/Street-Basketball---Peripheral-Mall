require(['require.config'], () => {
	require(['template', 'header', "footer"], (template, Header) => {
		class Cart {
			constructor() {
				this.getType();
			}

			getType() {
				let cart = localStorage.getItem('cart');
				if (cart) {
					// 渲染列表
					cart = JSON.parse(cart);
					this.render(cart);
				} else {
					// 购物车为空
					alert('购物车为空，快去选购吧');
				}
			}
			render(cart) {
				let html = template('cart-template', { cart })
				$("#cart-container").html(html);
				this.Binds();
				this.allMoney();
			}
			Binds() {
				let _this = this;
				//加
				$("#cart-container").on("click", ".count_plus", function () {
					let id = $(this).parent().data("id");
                    //数量
					let num = $(this).prev().val();
                    $(this).prev().val(++num);
                    //存数量
					_this.setlocalStorage(num,id);
					_this.allMoney();
					// 计算单个商品价格
					_this.money(this);
					Header.calcCartNum();
                });
				//减
                $("#cart-container").on("click", ".count_minus", function (){
                    let id = $(this).parent().data("id");
					let num = $(this).next().val();
                    if( --num < 1 ){
                        num = 1;
                    }
                    $(this).next().val(num);
					_this.setlocalStorage(num,id);
					_this.allMoney();
					// 计算单个商品价格
					_this.money(this);
					Header.calcCartNum();
				});
				//输入框
                $(".shop_count").keyup(function(){
					let num = $(this).val(),
					id = $(this).parent().data("id");
                    if(num == "" || num <= 0 || num == undefined || num == null){
                        num = 1;
                    }
                    _this.setlocalStorage(num,id);
					_this.allMoney();
					_this.money(this);
					Header.calcCartNum();
                })
				//删除
				$("#cart-container").on("click", ".deleteBtn", function () {
					if (confirm("确定要删除？")) {
						let id = $(this).data("id");
						$(this).parent().parent().remove();
						_this.delShop(id);
					}
					Header.calcCartNum();
					
				});
				//单选
				$("#cart-container").on("click", ".checkbox", function () {
					_this.checkbox();
					_this.allMoney();
				})
				//全选
				$(".cart_operate").on("click", "#check", function () {
					_this.allcheck();
					_this.allMoney();
				});
			}
			//全选
			allcheck() {
				if ($("#check").prop("checked")) {
					$(".checkbox").prop("checked", true);
				}else {
					$(".checkbox").prop("checked", false);
				}
			}
			//单选
			checkbox() {
				this.i = 0;
				$(".checkbox").each((index, item) => {
					if (item.checked) {
						this.i++;
					}
				})
				if (this.i != $(".checkbox").length) {
					$("#check").get(0).checked = false;
				} else {
					$("#check").get(0).checked = true;
				}
			}
			//设置localStorage
            setlocalStorage(num,id){
                let obj = JSON.parse(localStorage.getItem("cart")),
                i = 0;
                if(obj.some((item,index)=>{
                    i = index;
                    //id和数据地址相同时
                    return item.id == id;
                })){
                    obj[i].num = num;
                    localStorage.setItem("cart",JSON.stringify(obj));
                }                
            }
			// 删除
			delShop(id) {
				let cart = JSON.parse(localStorage.getItem("cart")).filter((item) => {
						return item.id !== id
				})
				localStorage.setItem("cart", JSON.stringify(cart));
			}
			// 计算总价
			allMoney(){
				let allprice = 0;
				
                $(".checkbox").each((index,item)=>{
                    if(item.checked){
                        allprice += Number($(item).parent().parent().children(".sum-price").children("b").html());
                    }
				})
                $("#allprice").html(allprice);
			}
			// 计算单个商品总价
			money(_this){
				
				let num = Number($(_this).parent().children('.shop_count').val()),
					price = Number($(_this).parent().next().children('b').html()),
					money = num * price;
				$(_this).parent().next().next().children('b').html(money);
			}
		}
		new Cart();
	})
})