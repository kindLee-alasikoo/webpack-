# webpack-首先在全局进行安装
npm install -g webpack
安装到项目目录
npm install --save-dev webpack
初始化一个package.json文件，可以在其中写入项目依赖模块，以及自定义脚本任务。
npm init
根据教程给的例子一共创建两个文件夹
app文件夹---存放一个main.js作为入口文件，主要调用其他的js模块，其他js均作为模块存在
模块化写法一般为module exports=function（）{}用来暴露函数 也可以当做一个对象进行暴露
模块化引入可以用require来将模块引入，需要实例化执行函数  
puclic文件夹---存放index.html作为网页显示
继续在控制台执行webpack命令：webpack  ./app/main.js(入口文件) ./public/bundle.js(打包出来的文件)
现在打开public文件夹会发现多一个bundle.js  index.html引入bundle.js就会执行你在app文件夹下的js文件命令了
以上为webpack低级用法

利用webpack配置文件进行文件打包操作以及写入插件和加载器。
创建文件：webpack.config.js 前端工作者一般会用config.js进行配置，比如最近的项目需要针对不同的危险级别进

行颜色配置，我们可以在color.config.js这样写一个对象colorConfig：{sample：“green”，warn：‘yellow’，

‘danger’：‘red’}当我们引入配置文件后，可以从后台拿到sample，warn，danger这三个字段，我们统一用

colordata表示，这时候我们就可以给我们需要的字段添加style颜色 id.style.fontSize=colorConfig[colordata]

回到webpack，webpack的配置文件则比我写的功能多得多，首先将配置内容进行暴露
module.exports  = {
   entry:__dirname+"/app/main.js" //需要打包时的入口文件
   output:{
         path:__dirname+"/public",//输出路径__dirname指的是当前配置文件的绝对路径，是一个node.js的变量
         filename:"bundle.js"//输出文件名
   }
}
将写好的配置文件置于根目录下，控制台执行webpack命令,执行后，webpack会直接解读配置文件暴露出来的对象，并

且自动打包在public目录下生成bundle.js

利用npm start命令更便捷的操作webpack，npm主要是针对package.json中写入的命令进行解析执行的，所以我们开始

学习一些简单的命令，写入package.json中
（1）用npm start代替webpack命令
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    "start":"webpack"//只需要写入这句就可以啦
  },
start是一个特殊的命令，如果想用其他代替start，比如npm go那么需要写成npm run go


webpack强大的功能出现！！！
一·Source Maps  (资源轮询?)可以让编译后的文件可读性更高。
首先需要注意的是，只要关于webpack操作的都添加到webpack配置文件中，不要把package.json与config搞混
二. webpack server 构建webpack服务器，实时监测你的代码
这是一个插件，所以需要npm来下载到你的module中
命令行执行命令:npm install --save-dev webpack-dev-server
如果运行出错，有两处最有可能出现的错误，其中一个是在package.js中，看看是否忘记增加逗号，另一个错误就是

执行命令是否写错。
下载有些慢，需要等待，这时候我们可以阅读下devServer的api，在配置文件下写入
devServer:{
		contentBase:"./public",//本地服务器加载的页面所在的目录
		historyApiFallback:true,//不跳转
		inline:true//实时刷新
	}
最后运行下npm start 试试新加入的功能，为什么我的打开浏览器localhost:8080不好用！！！！我们先不管，下一

步先，
我今天知道啦：由于我们是用npm start来执行webpack打包，所以我们需要在package.json里面

将“start”:"webpack"加点料 “start”：“webpack-dev-server --inline”我让我们试一下、、
哈哈 成功了
三·loaders继续
Loaders据说是webpack最牛的功能------=之一。主要功能是将es6,7，或者scss，sass都转成浏览器可以识别的文件
Loaders需要单独安装，并且在配置文件的module关键字下配置。
教程中给了一个转换json的loader
首先控制台下载安装npm install --save-dev json-loader
然后在配置文件的module下添加
loaders：[
   {
       test:/\.json$/,
       loader:"json"
    }
]
 只要点击保存，页面也会随之变化。
下面教程说的是关于react的，我只弄过vue，个人感觉Vue更简单，创建一个Vue脚手架项目只有四个命令
1你得有node
2npm install -g vue-cli
3vue init webpack yourprojectname
4cd yourprojectname
5npm install
6npm run dev
开发起来很简单，个人感觉比react容易的多
略过恶心人的Babel让我们接着看看他的教程，他讲的都是react，我依然推荐vue，哈哈哈。
额，后面讲的东西如果你使用Vue脚手架的话，个人感觉了解一下就好
我的webpack入门到此结束，希望你在前端的路上越走越远、
