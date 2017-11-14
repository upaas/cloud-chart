import React from "react";
import reactDom from 'react-dom'
import { getspotEles } from "../src/index.js";
import "./index.scss";
const mock = [
    {
        radius: 86, //位置半径
        dotSize: 25, //元素的半径大小
        fineTune: 9, //位置浮动，
        amount: 4 //数量
    },
    {
        radius: 149,
        dotSize: 15,
        fineTune: 15,
        amount: 9
    }
];
class Demo extends React.Component {
    constructor(props) {
        super();
        this.instance = new getspotEles(mock, this.cloneEle);
    }
    cloneEle = ele => {
        // debugger
        return React.cloneElement(ele,{},<a>ssss</a>);
    };
    render() {
        return <div>
            {this.instance.render()}
        </div>
    }
}
reactDom.render(<Demo/>, document.body)

