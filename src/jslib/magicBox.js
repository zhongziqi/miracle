// 神奇盒子用于放置公共的业务方法
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
const magicBox = {
  // 修改标题
			title(title){
        document.title=title;
      },
  // 获取url中的参数（url中没有#）
			get_url_params(name) {
				var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
				var r = window.location.search.substr(1).match(reg);
				if (r != null) {
						return unescape(r[2]);
				}
				return null;
			},
  // 手机号码验证
			phone(phone){
				var clearNull = phone.replace(/\s+/g, "");
				// console.log(clearNull,'clearNull');
				if(clearNull==''){
					return null
				}else if(!(/^1[34578]\d{9}$/.test(clearNull))){
					return false
				}else{
					return true
				}
			},
  // 开始旋转
			start_loading(){
				Indicator.open({
					text: '加载中...',
					spinnerType: 'fading-circle'
				});
			},
  // 停止旋转
			stop_loading(){
				Indicator.close();
			},
  // 状态提示语
			tips(content,position,duration){
				Toast({
					message: content,
					position: position,
					duration: duration
				});
			}
}
export default magicBox;
