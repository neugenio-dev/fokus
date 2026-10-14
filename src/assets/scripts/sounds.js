const toggle = document.querySelector('#toggle-music');
const audio = new Audio('./public/sounds/lofi.mp3')

Audio.loop = true

toggle.addEventListener('change',  () => {
   if(toggle.checked){
    audio.play()

   } else{
    audio.pause()

   }
})

