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

/*========= Contact ==========*/
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
Message = document.getElementById('message'),
contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // check if the fields have values 
    if (
        contactName.value === '' ||
        contactEmail.value === '' || 
        Message.value === '') {
        //add and remove color
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        // show message
        contactMessage.textContent = 'Please fill in all fields';
    } else {
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm(
            'service_p43i5na',
            'template_9nz9itn',
            '#contact-form',
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
    };
};

contactForm.addEventListener('submit', sendEmail);