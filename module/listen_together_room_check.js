// 一起听 - 检查房间状态/解析邀请码
module.exports = (query, request) => {
  const data = {
    code: query.code,
  }
  
  return request(
    'POST',
    `https://music.163.com/api/listen/together/room/check`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
