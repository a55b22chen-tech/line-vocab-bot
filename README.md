# LINE Bot：單字小幫手

輸入「單字：英文單字」查詢收錄的英文單字。

## 功能

- `單字：apple` → `apple：蘋果`
- 空白單字會提醒補充。
- 查無資料時會提供提示。
- 驗證 LINE webhook 簽章後才處理訊息。

## 測試紀錄

本機訊息處理測試：4 項通過、0 項失敗。逐項輸入、預期和實際結果見[開發紀錄網頁](./)。目前尚未完成 LINE App 對話與 HTTPS webhook 實測。

## 本機啟動

1. 安裝 Node.js 18 或更新版本。
2. 將 `.env.example` 複製為 `.env`，填入自己的 Channel secret 和 Channel access token。
3. 執行 `npm start`。

`.env` 含有密鑰，請勿上傳；本專案 `.gitignore` 已排除 `.env`。
