  class DemoPlugin {
  constructor(options) {
    this.options = options
  }
  apply(compiler) {//编译器
    // console.log(compiler)
    //资源阶段注册
    compiler.hooks.compilation.tap("DemoPlugin", compilation => {

       for (var filename in compilation.assets) {
        
        console.log("----",filename)
      }

      //优化阶段
      compilation.hooks.optimizeChunkAssets.tap("MyBannerPlugin", chunks => {

      });
    

    });
  } 
}
module.exports = {
 DemoPlugin: DemoPlugin
}