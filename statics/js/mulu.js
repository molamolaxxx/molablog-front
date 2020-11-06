$(document).ready(function() {
    var lastClick;
    var $mulu = $("#mulu")
    var $indexBox = $(".index-box")[0]
    var $toc = $mulu.find(".toc")
    var $container = $(".post_content")[0]
    var contentListGlobla;
    var domHeightList = [];
    $("#mulu").mouseover(function(){
        $("body").attr("style","overflow:hidden")
    }).mouseout(function(){
        $("body").attr("style","")
    });
    //
    var dom = function(name) {
        return "<li class='index-item'><a class='index-link' onclick='scrollToDom(\""+name+"\")' id='"+name+"_idx'>"+ name +"</a></li>"
    }
    // 创建目录
    createMulu = function(contentList) {
        contentListGlobla = contentList
        if (!$mulu) return;
        var $container = $toc
        for (const content of contentList) {
            $container.append(dom(content))
            // 保存每一个元素的高
            domHeightList.push(document.getElementById(content).offsetTop)
        }
        lastClick = $mulu.find(".toc").find(".index-item")[0]
        lastClick.classList.add("current")
    }
    // 点击菜单的锁，此时onscroll无法操作菜单
    initMulu = function() {
        $(".index-item").on("click",function() {
            if (lastClick) lastClick.classList.remove("current")
            // 清除所有
            let item = this;
            item.classList.add("current")
            lastClick = item
        });
    }
    selectMulu = function(id) {
        let dom = document.getElementById(id+"_idx")
        
        $indexBox.scrollTo({
            top:dom.offsetTop-80,
            behavior: "smooth"
        })
        let item = dom.parentNode
        // 滑动到这个位置
        if (lastClick) lastClick.classList.remove("current")
        // 清除所有
        item.classList.add("current")
        lastClick = item
    }

    scrollToDom = function(name) {
        let dom = document.getElementById(name)
        $('html,body').animate({scrollTop:dom.offsetTop+420},200);
        // window.scrollTo({
        //     top:dom.offsetTop+420,
        //     behavior: "smooth"
        // })
    }

    var isShown = false;
    var timer;
    var lastIdx;
    var lastTop;
    window.onscroll = function() {
        let offset = document.documentElement.scrollTop||document.body.scrollTop;
        if (offset > 400){
            // 显示
            if (!isShown) {
                $mulu.animate({opacity:1})
                isShown = true;
            }
        } else {
            if (isShown) {
                $mulu.animate({opacity:0})
                isShown = false;
            }
        }
        let top = offset - 400
        
        // console.log(top)
        // console.log(domHeightList)
        // 函数节流
        if (!timer) clearTimeout(timer)
        timer = setTimeout(()=> {
            if (lastTop == top) {
            let i = 0;
            for (i=0;i<domHeightList.length;i++) {
                if (top < domHeightList[i]) {
                    break
                }
            }
            if (i > 0) i --;
            if (lastIdx != i){
                if (contentListGlobla){
                    selectMulu(contentListGlobla[i])
                }
                lastIdx = i;
            }
        }
        }, 100)
        lastTop = top;
    }
})

