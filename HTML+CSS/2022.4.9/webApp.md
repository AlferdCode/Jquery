## Native App开发
 Native App开发即我们所称的传统APP开发模式（原生APP开发模式），
该开发针对iOS、Android等不同的手机操作系统要采用不同的语言和框架进行开发，
该模式通常是由“云服务器数据+APP应用客户端”两部份构成，APP应用所有的UI元素、
数据内容、逻辑框架均安装在手机终端上。

## Web App开发
Web App开发即是一种框架型APP开发模式（HTML5 APP 框架开发模式），
该开发具有跨平台的优势，该模式通常由“HTML5云网站+APP应用客户端”两部份构成，
APP应用客户端只需安装应用的框架部份，而应用的数据则是每次打开APP的时候，
去云端取数据呈现给手机用户。

## 移动端的解决方案：
1，专用型：PC端页面和移动端页面分别开发。当用户请求页面时，服务器先判断用户的设备类型，
然后根据用户设备类型返回响应类型的页面，PC端一套代码，移动端一套代码。(代表有百度，饿了么)
2，通用型：只设计一个页面，页面本身能够根据不同的浏览器尺寸，显示为不同的样式。
一套代码适应PC端和移动端，这种页面叫做响应式布局页面（苹果官网，bootstrap）

## meta标签
meta标签提供关于HTML文档的元数据。元数据不会显示在页面上，
但是对于机器是可读的。它可用于浏览器（如何显示内容或重新加载页面），
搜索关键词等，或其他 web 服务。
meta 标签用于网页的<head>与</head>中
1. <meta name="generator" contect=""> 用以说明生成工具（如Microsoft FrontPage 4.0）等； 
2. <meta name="keywords" contect=""> 页面关键词 
3. <meta name="description" contect=""> 页面描述 
4. <meta name="author" contect="你的姓名"> 定义网页作者
5. <meta name="robots" content="index,follow"> 搜索引擎索引方式
    robots是一组使用逗号(,)分割的值，
    通常有如下几种取值：none，noindex，nofollow，all，index和follow。
    all：文件将被检索，且页面上的链接可以被查询；
    none：文件将不被检索，且页面上的链接不可以被查询；
    index：文件将被检索；
    follow：页面上的链接可以被查询；
    noindex：文件将不被检索；
    nofollow：页面上的链接不可以被查询。
6. <meta charset="utf-8"> 申明编码方式

## WebApp开发需要增加的标签或设置：

1. H5文档类型：
    <!DOCTYPE html>  
2. viewport 视口设置：
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    - viewport视窗，窗口。viewport的宽度决定了html这个标签的宽度
    - width		宽度，可设为px或 device-width
    - height		高度，可设为px或 device-height，通常不用设置
        比如：width=device-width表示我们将viewport的宽度设为跟设备一样宽，
        以iPhone6为例，iPhone6的横向分辨率为750，转换之后所代表的css宽度为375px，
        这个时候viewport的宽度就为375px，也即是html的宽度为375px。
        一般设计稿也是以375或者750来出图，这样就可以很方便的在设备上实现页面了。
    - initial-scale	初始的缩放比例（默认设置为1.0）
    - minimum-scale	允许用户缩放到的最小比例（默认设置为1.0）
    - maximum-scale	允许用户缩放到的最大比例（默认设置为1.0）  
    - user-scalable	是否允许用户通过双指缩放（默认设置为 0,no 或者 1,yes，因为我们不希望用户放大缩小页面)  
    - css中视口 viewport 单位
    移动互联网发展起来之后，引入了 vw、vh 两个单位，以方便 Web App 和手机页面的开发。
    使用 vw、vh 能很好地解决宽度、高度适配问题，比使用 % 单位更高级！

3. 指定页面为 Web App,全屏模式
<meta name="apple-mobile-web-app-capable" content="yes" />

4. 指定 Web App 系统状态栏样式：
- 隐藏状态栏/设置状态栏颜色：只有在开启WebApp全屏模式时才生效。
- content的值为default | black | black-translucent 。
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

5. 指定 Web App 的标题：添加到主屏后的标题
<meta name="apple-mobile-web-app-title" content="天气预报">

6. 禁止自动识别手机号/邮箱地址：
<meta name="format-detection" content="telephone=no" />
<meta name="format-detection" content="email=no" />

7. 指定 Web App 图标：
<link rel="apple-touch-icon" sizes="57x57" href="icon57.png" />  
<link rel="apple-touch-icon" sizes="72x72" href="icon72.png" />  
<link rel="apple-touch-icon" sizes="114x114" href="icon114.png" />    
<link rel="apple-touch-icon" sizes="144x144" href="icon144.png" /> 
<link rel="apple-touch-icon" sizes="196x196" href="icon196.png" />

8. 指定 Web App 启动图片：
<link href="startup-image-320x460.png" media="(device-width: 320px)" rel="apple-touch-startup-image">
<link href="startup-image-640x960.png" media="(device-width: 320px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image">
