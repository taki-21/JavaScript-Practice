const condition = true;

if (condition) {
  console.log('条件はtrueです');
}
console.log("出力します。");

okanemochi = true;
ikemen = true;
if (okanemochi && ikemen) {
  console.log('好みのタイプ')
} else if (okanemochi || ikemen) {
  console.log('キープ')
} else {
  console.log('アウトオブ眼中')
}
