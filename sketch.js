let bgImg;
let page1Img;
let unit1Img; // 新增廚房（單元1）的背景圖片變數
let unit2Img;
let unit3Img;
let currentPage = 0; // 0: 主頁面, 1: 下一頁

let greenTeaImg; // 綠茶圖片變數
let blackTeaImg; // 紅茶圖片變數
let springTeaImg; // 四季春圖片變數
let oolongTeaImg; // 烏龍茶圖片變數
let ceylonTeaImg; // 錫蘭紅茶圖片變數
let roastedOolongImg; // 重焙烏龍茶圖片變數
let teapotImg; // 茶壺圖片變數
let pearlPotImg; // 珍珠鍋圖片變數
let sixCupPotImg; // 六杯鍋圖片變數
let filterImg; // 濾網圖片變數
let drainBasinImg; // 瀝水盆圖片變數
let stirrerImg; // 攪拌棒圖片變數

// 測驗題庫資料
let quizData = [
  { q: "煮製3公升的四季春青茶，需使用69克茶葉、冰塊80克、\n水溫91°c、悶製9分鐘、醒茶30分鐘。", opts: ["◎ (正確)", "X (錯誤)"], ans: 0 },
  { q: "蜜製完成的珍珠保存時間為1.5小時，波霸為2小時。", opts: ["◎ (正確)", "X (錯誤)"], ans: 0 },
  { q: "煮1.5杯珍珠，數據為：水4000cc、珍珠750克、糖水250克、\n時間為煮5分鐘、悶5分鐘、蜜15分鐘。", opts: ["◎ (正確)", "X (錯誤)"], ans: 1 },
  { q: "打一壺奶霜需要使用白細砂100克，保存期限為3天。", opts: ["◎ (正確)", "X (錯誤)"], ans: 0 },
  { q: "糖水剛煮好不需降溫可立即使用。", opts: ["◎ (正確)", "X (錯誤)"], ans: 1 },
  { q: "煮5升茉莉綠茶加入 180克冰塊，會降溫至90°c。", opts: ["◎ (正確)", "X (錯誤)"], ans: 1 },
  { q: "茶桶的茶垢應清洗乾淨，攪拌棒、濾網也不應有茶垢。", opts: ["◎ (正確)", "X (錯誤)"], ans: 0 },
  { q: "錫蘭紅茶是屬於哪一種發酵程度的茶？", opts: ["① 未發酵", "② 全發酵", "③ 半發酵", "④ 中度發酵"], ans: 1 },
  { q: "11:15 開始蜜的波霸幾點可以販售？", opts: ["① 11:35", "② 11:30", "③ 11:25", "④ 11:20"], ans: 1 },
  { q: "煮2杯波霸的數據和時間為何？", opts: ["① 水5公升/波霸1000克/煮25分、悶40分、蜜15分", "② 水5公升/波霸1000克/煮25分、悶50分、蜜15分", "③ 水6公升/波霸1000克/煮25分、悶40分、蜜15分", "④ 水6公升/波霸1000克/煮25分、悶50分、蜜15分"], ans: 1 }
];
let currentQuizIndex = 0;
let quizScore = 0;
let quizState = 0; // 0: 準備開始, 1: 測驗中, 2: 測驗結束

let teaVideo; // 煮茶影片變數
let pearlVideo; // 煮珍珠影片變數
let washPearlVideo; // 洗珍珠影片變數
let bobaVideo; // 煮波霸影片變數
let washBobaVideo; // 洗波霸影片變數
let syrupVideo; // 蜜糖影片變數
let filterCoconutVideo; // 濾椰果影片變數
let sugarWaterVideo; // 煮糖水影片變數
let milkCreamVideo; // 打奶霜影片變數
let lemonVideo; // 榨檸檬影片變數
let kumquatVideo; // 榨金桔影片變數
let icedTeaVideo; // 冰鎮茶影片變數

let fullScreenVideo = 0; // 紀錄 01.2 影片全螢幕狀態
let teaVideoBounds = { x: 0, y: 0, w: 0, h: 0 };
let pearlVideoBounds = { x: 0, y: 0, w: 0, h: 0 };
let washPearlVideoBounds = { x: 0, y: 0, w: 0, h: 0 };
let bobaVideoBounds = { x: 0, y: 0, w: 0, h: 0 };
let washBobaVideoBounds = { x: 0, y: 0, w: 0, h: 0 };
let syrupVideoBounds = { x: 0, y: 0, w: 0, h: 0 };
let filterCoconutVideoBounds = { x: 0, y: 0, w: 0, h: 0 };
let sugarWaterVideoBounds = { x: 0, y: 0, w: 0, h: 0 };
let milkCreamVideoBounds = { x: 0, y: 0, w: 0, h: 0 };
let lemonVideoBounds = { x: 0, y: 0, w: 0, h: 0 };
let kumquatVideoBounds = { x: 0, y: 0, w: 0, h: 0 };
let icedTeaVideoBounds = { x: 0, y: 0, w: 0, h: 0 };

let sinkVideo; // 刷水槽影片變數
let counterVideo; // 刷工作檯影片變數
let washClothVideo; // 洗晾抹布影片變數
let stoveVideo; // 刷爐台影片變數
let gasVideo; // 關瓦斯影片變數
let cleanFullScreenVideo = 0; // 紀錄清潔單元的影片全螢幕狀態
let sinkVideoBounds = { x: 0, y: 0, w: 0, h: 0 };
let counterVideoBounds = { x: 0, y: 0, w: 0, h: 0 };
let washClothVideoBounds = { x: 0, y: 0, w: 0, h: 0 };
let stoveVideoBounds = { x: 0, y: 0, w: 0, h: 0 };
let gasVideoBounds = { x: 0, y: 0, w: 0, h: 0 };
let scrollOffset = 0; // 紀錄頁面滾動距離
let courseStructureImg; // 課程架構圖片變數
let isMenuOpen = false; // 紀錄選單是否開啟
let bookPageIndex = 0;
let bookPageCount = 1;
let itemsPageIndex = 0;
let teaPageIndex = 0;
let cleanPageIndex = 0;
let playingTrainingVideo = null;
let unitFont = 'Microsoft JhengHei';

function applyUnitTypography() {
  textFont(unitFont);
  textLeading(28);
}

function updateBookPage(totalContentHeight) {
  let pageHeight = max(320, height - 130);
  bookPageCount = max(1, ceil((totalContentHeight - 80) / pageHeight));
  bookPageIndex = constrain(bookPageIndex, 0, bookPageCount - 1);
  scrollOffset = -bookPageIndex * pageHeight;
}

function setBookPageCount(count) {
  bookPageCount = max(1, count);
  bookPageIndex = constrain(bookPageIndex, 0, bookPageCount - 1);
  scrollOffset = 0;
}

function drawBookControls() {
  let controlY = height - 58;
  let buttonW = 118;
  let buttonH = 42;
  let leftX = width / 2 - 150;
  let rightX = width / 2 + 150;

  push();
  fill(247, 241, 228, 245);
  noStroke();
  rectMode(CORNER);
  rect(0, height - 105, width, 105);
  stroke(205, 190, 162);
  strokeWeight(1);
  line(40, height - 105, width - 40, height - 105);
  pop();

  function drawButton(x, label, enabled) {
    let isHover = enabled && mouseX > x - buttonW / 2 && mouseX < x + buttonW / 2 &&
      mouseY > controlY - buttonH / 2 && mouseY < controlY + buttonH / 2;
    push();
    rectMode(CENTER);
    fill(enabled ? (isHover ? color(25, 75, 150, 175) : color(255, 255, 255, 105)) : color(220, 225, 230, 75));
    stroke(enabled ? color(25, 75, 150, isHover ? 190 : 105) : color(180, 120));
    strokeWeight(1.5);
    rect(x, controlY, buttonW, buttonH, 10);
    fill(enabled && isHover ? color(255, 255, 255, 245) : color(25, 75, 150, enabled ? 190 : 110));
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(18);
    textStyle(BOLD);
    text(label, x, controlY);
    pop();
    if (isHover) cursor(HAND);
  }

  drawButton(leftX, "上一頁", bookPageIndex > 0);
  drawButton(rightX, "下一頁", bookPageIndex < bookPageCount - 1);
  fill(25, 75, 150);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(18);
  textStyle(BOLD);
  text(`${bookPageIndex + 1} / ${bookPageCount}`, width / 2, controlY);
}

function handleBookControls() {
  if (mouseY < height - 130 || mouseY > height) return false;
  if (mouseX >= 170 && mouseX < width / 2 && bookPageIndex > 0) {
    previousBookPage();
    return true;
  }
  if (mouseX >= width / 2 && bookPageIndex < bookPageCount - 1) {
    nextBookPage();
    return true;
  }
  return false;
}

function nextBookPage() {
  if (currentPage === 5) itemsPageIndex = min(itemsPageIndex + 1, bookPageCount - 1);
  if (currentPage === 6) teaPageIndex = min(teaPageIndex + 1, bookPageCount - 1);
  if (currentPage === 7) cleanPageIndex = min(cleanPageIndex + 1, bookPageCount - 1);
  if (currentPage === 5) bookPageIndex = itemsPageIndex;
  if (currentPage === 6) bookPageIndex = teaPageIndex;
  if (currentPage === 7) bookPageIndex = cleanPageIndex;
}

function previousBookPage() {
  if (currentPage === 5) itemsPageIndex = max(itemsPageIndex - 1, 0);
  if (currentPage === 6) teaPageIndex = max(teaPageIndex - 1, 0);
  if (currentPage === 7) cleanPageIndex = max(cleanPageIndex - 1, 0);
  if (currentPage === 5) bookPageIndex = itemsPageIndex;
  if (currentPage === 6) bookPageIndex = teaPageIndex;
  if (currentPage === 7) bookPageIndex = cleanPageIndex;
}

function drawVideoTimeline(video, bounds) {
  if (!video || !video.elt || !isFinite(video.elt.duration) || video.elt.duration <= 0) return;
  let timelineY = bounds.y + bounds.h - 14;
  let progress = constrain(video.elt.currentTime / video.elt.duration, 0, 1);
  push();
  noStroke();
  fill(0, 0, 0, 170);
  rectMode(CORNER);
  rect(bounds.x, timelineY, bounds.w, 28);
  fill(255, 255, 255, 150);
  rect(bounds.x + 12, timelineY + 12, bounds.w - 24, 4, 2);
  fill(25, 150, 210);
  rect(bounds.x + 12, timelineY + 12, (bounds.w - 24) * progress, 4, 2);
  fill(255);
  circle(bounds.x + 12 + (bounds.w - 24) * progress, timelineY + 14, 12);
  pop();
}

function handleVideoTimeline(video, bounds) {
  if (!video || !video.elt || !isFinite(video.elt.duration) || video.elt.duration <= 0) return false;
  let timelineY = bounds.y + bounds.h - 14;
  if (mouseX < bounds.x || mouseX > bounds.x + bounds.w || mouseY < timelineY || mouseY > timelineY + 28) return false;
  let ratio = constrain((mouseX - bounds.x - 12) / (bounds.w - 24), 0, 1);
  video.time(ratio * video.elt.duration);
  return true;
}

function playOnlyVideo(activeVideo, videos) {
  if (playingTrainingVideo === activeVideo) return;
  for (let video of videos) {
    if (video && video !== activeVideo) video.pause();
  }
  playingTrainingVideo = activeVideo;
  if (activeVideo && activeVideo.elt && activeVideo.elt.paused) activeVideo.play();
}

function getFullscreenVideoBounds() {
  let fsW = width * 0.85;
  let fsH = fsW * (9 / 16);
  if (fsH > height * 0.85) {
    fsH = height * 0.85;
    fsW = fsH * (16 / 9);
  }
  return { x: (width - fsW) / 2, y: (height - fsH) / 2, w: fsW, h: fsH };
}

function keyPressed() {
  if (currentPage >= 5 && currentPage <= 7) {
    if (keyCode === LEFT_ARROW) previousBookPage();
    if (keyCode === RIGHT_ARROW) nextBookPage();
  }
}

function mouseClicked() {
  if (currentPage >= 5 && currentPage <= 7) {
    handleBookControls();
  }
}

function preload() {
  // 請將 '主頁面.png' 替換為你實際的圖片檔名與路徑
  bgImg = loadImage('主頁面.png');
  // 載入頁面1的圖片
  page1Img = loadImage('頁面1.png');
  // 載入廚房（單元1）的圖片
  unit1Img = loadImage('單元1.JPG');
  unit2Img = loadImage('單元2.JPG');
  unit3Img = loadImage('單元3.JPG');
  // 載入綠茶圖片 (請確保檔案名稱與副檔名大小寫完全一致)
  greenTeaImg = loadImage('綠茶.jpg');
  // 載入紅茶圖片
  blackTeaImg = loadImage('紅茶.jpg');
  // 載入四季春圖片
  springTeaImg = loadImage('四季春.jpg');
  // 載入黃金烏龍圖片
  oolongTeaImg = loadImage('黃金烏龍.jpg');
  // 載入錫蘭紅茶圖片
  ceylonTeaImg = loadImage('錫蘭紅茶.jpg');
  // 載入重焙烏龍茶圖片
  roastedOolongImg = loadImage('重焙烏龍茶.jpg');
  // 載入茶壺圖片
  teapotImg = loadImage('茶壺.jpg');
  // 載入珍珠鍋圖片
  pearlPotImg = loadImage('珍珠鍋.jpg');
  // 載入六杯鍋圖片
  sixCupPotImg = loadImage('六杯鍋.jpg');
  // 載入濾網圖片
  filterImg = loadImage('濾網.jpg');
  // 載入瀝水盆圖片
  drainBasinImg = loadImage('瀝水盆.jpg');
  // 載入攪拌棒圖片
  stirrerImg = loadImage('攪拌棒.jpg');
  // 載入課程架構圖片
  courseStructureImg = loadImage('課程架構.png');
}

