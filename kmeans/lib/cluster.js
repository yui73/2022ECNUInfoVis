/*
 * @Author: Yui_73 isping.zhao@outlook.com
 * @Date: 2022-07-26 15:51:56
 * @LastEditors: Yui_73 isping.zhao@outlook.com
 * @LastEditTime: 2022-07-26 17:27:32
 * @FilePath: \2022ECNUInfoVis\kmeans\lib\cluster.js
 * @Description: K-means算法的集群实现
 */

function KCluster(data,cluster,centroids){
    console.log("[DEBUG][KCluster]");
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
        cluster[index].push(tempData);
    }
    console.log(cluster);
    // console.log(i);
}
