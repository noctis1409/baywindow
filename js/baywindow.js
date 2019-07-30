function BayWindow(dom, option) {
    this.div = document.getElementById(dom);
    this.yon = option ? option.y || 0 : 0;
    this.xon = option ? option.x || 0 : 0;
    this.step = 1;
    this.xPos = option ? option.left || 0 : 0;
    this.yPos = option ? option.top || 0 : 0;
    this.div.style.position = "absolute";
    this.div.style.zIndex = 9999;
    this.div.style.display = "block";
    this.div.style.width = this.div.getElementsByTagName("img")[0].offsetWidth;
}

BayWindow.prototype.changePos = function () {
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
    scrollLeft = document.documentElement.scrollLeft;
    scrollTop = document.documentElement.scrollTop;
    Hoffset = this.div.offsetHeight;
    Woffset = this.div.offsetWidth;
    this.div.style.left = this.xPos + scrollLeft + 'px';
    this.div.style.top = this.yPos + scrollTop + 'px';
    if (this.yon) {
        this.yPos = this.yPos + this.step;
    } else {
        this.yPos = this.yPos - this.step;
    }
    if (this.yPos <= 0) {
        this.yon = 1;
        this.yPos = 0;
    }
    if (this.yPos >= (height - Hoffset)) {
        this.yon = 0;
        this.yPos = (height - Hoffset);
    }
    if (this.xon) {
        this.xPos = this.xPos + this.step;
    } else {
        this.xPos = this.xPos - this.step;
    }
    if (this.xPos <= 0) {
        this.xon = 1;
        this.xPos = 0;
    }
    if (this.xPos >= (width - Woffset)) {
        this.xon = 0;
        this.xPos = (width - Woffset);
    }
}

BayWindow.prototype.start = function (speed) {
    var that = this
    speed = speed || 40
    var st = setInterval(function () {
        that.changePos()
    }, speed)

    that.div.onmouseover = function () {
        clearInterval(st)
    }

    that.div.onmouseout = function () {
        st = setInterval(function () {
            that.changePos()
        }, speed)
    }
}