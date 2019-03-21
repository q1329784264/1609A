import request from '@/utils/request';

// 登陆接口
export let login = code=>{
  return request.post('/user/code2session', {
    code
  })
}

// 添加面试
export let addSign = params=>{
  return request.post('/sign', params);
}

// 获取面试列表
export let getSignList = params=>{
  return request.get('/sign', params);
}
