// 一起听 - 创建房间
module.exports = (query, request) => {
  const data = {
    songId: query.songId,
  }
  
  return request(
    'POST',
    `https://music.163.com/api/listen/together/room/create`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
