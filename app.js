function openMenu() {
    const body = document.body

    body.classList.add('open')


}

function closeMenu() {
    const body = document.body

    body.classList.remove('open')
}

// template_t1m3din
// service_0woq3wf
// NXu96JBx0Ud_x7fYO

async function sendEmail(event) {
    //prevent the form from normally reloading
    event.preventDefault()

    const body = document.body
    const loading = document.querySelector('.contact-form-loading');
    const form = document.querySelector('.contact-form')

    try {
        //Loading state
        loading.classList.remove("hidden")
    
        //event.target returns all the values in the form
        //this .sendForm() method connects to emailJS so that the email can be sent
        await emailjs.sendForm("service_0woq3wf", "template_t1m3din", event.target, "NXu96JBx0Ud_x7fYO");        
        
        //Success state
        form.reset() //resets all the input fields this way emails cannot be spammed
        body.classList.add("success-open")
        setTimeout(() => {
            body.classList.remove("success-open")
        }, 5000) //removes pop of message being sent
        console.log('The email has been sent. ')
        loading.classList.add("hidden")
    } catch {
        loading.classList.add("hidden")
        alert ("An error has occured. Please try again later or contact me at robvega945@gmail.com...")
    }
}