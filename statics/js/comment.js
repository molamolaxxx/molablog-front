//当前评论页面
var currentCommentPage = 1;
//每页限制评论数
var limit = 5;
//保存评论的数组
var commentList = [];
//submit是否disable
var isSubmitDisable = false;

var barModel = "<nav id=\"comments-navi\">\n" +
  "\t\t\t\t\t\t\t\t<a class=\"prev page-numbers\" href=\"\">\n" +
  "\t\t\t\t\t\t\t\t\t&lt;&lt;&lt;</a>\n" +
  "\t\t\t\t\t\t\t\t\t\t<a class=\"page-numbers current\" aria-current=\"page\" href=\"javascript:nextPage();\">next</a>\n" +
  "\t\t\t\t\t\t\t\t\t\t\n" +
  "\t\t\t\t\t\t\t\t\t\t\n" +
  "\t\t\t\t\t\t\t\t\t\t</nav>";

//增加一条评论
function addOneComment(name, content, time, imgLink) {
  if (imgLink == "" || imgLink == null)
    imgLink = "/favicon.ico";
  var commentModel = "<ul class=\"commentwrap\">\n" +
    "\t\t\t\t\t\t\t\t<li class=\"comment even thread-even depth-1\" id=\"li-comment-\">\n" +
    "\t\t\t\t\t\t\t\t\t<div id=\"comment-969\" class=\"comment_body contents\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"profile\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<a href=\"\"><img src=\'" + imgLink + "\' class=\"gravatar\" alt=\"\"></a>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t<div class=\"main shadow\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"commentinfo\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<section class=\"commeta\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"shang\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"author\"><a href=\"\" target=\"_blank\"><img src=\"statics/images/9cc50a9e422fb1c89aebafeb959cef7a.jpg\" class=\"gravatarsmall\" alt=\"小布丁\">" + name + "</a></h4>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t</section>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"body\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<p>" + content + "</p>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t<div class=\"xia info\">\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<span><time datetime=\"2018-03-09\">" + time + "</time></span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t\t<span><a rel='nofollow' class='comment-reply-link' href=\"\" onclick='return addComment.moveForm( \"comment-969\", \"969\", \"respond\", \"1202\" )' >回复</a></span>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t\t</div>\n" +
    "\t\t\t\t\t\t\t\t</li>\n" +
    "\t\t\t\t\t\t\t\t</ul>";
  $("#loading-comments").after(commentModel);
}

//获取下一页评论数据
function loadCommentData(page) {
  //请求参数
  $.ajax({
    url: '/molablog/page/comment?blogId=' + blogId + '&offset=' + page + '&limit=' + limit,
    type: 'get',
    dataType: 'json',
    success: function (result) {
      $("#comments-list-title").find('span')[0].innerHTML = result.count;
      commentData = result.data;
      //保存评论到数组
      commentList[page] = commentData;
      //下一页无数据
      if (commentData.length == 0 && page != 1) {
        swal("missing", "没有更多评论了", "warning");
        return;
      }
      //正常加载下一页
      else if (commentData.length != 0 && page != 1) {
        //清除子标签
        clearChildTag();
        currentCommentPage += 1;
      }
      //加载评论
      for (i in commentData) {
        comment = commentData[commentData.length - i - 1];
        addOneComment(comment.name, comment.content, parseTime(comment.createTime), comment.imgLink);
      }
    }
  });
}

