/*
 * @Author: Yui_73 isping.zhao@outlook.com
 * @Date: 2022-07-26 15:51:56
 * @LastEditors: Yui_73 isping.zhao@outlook.com
 * @LastEditTime: 2022-07-28 17:48:13
 * @FilePath: \2022ECNUInfoVis\kmeans\lib\cluster.js
 * @Description: K-means算法的集群实现
 */

function KCluster(data,cluster,centroids){
    // console.log("[DEBUG][KCluster]");
    // 开始集群
    for(i=0;i<data.length;i++){
    // for(i=0;i<1;i++){
        var dis = [];//依次为距离第一个质心的距离...
        // 计算距离
        for(j=0;j<centroids.length;j++){
            dis.push(CalcEuDistance(data[i],centroids[j]));
        }
        // 获取距离最小值和其索引
        var min = Math.min(...dis);
        var index = dis.indexOf(min);
        var tempData = [];
        tempData.push(...data[i]);
        tempData.push(min);
        // console.log(tempData);
        // console.log(index);
        // 根据索引找到对应质心和集群
        // newCluster[index].push(tempData);
        cluster[index].push(tempData);
    }
    // console.log(cluster);
    // console.log(i);
}

/**
 * @description: 计算中心点
 * @param1:集群
 * @param2:集群个数
 * @return {新的质心}
 */
function CalcCentroids(cluster,k){
    // var temp = cluster[0].length;
    // console.log(temp);
    // 新质心数组
    var newCentroids = [];
    for(i=0;i<k;i++){
        var sum_1 = 0;
        var sum_2 = 0;
        var sum_3 = 0;

        // console.log(cluster[i].length);
        for(j=0;j<cluster[i].length;j++){
            // 合计
            sum_1 += cluster[i][j][0];
            sum_2 += cluster[i][j][1];
            sum_3 += cluster[i][j][2];
        }
        // 三维总和
        // console.log(sum_1);
        // console.log(sum_2);
        // console.log(sum_3);
        // 计算新质心
        var cenTemp = [sum_1/cluster[i].length,sum_2/cluster[i].length,sum_3/cluster[i].length,255];
        // console.log(cenTemp);
        newCentroids.push(cenTemp);
    }
    
    return newCentroids;
    //根据集群计算质心
    // for(i=0;i<k;i++){
    //     var temp = cluster[i];
    //     console.log(temp);
    //     // for(j=0;j<cluster[i].length){
    //     //     // console.log(cluster[i].length);
    //     // }
    // }
}