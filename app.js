var ppbutton = document.getElementById("vid-button");
var wholevideo = document.getElementById("myvid");
wholevideo.addEventListener("click", playPause);

myVideo = document.getElementById("myvid");
function playPause() { 
    if (myVideo.paused) {
        myVideo.play();
        ppbutton.style.opacity = "0";
        // ppbutton.innerHTML = "Pause";
        }
    else  {
        myVideo.pause();
        ppbutton.style.opacity = "1";
        // ppbutton.innerHTML = "Play";
        }
}
// let options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 1.0
// };
// let callback = (entries, observer) => {
//     entries.forEach(entry =>{
//         if(entry.target.id == 'myvid')
//         {
//             if(entry.isIntersecting){
//                 entry.target.play();
//             }
//             else{
//                 entry.target.pause();
//             }
//         }
//     });
// }
// let observer = new IntersectionObserver(callback,options);
// observer.observe(document.querySelector('#myvid'))