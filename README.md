# 前端飘窗
老项目都爱的飘窗功能

## 使用方法
1. 引用js文件
2. 复制html结构
```html
<div id="bay-window">
    <a href="www.baidu.com" title="飘窗文字" style="display:block;">
        <img src="./images/js-good.jpg" width="300">
    </a>
    <p style="color:red;float:right;font-size:12px;cursor:pointer;text-align: right;" onclick="this.parentNode.style.display='none'">闭嘴</p>
</div>
```
3. new一个
```javascript
new Bw('bay-window', 300, 300, 0, 0).start(40)
```
Bw的第一个参数为飘窗id，第二个参数为飘窗相对父元素左边距离，第三个参数为飘窗相对父元素顶部距离，第四个参数为飘窗初始垂直方向（0为上，1为下），第五个参数为飘窗初始水平方向（0为左，1为右）。start的参数为动画速度，数字越小越快。
