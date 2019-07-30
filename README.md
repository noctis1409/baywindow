# 前端飘窗
老项目都爱的飘窗功能

## 使用方法
1. 引用js文件
2. 复制html结构
```html
    <div id="bay-window">
        <a href="https://www.baidu.com" title="不信你百度" style="display:block;">
            <img src="./images/js-good.jpg" width="300">
        </a>
        <p style="color:red;float:right;font-size:12px;cursor:pointer;text-align: right;" onclick="this.parentNode.style.display='none'">闭嘴</p>
    </div>
```
3. new一个
```javascript
new BayWindow(id, option).start(speed)
```

### option
left:元素初始的X坐标，默认值0

top:元素初始的y坐标，默认值0

x:元素初始水平运动方向，0是左1是右，默认值0

y：元素初始垂直运动方向，0是上1是下，默认值0


### speed
动画速度，数字越小动画越快,默认值40