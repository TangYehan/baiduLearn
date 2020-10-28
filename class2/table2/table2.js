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

let region = [{
    value: "华南",
    text: "华南"
}, {
    value: "华北",
    text: "华北"
}, {
    value: "华东",
    text: "华东"
}]
let product = [{
    value: "手机",
    text: "手机"
}, {
    value: "笔记本",
    text: "笔记本"
}, {
    value: "智能音箱",
    text: "智能音箱"
}]

// let regionWrap = document.querySelector("#region-radio-wrapper");
let regionWrap = document.getElementById("region-radio-wrapper");
let productWrap = document.getElementById("product-radio-wrapper");

//生成CheckBox的函数
function createCheckBox(wrap, data) {
    // let frg = document.createDocumentFragment();
    let div = document.createElement("div");
    div.innerHTML = `<input type="checkbox" name=${wrap.id} value="all">全选`

    for (item in data) {
        div.innerHTML += `<input type="checkbox" name=${wrap.id} value=${data[item].value}>${data[item].text}`
    }
    wrap.appendChild(div)

    wrap.addEventListener("click", e => {
        if (e.target.tagName == "INPUT") {
            //获取点击目标的name
            let clickTarget = document.getElementsByName(e.target.name);

            //全选
            if (e.target.value == "all") {
                for (let i = 0; i < clickTarget.length; i++) {
                    clickTarget[i].checked = "checked"
                }
            }
            else {
                //记录选中个数
                let checkCount = 0;
                for (let i = 1; i < clickTarget.length; i++) {
                    if (clickTarget[i].checked) checkCount++;
                }
                if (checkCount == clickTarget.length - 1) {
                    clickTarget[0].checked = "checked"
                } else if (checkCount == 0) {
                    clickTarget[0].checked = "";
                    e.target.checked = "checked"
                } else {
                    clickTarget[0].checked = "";
                }

            }

            let { result, index } = getShow();
            createTb(result, index)
        }
    })
}


createCheckBox(regionWrap, region)
createCheckBox(productWrap, product)

//得到符合选中条件的商品
function getShow() {
    //获取所有的复选框
    let regions = document.querySelectorAll("#region-radio-wrapper input");
    let products = document.querySelectorAll("#product-radio-wrapper input")
    let checkedRegion = []; //记录被选中的复选框
    let checkedProduct = [];
    let result = []; //记录结果
    let index = [];//记录结果的下标

    //选中的地区
    for (let i = 0; i < regions.length; i++) {
        if (regions[i].checked && regions[i].value !== "all") {
            checkedRegion.push(regions[i].value);
        }
    }

    //选中的商品
    for (let i = 0; i < products.length; i++) {
        if (products[i].checked && products[i].value !== "all") {
            checkedProduct.push(products[i].value);
        }
    }

    for (let i = 0; i < sourceData.length; i++) {
        for (let j = 0; j < checkedRegion.length; j++) {
            for (let k = 0; k < checkedProduct.length; k++) {
                if (sourceData[i].region == checkedRegion[j] && sourceData[i].product == checkedProduct[k]) {
                    result.push(sourceData[i]);
                    index.push(i)
                }
            }
        }

    }

    return {
        index,
        result
    }
}

//创建表格
function createTb(arr, index) {
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
        item.setAttribute("data-index", index[i])
        item.innerHTML = `
        <td>${arr[i].product}</td>
        <td>${arr[i].region}</td>
        `
        for (let t = 0; t < arr[i].sale.length; t++) {
            let td = document.createElement("td");
            td.innerText = arr[i].sale[t];
            item.appendChild(td);
        }

        item.addEventListener("mouseenter", function (e) {
            item.style.backgroundColor = "rgba(230, 227, 227,0.5)";
            let getIndex = e.target.dataset.index
            let { minNew, maxNew } = createKeduY(sourceData[getIndex].sale);
            createBarList(sourceData[getIndex].sale, minNew, maxNew);
            canvas.height = canvas.height;
            createCanvasAxisX();
            createCanvasAxisY();
            createXdots(12);
            createYdots(sourceData[getIndex].sale, 10)
        })

        item.addEventListener("mouseleave", function () {
            item.style.backgroundColor = "#fff"
        })

        table.appendChild(item);
    }
    if (chart.getElementsByTagName("table").length !== 0) {
        let oldTable = chart.getElementsByTagName("table")[0]
        chart.replaceChild(table, oldTable)
    }
    chart.appendChild(table);
    table = null;
}


//svg
//创建图表
let keduX = document.querySelector("#keduX");
let keduY = document.querySelector("#keduY");

let jiangeX = 510 / 12;//每个X坐标间的间隔距离

function createKeduX() {
    for (let i = 0; i < 12; i++) {
        renderKeduX(i);
    }
}

function renderKeduX(i) {
    let lineDom = document.createElement("line");
    let keduNow = 80 + (i) * jiangeX
    lineDom.className = "axis"
    lineDom.setAttribute("x1", keduNow);
    lineDom.setAttribute("y1", "375");
    lineDom.setAttribute("x2", keduNow);
    lineDom.setAttribute("y2", "380");
    keduX.innerHTML = keduX.innerHTML + lineDom.outerHTML + `<text x="${keduNow + 5}" y="400">${i + 1}月</text>`;
    lineDom = null;
}

