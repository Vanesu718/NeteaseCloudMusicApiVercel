// 一起听 - 加入房间
module.exports = (query, request) => {
  const data = {
    roomId: query.roomId || query.code,
  }
  
  return request(
    'POST',
    `https://music.163.com/api/listen/together/room/join`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
