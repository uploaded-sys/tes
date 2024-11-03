function a1() {
  let p2_ed = document.getElementById("ed");
  console.log("a1 exicuted");
  p2_ed.innerText = "AHH YOU ARE MAKING ME ANGRY.....";
}
function a2() {
  console.log("a2 exicuted");
  let p2_ed = document.getElementById("ed");
  p2_ed.innerText = "OO YOURE SO NICE......";
}
function a3() {
  console.log("a3 exicuted");
  let p2_ed = document.getElementById("ed");
  p2_ed.innerText = "HI IM ANISHNA";
}
let counter = Number(localStorage.getItem("lastval"))
let lsd = localStorage.setItem('lastval',counter)
function fetch_last_data(){
  let p4_hp = document.getElementById('ped')
  p4_hp.innerText = 'counter: ' + counter;
}
function b1() {
  let p4_hp = document.getElementById('ped')
  console.log("b1 exicuted");
  counter += 1
  localStorage.setItem('lastval', String(counter))
  p4_hp.innerText = 'counter: ' + counter;
}
function b2() {
  let p4_hp = document.getElementById('ped')
  console.log("b2 exicuted");
  counter -= 1
  localStorage.setItem('lastval', String(counter))
  p4_hp.innerText = 'counter: ' + counter;
}
function b3() {
  let p4_hp = document.getElementById('ped')
  console.log("b3 exicuted");
  counter = 0
  localStorage.setItem('lastval', String(counter))
  p4_hp.innerText = 'counter: ' + counter;
}