function setup() {
  // 將畫布大小設定為當前視窗的寬高
  createCanvas(windowWidth, windowHeight); 
  // 根據螢幕像素密度設定畫布，可大幅提升高解析度螢幕(如手機、Mac)的顯示清晰度
  pixelDensity(displayDensity());
  // 提升瀏覽器針對圖片縮放時的平滑運算品質
  drawingContext.imageSmoothingEnabled = true;
  drawingContext.imageSmoothingQuality = 'high';
  
  // 載入煮茶影片 (請確保 煮茶.mp4 與 sketch.js 放在同一資料夾，或自行修改相對路徑)
  teaVideo = createVideo(['煮茶.mp4']);
  teaVideo.volume(0); // 網頁規定必須設定靜音才允許自動播放
  teaVideo.loop();    // 影片循環播放
  teaVideo.hide();    // 隱藏 p5 預設產生的 HTML DOM，我們會在畫布中用 image() 自行繪製

  // 載入 01.2 其餘影片
  pearlVideo = createVideo(['煮珍珠.mp4']); pearlVideo.volume(0); pearlVideo.loop(); pearlVideo.hide();
  washPearlVideo = createVideo(['洗珍珠.mp4']); washPearlVideo.volume(0); washPearlVideo.loop(); washPearlVideo.hide();
  bobaVideo = createVideo(['煮波霸.mp4']); bobaVideo.volume(0); bobaVideo.loop(); bobaVideo.hide();
  washBobaVideo = createVideo(['洗波霸.mp4']); washBobaVideo.volume(0); washBobaVideo.loop(); washBobaVideo.hide();
  syrupVideo = createVideo(['蜜糖.mp4']); syrupVideo.volume(0); syrupVideo.loop(); syrupVideo.hide();
  filterCoconutVideo = createVideo(['濾椰果.mp4']); filterCoconutVideo.volume(0); filterCoconutVideo.loop(); filterCoconutVideo.hide();
  sugarWaterVideo = createVideo(['煮糖水.mp4']); sugarWaterVideo.volume(0); sugarWaterVideo.loop(); sugarWaterVideo.hide();
  milkCreamVideo = createVideo(['打奶霜.mp4']); milkCreamVideo.volume(0); milkCreamVideo.loop(); milkCreamVideo.hide();
  lemonVideo = createVideo(['榨檸檬.mp4']); lemonVideo.volume(0); lemonVideo.loop(); lemonVideo.hide();
  kumquatVideo = createVideo(['榨金桔.mp4']); kumquatVideo.volume(0); kumquatVideo.loop(); kumquatVideo.hide();
  icedTeaVideo = createVideo(['做冰鎮茶.mp4']); icedTeaVideo.volume(0); icedTeaVideo.loop(); icedTeaVideo.hide();

  // 載入清潔影片
  sinkVideo = createVideo(['刷水槽.mp4']);
  sinkVideo.volume(0);
  sinkVideo.loop();
  sinkVideo.hide();

  counterVideo = createVideo(['刷工作檯.mp4']);
  counterVideo.volume(0);
  counterVideo.loop();
  counterVideo.hide();

  // 載入洗晾抹布影片
  washClothVideo = createVideo(['洗晾抹布.mp4']);
  washClothVideo.volume(0);
  washClothVideo.loop();
  washClothVideo.hide();

  // 載入刷爐台影片
  stoveVideo = createVideo(['刷爐台.mp4']);
  stoveVideo.volume(0);
  stoveVideo.loop();
  stoveVideo.hide();

  // 載入關瓦斯影片
  gasVideo = createVideo(['關瓦斯.mp4']);
  gasVideo.volume(0);
  gasVideo.loop();
  gasVideo.hide();

  for (let video of [teaVideo, pearlVideo, washPearlVideo, bobaVideo, washBobaVideo, syrupVideo, filterCoconutVideo, sugarWaterVideo, milkCreamVideo, lemonVideo, kumquatVideo, icedTeaVideo, sinkVideo, counterVideo, washClothVideo, stoveVideo, gasVideo]) {
    video.pause();
  }
}

function draw() {
  cursor(ARROW); // 預設鼠標為箭頭，當碰到按鈕時再變成手指

  if (currentPage === 0) {
    drawHomePage();
  } else if (currentPage === 1) {
    drawNextPage();
  } else if (currentPage === 2) {
    // 進入廚房的專屬頁面
    drawKitchenPage();
  } else if (currentPage >= 3 && currentPage <= 7) {
    // 陣列對應 currentPage 3~7 的頁面標題 (5~7 是廚房裡的另外三個小單元)
    if (currentPage === 5) {
      // 「01.1 各式物品介紹」專屬下拉頁面
      drawItemsIntroPage();
    } else if (currentPage === 6) {
      // 如果是「01.2 煮茶與煮料」，呼叫專屬的影片頁面繪製函式
      drawTeaAndIngredientsPage();
    } else if (currentPage === 7) {
      // 如果是「01.3 清潔」，呼叫專屬的頁面繪製函式
      drawCleanPage();
    } else if (currentPage === 3) {
      drawImageMenuPage(unit2Img, [
        { left: 101, top: 230, right: 510, bottom: 440 },
        { left: 595, top: 230, right: 985, bottom: 510 },
        { left: 197, top: 472, right: 602, bottom: 673 }
      ]);
    } else if (currentPage === 4) {
      drawImageMenuPage(unit3Img, [
        { left: 81, top: 235, right: 521, bottom: 673 },
        { left: 570, top: 235, right: 995, bottom: 673 }
      ]);
    } else {
      let titles = ["", "", "", "2-1", "3-1", "01.1 各式物品介紹", "01.2 煮茶與煮料", "01.3 清潔"];
      let imgs = [null, null, null, null, null, null, null, null];
      drawSubPage(titles[currentPage], imgs[currentPage]);
    }
  } else if (currentPage === 8) {
    // 進入 01.4 測驗單元
    drawQuizPage();
  } else if (currentPage >= 9 && currentPage <= 13) {
    let titles = ["", "", "", "", "", "", "", "", "", "2-1", "2-2", "2-3", "3-1", "3-2"];
    drawSubPage(titles[currentPage], null);
  }

  // 繪製常駐選單 (置於所有畫面最上層)
  drawMenu();
}

function drawHomePage() {
  // 1. 使用自訂函式繪製背景圖片，確保畫質與比例
  drawBackground(bgImg);

  // 設定進入鍵（按鈕）的參數
  let btnX = width - 90; // 將按鈕移至右側
  let btnY = height - 60; // 將按鈕移至下方
  let btnW = 120;
  let btnH = 40;

  // 判斷是否滑鼠懸停
  let isHover = mouseX > btnX - btnW / 2 && mouseX < btnX + btnW / 2 &&
                mouseY > btnY - btnH / 2 && mouseY < btnY + btnH / 2;

  push();
  rectMode(CENTER);
  if (isHover) {
    fill(255, 255, 255, 185);
    cursor(HAND);             // 改變滑鼠游標
    stroke(150, 180, 255, 210);
    strokeWeight(1.5);
  } else {
    fill(255, 255, 255, 85);
    stroke(255, 255, 255, 120);
    strokeWeight(1);
  }
  rect(btnX, btnY, btnW, btnH, 20); // 增加圓角 (20) 讓按鈕更圓潤

  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textStyle(BOLD); // 字體加粗
  textSize(20);
  text("進入", btnX, btnY);
  pop();
}

function drawNextPage() {
  // 這裡是下一頁的畫面
  drawBackground(page1Img);

  // 為了讓感應區精準貼合背景圖片，這裡使用圖片縮放後的座標來計算
  let imgScale = Math.max(width / page1Img.width, height / page1Img.height);
  let imgW = page1Img.width * imgScale;
  let imgH = page1Img.height * imgScale;
  let offsetX = (width - imgW) / 2;
  let offsetY = (height - imgH) / 2;

  // 3 個長條按鈕的參數 (可調整比例來對齊背景)
  let barW = imgW * 0.67; // 寬度涵蓋 01 到最右邊的圖示
  let barH = imgH * 0.11; // 長條的高度
  let barX = offsetX + imgW * 0.39; // 長條的中心 X 座標 (微調對齊)
  let row1Y = offsetY + imgH * 0.42; // 廚房長條的中心 Y 座標 (微調對齊)
  let row2Y = offsetY + imgH * 0.57; // 助吧長條的中心 Y 座標 (微調對齊)
  let row3Y = offsetY + imgH * 0.72; // 泡茶長條的中心 Y 座標 (微調對齊)

  // 50嵐圖示(Logo)的參數 - 假設在左上角，可以透過修改 logoX, logoY 來精準對齊您的圖示
  let logoW = imgW * 0.2;
  let logoH = imgH * 0.15;
  let logoX = offsetX + imgW * 0.15;
  let logoY = offsetY + imgH * 0.12;

  let isHit = function(x, y, w, h) {
    return mouseX > x - w / 2 && mouseX < x + w / 2 &&
           mouseY > y - h / 2 && mouseY < y + h / 2;
  };

  push(); // 儲存目前的繪圖設定
  rectMode(CENTER);
  noStroke();

  // 50嵐Logo點擊區：滑鼠移過去時顯示反白提示
  if (isHit(logoX, logoY, logoW, logoH)) { fill(255, 255, 255, 80); cursor(HAND); rect(logoX, logoY, logoW, logoH, 15); }

  // 平時透明(0)隱形不遮擋背景，滑鼠移過去時才顯示(80)反白提示
  if (isHit(barX, row1Y, barW, barH)) { fill(255, 255, 255, 80); cursor(HAND); } else { fill(255, 255, 255, 0); }
  rect(barX, row1Y, barW, barH, 15);

  if (isHit(barX, row2Y, barW, barH)) { fill(255, 255, 255, 80); cursor(HAND); } else { fill(255, 255, 255, 0); }
  rect(barX, row2Y, barW, barH, 15);

  if (isHit(barX, row3Y, barW, barH)) { fill(255, 255, 255, 80); cursor(HAND); } else { fill(255, 255, 255, 0); }
  rect(barX, row3Y, barW, barH, 15);
  pop(); // 恢復原來的繪圖設定，避免影響下方的返回鍵

  // 設定返回鍵（按鈕）的參數
  let backBtnX = 90; // 將返回鍵放在左下方
  let backBtnY = height - 60;
  let backBtnW = 120;
  let backBtnH = 40;

  let isHoverBack = mouseX > backBtnX - backBtnW / 2 && mouseX < backBtnX + backBtnW / 2 &&
                    mouseY > backBtnY - backBtnH / 2 && mouseY < backBtnY + backBtnH / 2;

  push();
  rectMode(CENTER);
  if (isHoverBack) {
    fill(255, 255, 255, 185);
    cursor(HAND);
    stroke(150, 180, 255, 210);
    strokeWeight(1.5);
  } else {
    fill(255, 255, 255, 85);
    stroke(255, 255, 255, 120);
    strokeWeight(1);
  }
  rect(backBtnX, backBtnY, backBtnW, backBtnH, 20);

  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(20);
  text("返回", backBtnX, backBtnY);
  pop();
}

function getImageMenuLayout(img, buttonData) {
  let imgScale = Math.max(width / img.width, height / img.height);
  let imgW = img.width * imgScale;
  let imgH = img.height * imgScale;
  let offsetX = (width - imgW) / 2;
  let offsetY = (height - imgH) / 2;
  return buttonData.map(button => {
    if (button.left !== undefined) {
      return {
        x: offsetX + imgW * ((button.left + (button.right - button.left) / 2) / img.width),
        y: offsetY + imgH * ((button.top + (button.bottom - button.top) / 2) / img.height),
        w: imgW * ((button.right - button.left) / img.width),
        h: imgH * ((button.bottom - button.top) / img.height)
      };
    }
    return {
      x: offsetX + imgW * button.x,
      y: offsetY + imgH * button.y,
      w: imgW * button.w,
      h: imgH * button.h
    };
  });
}