function createKeduY(arr) {
    keduY.innerHTML = "";
    // 找出最小值和最大值
    let min = arr[0], max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        else if (arr[i] < min) min = arr[i];
    }
    let { minNew, maxNew } = randerKeduY(min, max);
    return { minNew, maxNew }
}

function randerKeduY(min, max) {
    let NjiangeY = Math.ceil((max - min) / 10);
    let jiangeY = (350 - 60) / 11;
    let maxNew = NjiangeY * 10 + min;
    for (let i = 0; i <= 10; i++) {
        let lineDom = document.createElement("line");
        let keduNow = 380 - jiangeY * (i + 1);
        lineDom.className = "axis";
        lineDom.setAttribute("x1", "80");
        lineDom.setAttribute("y1", keduNow)
        lineDom.setAttribute("x2", "85")
        lineDom.setAttribute("y2", keduNow)
        keduY.innerHTML = keduY.innerHTML + lineDom.outerHTML + `<text x="50" y=${keduNow}>${NjiangeY * i + min}</text>`;
        lineDom = null;
    }
    let minNew = min;
    return { minNew, maxNew } //返回纵坐标的最小值和最大值
}

function createBarList(data, min, max) {
    let barList = document.querySelector("#barList");
    barList.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        let height;
        if (data[i] == min) height = 26.36;
        else height = Math.floor((270 / (max - min)) * (data[i] - min)) + 26//计算得到条形图的高度
        let width = 80 + i * jiangeX
        let path = document.createElement("path");
        path.className = "bar"
        path.setAttribute("d", `M ${width},380 L ${width},${380 - height} L ${width + 20},${380 - height} L ${width + 20},380`);
        barList.innerHTML = barList.innerHTML + path.outerHTML
    }
}

createKeduX();
// createKeduY(sourceData[6].sale)

//canvas创建图表
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

function createCanvasAxisX() {
    //X轴
    ctx.beginPath();
    ctx.moveTo(50, 380);
    ctx.lineTo(600, 380);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    //X轴箭头
    ctx.beginPath();
    ctx.moveTo(595, 375);
    ctx.lineTo(600, 380);
    ctx.lineTo(595, 385);
    ctx.stroke();
    ctx.closePath();

}
function createCanvasAxisY() {
    //Y轴
    ctx.beginPath();
    ctx.moveTo(80, 30)
    ctx.lineTo(80, 400)
    ctx.stroke();
    ctx.closePath();

    //Y轴箭头
    ctx.beginPath();
    ctx.moveTo(75, 35)
    ctx.lineTo(80, 30)
    ctx.lineTo(85, 35);
    ctx.stroke();
    ctx.closePath();

}

function createXdots(data) {
    width = Math.ceil(510 / data);
    for (let i = 1; i <= data; i++) {
        ctx.beginPath();
        ctx.moveTo(80 + width * i, 375);
        ctx.lineTo(80 + width * i, 380);
        ctx.stroke();
        ctx.closePath();
        ctx.fillText(i + "月", 80 + width * i - 5, 395)
    }
}

function createYdots(data, num) {
    //     let NjiangeY = Math.ceil((max - min) / 10);
    // let jiangeY = (350 - 60) / 11;
    let height = Math.ceil(290 / num + 1);
    let max = data[0], min = data[0];
    for (let i = 0; i < data.length; i++) {
        if (data[i] < min) min = data[i];
        else if (data[i] > max) max = data[i];
    }
    let Nheight = Math.ceil((max - min) / 10)
    for (let j = 0; j <= num; j++) {
        ctx.beginPath();
        ctx.moveTo(80, 380 - (j + 1) * height);
        ctx.lineTo(85, 380 - (j + 1) * height);
        ctx.stroke();
        ctx.closePath();
        ctx.fillText(min + Nheight * j, 60, 380 - (j + 1) * height)
    }
    createLine(data, min, max)
}

function createLine(data, min, max) {

    let width = Math.ceil(510 / 12);
    // let height = Math.ceil(290/11);
    let lastWidth, lastHeight, thisWidth, thisHeight;

    for (let i = 0; i < data.length; i++) {
        thisWidth = 80 + width * (i + 1);
        thisHeight = Math.floor((290 / (max - min)) * (data[i] - min)) - 26.32 * 2;
        if (i != 0) {
            ctx.beginPath();
            ctx.moveTo(lastWidth, 290 - lastHeight);
            ctx.lineTo(thisWidth, 290 - thisHeight);
            ctx.stroke();
        };
        ctx.rect(thisWidth - 3, 290 - thisHeight - 3, 6, 6);
        ctx.fillStyle = "black"
        ctx.fill();
        ctx.closePath();
        ctx.fillText(data[i], thisWidth, 290 - thisHeight - 10);
        lastWidth = thisWidth;
        lastHeight = thisHeight;
    }
}


createCanvasAxisX()
createCanvasAxisY()
createXdots(12)