/**
 * Created by slashhuang on 16/5/30.
 */
import React,{Component} from 'react';
import PhSwipe from '../../src/index.js';
import {render,findDOMNode} from 'react-dom';
require('../../css/index.less');
export default class PhSwipeDemo extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render(){
        let imgArr=[
            'http://img5.imgtn.bdimg.com/it/u=1478257864,2882073929&fm=21&gp=0.jpg',
            'http://www.bz55.com/uploads/allimg/150309/139-150309101F7.jpg',
            'http://img2.zol.com.cn/product/95/20/ceSFw3e3TqLNM.jpg',
            'http://img5.imgtn.bdimg.com/it/u=1432870041,1164599966&fm=21&gp=0.jpg'
        ];

        /**
         * 请手动左右滑动
         */
        var Node2Options={
            imgArr:imgArr,
            direction:'horizontal',//滑动方向
            loop:false//是否滑动循环
        };
        /**
         * 测试横向滑动模块
         */
        var Node3Options={
            imgArr:imgArr,
            direction:'horizontal',//滑动方向
            autoPlay:true,
            duration:1500,
            loop:true,//是否滑动循环
            activeClass:'yellow',//自定义active的样式
        };
        /**
         * 自动手动垂直滑动
         */
        let node4Options={
            imgArr:imgArr,
            direction:'vertical',
            autoPlay:false,//是否自动播放
            activeClass:'green',//自定义active的样式
        };
        /**
         * 垂直自动播放方式
         */
        var node5Options={
            imgArr:imgArr,
            direction:'vertical',
            autoPlay:true,//是否自动播放
            loop:true,
            activeClass:'purple',//自定义active的样式
        };
        return (<div>
            <PhSwipe {...Node2Options}></PhSwipe>
            <div className='hint'>请手动左右滑动</div>
            <PhSwipe {...Node3Options}></PhSwipe>
            <div className='hint'>自动循环左右滑动</div>

            <PhSwipe {...node4Options} style={{height:'150px'}}></PhSwipe>
            <div className='hint'>请手动上下滑动</div>
            <PhSwipe {...node5Options} style={{height:'150px'}}></PhSwipe>
            <div className='hint'>自动循环上下滑动</div>
        </div>)
    }
}

render(<PhSwipeDemo/>,document.getElementById('root'))