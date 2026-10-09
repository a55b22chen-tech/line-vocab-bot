# LINE Bot：單字小幫手

輸入「單字：英文單字」查詢目前收錄的英文單字。

## 功能

- `單字：apple` → `apple：蘋果`
- `單字：` → 提醒補上英文單字
- `說明`、`幫助` 或 `help` → 顯示查詢格式、範例與五個收錄單字
- 查不到的單字會回覆查無資料

## 改善版測試

2026-10-09 執行 Node.js 內建測試：5 項通過、0 項失敗，包含「說明」、大寫 `HELP` 和既有單字查詢回歸測試。測試程式位於 `test/bot.test.mjs`。

[開發紀錄網頁](https://a55b22chen-tech.github.io/line-vocab-bot/) 保留第一版與改善版，列出原本問題、修改內容、前後差異，以及逐項輸入、預期與實際結果。上述是本機函式測試；LINE App 對話和 HTTPS webhook 實測尚未完成。

## 保護設定

Channel secret、access token 和 `.env` 請留在本機，不要上傳到 GitHub。
