export type AreaId = "mount-austin" | "desa-terbau" | "setia-indah" | "taman-daya";

export type RatingKey =
  | "transport"
  | "parking"
  | "service"
  | "value"
  | "speed"
  | "taste";

export type SocialLink = {
  label: "Facebook" | "Instagram";
  url: string;
};

export type Venue = {
  id: string;
  name: string;
  areaId: AreaId;
  category: string;
  shortDescription: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl: string;
  socialLinks: SocialLink[];
  price: string;
  tags: string[];
  ratings: Record<RatingKey, number>;
  verdict: string;
  editorNote: string;
  googleRating: number;
  googleReviewCount: number;
  googleRatingNote: string;
};

export const areas: Array<{
  id: AreaId;
  name: string;
  chineseName: string;
  description: string;
  accent: string;
}> = [
  {
    id: "mount-austin",
    name: "Mount Austin",
    chineseName: "Mount Austin",
    description: "商圈選擇多，適合約會與週末覓食。",
    accent: "sunset",
  },
  {
    id: "desa-terbau",
    name: "Desa Terbau",
    chineseName: "Desa Terbau",
    description: "住宅區裡的熟客口袋名單。",
    accent: "moss",
  },
  {
    id: "setia-indah",
    name: "Setia Indah",
    chineseName: "Setia Indah",
    description: "想吃一碗熱騰騰麵食的日子，就來這裡。",
    accent: "clay",
  },
  {
    id: "taman-daya",
    name: "Taman Daya",
    chineseName: "Taman Daya",
    description: "安靜、實在，適合慢慢吃一餐。",
    accent: "leaf",
  },
];

