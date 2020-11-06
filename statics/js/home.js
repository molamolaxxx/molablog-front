var page=1;
var desc=1;
var $container = $("#absContainer");
function selectDiv(num,blogData,id) {
    if (!id) {
        id = ""
    }
    switch(num){
        case 0:{
            var imgList=['a','b','c','d'];
            var imgIndex=randomNum(1,imgList.length);
            var pv=blogData.pv;
            var imgUrl="statics/images/"+imgList[imgIndex-1]+".jpeg";
            var title=blogData.title;
            var createTime=parsetime(blogData.createTime);
            var abstract=cutStrByByte(blogData.text,142)+"...";

            var div_1="<div id='"+id+"' class=\"post post-layout-list aos-init\" data-aos=\"fade-up\">\n" +
                "\t\t\t\t\t\t\t<div class=\"status_list_item icon_kyubo\">\n" +
                "\t\t\t\t\t\t\t\t<div class=\"status_user\" style=\"background-image: url("+imgUrl+");\">\n" +
                "\t\t\t\t\t\t\t\t\t<div class=\"status_section\">\n" +
                "\t\t\t\t\t\t\t\t\t\t<a href='molablog/page/"+blogData.id+"' class=\"status_btn\" id=\"title\">"+title+"</a>\n" +
                "<div class='review-item-creator'><b>发布日期：</b>"+createTime+"</div>"+
                "<div class='review-item-pv'><b>阅读次数：</b>"+pv+"</div>"+
                "\t\t\t\t\t\t\t\t\t\t<p class=\"section_p\" id=\"abstract\">"+abstract+"</p>\n" +
                "\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t</div>";
            return div_1;
        }
        case 1:{
            var imgNumber=randomNum(1,7);
            var imgUrl="statics/images/"+imgNumber+".jpeg";
            var createTime=parsetime(blogData.createTime);
            var pv=blogData.pv;
            var title=blogData.title;
            var abstract=cutStrByByte(blogData.text,280)+"...";
            var commentNum=blogData.commentCount;
            var div_2="<div id='"+id+"' class=\"post post-layout-list aos-init\" data-aos=\"fade-up\">\n" +
                "\t\t\t\t\t\t\t<div class=\"postnormal review \">\n" +
                "\t\t\t\t\t\t\t\t<div class=\"post-container review-item\">\n" +
                "\t\t\t\t\t\t\t\t\t<div class=\"row review-item-wrapper\">\n" +
                "\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t<a rel=\"nofollow\" href='molablog/page/"+blogData.id+"'>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"review-item-img\" style=\"background-image: url("+imgUrl+");\"></div>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t</a>\n" +
                "\t\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-9 flex-xs-middle\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t<div class=\"review-item-title\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t<a href='molablog/page/"+blogData.id+"' rel=\"bookmark\">"+title+"</a>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t<div class=\"review-item-creator\"><b>发布日期：</b>"+createTime+"</div>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t<span class=\"review-item-info\"><b>总浏览量：</b>"+pv+" reads</span>\n" +
                "\t\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t\t<div class=\"review-bg-wrapper\">\n" +
                "\t\t\t\t\t\t\t\t\t\t<div class=\"bg-blur\" style=\"background-image: url("+imgUrl+");\"></div>\n" +
                "\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t<div class=\"post-container\">\n" +
                "\t\t\t\t\t\t\t\t\t<div class=\"entry-content\">"+abstract+"</div>\n" +
                "\t\t\t\t\t\t\t\t\t<div class=\"post-footer\">\n" +
                "\t\t\t\t\t\t\t\t\t\t<a class=\"gaz-btn primary\" href='molablog/page/"+blogData.id+"'>READ MORE</a>\n" +
                "\t\t\t\t\t\t\t\t\t\t<span class=\"total-comments-on-post pull-right\"><a href=\"\">"+commentNum+" Comments</a></span>\n" +
                "\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t</div>";

            return div_2;
        }
        case 2:{
            var imgUrl="statics/images/IMG_0150.jpg";
            var title = blogData.title;
            var createTime = parsetime(blogData.createTime);
            var pv=blogData.pv;
            var abstract=cutStrByByte(blogData.text,100)+"...";
            var div_3="<div id='"+id+"' class=\"post post-layout-list js-gallery aos-init\" data-aos=\"fade-up\">\n" +
                "\t\t\t\t\t\t\t<div class=\"post-album\">\n" +
                "\t\t\t\t\t\t\t\t<div class=\"row content\">\n" +
                "\t\t\t\t\t\t\t\t\t<div class=\"bg\" style=\"background-image: url("+imgUrl+");\"></div>\n" +
                "\t\t\t\t\t\t\t\t\t<div class=\"contentext flex-xs-middle\">\n" +
                "\t\t\t\t\t\t\t\t\t\t<div class=\"album-title\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t<a href='molablog/page/"+blogData.id+"'>"+title+"</a>\n" +
                "\t\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t\t\t<div class=\"review-item-creator\"><b>发布日期：</b>"+createTime+"</div>\n" +
                "<div class='review-item-pv'><b>阅读次数：</b>"+pv+"</div>"+
                "\t\t\t\t\t\t\t\t\t\t<div class=\"album-content\">"+abstract+"</div>\n" +
                "\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t\t<div class=\"album-thumb-width flex-xs-middle\">\n" +
                "\t\t\t\t\t\t\t\t\t\t<div class=\"row album-thumb no-gutter\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\"><img class=\"thumb\" src=\"statics/images/android.jpeg\"></div>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\"><img class=\"thumb\" src=\"statics/images/java.jpeg\"></div>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\"><img class=\"thumb\" src=\"statics/images/python.jpg\"></div>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\"><img class=\"thumb\" src=\"statics/images/ubuntu.jpeg\"></div>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\"><img class=\"thumb\" src=\"statics/images/shell.jpeg\"></div>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-4\">\n" +
                "\t\t\t\t\t\t\t\t\t\t\t\t<a href='molablog/page/"+blogData.id+"'>5 pics</a>\n" +
                "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t\t</div>\n" +
                "\t\t\t\t\t\t</div>";

            return div_3;
        }
    }
}
//通过字节截取string
function cutStrByByte(str,lenLimit){
    var len = 0;
    for (var i=0; i<str.length; i++) {
        var result="";
        var c = str.charCodeAt(i);
        //单字节加1
        if (c>=0&&c<=128) {
            len++;

        }
        else {
            len+=2;
        }
        if(len>lenLimit)
            return str.substring(0,i);
    }
    return str;
}
//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10);
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
        default:
            return 0;
    }
}
function addPage() {
    var　currentPage=page+1;
    getPage(currentPage,desc)
    page++;
}
function getPage(page,descType) {
    var isSuccess;
    (function ($, window) {
        var offset = page;
        var limit = 4;
        var blogData;
        //ajax获取数据
        //请求参数
        $.ajax({
            url: '/molablog/client/index',
            type: 'get',
            data: {
                "userId": 0,
                "offset": offset,
                "limit": limit,
                "descType": descType
            },
            dataType: 'json',
            success: function (result) {

                blogData = result.data;
                if(blogData.length==0)
                    swal("missing","一切事物都有终点","warning");
                var foreType = -1;
                var firstDivId;
                for (var i = 0; i < limit; i++) {
                    if (i == 0) {
                        firstDivId = (new Date()).valueOf();
                        firstDivOfBatch = selectDiv(1, blogData[i], firstDivId)
                        $container.append(firstDivOfBatch)
                        continue;
                    }
                    do {
                        var randomType = randomNum(0, 2);
                    } while (foreType == randomType);

                    foreType = randomType;
                    //增加一条blog
                    $container.append(selectDiv(randomType, blogData[i]))
                }
                removeSpinner();
                // 移到第一个div
                let dom = document.getElementById(firstDivId)
                let top = 0;
                if (page > 1) {
                    top = dom.offsetTop + 220
                } else{
                    top = dom.offsetTop - 100
                }
                window.scrollTo({
                    top: top,
                    behavior: "smooth"
                })
                
            }
        });
    }(jQuery, window));
}
function goToBlogDetail(blogId) {
    var url="/molablog/page/"+blogId;
    window.location.href=url;
}
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //构造一个含有目标参数的正则表达式对象 

    var r = window.location.search.substr(1).match(reg);
    //匹配目标参数       
    if (r != null) return unescape(r[2]);
    return null; //返回参数值   
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

function getToken(){
    $.ajax({
        url: '/molablog/validate/token',
        type: 'get',
        dataType: 'text',
        success: function (result) {
            setCookie('token',result);
        }
    });
}

//写cookies
function setCookie(name,value)
{
    var min = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + min*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

//获取token
getToken();

var decs_get=getUrlParam('decs');

if (decs_get==null||decs_get==1) {
    desc=1;
    getPage(page, 1);
}
else if(decs_get==2){
    desc=2;
    getPage(page, desc);
}
else {
    swal("fuckq","想爆我库吗","error");
}
