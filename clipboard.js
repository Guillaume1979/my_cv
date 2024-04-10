async function copyToClipboard() {
    const mail = document.querySelector('#mail')
    await navigator.clipboard.writeText(mail.innerText);

    mail.classList.add('hint')
    setTimeout(() => {
        mail.classList.remove('hint')
    }, 2000)
}
