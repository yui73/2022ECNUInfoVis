/**
 * @description: 计算每个点的热力,按照正方形区块计算
 * @param: data -- 数据
 * @param: r -- 计算半径
 * @return: {{原数据},热力}
 */

function hotCal(data,r){
    console.log("进入计算热力函数");
    // 假设数据乱序，排序数据
    data.sort((x,y)=>{
        return x.lng-y.lng;
    })
    data.sort((x,y)=>{
        return x.lat-y.lat;
    })
    console.log("排序后",data);
    for(var i=0 ;i<data.length;i++){
        // 处理数据 对每个点计算abcd
        var a,b,c,d;
        var count=0;
        a=data[i].lat+r;
        b=data[i].lat-r;
        c=data[i].lng+r;
        d=data[i].lng-r;
        // 统计范围内点的个数 数据已经按照先lat后lng的顺序排序
        // 先往前遍历
        for(var j = i;j>=0;j--){
            // 数据已经按照先lat后lng的顺序排序 所以比较lat,如果小于b，直接淘汰并且结束循环，向前遍历不存在大于a的情况
            if(data[j].lat<b)
                break;
            // 同理比较lng,但lng都要比较
            if(data[j].lng>d && data[j].lng<c)
                count++;
        }
        // 向后遍历
        for(var j = i;j<data.length;j++){
            // 比较lat,如果大于a，直接淘汰并且结束循环，向前遍历不存在小于b的情况
            if(data[j].lat>a)
                break;
            // 同理比较lng,但lng都要比较
            if(data[j].lng>d && data[j].lng<c)
                count++;
        }
        // count放入对象
        data[i].hot = count;
    }
    console.log("处理后",data);
    // 静态化数据
    var dataStr = "hot,lat,lng\n";
    for(var i=0;i<data.length;i++){
        // 取数据
        dataStr = dataStr + data[i].hot +',' + data[i].lat+','+ data[i].lng+'\n';
    }
    var urlObject = window.URL || window.webkitURL || window;
    var export_blob = new Blob([dataStr],{type: 'text/csv'});
    var save_link = document.createElementNS("http://www.w3.org/1999/xhtml","a")
    save_link.href = urlObject.createObjectURL(export_blob);
    var fileName = name;
    save_link.download = fileName;
    document.body.appendChild(save_link);
    save_link.click();
    document.body.removeChild(save_link);
}

// function insert_Sort_lat(arr) {
//     console.log("进入排序函数");
//     arr.sort((x,y)=>{
//         return x.lat-y.lat;
//     })
//     r
//     // 原版的插入排序
//     // for(var i=1;i<arr.length;i++) {
//     //     var temp = arr[i];
//     //     for (var j = i; j > 0 && arr[j - 1] > temp; j--) {
//     //         arr[j] = arr[j - 1];
//     //         arr[j - 1] = temp;
//     //     }
//     // }
//     //62 62 68 65 102
//     return "good";
// }