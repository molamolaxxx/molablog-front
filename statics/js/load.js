function getSpinner(id) {
  var spinner = "<div class=\"spinner\">\n"+
              "      <div class=\"rect1\"></div>\n"+
              "      <div class=\"rect2\"></div>\n"+
              "      <div class=\"rect3\"></div>\n"+
              "      <div class=\"rect4\"></div>\n"+
              "      <div class=\"rect5\"></div>\n"+
              "      <div class=\"rect6\"></div>\n"+
              "      <div class=\"rect7\"></div>\n"+
              "      <div class=\"rect8\"></div>\n"+
              "  </div>"
    return spinner;
}

function removeSpinner(){
  $(".spinner").remove();
}
