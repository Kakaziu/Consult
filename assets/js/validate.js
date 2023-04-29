const form = document.querySelector('#form')
const email = document.querySelector('#email')
const message = document.querySelector('#message')
const messageSuccess = document.querySelector('.message-success')

form.addEventListener('submit', function(e){
    e.preventDefault()
    hideErrorMessage(email, message)
    validate(email, message)
    if(handleSubmit(this)){
        messageSuccess.classList.add('message-success-show')
        setTimeout(() =>{
            messageSuccess.classList.remove('message-success-show')
        }, 3000)
    }
})

function handleSubmit(form){
    let send = true
    let fields = form.querySelectorAll('label')
    fields.forEach(field =>{
        const errorMessage = field.querySelector('span')
        if(errorMessage.innerHTML !== ''){
            send = false
        }
    })
    console.log(send)
    return send
}

function validate(...inputs){
    inputs.forEach(input =>{
        if(!input.value) showErrorMessage(input, '* O campo está vazio')
    })
}

function showErrorMessage(camp, message){
    const fieldCamp = camp.parentElement
    const errorMessage = fieldCamp.querySelector('.error-message')
    errorMessage.innerText = message
}

function hideErrorMessage(...inputs){
    inputs.forEach(input =>{
        const fieldCamp = input.parentElement
        const errorMessage = fieldCamp.querySelector('.error-message')
        errorMessage.innerText = ''
    })
}

