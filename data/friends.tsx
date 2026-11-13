export const Friends: Friend[] = [
  {
    title: '楓璃夢',
    description: '時間真的能帶走傷痛嗎',
    website: 'https://github.com/Harvey2433',
    avatar: '/img/friend/FengLiMeng.jpg',
  },
  {
    title: 'Erialys',
    description: '一隻可愛小貓娘喵',
    website: 'https://www.luogu.com.cn/user/1201743',
    avatar: '/img/friend/Eiralys.jpg',
  },
  {
    title: '愧怍',
    description: '小站模板的作者',
    website: 'https://kuizuo.me/',
    avatar: '/img/friend/kuizuo.png',
  },
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: string
}
