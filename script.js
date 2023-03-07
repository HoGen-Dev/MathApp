"use strict";

document.getElementById("defPI").textContent =
  "πの定義を" + Math.PI + "とします。";

document.getElementById("form").onsubmit = function (event) {
  event.preventDefault();
  let point = document.getElementById("form").word.value;
  point = parseInt(point);
  if (point >= 0) {
    window.alert("正常に入力されました");
    document.getElementById("result").textContent = `Result : ${point}`;

    function movePoint(pi, num) {
      let moveNum = 10 ** num;
      return Math.trunc(pi * moveNum) / moveNum;
    }

    if (point === 0) {
      document.getElementById("move").textContent =
        `小数点以下を切り捨てをして、` + movePoint(Math.PI, point);
    } else {
      document.getElementById("move").textContent =
        `小数第${point}位で切り捨てをして、` + movePoint(Math.PI, point);
    }
  } else if (point < 0) {
    window.alert("整数を入力してください");
    document.getElementById("result").textContent = "Not a Integer";
    document.getElementById("move").textContent = "Did not move";
  } else {
    window.alert("整数を入力してください");
    document.getElementById("result").textContent = "Not a Number";
    document.getElementById("move").textContent = "Did not move";
  }
};
