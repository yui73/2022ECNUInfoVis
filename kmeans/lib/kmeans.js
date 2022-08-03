/*
 * @Author:yui73
 * @Date: 2022-07-26 10:50:06
 * @LastEditors: Yui_73 isping.zhao@outlook.com
 * @LastEditTime: 2022-07-28 18:23:41
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
    // console.log("[DEBUG][KMeans]");
    // 任意选择k个聚类中心
    var centroids = RandomCentroids(data,k);
    // var cluster = new Array(centroids.length);
    // // 开三维数组
    // for(i=0;i<centroids.length;i++){
    //     cluster[i]=new Array ();
    // }


    // // 原型
    // // const OldProtoType = Object.create(cluster.prototype)
    // // 开始聚类-先实现一次迭代
    // KCluster(data,cluster,centroids);
    // console.log(cluster);
    // // 判断数组有无变化 - 质心无变化 则数组无变化
    // // 计算新质心
    // var newCentroids = CalcCentroids(cluster,k);
    // // console.log(centroids);
    // // console.log(newCentroids);
    // // 计算新旧质心之间的距离
    // for(i=0;i<k;i++){
    //     var dis = CalcEuDistance(newCentroids[i],centroids[i]);
    //     console.log(dis);
    // }
    
    // 重构至多次迭代
    var count = 0;
    var threshold = 10000;
    while(threshold>5){
        threshold = 0;
        // 记录迭代次数
        count+=1;
        console.log("====第"+count+"次迭代====");
        // 开集群
        var cluster = new Array(centroids.length);
        // 开三维数组
        for(i=0;i<centroids.length;i++){
            cluster[i]=new Array ();
        }
        // 进行集群
        KCluster(data,cluster,centroids);
        // 计算新质心
        var newCentroids = CalcCentroids(cluster,k);
        // 计算新旧质心之间的距离
        for(i=0;i<k;i++){
            var dis = CalcEuDistance(newCentroids[i],centroids[i]);
            threshold += dis;
        }
        // 更新质心
        for(i=0;i<k;i++){
            for(j=0;j<3;j++){
                centroids[i][j] = newCentroids[i][j];
            }
        }
        console.log("----质心----");
        console.log(centroids);
        console.log("----距离----");
        console.log(threshold);
        // centroids = newCentroids.splice();
    }
    console.log("迭代完成");
    return cluster;
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