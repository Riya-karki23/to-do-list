let btn=document.querySelector(".btn");
let textbox=document.querySelector(".box");
let ul=document.querySelector("ul");
let del=document.querySelector("span");

btn.addEventListener("click",function(){
  if(textbox.value!="")
  {
    let li=document.createElement("li");
    li.innerText=textbox.value;
   ul.appendChild(li);
    textbox.value="";
  let button=document.createElement("button");
  li.appendChild(button);
  button.innerText="X";
    button.addEventListener("click",function(){
      li.remove();
    })
  }
})




// del.addEventListener("click",function(){
//   li.remove();
// })