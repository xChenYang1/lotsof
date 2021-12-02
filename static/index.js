let imagesBox = document.querySelector(".imagesBox")
for (let i = 0; i < 9; i++) {
    imagesBox.innerHTML += `
<img src="https://www.wuit.cn/xxgk/images/202006240${i + 1}.jpg" alt="">
`
}
let arr = [{
    name: "建筑学院",
    list: [
        "建筑系",
        "城市规划系",
        "建筑技术科学系",
        "景观学系"
    ]
},
{
    name: "经济管理学院",
    list: [
        "会计系",
        "经济系",
        "金融系",
        "景观学系",
        "创新创业与战略系",
        "领导力与组织管理系",
        "管理科学与工程系",
        "市场营销系"
    ]
},
{
    name: "土木水利学院",
    list: [
        "土木工程系",
        "水利水电工程系",
        "建设管理系"
    ]
},
{
    name: "公共管理系",
    list: []
},
{
    name: "环境学院",
    list: [
        "环境工程系",
        "环境科学系",
        "环境规划与管理系"
    ]
},
{
    name: "马克思学院",
    list: []
},
{
    name: "机械工程学院",
    list: [
        "机械工程系",
        "精密仪器系",
        "能源与动力工程系",
        "车辆与运载学院系",
        "工业工程系",
        "基础工业训练中心"
    ]
},
{
    name: "人文学院",
    list: [
        "中国语言文学系",
        "外国语言文学系",
        "历史系",
        "科学史系",
        "哲学系"
    ]
}

]
let setL = document.querySelector(".setL")
let setR = document.querySelector(".setR")
arr.forEach((item, index) => {

    if (index % 2 == 0) {
        addL(item, index)
    } else {
        addR(item, index)
    }
});
function addL(item, index) {
    setL.innerHTML += `
<div>
    <h1>${item.name}</h1>
    <ul></ul>
</div>
`
    let i = ((index + 1) / 2).toFixed(0)
    let setLinfo = document.querySelector(`.setL>div:nth-child(${i})>ul`)
    arr[index].list.forEach((item2, index2) => {
        setLinfo.innerHTML += `
    <li>${item2}</li>
    `

    });
}
function addR(item, index) {
    setR.innerHTML += `
<div>
    <h1>${item.name}</h1>
    <ul></ul>
</div>
`
    let i = ((index + 1) / 2).toFixed(0)
    let setRinfo = document.querySelector(`.setR>div:nth-child(${(index + 1) / 2})>ul`)
    arr[index].list.forEach((item2, index2) => {
        setRinfo.innerHTML += `
    <li>${item2}</li>
    `

    });
}
let navLi = document.querySelectorAll(".navBox>li")
// let news = document.querySelector(".news")
// let images = document.querySelector(".images")
// let faculty = document.querySelector(".faculty")
// let headline = document.querySelector(".headline")
// let logon = document.querySelector(".logon")
// let liarr = [news,images,faculty,,]
let bodyArr = document.querySelectorAll(".body>div")
console.log(bodyArr);
for (let i = 0; i < navLi.length; i++) {
    navLi[i].onclick =()=>{
        for (let j = 0; j< bodyArr.length; j++) {
            bodyArr[j].style.display = "none"
        }
        if (i == 0) {
            bodyArr[i].style.display = "flex"
        }else{
            bodyArr[i].style.display = "block"
        }
    }
    
}