function drawImageMenuPage(img, buttonData) {
  drawBackground(img);
  let buttons = getImageMenuLayout(img, buttonData);

  push();
  rectMode(CENTER);
  for (let button of buttons) {
    let isHover = mouseX > button.x - button.w / 2 && mouseX < button.x + button.w / 2 &&
      mouseY > button.y - button.h / 2 && mouseY < button.y + button.h / 2;
    if (isHover) {
      fill(255, 255, 255, 72);
      stroke(255, 255, 255, 150);
      strokeWeight(1.5);
      cursor(HAND);
    } else {
      noFill();
      noStroke();
    }
    rect(button.x, button.y, button.w, button.h, 14);
  }
  pop();

  let backBtnX = 90;
  let backBtnY = height - 60;
  let isHoverBack = mouseX > backBtnX - 60 && mouseX < backBtnX + 60 &&
    mouseY > backBtnY - 20 && mouseY < backBtnY + 20;
  push();
  rectMode(CENTER);
  fill(255, 255, 255, isHoverBack ? 185 : 85);
  stroke(255, 255, 255, isHoverBack ? 210 : 120);
  strokeWeight(1);
  rect(backBtnX, backBtnY, 120, 40, 20);
  fill(0, 190);
  noStroke();
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(20);
  text("返回", backBtnX, backBtnY);
  pop();
}

// 廚房（單元1）的專屬頁面
function drawKitchenPage() {
  drawBackground(unit1Img);

  // 計算圖片縮放後的座標，確保點擊範圍與畫面一致
  let imgScale = Math.max(width / unit1Img.width, height / unit1Img.height);
  let imgW = unit1Img.width * imgScale;
  let imgH = unit1Img.height * imgScale;
  let offsetX = (width - imgW) / 2;
  let offsetY = (height - imgH) / 2;

  // 4 個方塊按鈕的參數 (可微調比例來對齊背景)
  let boxW = imgW * 0.33; // 方塊寬度
  let boxH = imgH * 0.28; // 方塊高度
  let col1X = offsetX + imgW * 0.23; // 左邊行的中心 X 座標 (微調對齊)
  let col2X = offsetX + imgW * 0.57; // 右邊行的中心 X 座標 (微調對齊)
  let row1Y = offsetY + imgH * 0.42;  // 上面列的中心 Y 座標 (微調對齊)
  let row2Y = offsetY + imgH * 0.75;  // 下面列的中心 Y 座標 (微調對齊)
  let cleanButtonW = boxW - imgScale * 30;
  let cleanButtonX = col1X + imgScale * 70;
  let cleanButtonY = row2Y - imgScale * 10;
  let quizButtonW = boxW - imgScale * 120;
  let quizButtonX = col2X + imgScale * 50;
  let quizButtonY = row2Y - imgScale * 10;

  // 50嵐圖示(Logo)的參數
  let logoW = imgW * 0.2;
  let logoH = imgH * 0.15;
  let logoX = offsetX + imgW * 0.15; // 移回左上角
  let logoY = offsetY + imgH * 0.12;

  let isHit = function(x, y, w, h) {
    return mouseX > x - w / 2 && mouseX < x + w / 2 &&
           mouseY > y - h / 2 && mouseY < y + h / 2;
  };

  push(); 
  rectMode(CENTER);
  noStroke();

  // 50嵐Logo點擊區：滑鼠移過去時顯示反白提示
  if (isHit(logoX, logoY, logoW, logoH)) { fill(255, 255, 255, 80); cursor(HAND); rect(logoX, logoY, logoW, logoH, 15); }

  // 判斷四個方塊，平時透明(0)，滑鼠移過去時顯示反白提示(80)
  if (isHit(col1X, row1Y, boxW, boxH)) { fill(255, 255, 255, 80); cursor(HAND); } else { fill(255, 255, 255, 0); }
  rect(col1X, row1Y, boxW, boxH, 15); // 01.1 各式物品介紹

  if (isHit(col2X, row1Y, boxW, boxH)) { fill(255, 255, 255, 80); cursor(HAND); } else { fill(255, 255, 255, 0); }
  rect(col2X, row1Y, boxW, boxH, 15); // 01.2 煮茶與煮料

  if (isHit(cleanButtonX, cleanButtonY, cleanButtonW, boxH)) { fill(255, 255, 255, 80); cursor(HAND); } else { fill(255, 255, 255, 0); }
  rect(cleanButtonX, cleanButtonY, cleanButtonW, boxH, 15); // 01.3 清潔

  if (isHit(quizButtonX, quizButtonY, quizButtonW, boxH)) { fill(255, 255, 255, 80); cursor(HAND); } else { fill(255, 255, 255, 0); }
  rect(quizButtonX, quizButtonY, quizButtonW, boxH, 15); // 01.4 測驗
  pop(); 

  // 設定返回鍵（按鈕）的參數
  let backBtnX = 90; let backBtnY = height - 60; let backBtnW = 120; let backBtnH = 40;
  let isHoverBack = mouseX > backBtnX - backBtnW / 2 && mouseX < backBtnX + backBtnW / 2 &&
                    mouseY > backBtnY - backBtnH / 2 && mouseY < backBtnY + backBtnH / 2;

  push();
  rectMode(CENTER);
  if (isHoverBack) { fill(255, 255, 255, 255); cursor(HAND); stroke(150, 180, 255); strokeWeight(2); } 
  else { fill(255, 255, 255, 200); noStroke(); }
  rect(backBtnX, backBtnY, backBtnW, backBtnH, 20);
  fill(0); noStroke(); textAlign(CENTER, CENTER); textStyle(BOLD); textSize(20); text("返回", backBtnX, backBtnY);
  pop();
}

// 各個按鈕點入後的子頁面共用模板
function drawSubPage(title, img) {
  if (img) {
    // 如果有專屬圖片，就繪製圖片背景
    drawBackground(img);
  } else {
    // 沒有圖片的話，顯示純色背景與預設文字
    background(240, 248, 255);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(40);
    text("這裡是 " + title + " 的頁面", width / 2, height / 2);
  }

  // 設定返回鍵（按鈕）的參數
  let backBtnX = 90; 
  let backBtnY = height - 60;
  let backBtnW = 120;
  let backBtnH = 40;

  let isHoverBack = mouseX > backBtnX - backBtnW / 2 && mouseX < backBtnX + backBtnW / 2 &&
                    mouseY > backBtnY - backBtnH / 2 && mouseY < backBtnY + backBtnH / 2;

  push();
  rectMode(CENTER);
  if (isHoverBack) {
    fill(255, 255, 255, 255);
    cursor(HAND);
    stroke(150, 180, 255);
    strokeWeight(2);
  } else {
    fill(255, 255, 255, 200); 
    noStroke();
  }
  rect(backBtnX, backBtnY, backBtnW, backBtnH, 20);

  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(20);
  text("返回選單", backBtnX, backBtnY);
  pop();
}

// === 01.1 各式物品介紹專屬分頁（包含圖片與文字說明下拉） ===
function drawItemsIntroPage() {
  background(247, 241, 228); // 電子書紙張背景
  applyUnitTypography();

  // 1. 準備所有茶類與物品的資料陣列
  let teas = [
    { img: greenTeaImg, title: "茉莉綠茶", desc: "茶葉重量：\n3公升水：63g\n5公升水：102g\n冰塊量：\n3公升：120g\n5公升：200g\n計時：6分鐘\n標準使用茶溫：55°C ~ 70°C\n備註：加入冰塊後的水溫為 90 度。" },
    { img: blackTeaImg, title: "阿薩姆紅茶", desc: "茶葉重量：\n3公升水：63g\n5公升水：105g\n冰塊量：不需降溫\n計時：6分鐘\n標準使用茶溫：55°C ~ 65°C (手寫筆記：70°C)\n備註：無" },
    { img: springTeaImg, title: "四季春青茶", desc: "茶葉重量：\n3公升水：69g\n5公升水：115g\n冰塊量：\n3公升：80g（不建議 3 公升）\n5公升：150g\n計時：9分鐘\n標準使用茶溫：55°C ~ 70°C\n備註：加入冰塊後的水溫為 91 度。" },
    { img: oolongTeaImg, title: "黃金烏龍", desc: "茶葉重量：\n3公升水：72g\n5公升水：120g\n冰塊量：不需降溫\n計時：6分鐘\n標準使用茶溫：55°C ~ 70°C\n備註：無" },
    { img: ceylonTeaImg, title: "錫蘭紅茶", desc: "茶葉重量：\n3公升水：81g\n5公升水：135g\n冰塊量：不需降溫\n計時：9分鐘\n備註：倒完茶醒茶30分鐘，再冰鎮。" },
    { img: roastedOolongImg, title: "重焙烏龍茶", desc: "茶葉重量：\n3公升水：108g\n5公升水：180g\n冰塊量：不需降溫\n計時：9分鐘\n備註：倒完茶醒茶30分鐘，再冰鎮。" },
    { img: teapotImg, title: "茶壺", desc: "重量：1000g" },
    { img: pearlPotImg, title: "珍珠鍋", desc: "重量:1500g" },
    { img: sixCupPotImg, title: "6杯鍋（煮波霸用）", desc: "重量：2000g" },
    { img: filterImg, title: "濾網", desc: "用途：茶悶完倒茶用來濾茶葉" },
    { img: drainBasinImg, title: "瀝水盆", desc: "用途：濾洗好的珍珠、波霸還有椰果" },
    { img: stirrerImg, title: "攪拌棒", desc: "用途：洗珍珠、波霸還有打茶用。" }
  ];

  bookPageCount = teas.length;
  itemsPageIndex = constrain(itemsPageIndex, 0, bookPageCount - 1);
  bookPageIndex = itemsPageIndex;

  // 每一筆物品資料各自佔用一頁，採無外框的左右資訊版面
  let imgW = min(width * 0.34, 360);
  let infoW = min(width * 0.42, 500);
  let isCompact = width < 850;
  let cardX = isCompact ? width / 2 - imgW / 2 : max(48, (width - imgW - infoW - 56) / 2);

  let currentY = isCompact ? 90 : 125;

  // 2. 繪製置中的單元標題
  fill(25, 75, 150);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(36); // 標題稍微放大
  textStyle(BOLD);
  text("01.1 各式物品介紹", width / 2, currentY);
  
  // 標題底下的美化裝飾線
  stroke(25, 75, 150, 100);
  strokeWeight(3);
  line(width / 2 - 120, currentY + 50, width / 2 + 120, currentY + 50);
  currentY += 80; // 標題下方留白

  // 3. 圖片與規格採左右編排，不使用外層白色卡片
  function drawTeaBlock(img, title, descText, x, y) {
    let imgH = imgW;
    if (img && img.width > 0) {
      imgH = imgW * (img.height / img.width);
    }

    // 繪製圖片
    if (img) {
      image(img, x, y, imgW, imgH);
    }
    push();
    noFill();
    stroke(25, 75, 150, 100);
    strokeWeight(2);
    rect(x, y, imgW, imgH);
    pop();

    let textX = isCompact ? x : x + imgW + 56;
    let textY = isCompact ? y + imgH + 34 : y + 22;
    let contentW = isCompact ? imgW : infoW;

    // 繪製物品標題與藍色識別線
    fill(25, 75, 150);
    noStroke();
    textAlign(LEFT, TOP);
    textSize(isCompact ? 24 : 30);
    textStyle(BOLD);
    text(title, textX, textY);
    stroke(25, 150, 180);
    strokeWeight(4);
    line(textX, textY + 46, textX + min(72, contentW), textY + 46);
    textY += 72;

    // 繪製詳細說明文字
    fill(65);
    noStroke();
    textSize(isCompact ? 17 : 18);
    textStyle(NORMAL);
    textLeading(29);
    text(descText, textX, textY, contentW, height - textY - 150);
  }

  // 只繪製目前這一頁的教學內容
  drawTeaBlock(teas[bookPageIndex].img, teas[bookPageIndex].title, teas[bookPageIndex].desc, cardX, currentY);

  drawBookControls();

  // 繪製返回鍵 (固定在左下角)
  let backBtnX = 90; let backBtnY = height - 60; let backBtnW = 120; let backBtnH = 40;
  let isHoverBack = mouseX > backBtnX - backBtnW / 2 && mouseX < backBtnX + backBtnW / 2 && mouseY > backBtnY - backBtnH / 2 && mouseY < backBtnY + backBtnH / 2;
  push(); rectMode(CENTER);
  if (isHoverBack) { fill(255, 255, 255, 255); cursor(HAND); stroke(150, 180, 255); strokeWeight(2); } else { fill(255, 255, 255, 200); noStroke(); }
  rect(backBtnX, backBtnY, backBtnW, backBtnH, 20);
  fill(0); noStroke(); textAlign(CENTER, CENTER); textStyle(BOLD); textSize(20); text("返回選單", backBtnX, backBtnY); pop();
}

