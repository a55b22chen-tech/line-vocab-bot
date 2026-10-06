# LINE Bot：單字小幫手

輸入「單字：英文單字」查詢收錄的英文單字。

## 功能

- `單字：apple` → `apple：蘋果`
- 空白單字會提醒補充。
- 查無資料時會提供提示。

## 開發紀錄與實測

本機訊息處理測試：4 項通過、0 項失敗。逐項輸入、預期與實際結果請看[開發紀錄網頁](https://a55b22chen-tech.github.io/line-vocab-bot/)。目前尚未完成 LINE App 對話與 HTTPS webhook 實測。

## 目前進度

已完成 Bot 訊息處理函式初版；LINE access token、HTTPS webhook 與 LINE App 對話實測待完成。設定資料請留在本機環境，不要上傳 Channel secret、access token 或 `.env`。
