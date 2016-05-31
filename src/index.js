/**
 * Created by slashhuang on 16/5/22.
 * 主程序入口
 */

import PhSwipe from './PhSwipe.js';
require("../css/index.less");
if(window['phoenix-ui']){
    window['phoenix-ui']['PhSwipe']
}else{
    window['PhSwipe']=PhSwipe
};
module.exports=PhSwipe;