// === 01.2 煮茶與煮料專屬分頁（包含影片與文字說明） ===
function drawTeaAndIngredientsPage() {
  background(247, 241, 228); // 電子書紙張背景
  applyUnitTypography();

  let currentY = 78; // 第一個元素的起始 Y 座標

  // 1. 繪製置中的單元標題
  fill(25, 75, 150); // 五十嵐招牌藍色
  noStroke();
  textAlign(CENTER, TOP);
  textSize(36); // 標題稍微放大
  textStyle(BOLD);
  text("01.2 煮茶與煮料", width / 2, currentY);
  
  // 標題底下的美化裝飾線
  stroke(25, 75, 150, 100);
  strokeWeight(3);
  line(width / 2 - 120, currentY + 50, width / 2 + 120, currentY + 50);
  currentY += 100; // 標題下方留白

  let videoW = min(width * 0.45, 600); // 影片寬度
  let videoH = videoW * (9/16); 
  let textW = min(width * 0.4, 550); // 文字區塊寬度
  let spacingX = 60; // 兩欄之間的間距
  
  let totalBlockW = videoW + spacingX + textW;
  let startX = max((width - totalBlockW) / 2, 50); // 確保不超出邊界
  
  function drawStepText(desc, x, y, maxW) {
    let lines = desc.split('\n');
    let currentLineY = y;
    textAlign(LEFT, TOP);
    noStroke();
    
    function drawWrapped(txt, startX, startY, w, lHeight) {
      let currentStr = "";
      let cY = startY;
      for (let j = 0; j < txt.length; j++) {
        let c = txt[j];
        if (textWidth(currentStr + c) > w) {
          text(currentStr, startX, cY);
          currentStr = c;
          cY += lHeight;
        } else {
          currentStr += c;
        }
      }
      if (currentStr.length > 0) {
        text(currentStr, startX, cY);
      }
      return cY + lHeight;
    }

    for (let i = 0; i < lines.length; i++) {
      let l = lines[i];
      if (l.startsWith("【")) {
        fill(25, 75, 150); textStyle(BOLD); textSize(22);
        currentLineY = drawWrapped(l, x, currentLineY, maxW, 36);
      } else if (l.startsWith("‼️") || l.startsWith("⚠️")) {
        fill(220, 60, 60); textStyle(BOLD); textSize(18);
        currentLineY = drawWrapped(l, x, currentLineY, maxW, 28);
      } else if (l.match(/^\d+\./) || (l.indexOf("：") !== -1 && l.indexOf("：") < 10 && !l.startsWith(" "))) {
        let splitIdx = l.indexOf("：");
        if (splitIdx !== -1) {
          let highlightPart = l.substring(0, splitIdx + 1);
          let normalPart = l.substring(splitIdx + 1);
          fill(25, 75, 150); textStyle(BOLD); textSize(18);
          text(highlightPart, x, currentLineY);
          let hw = textWidth(highlightPart);
          fill(70); textStyle(NORMAL); textSize(18);
          currentLineY = drawWrapped(normalPart, x + hw, currentLineY, maxW - hw, 28);
        } else {
          fill(25, 75, 150); textStyle(BOLD); textSize(18);
          currentLineY = drawWrapped(l, x, currentLineY, maxW, 28);
        }
      } else {
        fill(70); textStyle(NORMAL); textSize(18);
        let indent = 0;
        if (l.startsWith("   ")) {
           indent = textWidth("   ");
           l = l.substring(3);
        }
        currentLineY = drawWrapped(l, x + indent, currentLineY, maxW - indent, 28);
      }
    }
    return currentLineY;
  }

  let videosData = [
    { vid: teaVideo, bounds: teaVideoBounds, desc: "【煮茶步驟】\n1.備水：若煮 5 公升則加上壺重 1 公升 = 5 + 1 共秤 6 公斤。\n2.定位：茶壺移至爐臺、確認壺蓋、壺嘴關閉。\n3.燒水：開火煮水至大滾鳴笛\n4.移位：使用隔熱手套或茶巾將茶壺移至泡茶台。\n5.備料：準備茶葉與秤量降溫用冰塊。（影片中為綠茶，所以要加冰塊）\n6.降溫：開壺蓋，加入降溫用冰塊並攪散。\n7.投料：倒進茶葉同時按下計時器。\n   計時時間：綠茶 6 分鐘\n8.攪拌：劃圓攪拌 4~6 下使茶葉完全浸潤。\n9.中途攪拌：蓋上壺蓋，待計時中途再開蓋稍作攪拌 4~6 下。\n10.準備茶桶：內部倒乾、不留舊茶、放穩茶葉濾網。\n11.濾茶：計時結束立刻濾茶。\n12.按計時器" },
    { vid: pearlVideo, bounds: pearlVideoBounds, desc: "【煮珍珠步驟】\n1.準備工作：鐵鍋備水、篩網備料、搖晃過篩使細粉分離。\n2.下料：煮水至水滾，開蓋攪拌下料（注意高溫蒸氣燙手）。\n3.計時煮製：水再滾後轉小火並計時 5 分。\n4.悶製：計時結束，蓋上鍋蓋、開大火約 2 秒後關火，使鍋內保持高溫來悶粉圓內心，計時 5 分。" },
    { vid: washPearlVideo, bounds: washPearlVideoBounds, desc: "【洗珍珠步驟】\n1.計時結束開蓋加入冰塊攪拌至常溫，再將水瀝乾裝入鍋中。加入糖水蜜糖 15 分並記錄時間。\n2.保存：珍珠可擺放 1.5h 待用。（範例：09:45 蜜糖按計時器，記錄使用期限 10:00-11:30）" },
    { vid: bobaVideo, bounds: bobaVideoBounds, desc: "【煮波霸步驟】\n1.準備工作：鐵鍋備水、篩網備料、搖晃過篩使細粉分離。\n2.下料：煮水至水滾，開蓋攪拌下料（注意高溫蒸氣燙手）。\n3.計時煮製：水再滾後轉小火並計時 25 分。\n4.悶製：計時結束，蓋上鍋蓋、開大火約 2 秒後關火，使鍋內保持高溫來悶粉圓內心，計時 50 分。\n‼️波霸煮製注意事項：\n 煮珍珠波霸須時時注意火量控制。\n 火太小：熱度不足導致物料下沉至鍋底黏鍋。\n 火太大：水蒸發速度太快導致黏稠容易焦鍋。\n 小火沒有一定的標準，常常注意物料狀況才是正確觀念。\n 煮料份量不影響煮製時間" },
    { vid: washBobaVideo, bounds: washBobaVideoBounds, desc: "【洗波霸步驟】\n1.計時結束開蓋加入冰塊攪拌至常溫，將水瀝乾。加入糖水蜜糖 15 分並記錄時間。\n2.保存：波霸可擺放 2h 待用。" },
    { vid: syrupVideo, bounds: syrupVideoBounds, desc: "【蜜糖步驟】\n煮幾杯就加入相對應杯數的糖水，珍珠跟波霸都蜜糖15分鐘。" },
    { vid: filterCoconutVideo, bounds: filterCoconutVideoBounds, desc: "【濾椰果】\n原因：椰果的糖漿味道很重而且很甜，為了不讓飲料都是椰果的味道，所以在使用之前都要先過濾一遍" },
    { vid: sugarWaterVideo, bounds: sugarWaterVideoBounds, desc: "【煮糖水步驟】\n1.準備工作：備水。\n2.煮製：加入二砂攪拌至溶化，小火慢煮至微滾，再關火。\n3.冷卻：放置冷卻，保持常溫並加蓋。如遇緊急狀況可適量冰鎮。\n‼️二砂糖與水的比例為1:1（一杯=水125g:二砂125g)" },
    { vid: milkCreamVideo, bounds: milkCreamVideoBounds, desc: "【打奶霜操作步驟】\n【準備原料】\n鮮奶油：使用金風車鮮奶油一罐，倒入調理碗中。\n細砂糖：再倒入台糖特白細砂 100g。\n【打發階段】\n第一階段：將攪拌機調至 2速，快速打發至兩倍體積。\n第二階段：將攪拌機調至 1 速，打至綿密、無明顯大顆氣泡。\n⚠️ 注意事項\n   溫度影響：天氣熱時奶霜容易變硬，建議可將奶霜先冰鎮至低溫再打。" },
    { vid: lemonVideo, bounds: lemonVideoBounds, desc: "【榨檸檬】\n榨汁前都要確實洗乾淨，檸檬要先去頭再切對半，要注意榨汁機的滾輪有沒有放對位置，上面都有圖片可以對照。" },
    { vid: kumquatVideo, bounds: kumquatVideoBounds, desc: "【榨金桔】\n金桔不需要切，直接丟進機器裡榨即可，一樣要注意滾輪的擺放位置以及檢查有沒有鎖緊開關，才不會浪費金桔汁！" },
    { vid: icedTeaVideo, bounds: icedTeaVideoBounds, desc: "【冰鎮茶步驟 (冰鎮綠茶、烏龍、冰鎮錫蘭、重焙)】\n1.備冰水：冰鎮槽備冰水（大量冰塊加少許的水）。\n2.備茶鍋：取乾燥冰鎮鍋（不能有生水）裝適量待冰鎮之熱茶。\n3.冰鎮：將冰鎮鍋擺入冰鎮槽。\n4.降溫：取攪拌棒快速攪拌，使熱茶降溫至 4°C。\n5.去澀：使用攪拌棒去澀、濾網泡沫，重複三次。\n6.儲存：分裝、記錄時間放入冷藏冰箱待用。\n⚠️ 冰鎮注意事項：\n   冰鎮茶需經過 30~40 分鐘不開蓋自然降溫「醒茶」再冰鎮。高溫茶直接冰鎮會造成茶味不足。\n   冰鎮綠茶：冰入冰箱可擺放1天。\n   錫蘭紅茶：保存期限為 2天。\n   烏龍冰鎮不需去澀，同綠茶可放1天。" }
  ];

  bookPageCount = videosData.length;
  teaPageIndex = constrain(teaPageIndex, 0, bookPageCount - 1);
  bookPageIndex = teaPageIndex;
  playOnlyVideo(videosData[bookPageIndex].vid, videosData.map(item => item.vid));

  for (let i = 0; i < videosData.length; i++) {
    let item = videosData[i];
    if (i !== bookPageIndex) {
      item.bounds.x = -1000;
      item.bounds.y = -1000;
      item.bounds.w = 0;
      item.bounds.h = 0;
      continue;
    }
    let vX = startX;
    let vY = currentY;
    let tX = startX + videoW + spacingX;
    let tY = currentY;

    item.bounds.x = vX;
    item.bounds.y = vY + scrollOffset;
    item.bounds.w = videoW;
    item.bounds.h = videoH;

    let isHoverVideo = fullScreenVideo === 0 && mouseX > item.bounds.x && mouseX < item.bounds.x + item.bounds.w && mouseY > item.bounds.y && mouseY < item.bounds.y + item.bounds.h;

    if (item.vid) {
      image(item.vid, vX, vY, videoW, videoH);
      push();
      if (isHoverVideo) { fill(255, 255, 255, 60); cursor(HAND); } 
      else { noFill(); }
      stroke(isHoverVideo ? color(25, 75, 150) : color(200));
      strokeWeight(isHoverVideo ? 4 : 2);
      rectMode(CORNER);
      rect(vX, vY, videoW, videoH);
      if (isHoverVideo) {
        fill(25, 75, 150); noStroke(); rectMode(CENTER);
        rect(vX + videoW / 2, vY + videoH / 2, 140, 40, 20);
        fill(255); textAlign(CENTER, CENTER); textSize(18); textStyle(BOLD);
        text("🔍 點擊放大", vX + videoW / 2, vY + videoH / 2);
      }
      pop();
      drawVideoTimeline(item.vid, item.bounds);
    }

    let finalY = drawStepText(item.desc, tX, tY, textW);
    currentY = max(vY + videoH, finalY) + 40;
  }

  window.teaPageDynamicHeight = currentY + 110;

  drawBookControls();

  // 繪製返回鍵 (固定在畫面左下角，不會跟著內容捲動)
  let backBtnX = 90; let backBtnY = height - 60; let backBtnW = 120; let backBtnH = 40;
  let isHoverBack = mouseX > backBtnX - backBtnW / 2 && mouseX < backBtnX + backBtnW / 2 && mouseY > backBtnY - backBtnH / 2 && mouseY < backBtnY + backBtnH / 2;
  push(); rectMode(CENTER);
  if (isHoverBack) { fill(255, 255, 255, 255); cursor(HAND); stroke(150, 180, 255); strokeWeight(2); } 
  else { fill(255, 255, 255, 200); noStroke(); }
  rect(backBtnX, backBtnY, backBtnW, backBtnH, 20);
  fill(0); noStroke(); textAlign(CENTER, CENTER); textStyle(BOLD); textSize(20); text("返回選單", backBtnX, backBtnY);
  pop();

  // === 全螢幕影片覆蓋層 (Lightbox) ===
  if (fullScreenVideo !== 0) {
    push();
    fill(0, 0, 0, 220);
    noStroke();
    rectMode(CORNER);
    rect(0, 0, width, height);

    let fullscreenBounds = getFullscreenVideoBounds();

    let activeVideo = [null, teaVideo, pearlVideo, washPearlVideo, bobaVideo, washBobaVideo, syrupVideo, filterCoconutVideo, sugarWaterVideo, milkCreamVideo, lemonVideo, kumquatVideo, icedTeaVideo][fullScreenVideo];
    if (activeVideo) {
      image(activeVideo, fullscreenBounds.x, fullscreenBounds.y, fullscreenBounds.w, fullscreenBounds.h);
      noFill(); stroke(255); strokeWeight(2);
      rect(fullscreenBounds.x, fullscreenBounds.y, fullscreenBounds.w, fullscreenBounds.h);
      drawVideoTimeline(activeVideo, fullscreenBounds);
    }
    fill(255); noStroke(); textAlign(CENTER, BOTTOM); textSize(20);
    text("點擊畫面任意處關閉全螢幕", width / 2, height - 30);
    cursor(HAND);
    pop();
  }
}

