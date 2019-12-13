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
								<li><Link to="/gou/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
							</ul>
						</div>
						<div className={Mid1Css.menu}>
							<div className={Mid1Css.div2}>
								猫类
							</div>
							<ul>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
							</ul>
						</div>
						<div className={Mid1Css.menu}>
							<div className={Mid1Css.div2}>
								鱼类
							</div>
							<ul>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
							</ul>
						</div>
						<div className={Mid1Css.menu}>
							<div className={Mid1Css.div2}>
								龟类
							</div>
							<ul>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
							</ul>
						</div>
						<div className={Mid1Css.menu}>
							<div className={Mid1Css.div2}>
								兔类
							</div>
							<ul>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
							</ul>
						</div>
						<div className={Mid1Css.menu}>
							<div className={Mid1Css.div2}>
								鸟类
							</div>
							<ul>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
								<li><Link to="/zhonghuatianyuanquan">中华田园犬</Link></li>
							</ul>
						</div>
						<div className={Mid1Css.menu}>
							<div className={Mid1Css.div2}>
								<Link to="">更多</Link>
							</div>
						</div>
					</div>
					<LunBoTu/>
				</div>
		   	</div>
        )
    }
}