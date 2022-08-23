/**
 * @description: 保存成txt
 * @param: cluster
 * @param: k
 */
function SaveDataAsTXT(cluster,k){
    // 循环遍历数据
    var i,j,m;
    for(i=0;i<k;i++){
        // 设置title
        var dataStr= "R,G,B,Transparency,Distance\n";
        for(j=0;j<cluster[i].length;j++){
            // 将4个数据取出
            for(m=0;m<5;m++){
                dataStr = dataStr + cluster[i][j][m].toString();
                if(m==4){
                    dataStr =dataStr + "\n";
                }else{
                    dataStr = dataStr + ",";
                }
            }
        }
        // 静态化
        console.log(dataStr);
        var urlObject = window.URL || window.webkitURL || window;
        var export_blob = new Blob([dataStr],{type: 'text/csv'});
        var save_link = document.createElementNS("http://www.w3.org/1999/xhtml","a")
        save_link.href = urlObject.createObjectURL(export_blob);
        var fileName = "cluster" + i.toString();
        save_link.download = fileName;
        document.body.appendChild(save_link);
        save_link.click();
        document.body.removeChild(save_link);
    }
};

/**
 * @description: 保存成txt
 * @param: data
 * @param: name
 */

function SaveCentroidsAsTXT(data,name){
    var i,j;
    var dataStr = "R,G,B,Transparency\n";
    // 将质心分离
    for(i=0;i<data.length;i++){
        for(j=0;j<data[i].length;j++){
            // 取出数据
            dataStr = dataStr + data[i][j]
            if(j == data[i].length - 1 ){
                dataStr = dataStr +",\n";
            }else{
                dataStr = dataStr + ",";
            }
        }
    }
    // 静态化
    console.log(data);
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