const vocabulary = new Map([
  ['apple', '蘋果'],
  ['book', '書；書本'],
  ['cat', '貓'],
  ['dog', '狗'],
  ['school', '學校'],
]);

export function makeReply(text) {
  const match = text.match(/^\s*單字\s*[:：]\s*(.*?)\s*$/u);
  if (!match) {
    return '請用「單字：英文單字」查詢，例如「單字：apple」。';
  }

  const word = match[1].toLowerCase();
  if (!word) {
    return '請在「單字：」後輸入要查詢的英文單字。';
  }

  const meaning = vocabulary.get(word);
  return meaning
    ? word + '：' + meaning
    : '目前沒有「' + word + '」的單字資料，請試試 apple、book、cat、dog 或 school。';
}