// 編輯提示：新增、刪除或修改餐廳時，只需要改這個陣列。
// ratings 六項均為 1–5 的數字；網站會自動計算總評分。
export const venues: Venue[] = [
  {
    id: "egg-bomb",
    name: "Eggbomb Cafe 一颗炸蛋",
    areaId: "mount-austin",
    category: "創意小食",
    shortDescription: "名字有記憶點、適合點幾樣分享，讓蔬食聚餐更有趣。",
    address: "7-01, Jalan Austin Heights 3/1, Taman Mount Austin Jb, 81100 Johor, Johor Darul Ta'zim",
    phone: "01175134723",
    hours: "11:00am–9:00pm（Monday closed）",
    mapUrl: "https://www.google.com/maps/place/Eggbomb+Cafe+%E4%B8%80%E9%A1%86%E7%82%B8%E8%9B%8B/@1.5580292,103.7812883,719m/data=!3m2!1e3!4b1!4m6!3m5!1s0x31da6f72636b4289:0xa3bbb53868512607!8m2!3d1.5580292!4d103.7812883!16s%2Fg%2F11vkg62w9f?hl=en-MY&entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    socialLinks: [
      { label: "Facebook", url: "https://www.facebook.com/p/EggBomb-%E4%B8%80%E9%A1%86%E7%82%B8%E8%9B%8B-100083160619443/" },
    ],
    price: "RM 8–20",
    tags: ["小食", "分享餐", "Facebook"],
    ratings: { transport: 4, parking: 3, service: 4, value: 4, speed: 3, taste: 4 },
    verdict: "適合當作聚餐裡的亮點小食；建議先確認尖峰時段的等候時間。",
    editorNote: "正式店名、地址、營業時間與電話已依照你提供的資料更新。",
    googleRating: 4.8,
    googleReviewCount: 375,
    googleRatingNote: "Google Maps 頁面直接顯示 4.8 分、375 則評論。",
  },
  {
    id: "noodle-face",
    name: "Noodleface A Meatless Cuisine",
    areaId: "mount-austin",
    category: "素食麵食",
    shortDescription: "麵控的暖胃選擇，想吃香氣與口感時值得收藏。",
    address: "G-08, Blok B, Akademik Suite, Jalan Austin Heights Utama, Taman Mount Austin, 81100 Johor Bahru, Johor Darul Ta'zim",
    phone: "0198972893",
    hours: "11:30am–3:30pm，5:30pm–9:00pm（Monday closed）",
    mapUrl: "https://www.google.com/maps/place/Noodleface+A+Meatless+Cuisine/@1.5612217,103.7791824,719m/data=!3m2!1e3!4b1!4m6!3m5!1s0x31da6e863ca600fd:0x3b28df338f390874!8m2!3d1.5612217!4d103.7791824!16s%2Fg%2F11cmy_s6cr?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    socialLinks: [
      { label: "Facebook", url: "https://www.facebook.com/Noodlefacemalaysia151001/" },
    ],
    price: "RM 12–28",
    tags: ["麵食", "暖胃", "Facebook"],
    ratings: { transport: 4, parking: 3, service: 4, value: 4, speed: 4, taste: 5 },
    verdict: "食物好吃度突出，適合把「今天想吃麵」變成一個明確答案。",
    editorNote: "正式店名、地址、營業時間與電話已依照你提供的資料更新。",
    googleRating: 4.4,
    googleReviewCount: 396,
    googleRatingNote: "Google 4.4 分、396 則評論；因 Maps 頁面文字受限，使用公開 Restaurant Guru 資料交叉核對。",
  },
  {
    id: "dessert-library",
    name: "甜品軒（Dessert Library）",
    areaId: "desa-terbau",
    category: "蔬食甜品",
    shortDescription: "用一碗甜品為蔬食行程收尾，適合午後與晚餐後散步。",
    address: "45, Jalan Harmonium 35/1, Taman Desa Tebrau, 81100 Johor Bahru, Johor Darul Ta'zim",
    phone: "073615985",
    hours: "8:30am–9:00pm（Monday closed）",
    mapUrl: "https://www.google.com/maps/place/Dessert+Library/data=!4m2!3m1!1s0x31da6e89bca2dfff:0xc2350fbbd8c142d9?sa=X&ved=1t:242&hl=en-MY&ictx=111&cshid=1788957289917",
    socialLinks: [
      { label: "Facebook", url: "https://www.facebook.com/p/Dessert-Library-%E7%94%9C%E5%93%81%E8%BB%92-100041353938105/" },
      { label: "Instagram", url: "https://www.instagram.com/dessert_library/" },
    ],
    price: "RM 8–18",
    tags: ["甜品", "下午茶", "Instagram"],
    ratings: { transport: 4, parking: 3, service: 4, value: 4, speed: 4, taste: 4 },
    verdict: "口味與氛圍都適合慢慢享用，是蔬食散步路線裡的甜甜一站。",
    editorNote: "正式店名、地址、營業時間與電話已依照你提供的資料更新。",
    googleRating: 4.3,
    googleReviewCount: 542,
    googleRatingNote: "Google Maps 頁面直接顯示 4.3 分、542 則評論。",
  },
  {
    id: "yuan-xiang",
    name: "園香素食",
    areaId: "setia-indah",
    category: "傳統蔬食",
    shortDescription: "想找一份樸實、熟悉的素食味道，可以從這裡開始。",
    address: "58, Jalan Setia 3/6, Taman Setia Indah, 81100 Johor Bahru, Johor Darul Ta'zim",
    phone: "0167702438",
    hours: "6:00am–2:00pm",
    mapUrl: "https://www.google.com/maps/place/Da+Jia+Fatt+%E2%80%A2+%E5%A4%A7%E5%AE%B6%E5%8F%91%E7%BE%8E%E9%A3%9F%E9%96%A3/@1.5714635,103.7536687,719m/data=!3m2!1e3!4b1!4m6!3m5!1s0x31da6f4ae8bfb3ed:0x3bf987edc6a5e877!8m2!3d1.5714581!4d103.7562383!16s%2Fg%2F11tsh9ysgr?authuser=0&entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
    socialLinks: [],
    price: "RM 8–20",
    tags: ["傳統口味", "實惠"],
    ratings: { transport: 3, parking: 4, service: 4, value: 5, speed: 4, taste: 4 },
    verdict: "價錢親切、整體舒服，適合想吃一餐實在蔬食的日子。",
    editorNote: "正式店名、地址、營業時間與電話已依照你提供的資料更新；店家沒有社交平台。",
    googleRating: 3.5,
    googleReviewCount: 45,
    googleRatingNote: "此分數是 Google Maps 上 Da Jia Fatt 大家发美食阁整體店家頁面的 3.5 分、45 則評論，不是園香素食檔口的獨立評分。",
  },
  {
    id: "ming-su",
    name: "明素斋食",
    areaId: "taman-daya",
    category: "蔬食正餐",
    shortDescription: "清爽、平衡的日常蔬食選擇，適合想吃得沒有負擔的你。",
    address: "G5, Medan Selera Rumbia, G15, Medan Selera Rumbia, Jalan Rumbia 10, Taman Daya, 81100 Johor Bahru, Johor",
    phone: "0167319609",
    hours: "10:00am–2:00pm，4:00pm–8:30pm（Monday closed）",
    mapUrl: "https://www.google.com/maps/place/Meng+su+vegetarian+%E6%98%8E%E7%B4%A0%E6%96%8B%E9%A3%9F/@1.5996541,103.6091624,43046m/data=!3m1!1e3!4m7!3m6!1s0x31da6de33bc450f5:0x2f3f7a131387d2c1!8m2!3d1.5497579!4d103.7572545!15sCgzmmI7ntKDntKDpo58iL1ItL2dlby90eXBlL2VzdGFibGlzaG1lbnRfcG9pL3NlcnZlc192ZWdldGFyaWFuWhAiDuaYjiDntKAg57Sg6aOfkgEKcmVzdGF1cmFudJoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQydG9hRlJGYkVOaVJGWk1XREJTU0dFd2IzcGphemx2V1cxb01XRnJSUkFC4AEA-gEECAAQEg!16s%2Fg%2F11pwsxtn4q?entry=tts&g_ep=EgoyMDI2MDkwMi4wIPu8ASoASAFQAw%3D%3D&skid=ceb1e0d0-c03e-416d-91ef-7e9620b89986",
    socialLinks: [],
    price: "RM 10–25",
    tags: ["日常午餐", "清爽", "家庭友善"],
    ratings: { transport: 4, parking: 3, service: 4, value: 4, speed: 4, taste: 4 },
    verdict: "整體均衡、沒有太多門檻，很適合當作固定回訪的日常蔬食。",
    editorNote: "正式店名、地址、營業時間與電話已依照你提供的資料更新；店家沒有社交平台。",
    googleRating: 4.2,
    googleReviewCount: 14,
    googleRatingNote: "Google 4.2 分、14 則評論；因 Maps 頁面只載入 Loading，使用公開 Restaurant Guru 資料交叉核對。",
  },
  {
    id: "xiang-yi-xiang",
    name: "享一享素食舘",
    areaId: "taman-daya",
    category: "家常蔬食",
    shortDescription: "有熟悉感的家常味，適合和家人一起輕鬆吃飯。",
    address: "8, Jalan Nipah 13, Taman Daya, 81100 Johor Bahru, Johor Darul Ta'zim",
    phone: "0197716873",
    hours: "6:30am–8:30pm（Monday closed）",
    mapUrl: "https://maps.app.goo.gl/W4hc3co7pPAGcded7",
    socialLinks: [],
    price: "RM 10–25",
    tags: ["家常味", "多人聚餐", "份量感"],
    ratings: { transport: 4, parking: 4, service: 4, value: 4, speed: 3, taste: 4 },
    verdict: "價格與份量表現穩妥，是不需要想太多就能走進去的一餐。",
    editorNote: "正式店名、地址、營業時間與電話已依照你提供的資料更新；店家沒有社交平台。",
    googleRating: 4.3,
    googleReviewCount: 257,
    googleRatingNote: "Google 4.3 分、257 則評論；因 Maps 頁面文字未顯示評分，使用標註資料來自 Google 的 Wanderlog 公開頁面交叉核對。",
  },
];

