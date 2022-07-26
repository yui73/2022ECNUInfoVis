/*
 * @Author:yui73
 * @Date: 2022-07-26 10:50:06
 * @LastEditors: Yui_73 isping.zhao@outlook.com
 * @LastEditTime: 2022-07-26 17:58:44
 * @FilePath: \2022ECNUInfoVis\kmeans\lib\kmeans.js
 * @Description: 使用JavaScript实现k-means算法 ES6
 */

/**
 * @description: Kmeans聚类
 * @param: data
 * @param: k
 * @return: 聚类结果（还需要细化）
 */
function KMeans(data,k){
    console.log("[DEBUG][KMeans]");
    // 任意选择k个聚类中心
    const centroids = RandomCentroids(data,k);
    var cluster = new Array(centroids.length);
    // 开三维数组
    for(i=0;i<centroids.length;i++){
        cluster[i]=new Array ();
    }
    // 原型
    // const OldProtoType = Object.create(cluster.prototype)
    // 开始聚类-先实现一次迭代
    const temp = KCluster(data,cluster,centroids);
    // 判断数组有无变化
    // if(OldProtoType == cluster.prototype){
    //     console.log("changed");
    // }
    
    // console.log(centroids);
    // console.log(data);
}

/**
 * @description: 随机选取K个聚类中心
 * @param: data
 * @param: k
 * @return: K个聚类中心
 */
function RandomCentroids(data,k){
    var centroids = [];
    // console.log(data);
    for(i=0;i<k;i++){
        // 这里可以增加异常处理
        if(data.length>0){
            var index = Math.floor(Math.random()*data.length);
            centroids.push(data[index]);
            // 删除数据
            data.splice(index,1);
        }else{
            // 产生数组下标溢出
            break;
        }
    }
    return centroids;
}