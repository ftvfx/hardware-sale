// 網站資訊：標題、說明、聯絡方式、交易須知
const SITE = {
  title: "二手硬體出清",
  intro: "自用硬體出清，皆為個人使用，價格與狀況如下。有興趣歡迎私訊詢問。",
  contact: [
    // { label: "LINE", value: "your-line-id", link: "https://line.me/ti/p/~your-line-id" },
    { label: "聯絡方式", value: "（待填）" },
  ],
  notes: [
    "（待填）面交地點／寄送方式",
    "（待填）付款方式",
  ],
};

// 商品清單
// status: "available" 販售中 / "reserved" 已預訂 / "sold" 已售出
// images: 放在 images/ 資料夾的檔名，第一張為封面
const ITEMS = [
  {
    name: "i7-5820K + RTX 3060 12GB 桌上型主機（含螢幕、鍵鼠）",
    price: "價格洽詢",
    negotiable: false,
    status: "available",
    condition: "",
    images: ["pc1-inside.jpg", "pc1-bios.jpg"],
    specs: {
      "CPU": "Intel Core i7-5820K（6 核 12 緒，3.3GHz）",
      "主機板": "技嘉 GIGABYTE X99-SLI",
      "記憶體": "DDR4 16GB × 4 = 64GB",
      "顯示卡": "ASUS GeForce RTX 3060 12GB",
      "儲存": "Crucial MX300 275GB M.2 SSD + T-FORCE 1TB SSD",
      "散熱": "Cooler Master 一體式水冷",
      "電源": "MSI MAG 650W 銅牌",
      "螢幕": "ASUS VZ229HE 22 吋 IPS 薄邊框",
      "周邊": "鍵盤 + 滑鼠一組",
    },
    note: "",
  },
];
