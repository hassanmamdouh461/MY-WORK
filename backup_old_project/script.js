const userText = document.getElementById('userText');
const output = document.getElementById('output');
const animationType = document.getElementById('animationType');

function applyAnimation() {
    const text = userText.value || 'مرحبا بك!';
    const type = animationType.value;
    output.className = 'kinetic-text';
    if (type === 'wave') {
        output.innerHTML = '';
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.style.setProperty('--i', i);
            output.appendChild(span);
        }
        output.classList.add('wave');
    } else {
        output.textContent = text;
        output.classList.add(type);
    }
}

userText.addEventListener('input', applyAnimation);
animationType.addEventListener('change', applyAnimation);

applyAnimation();
