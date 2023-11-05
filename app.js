let btnStart = document.querySelector('#start')

btnStart.addEventListener('click', function(){
    document.querySelector('.container').classList.remove('none')
})

let cmInput = document.querySelector('#cmInput')
let kgInput = document.querySelector('#kgInput')

document.querySelector('.calc').addEventListener('click', function(){
    let bmi = kgInput.value / ((cmInput.value/100)**2)

    bmi = bmi.toFixed(2)

    if(bmi <= 18.5){
        document.querySelector('.normal').classList.remove('none')
    }else if(bmi < 30){
        document.querySelector('.health').classList.remove('none')
    }else if(bmi >= 30){
        document.querySelector('.not-health').classList.remove('none')
    }

    document.querySelector('.score').textContent = bmi
    document.querySelector('.bmi-score').classList.remove('none')
    
    document.querySelector('.delete-btn').classList.toggle('none')

    cmInput.disabled = true
    kgInput.disabled = true
})

document.querySelector('.delete-btn').addEventListener('click', function(){
    if(document.querySelector('.normal').classList.contains('none') || document.querySelector('.health').classList.contains('none') || document.querySelector('.not-health').classList.contains('none')){
        document.querySelector('.normal').classList.add('none')
        document.querySelector('.health').classList.add('none')
        document.querySelector('.not-health').classList.add('none')

        document.querySelector('.bmi-score').classList.add('none')
        cmInput.value = ''
        kgInput.value = ''

        document.querySelector('.delete-btn').classList.toggle('none')

        cmInput.disabled = false
        kgInput.disabled = false
    }
})