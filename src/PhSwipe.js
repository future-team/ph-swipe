/**
 * Created by slashhuang on 16/5/25.
 */

import React,{Component,PropTypes} from 'react';
import {findDOMNode} from 'react-dom'
import Swipe from './GestureInstance.js';
export default class PhSwipe extends Component{
    static PropTypes={
        imgArr:PropTypes.Array,//图片数组
        direction:PropTypes.string,//默认横向滚动
        autoPlay:PropTypes.boolean,//默认不自滚动
        loop:PropTypes.boolean,//默认不循环
        indicator:PropTypes.boolean,//显示小圆
        activeClass:PropTypes.string//小圆active的样式
    };
    static styleClsName = {
            vertical:[
                'img-vertical-indicator'
            ],
            horizontal:[
                'img-indicator'
            ]
        };
    static defaultProps={
        imgArr:[],//图片数组
        direction:'horizontal',//默认横向滚动
        autoPlay:false,//默认不自滚动
        loop:false,//默认不循环
        containerClassName:'img-list',//滑动容器的className值
        indicator:true,//显示小圆
        activeClass:'indicator-active'
    };
    constructor(){
        super();
    }
    componentDidMount(){
        let{ imgArr,...other}=this.props;
        this.node = findDOMNode(this.refs['ph-swipe']);
        new Swipe(this.node,other);
    }
    renderImg(direction){
        let imgArr = this.props.imgArr;
        if(imgArr)
        return (
            <div className={`img-list  ${direction}`}>
                {
                    imgArr.map((ele)=>{
                        return <img src={ele} key={ele}/>
                    })
                }
            </div>
        )
    }
    renderIndicator(){
        let indicatorStyle=this.getIndicator();
        let {activeClass}=this.props;
       return (
           <div className={`${indicatorStyle[0]}`} >
               <i className={activeClass}></i>
               <i></i>
               <i></i>
               <i></i>
           </div>
       )
    }
    getIndicator(){
        let {direction}=this.props;
        if(direction=='horizontal'){
            return PhSwipe.styleClsName['horizontal']
        }else{
            return PhSwipe.styleClsName['vertical']
        }
    }
    render(){
        let {direction,indicator}=this.props;
        return (
            <div className={`ph-container ${this.props.className}`} {...this.props} ref='ph-swipe'>
                {this.renderImg(direction)}
                {indicator?this.renderIndicator():null}
            </div>
        )
    }
}