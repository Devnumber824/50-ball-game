
var index = 0;

function myFunction(e) {

  if (chance == 6) {
    alert("6 chances are done")
    return;
  }


  let t1 = e.target;
  let num1 = Number(t1.id);
  t1.removeEventListener("click", myFunction);
  chance++
  count.innerText = `Count: ${chance}`
  if (num1 < KEY) {
    t1.style.backgroundColor = "#ff1a1a"
  } else if (num1 > KEY) {
    t1.style.backgroundColor = "#1aff1a"
  } else {
    t1.style.backgroundColor = "#6666ff"
    winflag = true;
  }
  if (winflag) {
    setTimeout(checkWin, 1000);
  }

}
function checkWin() {
  alert("you win")
}
let winflag = false;
let KEY;
let chance = 0;
index = 1;
let isGamecreated = false;
var count = document.getElementById("counts")
count.innerText = `Count: ${chance}`
function test() {
  if (isGamecreated) {
    alert("Game is already created")
    return;
  }
  countdown();
  var temp = Math.random() * 50
  let ans = Math.floor(temp)
  if (ans == 0) {
    ans = 1;
  }
  KEY = ans;
  console.log(KEY);
  for (i = 0; i < 50; i++) {
    var div = document.createElement("div");
    div.className = "button";
    div.id = index;
    if (index < 10) {
      div.innerHTML = `Ball 0${index}`
    } else {
      div.innerHTML = `Ball ${index}`
    }
    index++;
    div.addEventListener("click", myFunction);
    document.getElementById("test").appendChild(div);
  }
  isGamecreated = true;
}
var seconds = 64;
function countdown() {
  seconds = 64;
  function tick() {
    var counter = document.getElementById("counter");
    seconds--;
    counter.innerHTML =
      "0:" + (seconds < 10 ? "0" : "") + String(seconds);
    if (seconds > 0) {
      setTimeout(tick, 1000);
    } else {
      // document.getElementById("verifiBtn").innerHTML = `
      //           <div class="Btn" id="ResendBtn">
      //               <button type="submit">Resend</button>
      //           </div>
      //       `;
      Reset()
      document.getElementById("counter").innerHTML = "";
    }
  }
  tick();
}


Reset = () => {
  KEY = 0
  chance = 0;
  index = 1;
  isGamecreated = false;
  winflag = false;
  seconds = 0;
  count.innerText = `Count: ${chance}`
  document.getElementById("counter").innerHTML = "";
  ids = 1;
  for (i = 0; i < 50; i++) {
    var dic = document.getElementById(String(ids));
    dic.parentNode.removeChild(dic);
    ids++
    console.log(ids + " deleted")
  }
  //test();
}