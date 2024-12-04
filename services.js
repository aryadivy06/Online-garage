Array.from(document.getElementsByClassName("box")).forEach(e=>{e.addEventListener("click",()=>{

    document.querySelector(".services").setAttribute("style","grid-template-columns:1fr;justify-items:left;height:auto;");
Array.from (document.querySelector(".services").getElementsByClassName("detail")).forEach(e=>{
    e.setAttribute("style","margin:12px;display:flex;width:92vw;height:220px;gap:10px;border:2px solid grey;padding-top:7px;padding-left:5px;")
})
Array.from( document.querySelector(".services").getElementsByClassName("shops")).forEach(e=>{
    e.setAttribute("style","width: 322px;height: 120px;background-color: yellow;margin-top: 50px;display:flex;padding:3px;align-items:center;");
    e.innerHTML="<img width=\"150px\" height=\"100px\" src=\"img/home.jpg\"></img><div class=\"infor\"></div>"
  })
  Array.from(document.querySelector(".services").getElementsByClassName("infor")).forEach(e=>{
   e.innerHTML="<p><b>Garage name</b></p><p>Garage contact</p> <p>Garage rating</p><p>Gararge address</p>"
    e.setAttribute("style","font-size:14px;padding-left:5px;width:125px;")
  })
   
})})
let but=document.querySelector(".but")

but.addEventListener("click",()=>
    {
        alert("Registration Sucessful") 
        
    })