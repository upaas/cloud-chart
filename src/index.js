import React from "react";
//生成圆上的点  参数 R 半径
const generateSpot = (radius, fineTune) => {
    const { random, sqrt, tan, pow, ceil } = Math;
    const angel = random() * 360;
    const symbol = random() > 0.5 ? 1 : -1; //随机决定正负
    const randomFineTune = (random() - random()) * fineTune; //fineTune乘以 -1 到 1 ；
    const x =
        sqrt(pow(radius + randomFineTune, 2) / (pow(tan(angel), 2) + 1)) *
        symbol;
    const y = tan(angel) * x;
    return { x, y };
};
export class getspotEles {
    constructor(param = mock, cloneEle) {
        this.dotEleList = []; //dot元素集合
        this.dotCoordinates = []; //位置坐标集合
        this.cloneEle = cloneEle;
        this.initDotEles(param);
    }
    initDotEles(param) {
        for (let i = 0; i < param.length; i++) {
            let { amount, radius, dotSize, fineTune } = param[i];
            let rawX, rawY;
            while (amount > 0) {
                --amount;
                let { x, y } = generateSpot(radius, fineTune);
                rawX = x;
                rawY = y;
                while (!this.checkSpace(rawX, rawY, dotSize)) {
                    //如果空间检测不通过，则继续生成点
                    let { x, y } = generateSpot(radius, fineTune);
                    rawX = x;
                    rawY = y;
                }
                let dotEle = React.createElement("div", {
                    className: "spot",
                    style: {
                        left: rawX + 178 - dotSize,
                        top: rawY + 178 - dotSize,
                        width: dotSize * 2,
                        height: dotSize * 2,
                        borderRadius: "50%"
                    }
                });
                dotEle = this.cloneEle(dotEle);
                this.dotCoordinates.push({ x: rawX, y: rawY, r: dotSize });
                this.dotEleList.push(dotEle);
            }
        }
    }
    checkSpace(x, y, r) {
        //是否有小于20的 有则返回true ，检测不通过
        // return true;
        if (this.dotCoordinates.length == 0) return true;
        let permission = this.dotCoordinates.some((item, index) => {
            let distance = Math.sqrt(
                Math.pow(item.x - x, 2) + Math.pow(item.y - y, 2)
            );
            return distance < r + item.r + 20;
        });
        return !permission;
    }
    //渲染element
    render() {
        return (
            <div className="demo">
                <div className="medium-circle" />
                <div className="large-circle" />
                {this.dotEleList}
            </div>
        );
    }
}
