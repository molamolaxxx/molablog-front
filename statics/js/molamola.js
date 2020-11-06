var titleMap={};
(function ($, window) {
    var userId=0;
    var classList;
    var blogList;
    //ajax获取数据
    $.ajax({
        url:'/molablog/client/category',
        type:'get',
        data:{
            "userId":userId
        },
        dataType: "json",
        success:function (result) {
            classList = new Array();
            blogList = result.data;
            /*//去除没有文章的分类
            for (i in classList){
                //增加分类
                appendClass(classList[i]);
            }*/
            //增加博客
            for (i in blogList){
                var blog = blogList[i];
                var title = blog.title;
                var blogId = blog.id;
                var className = blog.className;
                var title = blog.title;
                var time = parsetime(blog.createTime);
                var pv = blog.pv;
                //将id和title存入键值对
                titleMap[blogId]=title;
                //如果字典里没有该分类
                if($.inArray(className,classList)==-1) {
                    //分类加入list
                    classList.push(className);
                    //页面上增加一类
                    appendClass(className);
                    appendBlog(blogId,title,className, title, time, pv);
                }
                else {
                    appendBlog(blogId,title,className, title, time, pv);
                }
            }
            // 创建目录
            createMulu(classList);
            initMulu();
        }
    });

    //增加一个分类，id为种类名
    function appendClass(className) {
        $("#archives").append("<div class='archive-title' id="+className+"><h3>"+className+"</h3></div>");
    }
    //增加一个文章
    function  appendBlog(id,title,className,blogName,createTime,pv) {
        $('#'+className).append("<div class='archives archives-3' >\n" +
            "<div class=\"brick\">\n" +
            "<a href='molablog/page/"+id+"'>\n" +
            "<span class=\"time\">\n" +
            createTime+"\n" +
            "</span>\n" +
            blogName+"\n" +
            "<span>\n" +
            "("+pv+")\n" +
            "</span>\n" +
            "</a>\n" +
            "</div>\n" +
            "</div>");
        //为
    }
    function parsetime(time) {
        //console.log(d)
        var date = new Date(time);//如果date为13位不需要乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
        return Y+M+D+h+m+s;
    }
}(jQuery, window));