function drawCleanBookPage() {
  background(247, 241, 228);
  applyUnitTypography();

  let pages = [
    { title: "基礎工作台與器具", desc: "工作台：檯面上、下刷洗並擦拭乾淨。\n茶桶：茶桶內、外清洗擦拭乾淨，計時器關閉。\n鍋具、蓋：所有鍋具與鍋蓋內、外部刷洗乾淨並擦乾。\n器具：珍波篩網、糖水壺、糖水盤。", videos: [{ vid: sinkVideo, bounds: sinkVideoBounds, id: 1 }, { vid: counterVideo, bounds: counterVideoBounds, id: 2 }] },
    { title: "環境與物料", desc: "掃／拖地：辦公室、廚房、吧台、騎樓各角落。\n物料補給：梅汁、糖水（5公斤）、椰果（至少1盒滿的）。", videos: [] },
    { title: "抹布分類清潔", desc: "有機棉布：泡熱水，洗淨後曬乾。\n白色抹布：泡熱水加神奇粉末。\n藍色擦杯布：搓洗乾淨，分開晾曬。\n咖啡色抹布：洗淨曬乾。\n綠色地板抹布：拖把毛泡熱水。", videos: [{ vid: washClothVideo, bounds: washClothVideoBounds, id: 3 }] },
    { title: "開關與設備管理", desc: "電源關閉：計時器、廚房排扇、電扇、電燈。\n瓦斯關閉：瓦斯桶、瓦斯爐台開關、管線放長。\n製冰機：開啟製冰機，大冰鏟盒刷洗、倒扣晾乾。", videos: [{ vid: stoveVideo, bounds: stoveVideoBounds, id: 4 }, { vid: gasVideo, bounds: gasVideoBounds, id: 5 }] },
    { title: "垃圾與其餘善後", desc: "珍波：用重物壓住。\n茶葉／廚餘桶：請把蓋子蓋好。\n橘色垃圾桶：請用蓋子蓋好。\n其他：回傳珍波間。", videos: [] }
  ];

  bookPageCount = pages.length;
  cleanPageIndex = constrain(cleanPageIndex, 0, bookPageCount - 1);
  bookPageIndex = cleanPageIndex;
  let page = pages[bookPageIndex];
  playOnlyVideo(page.videos.length > 0 ? page.videos[0].vid : null, [sinkVideo, counterVideo, washClothVideo, stoveVideo, gasVideo]);
  let allBounds = [sinkVideoBounds, counterVideoBounds, washClothVideoBounds, stoveVideoBounds, gasVideoBounds];
  for (let bound of allBounds) {
    bound.x = -1000; bound.y = -1000; bound.w = 0; bound.h = 0;
  }

  fill(25, 75, 150);
  noStroke();
  textAlign(CENTER, TOP);
  textSize(36);
  textStyle(BOLD);
  text("01.3 清潔", width / 2, 55);
  textSize(26);
  text(page.title, width / 2, 110);
  stroke(25, 75, 150, 100);
  strokeWeight(3);
  line(width / 2 - 150, 155, width / 2 + 150, 155);

  let cardW = min(width * 0.86, 980);
  let cardX = (width - cardW) / 2;
  let textY = 195;
  let lines = page.desc.split("\n");
  let cardH = max(175, lines.length * 34 + 55);

  function drawCleanText(descText, x, y, maxW) {
    let currentLineY = y;
    textAlign(LEFT, TOP);
    noStroke();

    function drawWrapped(txt, startX, startY, widthLimit, lineHeight) {
      let currentText = "";
      let wrappedY = startY;
      for (let character of txt) {
        if (textWidth(currentText + character) > widthLimit) {
          text(currentText, startX, wrappedY);
          currentText = character;
          wrappedY += lineHeight;
        } else {
          currentText += character;
        }
      }
      if (currentText.length > 0) text(currentText, startX, wrappedY);
      return wrappedY + lineHeight;
    }

    for (let lineText of descText.split("\n")) {
      let splitIndex = lineText.indexOf("：");
      if (lineText.startsWith("【")) {
        fill(25, 75, 150);
        textStyle(BOLD);
        textSize(22);
        currentLineY = drawWrapped(lineText, x, currentLineY, maxW, 36);
      } else if (lineText.startsWith("‼️") || lineText.startsWith("⚠️")) {
        fill(220, 60, 60);
        textStyle(BOLD);
        textSize(18);
        currentLineY = drawWrapped(lineText, x, currentLineY, maxW, 28);
      } else if (splitIndex !== -1 && splitIndex < 10) {
        let label = lineText.substring(0, splitIndex + 1);
        let detail = lineText.substring(splitIndex + 1);
        fill(25, 75, 150);
        textStyle(BOLD);
        textSize(18);
        text(label, x, currentLineY);
        let labelWidth = textWidth(label);
        fill(70);
        textStyle(NORMAL);
        textSize(18);
        currentLineY = drawWrapped(detail, x + labelWidth, currentLineY, maxW - labelWidth, 28);
      } else {
        fill(70);
        textStyle(NORMAL);
        textSize(18);
        currentLineY = drawWrapped(lineText, x, currentLineY, maxW, 28);
      }
    }
    return currentLineY;
  }

  drawCleanText(page.desc, cardX + 35, textY + 10, cardW - 70);

  stroke(25, 150, 180, 150);
  strokeWeight(2);
  line(cardX, textY + cardH + 15, cardX + cardW, textY + cardH + 15);

  let videoW = page.videos.length === 1 ? min(width * 0.6, 680) : min(width * 0.4, 460);
  let videoH = videoW * 9 / 16;
  let videoGap = 35;
  let videoStartX = page.videos.length === 1 ? (width - videoW) / 2 : (width - videoW * 2 - videoGap) / 2;
  let videoY = textY + cardH + (cleanPageIndex === 2 ? 20 : 50);
  for (let i = 0; i < page.videos.length; i++) {
    let item = page.videos[i];
    let videoX = videoStartX + i * (videoW + videoGap);
    item.bounds.x = videoX;
    item.bounds.y = videoY;
    item.bounds.w = videoW;
    item.bounds.h = videoH;
    if (item.vid) image(item.vid, videoX, videoY, videoW, videoH);
    push();
    let hovered = cleanFullScreenVideo === 0 && mouseX > videoX && mouseX < videoX + videoW && mouseY > videoY && mouseY < videoY + videoH;
    if (hovered) { fill(255, 255, 255, 60); cursor(HAND); } else { noFill(); }
    stroke(hovered ? color(25, 75, 150) : color(200));
    strokeWeight(hovered ? 4 : 2);
    rectMode(CORNER);
    rect(videoX, videoY, videoW, videoH);
    pop();
    drawVideoTimeline(item.vid, item.bounds);
  }

  drawBookControls();
  let backBtnX = 90;
  let backBtnY = height - 60;
  push();
  rectMode(CENTER);
  fill(255, 255, 255, 220);
  stroke(150, 180, 255);
  strokeWeight(2);
  rect(backBtnX, backBtnY, 120, 40, 20);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(20);
  textStyle(BOLD);
  text("返回選單", backBtnX, backBtnY);
  pop();

  if (cleanFullScreenVideo !== 0) {
    let activeVideo = [null, sinkVideo, counterVideo, washClothVideo, stoveVideo, gasVideo][cleanFullScreenVideo];
    push();
    fill(0, 0, 0, 220);
    rectMode(CORNER);
    rect(0, 0, width, height);
    let fullscreenBounds = getFullscreenVideoBounds();
    image(activeVideo, fullscreenBounds.x, fullscreenBounds.y, fullscreenBounds.w, fullscreenBounds.h);
    drawVideoTimeline(activeVideo, fullscreenBounds);
    pop();
  }
}

