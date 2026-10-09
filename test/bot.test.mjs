import test from 'node:test';
import assert from 'node:assert/strict';
import { makeReply } from '../bot.mjs';

test('收錄的單字會回覆中文意思', () => {
  assert.equal(makeReply('單字：apple'), 'apple：蘋果');
});

test('只有指令時會提醒補上單字', () => {
  assert.equal(makeReply('單字：'), '請在「單字：」後輸入要查詢的英文單字。');
});

test('未收錄的單字會告知查無資料', () => {
  assert.equal(makeReply('單字：xyz'), '目前沒有「xyz」的單字資料，請試試 apple、book、cat、dog 或 school。');
});

test('不支援的格式會顯示使用提示', () => {
  assert.equal(makeReply('hello'), '請用「單字：英文單字」查詢，例如「單字：apple」。');
});

test('說明與大寫 HELP 會顯示格式、範例和收錄單字', () => {
  const expected = '查詢方式：單字：英文單字\n例如：單字：apple\n目前收錄：apple、book、cat、dog、school。';
  assert.equal(makeReply('說明'), expected);
  assert.equal(makeReply('HELP'), expected);
});
