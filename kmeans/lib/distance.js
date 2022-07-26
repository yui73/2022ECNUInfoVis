/*
 * @Author: error: yui73
 * @Date: 2022-07-26 11:02:01
 * @LastEditors: Yui_73 isping.zhao@outlook.com
 * @LastEditTime: 2022-07-26 16:52:56
 * @FilePath: \2022ECNUInfoVis\kmeans\lib\distance.js
 * @Description: k-means算法距离计算模块
 */

/**
 * @description: 欧式距离计算
 * @param1:计算点
 * @param2:中心点
 * @return {距离dis}
 */
// 欧式距离 Euclidean Distance

function CalcEuDistance(x,center){
    console.log("[DEBUG][CalcEuDistance]");
    // t 平方和
    var t = 0;
    // x.length为数据维数，无需提前约定
    for(var i=0;i<x.length;i++){
        t += Math.pow(x[i]-center[i],2);
    }  
    return (Math.sqrt(t));
}