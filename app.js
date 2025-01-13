function openMenu() {
    const body = document.body

    body.classList.add('open')


}

function closeMenu() {
    const body = document.body

    body.classList.remove('open')
}

// template_y2u8ck6
// service_0woq3wf
// NXu96JBx0Ud_x7fYO

async function sendEmail(event) {
    //prevent the form from normally reloading
    event.preventDefault()
    const body = document.body
    const loading = document.querySelector('.contact-form-loading');

    //Loading state
    loading.classList.remove("hidden")

    //event.target returns all the values in the form
    //this .sendForm() method connects to emailJS so that the email can be sent
    await emailjs.sendForm("service_0woq3wf", "template_y2u8ck6", event.target, "NXu96JBx0Ud_x7fYO");

    //Success state
    console.log('The email has been sent. ')
}