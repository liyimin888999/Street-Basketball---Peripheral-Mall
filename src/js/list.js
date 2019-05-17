require(['require.config'], () => {
	require(['url', 'template', 'header', "footer"], (url, template) => {

		class List {
			constructor() {
				this.getType();
			}
			// 获取分类数据
			getType() {
				// ajax请求数据
				$.get(url.rapBaseUrl + 'list/type', data => {
					if (data.res_code === 1) {
						this.renderType(data.res_body.data);
					}
				})
			}
			renderType(data) {
				let html = template("list-page", {
					data
				});
				$("#list-container").html(html);
			}
		}
		new List();
	})
})
