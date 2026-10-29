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
    name: "範例商品（之後會換成你的資料）",
    price: 1000,
    negotiable: true,
    status: "available",
    condition: "九成新，功能正常",
    images: [],
    specs: {
      "型號": "Example-123",
      "購買時間": "2024/01",
      "保固": "無",
      "配件": "原盒、說明書",
    },
    note: "",
  },
];
