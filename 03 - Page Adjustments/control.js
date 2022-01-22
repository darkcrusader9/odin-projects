var input = document.querySelectorAll('.controls input')

function handleUpdate(){
    //mention any value as data-key in css and you can refer it as this.dataset.key
    const suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
}
input.forEach(input => input.addEventListener('change',handleUpdate))
input.forEach(input => input.addEventListener('mousemove',handleUpdate))
