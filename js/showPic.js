/**
 * Created by honoka on 15/10/31.
 */
//创建图片展示块
function preparePlaceholder() {
    //检查浏览器 DOM 操作兼容性
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imageGallery")) return false;
    //创建一个图片元素
    var placeHolder = document.createElement("img");
    placeHolder.setAttribute("id", "placeHolder");
    placeHolder.setAttribute("src", "images/honoka.jpg");
    placeHolder.setAttribute("alt", "honoka");
    //创建一个文本元素
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    //在 description 中加入文本描述
    var desctext = document.createTextNode("Choose an image");
    description.appendChild(desctext);
    //将图片元素和文本元素加到列表后面
    var gallery = document.getElementById("imageGallery");
    myUtils.insertAfter(placeHolder, gallery);
    myUtils.insertAfter(description, placeHolder);
}
//展示图片
function showPic(whichPic) {
    if(!document.getElementById("placeHolder")) return false;
    //得到点击图片的链接后在展示元素中插入该链接
    var source = whichPic.getAttribute("href");
    var placeHolder = document.getElementById("placeHolder");
    placeHolder.setAttribute("src", source);
    if(!document.getElementById("description")) return false;
    //切换展示元素的文本描述
    if (whichPic.getAttribute("title")) {
        var text = whichPic.getAttribute("title");
    } else {
        var text = "";
    }
    var description = document.getElementById("description");
    //nodeType 为 3 时证明是文本节点，将其文本替换为图片描述
    if(description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text;
    }
    return false;
}
//捕捉点击事件，将被点击元素传入展示用的函数
function prepareGallery() {
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imageGallery")) return false;
    var gallery = document.getElementById("imageGallery");
    var links = gallery.getElementsByTagName("a");
    for(var i=0; i < links.length; i ++) {
        links[i].onclick = function() {
            return showPic(this);
        }
    }
}
//页面加载完成后执行相应函数
myUtils.addLoadEvent(preparePlaceholder);
myUtils.addLoadEvent(prepareGallery);