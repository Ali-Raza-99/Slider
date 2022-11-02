let images = ['mybest.jpg','raza2.jpg','raza3.jpg','raza4.jpg','raza5.jpg']
let image = document.getElementById('image')
let imgCount=0

document.addEventListener('keydown', function(e){
    if(e.keyCode === 37){
        back()
    } else if(e.keyCode === 39){
        ago()
    }
});

function ago(e) {
    imgCount++
    image.src = images[imgCount]
    if (imgCount == 5) {
      image.src = images[imgCount = 0]
    }
}   
function back(params) {
    imgCount--
    image.src = images[imgCount]
    
    if (imgCount < 0) {
        image.src = images[imgCount = 4]
    }
}

setInterval(() => {
    ago()
}, 3000);