// === 01.3 清潔專屬分頁 ===
function drawCleanPage() {
  drawCleanBookPage();
  return;

  background(247, 241, 228); // 電子書紙張背景

  // 增加內容總高度以容納自動換行
  let totalContentHeight = window.cleanPageDynamicHeight || 800; 
  let maxScroll = max(0, totalContentHeight - height);
  updateBookPage(totalContentHeight);

  push(); 
  translate(0, scrollOffset);

  let currentY = 80; 

  // 1. 繪製置中的單元標題
  fill(25, 75, 150); 
  noStroke();
  textAlign(CENTER, TOP);
  textSize(36); 
  textStyle(BOLD);
  text("01.3 清潔", width / 2, currentY);
  
  stroke(25, 75, 150, 100);
  strokeWeight(3);
  line(width / 2 - 120, currentY + 50, width / 2 + 120, currentY + 50);
  currentY += 100; 

  // 2. 準備文字內容
  let desc = 
    "【基礎工作台與器具】\n" +
    "工作台：檯面上、下刷洗並擦拭乾淨。\n" +
    "茶桶：茶桶內、外清洗擦拭乾淨，計時器關閉。\n" +
    "鍋具、蓋：所有鍋具/蓋內、外部刷洗乾淨並擦乾。\n" +
    "器具：珍波篩網、糖水壺（勿刮黏的）、糖水盤。";

  let cardW = min(width * 0.7, 800);
  let cardX = (width - cardW) / 2;

  // 3. 專屬的卡片文字排版函式
  function drawStepText(descText, x, y, maxW, isDryRun) {
    let lines = descText.split('\n');
    let currentLineY = y;
    if (!isDryRun) { textAlign(LEFT, TOP); noStroke(); }
    
    function drawWrapped(txt, startX, startY, w, lHeight) {
      let currentStr = ""; let cY = startY;
      for (let j = 0; j < txt.length; j++) {
        let c = txt[j];
        if (textWidth(currentStr + c) > w) {
          if (!isDryRun) text(currentStr, startX, cY);
          currentStr = c; cY += lHeight;
        } else { currentStr += c; }
      }
      if (currentStr.length > 0 && !isDryRun) { text(currentStr, startX, cY); }
      return cY + lHeight;
    }

    for (let i = 0; i < lines.length; i++) {
      let l = lines[i];
      if (l.startsWith("【")) {
        if (!isDryRun) { fill(25, 75, 150); textStyle(BOLD); textSize(24); } else { textSize(24); textStyle(BOLD); }
        currentLineY = drawWrapped(l, x, currentLineY, maxW, 40);
      } else {
        let splitIdx = l.indexOf("：");
        if (splitIdx !== -1) {
          let highlightPart = l.substring(0, splitIdx + 1); let normalPart = l.substring(splitIdx + 1);
          if (!isDryRun) { fill(25, 75, 150); textStyle(BOLD); textSize(20); text(highlightPart, x, currentLineY); } else { textSize(20); textStyle(BOLD); }
          let hw = textWidth(highlightPart);
          if (!isDryRun) { fill(70); textStyle(NORMAL); textSize(20); } else { textSize(20); textStyle(NORMAL); }
          currentLineY = drawWrapped(normalPart, x + hw, currentLineY, maxW - hw, 32);
        } else {
          if (!isDryRun) { fill(70); textStyle(NORMAL); textSize(20); } else { textSize(20); textStyle(NORMAL); }
          currentLineY = drawWrapped(l, x, currentLineY, maxW, 32);
        }
      }
    }
    return currentLineY;
  }

  // 先試算文字需要多高 (Dry Run)
  push(); let finalY = drawStepText(desc, cardX + 40, currentY + 40, cardW - 80, true); pop();
  let cardH = finalY - currentY + 40;

  // 繪製卡片底色與陰影
  push(); fill(255); noStroke();
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.08)'; drawingContext.shadowBlur = 20; drawingContext.shadowOffsetY = 10;
  rect(cardX, currentY, cardW, cardH, 20); pop();

  // 實際繪製卡片上的文字
  drawStepText(desc, cardX + 40, currentY + 40, cardW - 80, false);
  currentY += cardH + 60;

  // 4. 繪製兩支影片 (並排)
  let videoW = min(width * 0.35, 400); 
  let videoH = videoW * (9/16);
  let spacingX = 40;
  
  let totalW = videoW * 2 + spacingX;
  let startX = (width - totalW) / 2;
  
  let v1X = startX;
  let v1Y = currentY;
  let v2X = startX + videoW + spacingX;
  let v2Y = currentY;

  // 更新 bounds 供點擊偵測使用
  sinkVideoBounds.x = v1X;
  sinkVideoBounds.y = v1Y + scrollOffset;
  sinkVideoBounds.w = videoW;
  sinkVideoBounds.h = videoH;

  counterVideoBounds.x = v2X;
  counterVideoBounds.y = v2Y + scrollOffset;
  counterVideoBounds.w = videoW;
  counterVideoBounds.h = videoH;

  let isHover1 = cleanFullScreenVideo === 0 && mouseX > sinkVideoBounds.x && mouseX < sinkVideoBounds.x + sinkVideoBounds.w && mouseY > sinkVideoBounds.y && mouseY < sinkVideoBounds.y + sinkVideoBounds.h;
  let isHover2 = cleanFullScreenVideo === 0 && mouseX > counterVideoBounds.x && mouseX < counterVideoBounds.x + counterVideoBounds.w && mouseY > counterVideoBounds.y && mouseY < counterVideoBounds.y + counterVideoBounds.h;

  if (sinkVideo) {
    image(sinkVideo, v1X, v1Y, videoW, videoH);
    push();
    if (isHover1) { fill(255, 255, 255, 60); cursor(HAND); } else { noFill(); }
    stroke(isHover1 ? color(25, 75, 150) : color(200));
    strokeWeight(isHover1 ? 4 : 2);
    rectMode(CORNER);
    rect(v1X, v1Y, videoW, videoH);
    if (isHover1) {
      fill(25, 75, 150); noStroke(); rectMode(CENTER);
      rect(v1X + videoW / 2, v1Y + videoH / 2, 140, 40, 20);
      fill(255); textAlign(CENTER, CENTER); textSize(18); textStyle(BOLD);
      text("🔍 點擊放大", v1X + videoW / 2, v1Y + videoH / 2);
    }
    pop();
  }

  if (counterVideo) {
    image(counterVideo, v2X, v2Y, videoW, videoH);
    push();
    if (isHover2) { fill(255, 255, 255, 60); cursor(HAND); } else { noFill(); }
    stroke(isHover2 ? color(25, 75, 150) : color(200));
    strokeWeight(isHover2 ? 4 : 2);
    rectMode(CORNER);
    rect(v2X, v2Y, videoW, videoH);
    if (isHover2) {
      fill(25, 75, 150); noStroke(); rectMode(CENTER);
      rect(v2X + videoW / 2, v2Y + videoH / 2, 140, 40, 20);
      fill(255); textAlign(CENTER, CENTER); textSize(18); textStyle(BOLD);
      text("🔍 點擊放大", v2X + videoW / 2, v2Y + videoH / 2);
    }
    pop();
  }

  currentY += videoH + 60;

  // 5. 繪製第二個卡片 (環境與物料)
  let desc2 = 
    "【環境與物料】\n" +
    "掃／拖地：辦公室、廚房、吧台、騎樓各角落。\n" +
    "物料補給：\n" +
    "梅汁（有空罐就要補喔！）\n" +
    "糖水（5公斤）\n" +
    "椰果（至少1盒滿的）";

  push(); let finalY2 = drawStepText(desc2, cardX + 40, currentY + 40, cardW - 80, true); pop();
  let card2H = finalY2 - currentY + 40;

  push(); fill(255); noStroke();
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.08)'; drawingContext.shadowBlur = 20; drawingContext.shadowOffsetY = 10;
  rect(cardX, currentY, cardW, card2H, 20); pop();

  drawStepText(desc2, cardX + 40, currentY + 40, cardW - 80, false);
  currentY += card2H + 60;

  // 6. 繪製第三個卡片 (抹布分類清潔)
  let desc3 = 
    "【抹布分類清潔】\n" +
    "有機棉布：要泡熱水，洗淨後曬乾。\n" +
    "白色抹布：（加熱器）泡熱水 + 神奇粉末。\n" +
    "藍色擦杯布：搓洗乾淨，分開晾曬。\n" +
    "咖啡色抹布：洗淨曬乾（廚房 8 條、吧台 15 條）。\n" +
    "綠色地板抹布：拖把毛泡熱水。";

  push(); let finalY3 = drawStepText(desc3, cardX + 40, currentY + 40, cardW - 80, true); pop();
  let card3H = finalY3 - currentY + 40;

  push(); fill(255); noStroke();
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.08)'; drawingContext.shadowBlur = 20; drawingContext.shadowOffsetY = 10;
  rect(cardX, currentY, cardW, card3H, 20); pop();

  drawStepText(desc3, cardX + 40, currentY + 40, cardW - 80, false);
  currentY += card3H + 40; // 減少底部留白以銜接影片

  // 7. 繪製影片 (洗晾抹布)
  let video3W = min(width * 0.45, 600);
  let video3H = video3W * (9/16);
  let v3X = (width - video3W) / 2;
  let v3Y = currentY;

  // 更新 bounds 供點擊偵測使用
  washClothVideoBounds.x = v3X;
  washClothVideoBounds.y = v3Y + scrollOffset;
  washClothVideoBounds.w = video3W;
  washClothVideoBounds.h = video3H;

  let isHover3 = cleanFullScreenVideo === 0 && mouseX > washClothVideoBounds.x && mouseX < washClothVideoBounds.x + washClothVideoBounds.w && mouseY > washClothVideoBounds.y && mouseY < washClothVideoBounds.y + washClothVideoBounds.h;

  if (washClothVideo) {
    image(washClothVideo, v3X, v3Y, video3W, video3H);
    push();
    if (isHover3) { fill(255, 255, 255, 60); cursor(HAND); } else { noFill(); }
    stroke(isHover3 ? color(25, 75, 150) : color(200));
    strokeWeight(isHover3 ? 4 : 2);
    rectMode(CORNER);
    rect(v3X, v3Y, video3W, video3H);
    if (isHover3) {
      fill(25, 75, 150); noStroke(); rectMode(CENTER);
      rect(v3X + video3W / 2, v3Y + video3H / 2, 140, 40, 20);
      fill(255); textAlign(CENTER, CENTER); textSize(18); textStyle(BOLD);
      text("🔍 點擊放大", v3X + video3W / 2, v3Y + video3H / 2);
    }
    pop();
  }

  currentY += video3H + 60;

  // 8. 繪製第四個卡片 (開關與設備管理)
  let desc4 = 
    "【開關與設備管理】\n" +
    "電源關閉：計時器、廚房排扇、電扇、電燈。\n" +
    "瓦斯關閉：瓦斯桶、瓦斯爐台開關、管線放長。\n" +
    "製冰機：開啟製冰機，大冰鏟盒刷洗、倒扣晾乾於廚房檯面。";

  push(); let finalY4 = drawStepText(desc4, cardX + 40, currentY + 40, cardW - 80, true); pop();
  let card4H = finalY4 - currentY + 40;

  push(); fill(255); noStroke();
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.08)'; drawingContext.shadowBlur = 20; drawingContext.shadowOffsetY = 10;
  rect(cardX, currentY, cardW, card4H, 20); pop();

  drawStepText(desc4, cardX + 40, currentY + 40, cardW - 80, false);
  currentY += card4H + 60;

  // 9. 繪製兩支影片 (刷爐台, 關瓦斯)
  let v4X = startX;
  let v4Y = currentY;
  let v5X = startX + videoW + spacingX;
  let v5Y = currentY;

  stoveVideoBounds.x = v4X;
  stoveVideoBounds.y = v4Y + scrollOffset;
  stoveVideoBounds.w = videoW;
  stoveVideoBounds.h = videoH;

  gasVideoBounds.x = v5X;
  gasVideoBounds.y = v5Y + scrollOffset;
  gasVideoBounds.w = videoW;
  gasVideoBounds.h = videoH;

  let isHover4 = cleanFullScreenVideo === 0 && mouseX > stoveVideoBounds.x && mouseX < stoveVideoBounds.x + stoveVideoBounds.w && mouseY > stoveVideoBounds.y && mouseY < stoveVideoBounds.y + stoveVideoBounds.h;
  let isHover5 = cleanFullScreenVideo === 0 && mouseX > gasVideoBounds.x && mouseX < gasVideoBounds.x + gasVideoBounds.w && mouseY > gasVideoBounds.y && mouseY < gasVideoBounds.y + gasVideoBounds.h;

  if (stoveVideo) {
    image(stoveVideo, v4X, v4Y, videoW, videoH);
    push();
    if (isHover4) { fill(255, 255, 255, 60); cursor(HAND); } else { noFill(); }
    stroke(isHover4 ? color(25, 75, 150) : color(200));
    strokeWeight(isHover4 ? 4 : 2);
    rectMode(CORNER);
    rect(v4X, v4Y, videoW, videoH);
    if (isHover4) {
      fill(25, 75, 150); noStroke(); rectMode(CENTER);
      rect(v4X + videoW / 2, v4Y + videoH / 2, 140, 40, 20);
      fill(255); textAlign(CENTER, CENTER); textSize(18); textStyle(BOLD);
      text("🔍 點擊放大", v4X + videoW / 2, v4Y + videoH / 2);
    }
    pop();
  }

  if (gasVideo) {
    image(gasVideo, v5X, v5Y, videoW, videoH);
    push();
    if (isHover5) { fill(255, 255, 255, 60); cursor(HAND); } else { noFill(); }
    stroke(isHover5 ? color(25, 75, 150) : color(200));
    strokeWeight(isHover5 ? 4 : 2);
    rectMode(CORNER);
    rect(v5X, v5Y, videoW, videoH);
    if (isHover5) {
      fill(25, 75, 150); noStroke(); rectMode(CENTER);
      rect(v5X + videoW / 2, v5Y + videoH / 2, 140, 40, 20);
      fill(255); textAlign(CENTER, CENTER); textSize(18); textStyle(BOLD);
      text("🔍 點擊放大", v5X + videoW / 2, v5Y + videoH / 2);
    }
    pop();
  }

  currentY += videoH + 60;

  // 10. 繪製第五個卡片 (垃圾與其餘善後)
  let desc5 = 
    "【垃圾與其餘善後】\n" +
    "珍波：用重物壓住。\n" +
    "茶葉／廚餘桶：請把蓋子蓋好。\n" +
    "橘色垃圾桶：請用蓋子蓋好。\n" +
    "其他：回傳珍波時間。";

  push(); let finalY5 = drawStepText(desc5, cardX + 40, currentY + 40, cardW - 80, true); pop();
  let card5H = finalY5 - currentY + 40;

  push(); fill(255); noStroke();
  drawingContext.shadowColor = 'rgba(0, 0, 0, 0.08)'; drawingContext.shadowBlur = 20; drawingContext.shadowOffsetY = 10;
  rect(cardX, currentY, cardW, card5H, 20); pop();

  drawStepText(desc5, cardX + 40, currentY + 40, cardW - 80, false);
  currentY += card5H + 60;

  // 更新動態快取高度
  window.cleanPageDynamicHeight = currentY + 80;
  pop();
  drawBookControls();

  // 繪製垂直捲軸與返回鍵
  if (maxScroll > 0) { let scrollBarH = max((height / totalContentHeight) * height, 50); let scrollBarY = (-scrollOffset / maxScroll) * (height - scrollBarH); push(); fill(0, 0, 0, 60); noStroke(); rectMode(CORNER); rect(width - 15, scrollBarY, 10, scrollBarH, 5); pop(); }
  let backBtnX = 90; let backBtnY = height - 60; let backBtnW = 120; let backBtnH = 40; let isHoverBack = mouseX > backBtnX - backBtnW / 2 && mouseX < backBtnX + backBtnW / 2 && mouseY > backBtnY - backBtnH / 2 && mouseY < backBtnY + backBtnH / 2; push(); rectMode(CENTER); if (isHoverBack) { fill(255, 255, 255, 255); cursor(HAND); stroke(150, 180, 255); strokeWeight(2); } else { fill(255, 255, 255, 200); noStroke(); } rect(backBtnX, backBtnY, backBtnW, backBtnH, 20); fill(0); noStroke(); textAlign(CENTER, CENTER); textStyle(BOLD); textSize(20); text("返回選單", backBtnX, backBtnY); pop();

  // === 全螢幕影片覆蓋層 (Lightbox) ===
  if (cleanFullScreenVideo !== 0) {
    push();
    // 半透明黑色背景遮罩
    fill(0, 0, 0, 220);
    noStroke();
    rectMode(CORNER);
    rect(0, 0, width, height);

    // 計算全螢幕影片大小 (最大佔畫面的 85%，並保持 16:9)
    let fsW = width * 0.85;
    let fsH = fsW * (9/16);
    if (fsH > height * 0.85) {
      fsH = height * 0.85;
      fsW = fsH * (16/9);
    }
    let fsX = (width - fsW) / 2;
    let fsY = (height - fsH) / 2;

    // 根據目前的狀態繪製對應的放大影片
    let activeVideo = null;
    if (cleanFullScreenVideo === 1) activeVideo = sinkVideo;
    else if (cleanFullScreenVideo === 2) activeVideo = counterVideo;
    else if (cleanFullScreenVideo === 3) activeVideo = washClothVideo;
    else if (cleanFullScreenVideo === 4) activeVideo = stoveVideo;
    else if (cleanFullScreenVideo === 5) activeVideo = gasVideo;

    if (activeVideo) {
      image(activeVideo, fsX, fsY, fsW, fsH);
      noFill(); stroke(255); strokeWeight(2);
      rect(fsX, fsY, fsW, fsH);
    }

    // 關閉提示文字
    fill(255); noStroke(); textAlign(CENTER, BOTTOM); textSize(20);
    text("點擊畫面任意處關閉全螢幕", width / 2, height - 30);
    cursor(HAND);
    pop();
  }
}

