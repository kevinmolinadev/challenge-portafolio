let textarea = document.getElementById('message');
textarea.addEventListener('keyup', (event) => {
    textarea.style.height = `auto`;
    let height = event.target.scrollHeight;
    textarea.style.height = `${height}px`;
})