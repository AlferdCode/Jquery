## 一. 样式属性顺序
```
单个样式规则下的属性在书写时，应按功能进行分组，组之间需要有一个空行。
同时要以Positioning Model > Box Model > Typographic > Visual 的顺序书写，提高代码的可读性。
    -Positioning Model 布局方式、位置，相关属性包括：position, top, z-index, display, float等
    -Box Model 盒模型，相关属性包括：width, height, padding, margin，border,overflow
    -Typographic 文本排版，相关属性包括：font, line-height, text-align
    -Visual 视觉外观，相关属性包括：color, background, list-style, transform, animation
```
## 二。Class 命名规范
```
    Class 应该遵守以下命名规范：
    分类式命名法(在前端组件化下尤为重要)
        -布局（grid）（.g-）：将页面分割为几个大块，通常有头部、主体、主栏、侧栏、尾部等！
        -模块（module）（.m-）：通常是一个语义化的可以重复使用的较大的整体！比如导航、登录、注册等
        -元件（unit）（.u-）：通常是一个不可再分的较为小巧的个体，通常被重复用于各种模块中！比如按钮、输 入框、loading等！
        -功能（function）（.f-）：为方便一些常用样式的使用，我们将这些使用率较高的样式剥离出来，按需使用，通常这些选择器具有固定样式表现，比如清除浮动等！不可滥用！
        -状态（.z-）：为状态类样式加入前缀，统一标识，方便识别，她只能组合使用或作为后代出现（.u-ipt.z-dis{}，.m-list li.z-sel{}）
        -javascript(.j-)：.j-将被专用于JS获取节点，请勿使用.j-定义样式
    -class 名称中只能出现小写字符和破折号（不是下划线，也不是驼峰命名法）。破折号应当用于相关 class 的命名（类似于命名空间）（如，.btn 和 .btn-danger）。
    -避免过度任意的简写。.btn 代表 button，但是 .s 不能表达任何意思。
    -class 名称应当尽可能短，并且意义明确。
    -使用有意义的名称。使用有组织的或目的明确的名称，不要使用表现形式（presentational）的名称。
    -基于最近的父 class 或基本（base） class 作为新 class 的前缀。
    -使用 .js-* class 来标识行为（与样式相对），并且不要将这些 class 包含到 CSS 文件中。
```
## 三。统一了理解和命名
| 语义    | 命名 | 简写 |
| --------------- | ------------------------- | ----------------------- |
| 布局 | .g- | 
| 文档| doc|doc	
|头部	| head	| hd
|主体	| body	| bd
|尾部	| foot	| ft
|主栏	| main	| mn
|主栏子容器	| mainc	| mnc
|侧栏	| side	| sd
|侧栏子容器	| sidec	| sdc
|盒容器	| wrap/box	| wrap/box
| 模块（.m-）、元件（.u-）：
| 语义	| 命名	| 简写
| 导航	| nav	| nav
| 子导航	| subnav	| snav
| 面包屑	| crumb	| crm
| 菜单	| menu	| menu
| 选项卡	| tab	| tab
| 标题区	| head/title	| hd/tt
| 内容区	| body/content	| bd/ct
| 列表	| list	| lst
| 表格	| table	| tb
| 表单	| form	| fm
| 热点	| hot	| hot
| 排行	| top	| top
| 登录	| login	| log
| 标志	| logo	| logo
| 广告	| advertise	| ad
| 搜索	| search	| sch
| 幻灯	| slide	| sld
| 提示	| tips	| tips
| 帮助	| help	| help
| 新闻	| news	| news
| 下载	| download	| dld
| 注册	| regist	| reg
| 投票	| vote	| vote
| 版权	| vcopyright	| cprt
| 结果	| result	| rst
| 标题	| title	| tt
| 按钮	| button	| btn
| 输入	| input	| ipt|

## 功能（.f-）
    语义	命名	简写
    清除浮动	clearboth	cb
    左浮动	floatleft	fl
    内联	inlineblock	ib
    文本居中	textaligncenter	tac
    垂直居中	verticalalignmiddle	vam
    溢出隐藏	overflowhidden	oh
    完全消失	displaynone	dn
    字体大小	fontsize	fz
    字体粗细	fontweight	fs
## 皮肤（.s-）
    语义	命名	简写
    字体颜色	fontcolor	fc
    背景颜色	backgroundcolor	bgc
    边框颜色	bordercolor	bdc

## 状态(.z-)
    语义	命名	简写
    选中	selected	sel
    当前	current	crt
    显示	show	show
    隐藏	hide	hide
    打开	open	open
    关闭	close vclose
    出错	error	err
    不可用	disabled	dis
#  四：注意事项：
    1.一律小写，中划线
    2.尽量不用缩写
    3.不要随便使用id
    4.去掉小数点前面的0： 0.9rem => .9rem
    5.使用简写：margin： 0 1rem 3rem