const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

const desc = document.querySelector('.desc');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
        const activePanelContent = panel.querySelector('p').textContent;
        desc.textContent = activePanelContent;
    });
});