export const ratingLabels: Record<RatingKey, string> = {
  transport: "交通方便度",
  parking: "停車位置",
  service: "服務態度",
  value: "價錢合理度",
  speed: "上菜速度",
  taste: "食物好吃度",
};

export const getOverallRating = (venue: Venue) => {
  return venue.googleRating;
};

export const getArea = (areaId: AreaId) => areas.find((area) => area.id === areaId);

export const getSocialIconLabel = (label: SocialLink["label"]) => label === "Instagram" ? "IG" : "FB";

export const editableFields = [
  "name",
  "areaId",
  "category",
  "shortDescription",
  "address",
  "phone",
  "hours",
  "mapUrl",
  "socialLinks",
  "price",
  "tags",
  "ratings",
  "verdict",
  "editorNote",
  "googleRating",
  "googleReviewCount",
  "googleRatingNote",
] as const;

export const benefits = [
  { number: "01", title: "給身體更輕的選擇", text: "多吃蔬菜、豆類與全穀物，讓每一餐都多一點自然的纖維與營養。" },
  { number: "02", title: "讓餐桌更有色彩", text: "從一碗飯、一份麵到甜品，蔬食也可以有香氣、口感與驚喜。" },
  { number: "03", title: "把永續變成日常", text: "偶爾選擇一餐蔬食，就是把更友善地球的習慣放進生活裡。" },
];

export const editorialNote = "評分是編輯整理用的主觀參考，實際口味、營業時間與店家資訊可能變動；出發前請以店家最新公告為準。";

export const projectMeta = {
  siteName: "吃一口，剛剛好",
  eyebrow: "Johor Bahru Vegetarian Guide",
  description: "把柔軟、香氣與一點綠意，收進新山的每一餐。",
};

export default venues;

// 你可以把這份檔案當成網站的內容管理中心：
// 1. 修改既有餐廳的文字、連結或 ratings。
// 2. 複製任一個物件，改 id 與內容即可新增餐廳。
// 3. areaId 只使用上方四個 AreaId，地點選單會自動同步更新。
// 4. ratings 維持 1–5，總評會自動平均，不需要手動計算。
