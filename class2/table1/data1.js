let sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}]

let chooseRegion = document.querySelector("#chooseRegion");
let chart =document.querySelector("#chart");

(function(){
    let show = regionShow("华南")
    createTb(show)
})()

chooseRegion.addEventListener("click", e => {
    if (e.target.tagName == "INPUT") {
        let show = regionShow(e.target.value)
        createTb(show)
    }
})

function regionShow(region) {
    let show = [];
    for (item in sourceData) {
        if (sourceData[item].region === region) {
            show.push(sourceData[item]);
        }
    }
    return show;
}

function createTb(arr) {
    let table = document.createElement("table");
    table.innerHTML = `<tr>
    <th>商品</th>
    <th>地区</th>
    <th>1月</th>
    <th>2月</th>
    <th>3月</th>
    <th>4月</th>
    <th>5月</th>
    <th>6月</th>
    <th>7月</th>
    <th>8月</th>
    <th>9月</th>
    <th>10月</th>
    <th>11月</th>
    <th>12月</th>
</tr>`
    for (let i = 0; i < arr.length; i++) {
        let item = document.createElement("tr");
        item.innerHTML = `
        <td>${arr[i].product}</td>
        <td>${arr[i].region}</td>
        `
        for (let t = 0; t < arr[i].sale.length; t++) {
            let td = document.createElement("td");
            td.innerText = arr[i].sale[t];
            item.appendChild(td);
        }
        table.appendChild(item);
    }
    if(chart.getElementsByTagName("table").length!==0){
        console.log("new--"+table)
        let oldTable = chart.getElementsByTagName("table")[0]
        console.log("old---"+oldTable)
        chart.replaceChild(table,oldTable)
    }
    chart.appendChild(table);
    table = null;
}
