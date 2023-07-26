// setTimeout(function(){
//     var tuanPic = document.querySelector("#tuan_pic")
//     tuanPic.classList.add("fade_in")
// },5000)

// setTimeout(function(){
//     var world = document.querySelector("#world")
//     world.classList.add("fade_in")
// },10000)

// setTimeout(function(){
//     var des = document.querySelector("#tuan_pic_des")
//     des.classList.add("fade_in")
// },15000)

function startAnimation(id, startTime, animation){
    setTimeout(function(){
        var element = document.querySelector(id)
        element.classList.add(animation)
    },startTime*1000)
}
startAnimation("#tuan_pic",5,"fade_in")
startAnimation("#world", 10, "fade_in")
startAnimation("#tuan_pic_des", 15, "slide_in")

