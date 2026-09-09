# 吃一口，剛剛好｜Johor Bahru 素食地圖

一個可部署到 GitHub 與 Vercel 的繁體中文素食推薦網站，整理 Mount Austin、Desa Terbau、Setia Indah、Taman Daya 四個地點的蔬食店家。

## 技術

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- lucide-react icons
- Wouter client-side routing
- Vercel SPA rewrite

## 編輯內容

所有餐廳、地點、地址、電話、Google Maps、Facebook、Instagram、標籤、六項細項評分與 Google Maps 客觀總評都集中在：

`client/src/data/venues.ts`

修改 `ratings` 中的六項數值（1–5）後，網站會更新「編輯細項評分」。卡片主畫面的「Google 總評」使用 `googleRating` 與 `googleReviewCount`；新增店家時，複製既有的 `Venue` 物件並修改 `id` 與內容即可。

目前六間店的正式名稱、地址、電話與營業時間已依照使用者提供的資料更新。明素斋食與享一享素食舘沒有社交平台，因此不顯示社交平台提示。Google Maps 評分可能隨時間變動，出發前請以店家最新頁面為準。

## 本機開發

```bash
pnpm install
pnpm dev
```

## 建置與預覽

```bash
pnpm build
pnpm preview
```

## Vercel

專案根目錄已包含 `vercel.json`，會將所有路由導向 `index.html`，可直接連接 GitHub repository 後部署。Build command 使用 `pnpm build`，Output 由 Vite 產生。
