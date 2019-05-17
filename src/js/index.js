require(['require.config'], () => {
	require(['url', 'template',"swiper", 'header', "footer"], (url, template,Swiper) => {

		class Index {
			constructor() {
				this.getType();
				this.banner();
			}
			banner () {
				// 首页轮播图
				var mySwiper = new Swiper ('.swiper-container', {
				  autoplay: true,
				  
				  loop: true, // 循环模式选项
				  // 如果需要分页器
				  pagination: {
					el: '.swiper-pagination',
					clickable: true
				  },
				  
				  // 如果需要前进后退按钮
				  navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
					
				  }
		
				}) 
			  }
			// 获取分类数据
			getType() {
				// ajax请求数据
				$.get(url.rapBaseUrl + 'index/type', data => {
					if (data.res_code === 1) {
						this.renderType(data.res_body.list);
					}
				})
			}

			renderType(list) {
				let html = template("list-monopoly", {
					list
				});
				$("#shoplist-container").html(html);

			}

		}
		new Index();
	})
})