/*这里是提交表单前的非空校验*/
$("#commentform").submit(function () {
  //昵称
  var name = $("#name")[0];
  //评论内容
  var content = $("#content")[0];
  //链接
  var friendLink = $("#friendLink")[0];
  //头像链接
  var imgLink = $("#imgLink")[0];
  //邮箱
  var email = $("#email")[0];

  if (name.value == "") {
    swal("missing", "请输入昵称", "warning");
    return false;
  }
  if (content.value == "") {
    swal("missing", "请输入评论内容", "warning");
    return false;
  }

  var commentForm = new FormData();
  commentForm.append("name", name.value);
  commentForm.append("content", content.value);
  commentForm.append("friendLink", friendLink.value);
  commentForm.append("imgLink", imgLink.value);
  commentForm.append("blogId", blogId);
  commentForm.append("email", email.value);
  commentForm.append("blogName", $("h1.post_title")[0].innerText)
  commentForm.append("token",getCookie("token"))

  if (isSubmitDisable == false)
    isSubmitDisable = true;
  else {
    swal({
      "title": "error",
      "text": "提交评论失败,请不要重复提交！",
      "type": "error"
    }).then(() => {
      window.location = "";
      return true;
    });
  }
  //ajax
  //请求参数
  $.ajax({
    url: '/molablog/page/comment',
    type: 'post',
    contentType: false,
    processData: false,
    data: commentForm,
    success: function (result) {
      swal("success", "提交评论成功","success").then(() => {
        window.location = "";
        return true;
      });

    },
    error: function (xhr) {
      console.info(xhr);
      swal({
        "title": "error",
        "text": "服务器坏掉啦",
        "type": "error"
      }).then(() => {
        window.location = "";
        return true;
      });
    }
  });
});
//自定义头像
function checkImg() {
  var imgUrl = $("#imgLink")[0];
  console.info(imgUrl.value);
  if (imgUrl.value != "") {
    $("#molamola-img")[0].src = imgUrl.value;
  }
  else {
    $("#molamola-img")[0].src = "/favicon.ico";
  }

}
//转化时间
function parseTime(time) {
  var date = new Date(time);//如果date为13位不需要乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
  var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
  return Y + M + D + h + m;
}
//加载后一页
function nextPage() {
  if (commentList[currentCommentPage + 1] != null) {
    if (commentList[currentCommentPage + 1].length == 0) {
      //最后一页
      swal("missing", "没有更多评论了", "warning");
      return;
    }
    console.info("从缓存中获取评论");
    clearChildTag();
    commentData = commentList[currentCommentPage + 1];
    //加载评论
    for (i in commentData) {
      comment = commentData[commentData.length - i - 1];
      addOneComment(comment.name, comment.content, parseTime(comment.createTime), comment.imgLink);
    }
    currentCommentPage += 1;
    return;
  }
  loadCommentData(currentCommentPage + 1);
}
//加载前一页
function prePage() {
  if (currentCommentPage != 1) {
    //清除子标签
    clearChildTag();
    //从数组中获取评论
    commentData = commentList[currentCommentPage - 1];
    //加载评论
    for (i in commentData) {
      comment = commentData[commentData.length - i - 1];
      addOneComment(comment.name, comment.content, parseTime(comment.createTime), comment.imgLink);
    }
    currentCommentPage -= 1;
  }
  else {
    swal("missing", "没有前一页了", "warning");
  }
}
//清除
function clearChildTag() {
  $(".commentwrap").remove();
}

//首先加载当前页
loadCommentData(currentCommentPage);

var preNextData;
//获得左右文章的信息
$.ajax({
  url: '/molablog/page/preNext?blogId=' + blogId,
  type: 'get',
  contentType: "application/json; charset=utf-8",
  success: function (result) {
    preNextData = result.data;
    console.info($("#leftInfo"))
    //判断是否是第一页或者最后一页
    if (preNextData.preId == -1) {
      preNextData.preId = blogId;
      preNextData.preTitle = "没有啦"
    }
    if (preNextData.nextId == -1) {
      preNextData.nextId = blogId;
      preNextData.nextTitle = "没有啦"
    }
    //填写到dom元素里
    $("#leftInfo")[0].href = "/molablog/page/" + preNextData.preId;
    $("#rightInfo")[0].href = "/molablog/page/" + preNextData.nextId;
    //填写标题
    $("#leftInfo").find("span")[0].innerHTML = preNextData.preTitle;
    $("#rightInfo").find("span")[0].innerHTML = preNextData.nextTitle;
  }
});

//写cookies
function setCookie(name, value) {
  var min = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + min * 60 * 1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

//读取cookies
function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

  if (arr = document.cookie.match(reg))

    return unescape(arr[2]);
  else
    return null;
}
