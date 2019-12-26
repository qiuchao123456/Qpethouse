import React from 'react';
import {Link} from 'react-router-dom';
import LunBoTu from './lunbotu';


var Mid1Css =require('./mid1.css');
export default class Mid1 extends React.Component{
    render(){
        return(
           <div>
			   	<div className={Mid1Css.div1}>
					<div className={Mid1Css.cmenu}>
						<div className={Mid1Css.menu}>
							<div className={Mid1Css.div2}>
								犬类
							</div>
							<ul>
								<li><Link to="/gou/jinmaoxunhuiquan">金毛寻回犬</Link></li>
								<li><Link to="/gou/xiboliyaxueqiaoquan">西伯利亚雪橇犬</Link></li>
								<li><Link to="/gou/chaiquan">柴犬</Link></li>
								<li><Link to="/gou/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/gou/jiwawaquan">吉娃娃</Link></li>
							</ul>
						</div>
						<div className={Mid1Css.menu}>
							<div className={Mid1Css.div2}>
								猫类
							</div>
							<ul>
								<li><Link to="/mao/lihuamao">狸花猫</Link></li>
								<li><Link to="/mao/zheermao">折耳猫</Link></li>
								<li><Link to="/mao/baomao">豹猫</Link></li>
								<li><Link to="/mao/buoumao">布偶猫</Link></li>
								<li><Link to="/mao/bosimao">波斯猫</Link></li>
							</ul>
						</div>
						<div className={Mid1Css.menu}>
							<div className={Mid1Css.div2}>
								鱼类
							</div>
							<ul>
								<li><Link to="/yu/jinyu">金鱼</Link></li>
								<li><Link to="/yu/shenxianyu">神仙鱼</Link></li>
								<li><Link to="/yu/haishuiyu">海水鱼</Link></li>
								<li><Link to="/yu/dengyu">灯鱼</Link></li>
								<li><Link to="/yu/bimuyu">比目鱼</Link></li>
							</ul>
						</div>
						<div className={Mid1Css.menu}>
							<div className={Mid1Css.div2}>
								龟类
							</div>
							<ul>
								<li><Link to="/gui/jinqiangui">金钱龟</Link></li>
								<li><Link to="/gui/zhenegui">真鳄龟</Link></li>
								<li><Link to="/gui/ditugui">地图龟</Link></li>
								<li><Link to="/gui/zhonghuagui">中华龟</Link></li>
								<li><Link to="/gui/hongtuilugui">红腿陆龟</Link></li>
							</ul>
						</div>
						<div className={Mid1Css.menu}>
							<div className={Mid1Css.div2}>
								兔类
							</div>
							<ul>
								<li><Link to="/tu/helanchuiertu">荷兰垂耳兔</Link></li>
								<li><Link to="/tu/bolantu">波兰兔</Link></li>
								<li><Link to="/tu/haitangtu">海棠兔</Link></li>
								<li><Link to="/tu/daerbaitu">大耳白兔</Link></li>
								<li><Link to="/tu/jiliantu">忌廉兔</Link></li>
							</ul>
						</div>
						<div className={Mid1Css.menu}>
							<div className={Mid1Css.div2}>
								鸟类
							</div>
							<ul>
								<li><Link to="/niao/bage">八哥</Link></li>
								<li><Link to="/niao/liaoge">鹩哥</Link></li>
								<li><Link to="/niao/yingwu">鹦鹉</Link></li>
								<li><Link to="/niao/daisheng">戴胜</Link></li>
								<li><Link to="/niao/jiaobailing">角百灵</Link></li>
							</ul>
						</div>
						<div className={Mid1Css.menu}>
							<div className={Mid1Css.div2}>
								<Link to="/fenlei">更多</Link>
							</div>
						</div>
					</div>
					<LunBoTu/>
				</div>
		   	</div>
        )
    }
}