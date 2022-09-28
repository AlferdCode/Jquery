(function() {
    var TOUCHSTART, TOUCHEND;
    if (typeof(window.ontouchstart) != 'undefined') {
        TOUCHSTART = 'touchstart';
        TOUCHEND = 'touchend';
        TOUCHMOVE='touchmove';
        console.log("1")
 
    } else if (typeof(window.onmspointerdown) != 'undefined') {
        TOUCHSTART = 'MSPointerDown';
        TOUCHEND = 'MSPointerUp';
        TOUCHMOVE='MSPointerMove';
        console.log("2")
    } else {
        TOUCHSTART = 'mousedown';
        TOUCHEND = 'mouseup';
        TOUCHMOVE = 'mousemove';
        console.log("3")
    }
    function NodeTouch(node) {
        this._node = node;
    }
    function tap(node,callback,scope) {
        node.addEventListener(TOUCHSTART, function(e) {
            x = e.touches[0].pageX;
            y = e.touches[0].pageY;
        });
        node.addEventListener(TOUCHEND, function(e) {
            e.stopPropagation();
            e.preventDefault();
            var curx = e.changedTouches[0].pageX;
            var cury = e.changedTouches[0].pageY;
            if (Math.abs(curx - x) < 6 && Math.abs(cury - y) < 6) {
                callback.apply(scope, arguments);
            }
        });
    }
    function longTap(node,callback,scope) {
        var x,y,startTime=0,endTime=0,in_dis=false;
        node.addEventListener(TOUCHSTART, function(e) {
            x = e.touches[0].pageX;
            y = e.touches[0].pageY;
            startTime=(new Date()).getTime();
        });
        node.addEventListener(TOUCHEND, function(e) {
            e.stopPropagation();
            e.preventDefault();
            var curx = e.changedTouches[0].pageX;
            var cury = e.changedTouches[0].pageY;
            if (Math.abs(curx - x) < 6 && Math.abs(cury - y) < 6) {
                in_dis=true;
            }else{
                in_dis=false;
            }
            endTime=(new Date()).getTime();
            if (endTime - startTime > 300 && in_dis) {
                callback.apply(scope, arguments);
            }
        });
    }
    NodeTouch.prototype.on = function(evt, callback, scope) {
        var scopeObj;
        var x,y;
        if (!scope) {
            scopeObj = this._node;
        } else {
            scopeObj = scope;
        }
        if (evt === 'tap') {
            tap(this._node,callback,scope);
        } else if(evt === 'longtap'){
            longTap(this._node,callback,scope);
        } else {
            this._node.addEventListener(evt, function() {
                callback.apply(scope, arguments);
            });
        }
        return this;
    }
    window.$ = function(selector) {
        var node = document.querySelector(selector);
        if (node) {
            return new NodeTouch(node);
        } else {
            return null;
        }
    }
})();