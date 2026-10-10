import type { AppConfig } from '../types';
import icon from '../../assets/icons/waystub.png';

const app: AppConfig = {
  slug: 'waystub',
  name: { zh: '一票一程', en: 'Waystub' },
  headline: { zh: '一张旧票，找回那几天的照片', en: 'One old ticket brings back the photos from those days' },
  tagline: {
    zh: '把车票、机票收成票根，按日期找回旅途中的照片。',
    en: 'Turn train and plane tickets into keepsake stubs, and find the photos from each trip.',
  },
  summary: {
    zh: '一票一程把你的火车票、机票、汽车票收成一张张好看的票根，再按票上的日期和城市，从相册里找出那几天拍的照片，把每一段旅程完整地留下来。',
    en: 'Waystub turns your train, flight and bus tickets into beautiful stubs, then uses the dates and cities on each ticket to gather the photos you took on that trip, so every journey is kept whole.',
  },
  icon,
  appStoreId: '6820545030',
  comingSoon: true,
  features: [
    {
      icon: 'scan-line',
      title: { zh: '截图导入一张票', en: 'Import from a screenshot' },
      body: {
        zh: '选一张订票截图，自动识别车次、航班、起终点、日期和座位，校对一下就好。去程、返程会合成同一段旅程。',
        en: 'Pick a booking screenshot and Waystub reads the train or flight number, stations, date and seat; you just check it. Outbound and return tickets become one journey.',
      },
    },
    {
      icon: 'file-text',
      title: { zh: '发票、登机牌、短信都能导', en: 'Invoices, boarding passes, texts' },
      body: {
        zh: '支持 12306 电子发票、航空行程单（PDF / OFD）、钱包里的登机牌、短信和邮件文字；没有截图也能手动添加。',
        en: 'Also reads e-invoices and itineraries (PDF / OFD), Wallet boarding passes, and ticket texts or emails. No screenshot? Add a trip by hand.',
      },
    },
    {
      icon: 'images',
      title: { zh: '找回那几天的照片', en: 'Bring back the photos' },
      body: {
        zh: '按出发到回来的日期，把相册里的照片和视频整理到旅程里，实况照片、视频都能直接播放。照片只在本机整理，不会上传。',
        en: 'Photos and videos from the days of the trip are gathered into the journey, and Live Photos and videos play right in the app. Photos are organized on your device and never uploaded.',
      },
    },
    {
      icon: 'map-pinned',
      title: { zh: '足迹地图', en: 'Footprint map' },
      body: {
        zh: '去过的城市、走过的里程、最常往返的线路。设置常驻地，往返自动合并，回家的路不会被当成一次旅行。',
        en: 'Cities visited, distance traveled, your most frequent routes. Set your home city so round trips merge and the way home is not counted as a trip.',
      },
    },
    {
      icon: 'calendar-days',
      title: { zh: '年度报告与那年今日', en: 'Year report and On This Day' },
      body: {
        zh: '这一年去了哪里、和谁一起、每个月的精选照片；去年今天你在路上，桌面小组件和通知会提醒你。',
        en: 'Where you went this year, who you went with, and a photo from each month. Widgets and notifications bring back where you were a year ago.',
      },
    },
    {
      icon: 'share-2',
      title: { zh: '分享图与票面', en: 'Share cards and ticket papers' },
      body: {
        zh: '票根、贴纸、胶片、杂志、数据多种分享图，多种比例；防伪底纹、纸纹、横格等基础纸张，还有海岸微光、落日旅程等插画票面。',
        en: 'Stub, sticker, film, magazine and data cards in several ratios, on classic papers like guilloche, grain and ruled, or illustrated papers such as Coastal Light and Sunset Journey.',
      },
    },
    {
      icon: 'crown',
      title: { zh: '一票一程 Pro', en: 'Waystub Pro' },
      body: {
        zh: '一次购买，永久使用，支持家人共享：全部年份的足迹和多年对比、完整年度报告、全部 10 种插画票面、分享图去水印。',
        en: 'One-time purchase, yours forever, with Family Sharing: footprints for every year, the full year report, all 10 illustrated papers, and share cards without the watermark.',
      },
    },
  ],
  promises: [
    {
      icon: 'image-off',
      title: { zh: '照片不上传', en: 'Photos stay put' },
      body: {
        zh: '旅途照片只在本机整理，留在你自己的相册里。',
        en: 'Trip photos are organized on your device and stay in your own library.',
      },
    },
    {
      icon: 'cloud',
      title: { zh: '旅程在你自己的 iCloud', en: 'Journeys in your iCloud' },
      body: {
        zh: '旅程数据保存在本机和你的个人 iCloud，随时可以导出备份。',
        en: 'Journeys are kept on your device and in your own iCloud, and you can export a backup any time.',
      },
    },
    {
      icon: 'badge-check',
      title: { zh: '基础功能永远免费', en: 'The basics are always free' },
      body: {
        zh: '导入、照片找回、iCloud 同步、备份导出永远免费，不按张收费。',
        en: 'Importing, photo matching, iCloud sync and backups are always free. No per-ticket fees.',
      },
    },
  ],
  contactEmail: 'hongsikunjob@gmail.com',
};

export default app;
