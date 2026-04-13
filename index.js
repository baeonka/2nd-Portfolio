//template_s3chdi9
// service_tkdhuln
//enNsVI7yvwtyMIZgI

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    emailjs
        .sendForm(
            'service_tkdhuln',
            'template_s3chdi9',
            event.target,
            'enNsVI7yvwtyMIZgI'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly on bianca@thedaringself.com"
        );
    })
}