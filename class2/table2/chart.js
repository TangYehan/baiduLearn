// let kedu = document.querySelector("#kedu");
// let jiangeX = 510 / 12;//每个X坐标间的间隔距离

// function createKeduX() {
//     for (let i = 0; i < 12; i++) {
//         renderKeduX(i);
//     }
// }

// function renderKeduX(i) {
//     let lineDom = document.createElement("line");
//     let keduNow = 80+(i) * jiangeX
//     lineDom.className = "axis"
//     lineDom.setAttribute("x1", keduNow);
//     lineDom.setAttribute("y1", "375");
//     lineDom.setAttribute("x2", keduNow);
//     lineDom.setAttribute("y2", "380");
//     kedu.innerHTML = kedu.innerHTML+lineDom.outerHTML+`<text x="${keduNow+5}" y="400">${i+1}月</text>`;
//     lineDom = null;
// }

// function createKeduY(arr){
//     // 找出最小值和最大值
//     let min=arr[0],max=arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max) max=arr[i];
//         else if(arr[i]<min) min=arr[i];
//     }    
//     randerKeduY(min,max);
// }

// function randerKeduY(min,max){
//     let NjiangeY = Math.ceil((max-min)/10);
//     let jiangeY = (400-60)/11;
//     for(let i=0;i<=10;i++){
//         let lineDom = document.createElement("line");
//         let keduNow = 400 - jiangeY*(i+1);
//         lineDom.className = "axis";
//         lineDom.setAttribute("x1","80");
//         lineDom.setAttribute("y1",keduNow)
//         lineDom.setAttribute("x2","85")
//         lineDom.setAttribute("y2",keduNow)
//         kedu.innerHTML = kedu.innerHTML+lineDom.outerHTML+`<text x="50" y=${keduNow}>${NjiangeY*i+min}</text>`;
//         lineDom = null;
//     }
// }


// createKeduX();
// createKeduY(sourceData[6].sale)