// 測驗專屬畫面
function drawQuizPage() {
  background(250, 220, 50); // 替換成主頁面風格的 50嵐黃色

  if (quizState === 0) {
    fill(25, 75, 150); // 50嵐藍色
    textAlign(CENTER, CENTER); textSize(40); textStyle(BOLD);
    text("第一單元測驗", width / 2, height * 0.3);

    let btnX = width / 2; let btnY = height * 0.6; let btnW = 200; let btnH = 60;
    let isHover = mouseX > btnX - btnW / 2 && mouseX < btnX + btnW / 2 && mouseY > btnY - btnH / 2 && mouseY < btnY + btnH / 2;
    push(); rectMode(CENTER);
    if (isHover) { fill(25, 75, 150); cursor(HAND); stroke(25, 75, 150); strokeWeight(3); }
    else { fill(255); stroke(25, 75, 150); strokeWeight(3); }
    rect(btnX, btnY, btnW, btnH, 30);
    if (isHover) { fill(255); } else { fill(25, 75, 150); }
    noStroke(); textSize(24); text("開始測驗", btnX, btnY);
    pop();
  } else if (quizState === 1) {
    if (showFeedback && millis() - feedbackTime > 1500) { // 停留 1.5 秒
      showFeedback = false;
      currentQuizIndex++;
      if (currentQuizIndex >= quizData.length) {
        quizState = 2; // 進入結算畫面
      }
    }

    if (currentQuizIndex < quizData.length) {
      let qData = quizData[currentQuizIndex];

      fill(25, 75, 150, 200); textAlign(CENTER, CENTER); textSize(20); textStyle(NORMAL);
      text(`第 ${currentQuizIndex + 1} / ${quizData.length} 題`, width / 2, height * 0.15);

      fill(25, 75, 150); textSize(26); textStyle(BOLD);
      text(qData.q, width / 2, height * 0.25);

      for (let i = 0; i < qData.opts.length; i++) {
        let optW = min(width * 0.85, 800);
        let optH = 60;
        let optX = width / 2;
        let optY = height * 0.45 + i * 80;
        let isHover = !showFeedback && mouseX > optX - optW / 2 && mouseX < optX + optW / 2 && mouseY > optY - optH / 2 && mouseY < optY + optH / 2;

        push(); rectMode(CENTER);
        if (isHover) { fill(25, 75, 150); cursor(HAND); stroke(25, 75, 150); strokeWeight(3); }
        else { fill(255); stroke(25, 75, 150); strokeWeight(3); }

        // 作答後的選項標示
        if (showFeedback && userAnswers[currentQuizIndex] === i) {
          if (lastAnswerCorrect) { fill(50, 180, 80); stroke(50, 180, 80); } // 綠色
          else { fill(220, 60, 60); stroke(220, 60, 60); } // 紅色
        }
        rect(optX, optY, optW, optH, 15);

        if (isHover || (showFeedback && userAnswers[currentQuizIndex] === i)) { fill(255); } 
        else { fill(25, 75, 150); }
        noStroke(); textAlign(CENTER, CENTER); textSize(20); textStyle(NORMAL);
        text(qData.opts[i], optX, optY);
        pop();
      }

      // 顯示答對或答錯的大提示框
      if (showFeedback) {
        push(); fill(255, 255, 255, 220); rectMode(CORNER); rect(0, 0, width, height); // 半透明白底
        textAlign(CENTER, CENTER);
        if (lastAnswerCorrect) {
          fill(50, 180, 80); textStyle(BOLD); textSize(60); text("答對了！", width/2, height/2);
        } else {
          fill(220, 60, 60); textStyle(BOLD); textSize(60); text("答錯了！", width/2, height/2 - 30);
          fill(25, 75, 150); textSize(26); text("正確答案為：\n" + qData.opts[qData.ans], width/2, height/2 + 50);
        }
        pop();
      }
    }
  } else if (quizState === 2) {
    fill(25, 75, 150); textAlign(CENTER, CENTER); textSize(40); textStyle(BOLD);
    text("測驗結束！", width / 2, height * 0.15);
    textSize(30);
    text(`你的總分：${quizScore} / ${quizData.length * 10} 分`, width / 2, height * 0.25);

    textSize(22); text("作答檢討 (將滑鼠移至題號查看正確答案)", width / 2, height * 0.4);

    let hoveredQuestion = -1;
    let circleSpacing = min(55, width / 11);
    let startX = width / 2 - (quizData.length - 1) * circleSpacing / 2;

    // 繪製對錯題號燈號
    for (let i = 0; i < quizData.length; i++) {
      let cx = startX + i * circleSpacing; let cy = height * 0.52;
      let isCorrect = (userAnswers[i] === quizData[i].ans);
      let d = dist(mouseX, mouseY, cx, cy);
      
      if (d < 20) { hoveredQuestion = i; cursor(HAND); strokeWeight(3); stroke(25, 75, 150); } 
      else { strokeWeight(2); stroke(255); }
      
      fill(isCorrect ? color(50, 180, 80) : color(220, 60, 60)); circle(cx, cy, 40);
      fill(255); noStroke(); textSize(18); textStyle(BOLD); text(i + 1, cx, cy);
    }

    // 若滑鼠移到某題號上，顯示題目與答案
    if (hoveredQuestion !== -1) {
      let q = quizData[hoveredQuestion];
      fill(25, 75, 150); textSize(20); textStyle(BOLD);
      let correctAnsText = q.opts[q.ans];
      text(`第 ${hoveredQuestion + 1} 題：\n${q.q}\n\n正確答案：${correctAnsText}`, width / 2, height * 0.72);
    }

    let btnX = width / 2; let btnY = height * 0.9; let btnW = 200; let btnH = 60;
    let isHover = mouseX > btnX - btnW / 2 && mouseX < btnX + btnW / 2 && mouseY > btnY - btnH / 2 && mouseY < btnY + btnH / 2;
    push(); rectMode(CENTER);
    if (isHover) { fill(25, 75, 150); cursor(HAND); stroke(25, 75, 150); strokeWeight(3); }
    else { fill(255); stroke(25, 75, 150); strokeWeight(3); }
    rect(btnX, btnY, btnW, btnH, 30);
    if (isHover) { fill(255); } else { fill(25, 75, 150); }
    noStroke(); textSize(24); textStyle(BOLD); text("重新測驗", btnX, btnY);
    pop();
  }

  // 測驗專屬返回鍵
  let backBtnX = 90; let backBtnY = height - 60; let backBtnW = 120; let backBtnH = 40;
  let isHoverBack = mouseX > backBtnX - backBtnW / 2 && mouseX < backBtnX + backBtnW / 2 && mouseY > backBtnY - backBtnH / 2 && mouseY < backBtnY + backBtnH / 2;
  push(); rectMode(CENTER);
  if (isHoverBack) { fill(25, 75, 150); cursor(HAND); stroke(25, 75, 150); strokeWeight(2); } 
  else { fill(255); stroke(25, 75, 150); strokeWeight(2); }
  rect(backBtnX, backBtnY, backBtnW, backBtnH, 20);
  if (isHoverBack) { fill(255); } else { fill(25, 75, 150); }
  noStroke(); textAlign(CENTER, CENTER); textStyle(BOLD); textSize(20); text("返回", backBtnX, backBtnY);
  pop();
}

