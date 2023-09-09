var box = document.querySelectorAll(".box")
// console.log(box)
var flag = 0
box.forEach(function (item) {
    item.innerHTML = "<img src='./o.svg'/ id=o class=ostyle />"
    item.innerHTML += "<img src='./x.svg'/ id=x class=xstyle />"
    item.addEventListener("click", function () {
        if (flag == 0) {
            item.querySelector(".ostyle").style.display = "block";
            flag = 1;
        }
        else {
            item.querySelector(".xstyle").style.display = "block";
            flag = 0;
        }

    })
})

