/*========= MixItUp Filter ==========*/
let mixerProjects = mixitup('.project__container', {
    selectors: {
        target: '.project__item'
    },
    animation: {
        duration: 300
    }
});

/* Active Work */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

/*========= Contact Form ==========*/
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // check if the fields have a value
    if (contactName.value === '' || 
        contactEmail.value === '' || 
        contactMessage.value === '') {
        // add and remove color
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        // show message
        contactMessage.textContent = 'Write all the input fields';
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm(
            'service_p43i5na',
            'template_9nz9itn',
            '#contact__form',
            'itotiUmMArKH-USTS'
        )
        .then(() => {
            // show message and add color
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Message sent!';

            // remove message after 5 seconds
            setTimeout(() => {
            contactMessage.textContent = '';
            }, 5000);
        });
    }
};

contactForm.addEventListener('submit', sendEmail);