// 放置项目的过滤器
import Vue from 'vue';
// 时间戳过滤器
Vue.filter('timeToString',function(val){
	if(val==null){
		return ''
    }
    let d = new Date(val*1000)
    let year = d.getFullYear();
    let month = d.getMonth()+1;
    let day = d.getDate();
    let realMonth = month>=10?month:"0"+month;
    let realDay = day>=10?day:"0"+day;
    let str = year+"-"+realMonth+"-"+realDay;
	return str
});
// 级别过滤器（等级（1-5 分别对应董事，联合创始人，合伙人，总代，Vip））
Vue.filter('level',function(val){
    if(val==1){
			return '董事'
		}else if(val==2){
			return '联合创始人'
		}else if(val==3){
			return '合伙人'
		}else if(val==4){
			return '总代'
		}else if(val==5){
			return 'Vip'
		}
});
