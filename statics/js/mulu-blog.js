$(document).ready(function() {
    // 获取所有的dom
    const set = new Set()
    const array = new Array()
    let strongList = $(".mulu-index")
    for (let strong of strongList) {
        let str = strong.innerText
        if (str.replace(/\s+/g,"").length != 0) {
            if (!set.has(str)) {
                set.add(str)
                strong.id = str
                array.push(str)
            }
        }
    }
    // 创建目录
    if (array.length !=0) {
        createMulu(array);
        initMulu();
    }
})
