const windowWidth: number = window.innerWidth;
const charWidth: number = 16;
const paddingWidth: number = charWidth * 2;

const scene: HTMLDivElement = <HTMLDivElement>document.getElementById('scene');

const columnCount: number = windowWidth / (charWidth + paddingWidth);

function createRunDownColumn(): HTMLDivElement {
  const div = document.createElement('div');
  div.className = 'column';

  scene.appendChild(div);

  return div;
}

function createRunDownAnimation(div: HTMLDivElement) {
  const interval = (Math.random() * 10) + 200;
  setInterval(() => {
    let randomCharacter = 32;
    if (Math.random() > 0.45) {
      randomCharacter = Math.floor(Math.random() * 25) + 97;
    }

    const span = document.createElement('span');
    span.style.opacity = (Math.random() + 0.2) + '';
    span.innerText = String.fromCharCode(randomCharacter);
    span.className = 'fall-down';

    if (Math.random() > 0.85) {
      span.classList.add('white');
    }

    div.insertBefore(span, div.firstChild);

    let spans = div.getElementsByTagName('span');
    for (let index = spans.length - 1; index >= 20; index--) {
      div.removeChild(spans[index]);
    }
  }, interval);
}

for (let index = 0; index < columnCount; index++) {
  const div = createRunDownColumn();

  createRunDownAnimation(div);
}
