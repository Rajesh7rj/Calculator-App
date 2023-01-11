
let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let equal = document.querySelector(".equalTo");
let del = document.querySelector(".del");

let th1 = document.querySelectorAll(".th1");
let th2 = document.querySelectorAll(".th2");
let th3 = document.querySelectorAll(".th3");
let circle = document.querySelector(".circle");
let body = document.querySelector("body");
let cal = document.querySelector(".top");
let buttonBg = document.querySelector(".buttons");
let box = document.querySelector(".box");
let footer = document.querySelectorAll(".a")


buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let value = e.target.dataset.num;
    screen.value += value;
  });

  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  reset.addEventListener("click", function (e) {
    screen.value = "";
  });

  
})

del.addEventListener("click", function(e){
  screen.value = screen.value.slice(0, -1)
})



for (let i=0; i < 2 ; i++){
th1[i].addEventListener("click", function(){
  circle.style.marginLeft = "0px";
  
  body.classList.remove("active2");
  cal.classList.remove("top2");
  circle.classList.remove("circle2");
  buttonBg.classList.remove("buttons2");
  box.classList.remove("box2")
  screen.classList.remove("screen2")
  del.classList.remove("del2")
  reset.classList.remove("reset2")
  equal.classList.remove("equalTo2")
  buttons.forEach((e)=>{
    e.classList.remove("button2")
  })
  footer.forEach((e)=>{
    e.classList.remove("a2")
    });

  body.classList.remove("active3");
  cal.classList.remove("top3");
  circle.classList.remove("circle3");
  buttonBg.classList.remove("buttons3");
  box.classList.remove("box3")
  screen.classList.remove("screen3")
  del.classList.remove("del3")
  reset.classList.remove("reset3")
  equal.classList.remove("equalTo3")
  buttons.forEach((e)=>{
    e.classList.remove("button3")
  })
})

th2[i].addEventListener("click", function(){
  circle.style.marginLeft = "20px";
  body.classList.add("active2");
  cal.classList.add("top2");
  circle.classList.add("circle2");
  buttonBg.classList.add("buttons2");
  box.classList.add("box2")
  screen.classList.add("screen2")
  del.classList.add("del2")
  reset.classList.add("reset2")
  equal.classList.add("equalTo2")
  buttons.forEach((e)=>{
    e.classList.add("button2")
  });
  footer.forEach((e)=>{
  e.classList.add("a2")
  });

  body.classList.remove("active3");
  cal.classList.remove("top3");
  circle.classList.remove("circle3");
  buttonBg.classList.remove("buttons3");
  box.classList.remove("box3")
  screen.classList.remove("screen3")
  del.classList.remove("del3")
  reset.classList.remove("reset3")
  equal.classList.remove("equalTo3")
  buttons.forEach((e)=>{
    e.classList.remove("button3")
  })
});


th3[i].addEventListener("click", function(){
  circle.style.marginLeft = "40px";
  body.classList.add("active3");
  cal.classList.add("top3");
  circle.classList.add("circle3");
  buttonBg.classList.add("buttons3");
  box.classList.add("box3")
  screen.classList.add("screen3")
  del.classList.add("del3")
  reset.classList.add("reset3")
  equal.classList.add("equalTo3")
  buttons.forEach((e)=>{
    e.classList.add("button3")
  })
  footer.forEach((e)=>{
    e.classList.remove("a2")
    });
    

  body.classList.remove("active2");
  cal.classList.remove("top2");
  circle.classList.remove("circle2");
  buttonBg.classList.remove("buttons2");
  box.classList.remove("box2")
  screen.classList.remove("screen2")
  del.classList.remove("del2")
  reset.classList.remove("reset2")
  equal.classList.remove("equalTo2")
  buttons.forEach((e)=>{
    e.classList.remove("button2")
  })
})
}

