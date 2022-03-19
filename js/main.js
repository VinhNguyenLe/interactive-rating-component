const sections = document.querySelectorAll('section')
const selectStars = document.querySelectorAll('.star-vote')
const submitBtn = document.querySelector('.submit')
const starDisplay = document.querySelector('.number-star-seleced')

let starSeleced

selectStars.forEach(star => {
    star.addEventListener('click', () => {
        selectStars.forEach(star => star.classList.remove('active'))
        star.classList.add('active')
        starSeleced = star.dataset.star
        console.log(starSeleced)
    })
})


submitBtn.addEventListener('click', () => {
    if(starSeleced != undefined){
        sections[0].classList.add('up')
        sections[1].classList.add('down')
        starDisplay.innerHTML = starSeleced
    } else {
        alert('Please rate us. Thank you!')
    }
})


