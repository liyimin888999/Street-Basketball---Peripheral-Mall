define(['jquery'], $ => {
  function Footer () {
    this.container = $("#footer-container");
    this.load().then(() => {
    });

  }

  // Object.assign(Header.prototype, {

  // });

  // 对象合并
  $.extend(Footer.prototype, {
    // ES6对象增强写法
    load () {
      // header.html加载到container里
      // this.container.load('/html/module/header.html #header-bottom'); // 选择加载文件中的某一部分
      return new Promise(resolve => {
        this.container.load('/html/module/footer.html', () => {
          // load异步执行结束
          resolve();
        });
      })
    },
  })

  return new Footer();
});