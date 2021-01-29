const prevBtn = document.querySelector('#prev-btn')
const nextBtn = document.querySelector('#next-btn')

const images = document.querySelectorAll('.pictures img')
let i = 0

prevBtn.onclick = function () {
  images[i].className = ""
  i--

  if (i < 0){
    i = images.length - 1
  }

  images[i].className = 'active'
}

nextBtn.onclick = function () {
  images[i].className = ""
  i++

  if (i >= images.length){
    i = 0
  }

  images[i].className = 'active'
}
