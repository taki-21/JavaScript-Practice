const wordList = [
  "arakimasahiro",
  "ibatahirokazu",
  "morinomasahiko",
  "hukudomekousuke",
  "takahashisyuuhei",
  "hirataryousuke",
];
const wordListJapanese = [
  "荒木雅博",
  "井端弘和",
  "森野将彦",
  "福留孝介",
  "高橋周平",
  "平田良介",
];

const timeLimit = 50;
const readyTime = 5;
const score;
const correct;
const mistake;
const charNum;
const wordChar;
const random;

function ready() {
  readyTime = 3;
  scored_is.innerHTML = "";
  start_button.style.visibility = "hidden";
  const readyTimer = setInterval(() => {
    count.innerHTML = readyTimer;
    readyTime--;
    if (readyTime < 0) {
      clearInterval(readyTimer);
      gameStart();
    }
  })
}

function gameStart() {
  score = 0.0;
  mistake = 0;
  correct = 0;
  wordDisplay();
  const time_remaining = timeLimit;
  const gameTimer = setInterval(() => {
    count.innerHTML = "残り時間： " + time_remaining;
    time_remaining--;
    if (time_remaining <= 0) {
      clearInterval(gameTimer);
      finish();
    }
  })
}

function wordDisplay() {
  random = Math.floor(Math.random() * wordList.length);
  word.innerHTML = wordList[random];
  japanese.innerHTML = wordListJapanese[random];
  charInsort();
}
function charInsort() {
  word_char = wordList[random].charAt(char_num);
}
