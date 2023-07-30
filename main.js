let caja = document.querySelectorAll(".caja")
let span = document.querySelector("span")
let circle = document.querySelector(".circle")
let x = document.querySelector(".x")
let o = document.querySelector(".o")
let empate = document.querySelector(".empate")
let dia = document.querySelector(".dialog")
let cerrar = document.querySelector(".cerrar")
let siguiente = document.querySelector(".siguiente")
let signo = document.querySelector(".signo")
let gano = document.querySelector(".gano")
let img = document.querySelector("img")

let contador_x = 0
let contador_o = 0
let contador_empate = 0
let turno = 0
let grados = 0

caja.forEach(function(e){
    e.addEventListener("click",function(){
        turno++
        if(turno%2 == 1){
            e.classList.add("off")
            e.innerHTML = `<div class="cruz-1"></div> <div class="cruz-2"></div>`
            span.textContent = " o"
        }else{
            e.classList.add("on")
            e.innerHTML = `<div class="circle"></div>`
            span.textContent = " x"} 
        ganador()    
    })
})

function ganador(){
    if(caja[0].classList.contains("off") && caja[1].classList.contains("off") && caja[2].classList.contains("off")
       || caja[3].classList.contains("off") && caja[4].classList.contains("off") && caja[5].classList.contains("off")
       || caja[6].classList.contains("off") && caja[7].classList.contains("off") && caja[8].classList.contains("off")
       || caja[0].classList.contains("off") && caja[3].classList.contains("off") && caja[6].classList.contains("off")
       || caja[1].classList.contains("off") && caja[4].classList.contains("off") && caja[7].classList.contains("off")
       || caja[2].classList.contains("off") && caja[5].classList.contains("off") && caja[8].classList.contains("off")
       || caja[0].classList.contains("off") && caja[4].classList.contains("off") && caja[8].classList.contains("off")
       || caja[2].classList.contains("off") && caja[4].classList.contains("off") && caja[6].classList.contains("off")
    ){
        setTimeout(()=>{
            signo.innerHTML = `<div class="cruz-1 size_2"></div> <div class="cruz-2 size_2"></div>`
            gano.textContent = "GANO ESTA RONDA"
            gano.style.color="#30C3BD"
            siguiente.style.background="#F2B238"
            dia.showModal()},200)
        contador_x++
        x.textContent = contador_x
    }
    else if(caja[0].classList.contains("on") && caja[1].classList.contains("on") && caja[2].classList.contains("on")
        || caja[3].classList.contains("on") && caja[4].classList.contains("on") && caja[5].classList.contains("on")
        || caja[6].classList.contains("on") && caja[7].classList.contains("on") && caja[8].classList.contains("on")
        || caja[0].classList.contains("on") && caja[3].classList.contains("on") && caja[6].classList.contains("on")
        || caja[1].classList.contains("on") && caja[4].classList.contains("on") && caja[7].classList.contains("on")
        || caja[2].classList.contains("on") && caja[5].classList.contains("on") && caja[8].classList.contains("on")
        || caja[0].classList.contains("on") && caja[4].classList.contains("on") && caja[8].classList.contains("on")
        || caja[2].classList.contains("on") && caja[4].classList.contains("on") && caja[6].classList.contains("on")
    ){
        setTimeout(()=>{
            signo.innerHTML = `<div class="circle size_2"></div>`
            gano.textContent = "GANO ESTA RONDA"
            gano.style.color="#F2B238"
            siguiente.style.background="#30C3BD"
            dia.showModal()},200)
        contador_o++
        o.textContent = contador_o
    }
    else if(turno == 9){
        setTimeout(()=>{
            signo.innerHTML = ""
            gano.textContent = "EMPATE"
            siguiente.style.background="#30C3BD"
            dia.showModal()},200)
        contador_empate++
        empate.textContent = contador_empate
    }
    else{console.log("perfecto")}
}


 //REINICIAR 
let re = document.querySelector("button")
re.addEventListener("click",function(){
    remover()
    reiniciar()
    grados = grados + 360
    img.style.transform=`rotate(-${grados}deg)`

})

function remover(){
    for(let i=0; i<caja.length; i++){
        console.log("2")
        turno = 0
        caja[i].textContent = ""
        caja[i].classList.remove("off","on")
    }
}
function reiniciar(){
    contador_x = 0
    contador_o = 0
    contador_empate = 0
    x.textContent = contador_x
    o.textContent = contador_o
    empate.textContent = contador_empate
}

//SIGUIENTE RONDA
siguiente.addEventListener("click",()=>{
    dia.close()
    remover()
})

//CERRAR
cerrar.addEventListener("click",()=>{
    dia.close()
    remover()
})