function mousePressed() {
  // 1. 優先判斷常駐選單按鈕的點擊 (只在非主頁面時運作)
  if (currentPage > 0) {
    let menuBtnW = 100; let menuBtnH = 40;
    let menuBtnX = width - 120; let menuBtnY = 20;
    if (mouseX > menuBtnX && mouseX < menuBtnX + menuBtnW && mouseY > menuBtnY && mouseY < menuBtnY + menuBtnH) {
      isMenuOpen = !isMenuOpen;
      return; // 終止後面的判斷，避免觸發背景按鈕
    }

    // 如果選單是開啟狀態，點擊畫面任意處即可關閉
    if (isMenuOpen) {
      isMenuOpen = false;
      return; // 終止後面的判斷
    }
  }

  if (currentPage === 0) {
    let btnX = width - 90;
    let btnY = height - 60;
    let btnW = 120;
    let btnH = 40;

    // 檢查滑鼠點擊位置是否在按鈕的範圍內
    if (mouseX > btnX - btnW / 2 && mouseX < btnX + btnW / 2 &&
        mouseY > btnY - btnH / 2 && mouseY < btnY + btnH / 2) {
      currentPage = 1; // 切換狀態到下一頁
    }
  } else if (currentPage === 1) {
    let backBtnX = 90;
    let backBtnY = height - 60;
    let backBtnW = 120;
    let backBtnH = 40;

    // 檢查滑鼠點擊位置是否在返回鍵的範圍內
    if (mouseX > backBtnX - backBtnW / 2 && mouseX < backBtnX + backBtnW / 2 &&
        mouseY > backBtnY - backBtnH / 2 && mouseY < backBtnY + backBtnH / 2) {
      currentPage = 0; // 切換狀態回到主頁面
    }

    // 計算圖片縮放後的座標，確保點擊範圍與畫面一致
    let imgScale = Math.max(width / page1Img.width, height / page1Img.height);
    let imgW = page1Img.width * imgScale;
    let imgH = page1Img.height * imgScale;
    let offsetX = (width - imgW) / 2;
    let offsetY = (height - imgH) / 2;

    let barW = imgW * 0.67; 
    let barH = imgH * 0.11; 
    let barX = offsetX + imgW * 0.39; 
    let row1Y = offsetY + imgH * 0.42; 
    let row2Y = offsetY + imgH * 0.57; 
    let row3Y = offsetY + imgH * 0.72; 

    let logoW = imgW * 0.2;
    let logoH = imgH * 0.15;
    let logoX = offsetX + imgW * 0.15;
    let logoY = offsetY + imgH * 0.12;

    // 內部檢查滑鼠點擊座標是否在方塊內的檢查函式
    let isHit = function(x, y, w, h) {
      return mouseX > x - w / 2 && mouseX < x + w / 2 &&
             mouseY > y - h / 2 && mouseY < y + h / 2;
    };

    // 點擊50嵐背景圖示回到主畫面
    if (isHit(logoX, logoY, logoW, logoH)) { currentPage = 0; }
    else if (isHit(barX, row1Y, barW, barH)) { currentPage = 2; }       // 進入廚房
    else if (isHit(barX, row2Y, barW, barH)) { currentPage = 3; }  // 進入助吧
    else if (isHit(barX, row3Y, barW, barH)) { currentPage = 4; }  // 進入泡茶

  } else if (currentPage === 2) {
    // 廚房單元的點擊判斷
    let backBtnX = 90; let backBtnY = height - 60;
    let backBtnW = 120; let backBtnH = 40;
    if (mouseX > backBtnX - backBtnW / 2 && mouseX < backBtnX + backBtnW / 2 &&
        mouseY > backBtnY - backBtnH / 2 && mouseY < backBtnY + backBtnH / 2) {
      currentPage = 1; // 返回上一頁(主選單)
    }

    // 判斷 4 個方塊的點擊
    let imgScale = Math.max(width / unit1Img.width, height / unit1Img.height);
    let imgW = unit1Img.width * imgScale;
    let imgH = unit1Img.height * imgScale;
    let offsetX = (width - imgW) / 2;
    let offsetY = (height - imgH) / 2;
    let boxW = imgW * 0.33; let boxH = imgH * 0.28; 
    let col1X = offsetX + imgW * 0.23; let col2X = offsetX + imgW * 0.57; 
    let row1Y = offsetY + imgH * 0.42;  let row2Y = offsetY + imgH * 0.75;  
    let cleanButtonW = boxW - imgScale * 30;
    let cleanButtonX = col1X + imgScale * 70;
    let cleanButtonY = row2Y - imgScale * 10;
    let quizButtonW = boxW - imgScale * 120;
    let quizButtonX = col2X + imgScale * 50;
    let quizButtonY = row2Y - imgScale * 10;

    let logoW = imgW * 0.2;
    let logoH = imgH * 0.15;
    let logoX = offsetX + imgW * 0.15; // 移回左上角
    let logoY = offsetY + imgH * 0.12;

    let isHit = function(x, y, w, h) {
      return mouseX > x - w / 2 && mouseX < x + w / 2 &&
             mouseY > y - h / 2 && mouseY < y + h / 2;
    };

    // 點擊50嵐背景圖示回到主畫面
    if (isHit(logoX, logoY, logoW, logoH)) { currentPage = 0; }
    else if (isHit(col1X, row1Y, boxW, boxH)) { currentPage = 5; itemsPageIndex = 0; bookPageIndex = 0; } // 01.1 物品介紹
    else if (isHit(col2X, row1Y, boxW, boxH)) { currentPage = 6; teaPageIndex = 0; bookPageIndex = 0; } // 01.2 煮茶與煮料
    else if (isHit(cleanButtonX, cleanButtonY, cleanButtonW, boxH)) { currentPage = 7; cleanPageIndex = 0; bookPageIndex = 0; } // 01.3 清潔
    else if (isHit(quizButtonX, quizButtonY, quizButtonW, boxH)) { currentPage = 8; } // 01.4 測驗

  } else if (currentPage >= 3 && currentPage <= 7) {
    if (currentPage === 3 || currentPage === 4) {
      let buttonData = currentPage === 3 ? [
        { left: 101, top: 230, right: 510, bottom: 440 },
        { left: 595, top: 230, right: 985, bottom: 510 },
        { left: 197, top: 472, right: 602, bottom: 673 }
      ] : [
        { left: 81, top: 235, right: 521, bottom: 673 },
        { left: 570, top: 235, right: 995, bottom: 673 }
      ];
      let buttons = getImageMenuLayout(currentPage === 3 ? unit2Img : unit3Img, buttonData);
      let backBtnX = 90;
      let backBtnY = height - 60;
      if (mouseX > backBtnX - 60 && mouseX < backBtnX + 60 && mouseY > backBtnY - 20 && mouseY < backBtnY + 20) {
        currentPage = 1;
        return;
      }
      for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i];
        if (mouseX > button.x - button.w / 2 && mouseX < button.x + button.w / 2 &&
            mouseY > button.y - button.h / 2 && mouseY < button.y + button.h / 2) {
          currentPage = currentPage === 3 ? 9 + i : 12 + i;
          return;
        }
      }
      return;
    }

    // 01.2 煮茶與煮料的影片放大與關閉判斷
    if (currentPage === 6) {
      if (fullScreenVideo !== 0) {
        let fullscreenVideo = [null, teaVideo, pearlVideo, washPearlVideo, bobaVideo, washBobaVideo, syrupVideo, filterCoconutVideo, sugarWaterVideo, milkCreamVideo, lemonVideo, kumquatVideo, icedTeaVideo][fullScreenVideo];
        if (handleVideoTimeline(fullscreenVideo, getFullscreenVideoBounds())) return;
        fullScreenVideo = 0; // 點擊任意處關閉全螢幕
        return; 
      } else {
        let videosData = [
          { bounds: teaVideoBounds },
          { bounds: pearlVideoBounds },
          { bounds: washPearlVideoBounds },
          { bounds: bobaVideoBounds },
          { bounds: washBobaVideoBounds },
          { bounds: syrupVideoBounds },
          { bounds: filterCoconutVideoBounds },
          { bounds: sugarWaterVideoBounds },
          { bounds: milkCreamVideoBounds },
          { bounds: lemonVideoBounds },
          { bounds: kumquatVideoBounds },
          { bounds: icedTeaVideoBounds }
        ];
        for (let i = 0; i < videosData.length; i++) {
          let b = videosData[i].bounds;
          let activeVideo = [teaVideo, pearlVideo, washPearlVideo, bobaVideo, washBobaVideo, syrupVideo, filterCoconutVideo, sugarWaterVideo, milkCreamVideo, lemonVideo, kumquatVideo, icedTeaVideo][i];
          if (handleVideoTimeline(activeVideo, b)) {
            return;
          }
          if (mouseX > b.x && mouseX < b.x + b.w && mouseY > b.y && mouseY < b.y + b.h) {
            fullScreenVideo = i + 1;
            return;
          }
        }
      }
    }

    // 01.3 清潔的影片放大與關閉判斷
    if (currentPage === 7) {
      if (cleanFullScreenVideo !== 0) {
        let fullscreenVideo = [null, sinkVideo, counterVideo, washClothVideo, stoveVideo, gasVideo][cleanFullScreenVideo];
        if (handleVideoTimeline(fullscreenVideo, getFullscreenVideoBounds())) return;
        cleanFullScreenVideo = 0; // 點擊任意處關閉全螢幕
        return; 
      } else {
        if (handleVideoTimeline(sinkVideo, sinkVideoBounds) ||
            handleVideoTimeline(counterVideo, counterVideoBounds) ||
            handleVideoTimeline(washClothVideo, washClothVideoBounds) ||
            handleVideoTimeline(stoveVideo, stoveVideoBounds) ||
            handleVideoTimeline(gasVideo, gasVideoBounds)) {
          return;
        }
        if (mouseX > sinkVideoBounds.x && mouseX < sinkVideoBounds.x + sinkVideoBounds.w &&
            mouseY > sinkVideoBounds.y && mouseY < sinkVideoBounds.y + sinkVideoBounds.h) {
          cleanFullScreenVideo = 1;
          return; 
        }
        if (mouseX > counterVideoBounds.x && mouseX < counterVideoBounds.x + counterVideoBounds.w &&
            mouseY > counterVideoBounds.y && mouseY < counterVideoBounds.y + counterVideoBounds.h) {
          cleanFullScreenVideo = 2;
          return; 
        }
        if (mouseX > washClothVideoBounds.x && mouseX < washClothVideoBounds.x + washClothVideoBounds.w &&
            mouseY > washClothVideoBounds.y && mouseY < washClothVideoBounds.y + washClothVideoBounds.h) {
          cleanFullScreenVideo = 3;
          return; 
        }
        if (mouseX > stoveVideoBounds.x && mouseX < stoveVideoBounds.x + stoveVideoBounds.w &&
            mouseY > stoveVideoBounds.y && mouseY < stoveVideoBounds.y + stoveVideoBounds.h) {
          cleanFullScreenVideo = 4;
          return; 
        }
        if (mouseX > gasVideoBounds.x && mouseX < gasVideoBounds.x + gasVideoBounds.w &&
            mouseY > gasVideoBounds.y && mouseY < gasVideoBounds.y + gasVideoBounds.h) {
          cleanFullScreenVideo = 5;
          return; 
        }
      }
    }

    let backBtnX = 90; let backBtnY = height - 60; let backBtnW = 120; let backBtnH = 40;
    if (mouseX > backBtnX - backBtnW / 2 && mouseX < backBtnX + backBtnW / 2 &&
        mouseY > backBtnY - backBtnH / 2 && mouseY < backBtnY + backBtnH / 2) {
      if (currentPage >= 5 && currentPage <= 7) {
        currentPage = 2; // 從廚房的子單元返回「廚房主頁」
      } else {
        currentPage = 1; // 從助吧、泡茶返回「進入頁面1」
      }
    }
  } else if (currentPage === 8) {
    // 1. 測驗頁的返回鍵點擊判斷
    let backBtnX = 90; let backBtnY = height - 60; let backBtnW = 120; let backBtnH = 40;
    if (mouseX > backBtnX - backBtnW / 2 && mouseX < backBtnX + backBtnW / 2 && mouseY > backBtnY - backBtnH / 2 && mouseY < backBtnY + backBtnH / 2) {
      currentPage = 2; // 回到廚房主頁
      return; // 終止後面的判斷
    }

    // 2. 測驗系統的點擊判斷
    if (quizState === 0) {
      let btnX = width / 2; let btnY = height * 0.6; let btnW = 200; let btnH = 60;
      if (mouseX > btnX - btnW / 2 && mouseX < btnX + btnW / 2 && mouseY > btnY - btnH / 2 && mouseY < btnY + btnH / 2) {
        quizState = 1; currentQuizIndex = 0; quizScore = 0; userAnswers = []; showFeedback = false;
      }
    } else if (quizState === 1) {
      if (!showFeedback) { // 如果正在顯示答對/答錯提示，暫停選項點擊功能
        let qData = quizData[currentQuizIndex];
        for (let i = 0; i < qData.opts.length; i++) {
          let optW = min(width * 0.85, 800);
          let optH = 60;
          let optX = width / 2;
          let optY = height * 0.45 + i * 80;
          if (mouseX > optX - optW / 2 && mouseX < optX + optW / 2 && mouseY > optY - optH / 2 && mouseY < optY + optH / 2) {
            userAnswers[currentQuizIndex] = i; // 記錄作答
            lastAnswerCorrect = (i === qData.ans); // 判斷是否正確
            if (lastAnswerCorrect) {
              quizScore += 10; // 答對加 10 分
            }
            showFeedback = true; // 開啟提示畫面
            feedbackTime = millis(); // 記錄當下時間，用來倒數
            break;
          }
        }
      }
    } else if (quizState === 2) {
      let btnX = width / 2; let btnY = height * 0.9; let btnW = 200; let btnH = 60; // 修正了原本的 height * 0.65，使點擊範圍符合繪圖位置
      if (mouseX > btnX - btnW / 2 && mouseX < btnX + btnW / 2 && mouseY > btnY - btnH / 2 && mouseY < btnY + btnH / 2) {
        quizState = 1; currentQuizIndex = 0; quizScore = 0; userAnswers = []; showFeedback = false; // 重新測驗
      }
    }
  } else if (currentPage >= 9 && currentPage <= 13) {
    let backBtnX = 90;
    let backBtnY = height - 60;
    if (mouseX > backBtnX - 60 && mouseX < backBtnX + 60 && mouseY > backBtnY - 20 && mouseY < backBtnY + 20) {
      currentPage = currentPage <= 11 ? 3 : 4;
    }
  }
}

// 繪製背景圖片的函式，確保圖片保持比例不變形，藉此提升畫質體驗
function drawBackground(img) {
  // 計算圖片要縮放的比例，確保能保持比例且填滿整個畫布
  let scale = Math.max(width / img.width, height / img.height);
  // 寬高不強制四捨五入，交由瀏覽器平滑演算，避免圖片比例微小失真造成模糊
  let newWidth = img.width * scale;
  let newHeight = img.height * scale;
  let x = Math.round((width - newWidth) / 2); // 僅針對座標置中取整數即可
  let y = Math.round((height - newHeight) / 2);
  
  image(img, x, y, newWidth, newHeight);
}

// 當視窗大小改變時，自動重新調整畫布大小
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// 監聽滑鼠滾輪事件，用來捲動單元內容
function mouseWheel(event) {
  // 若選單開啟，防止捲動背景
  if (isMenuOpen) return false;

  // 電子書單元採固定頁面翻閱，停用連續捲動。
  if (currentPage >= 5 && currentPage <= 7) {
    return false; // 回傳 false 可以防止網頁本身的預設滾動行為，讓捲動更順暢
  }
}

// === 繪製常駐選單與彈出視窗 ===
function drawMenu() {
  // 主頁面不顯示選單
  if (currentPage === 0) return;

  push();
  // 1. 繪製選單按鈕
  let menuBtnW = 100; let menuBtnH = 40;
  let menuBtnX = width - 120; let menuBtnY = 20;
  let isHover = mouseX > menuBtnX && mouseX < menuBtnX + menuBtnW && mouseY > menuBtnY && mouseY < menuBtnY + menuBtnH;

  rectMode(CORNER);
  if (isHover) { fill(255, 255, 255, 180); cursor(HAND); } else { fill(255, 255, 255, 95); }
  stroke(25, 75, 150, isHover ? 210 : 115); strokeWeight(1.5);
  rect(menuBtnX, menuBtnY, menuBtnW, menuBtnH, 10);

  fill(25, 75, 150); noStroke(); textAlign(CENTER, CENTER); textSize(18); textStyle(BOLD);
  text("選單", menuBtnX + menuBtnW / 2, menuBtnY + menuBtnH / 2);

  // 2. 繪製選單展開的彈出視窗 (Modal)
  if (isMenuOpen) {
    // 半透明黑色背景遮罩
    fill(0, 0, 0, 180); noStroke(); rectMode(CORNER);
    rect(0, 0, width, height);

    // 白色卡片底框
    rectMode(CENTER); fill(255);
    let panelW = min(width * 0.85, 900); let panelH = min(height * 0.85, 800);
    rect(width / 2, height / 2, panelW, panelH, 20);

    // 繪製課程架構圖 (自動等比例縮放，並動態裁切白邊)
    if (courseStructureImg && courseStructureImg.width > 0) {
      // === 裁切白邊設定區 ===
      // 如果白邊還有剩或是切到內容，請微調下方的比例 (0.25 代表切掉 25%)
      let cropLeft = courseStructureImg.width * 0.0;    // 左側裁切比例
      let cropRight = courseStructureImg.width * 0.26;  // 右側裁切大約 26% 的白邊
      let cropTop = courseStructureImg.height * 0.0;    // 上方裁切比例
      let cropBottom = courseStructureImg.height * 0.0; // 下方裁切比例

      // 計算來源(Source)的裁切座標與長寬
      let sX = cropLeft;
      let sY = cropTop;
      let sW = courseStructureImg.width - cropLeft - cropRight;
      let sH = courseStructureImg.height - cropTop - cropBottom;

      // 根據裁切後的「實際內容長寬 (sW, sH)」來計算畫面上要顯示的尺寸
      let imgMaxW = panelW - 60; 
      let imgMaxH = panelH - 180;
      let imgScale = min(imgMaxW / sW, imgMaxH / sH);
      let dW = sW * imgScale; 
      let dH = sH * imgScale;
      
      imageMode(CENTER);
      // 透過 9 個參數的 image() 畫法，只畫出裁切後的區域
      image(courseStructureImg, width / 2, height / 2 - 50, dW, dH, sX, sY, sW, sH);
    }

    // 繪製說明文字
    fill(50); textAlign(CENTER, TOP); textSize(18); textLeading(28); textStyle(NORMAL);
    let desc = "圖為課程的架構，本教材為電子書，包含圖片與影片還有文字說明，\n影片點一下都可以放大為全螢幕觀看，再點一下就可以退出。";
    text(desc, width / 2, height / 2 + panelH / 2 - 120);

    // 提示關閉文字
    fill(150); textSize(16); textAlign(CENTER, BOTTOM);
    text("點擊畫面任意處關閉", width / 2, height / 2 + panelH / 2 - 40);
  }
  pop();
}

