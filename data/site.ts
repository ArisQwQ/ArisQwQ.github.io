export const siteInfo = {
  name: 'Aris_QwQ',
  url: 'https://blog.tendou-aris.com',
  description: '事在人為',
  copyrightStartYear: 2020,
  repository: 'https://github.com/ArisQwQ',
  // 備案信息：留空時頁腳不顯示備案區域；以後自己備案下來，把號填進 icp / police 即可自動顯示
  beian: {
    icp: '',
    police: '',
    // 原倉庫（kuizuo.me）的備案號，僅作格式參考，備案主體不是本站
    // icp: '閩ICP備2020017848號-3',
    // police: '閩公網安備35021102000847號',
  },
}

export function getPoliceRecordCode(): string {
  return siteInfo.beian.police.match(/\d+/)?.[0] ?? ''
}
