let kecske= document.getElementById("kecske")

let kaposzta =document.getElementById("kaposzta")
let farkas = document.getElementById("farkas")
let csonak = document.getElementById("csonak")
var katt=false
kecske.addEventListener("click",kecskekatt)


function kecskekatt(){
   katt = !katt
   if (katt ){
        document.getElementById("csonak").style.backgroundImage ="url('kepek/kecske2.jpg')" 
   }
   else{
        document.getElementById("csonak").style.backgroundImage= "url('kepek/csonak.jpg')"
        
   }
}
   kaposzta.addEventListener("click",kaposztakatt)
   function kaposztakatt(){
     
      katt = !katt
      if (katt ){
           document.getElementById("csonak").style.backgroundImage ="url('kepek/kaposzta.jpg')" 
      }
      else{
           document.getElementById("csonak").style.backgroundImage= "url('kepek/csonak.jpg')"
           
      }
    }
    farkas.addEventListener("click",farkaskatt)
    function farkaskatt(){ 
        katt = !katt
        if (katt ){
              document.getElementById("csonak").style.backgroundImage ="url('kepek/farkas.jpg')" 
        }
        else{
              document.getElementById("csonak").style.backgroundImage= "url('kepek/csonak.jpg')"
              
         }  
        }       
        