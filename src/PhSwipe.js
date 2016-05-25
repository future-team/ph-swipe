/**
 * Created by slashhuang on 16/5/25.
 */

import React,{Component,PropTypes} from 'react';
import {findDOMNode} from 'react-dom'
import Swipe from './GestureInstance.js';
export default class PhSwipe extends Component{
    static PropTypes={
        direction:PropTypes.string,//默认横向滚动
        autoPlay:PropTypes.boolean,//默认不自滚动
        loop:PropTypes.boolean,//默认不循环
        containerClassName:PropTypes.string,//滑动容器的className值
        /**
         * 以下为可选值
         */
        indicatorClassName:PropTypes.string,//滑动容器下方小圆点容器className值
        activeClass:PropTypes.string//滑动容器下方小圆点激活的className值
    };
    static defaultProps={
        direction:'horizontal',//默认横向滚动
        autoPlay:false,//默认不自滚动
        loop:false,//默认不循环
        containerClassName:'img-list'//滑动容器的className值
    };
    constructor(){
        super();
    }
    componentDidMount(){
        let{ children,...other}=this.props;
        this.node = findDOMNode(this.refs['ph-swipe']);
        new Swipe(this.node.children[0],other);
    }
    render(){
        return (<div ref='ph-swipe'>
                {this.props.children}
                 </div>)
    }
}