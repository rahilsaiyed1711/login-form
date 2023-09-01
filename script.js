const labels = document.querySelectorAll(".form-control label")
labels.array.forEach(label => {
    label.innerHTML =label.innerHTML.split('')
    .map((letter,idx)=> `<span style="transition-delay:${idx*300}ms">${letter}</span>`)
    .join('')
})