import  axios from 'axios'
// export  default  axios.create({
//     timeout: 20000,
// })
const url = 'http://miracleqq.dankal.cn/miracle/public/api';

// 获取token
function get_token(obj){
	return new Promise((resolve,reject)=>{
		axios({
			url:url+'user/authLogin',
			method: 'post',
			params:{code:code},
		})
		.then((response)=>{
            resolve(response)
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}

export default {
	get_token,
}
