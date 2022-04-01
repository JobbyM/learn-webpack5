// 导入函数模块
import helloWorld from "./hello-world"
import imgsrc from "./assets/img-1.png"
import logoimgsrc from "./assets/logo.svg"
import exampleText from "./assets/example.txt"
import kb2 from "./assets/2kb.jpg"
import kb5 from "./assets/5kb.jpg"

helloWorld()

const img = document.createElement('img')
img.src = imgsrc
document.body.appendChild(img)

const logo = document.createElement('img')
logo.src = logoimgsrc
logo.width = '120'
document.body.appendChild(logo)

const block = document.createElement('div')
block.style.cssText = `width: 200px; height: 200px;
background: aliceblue`
block.textContent = exampleText
document.body.appendChild(block)

const imgkb2 = document.createElement('img')
imgkb2.src = kb2
document.body.appendChild(imgkb2)

const imgkb5 = document.createElement('img')
imgkb5.src = kb5
document.body.appendChild(imgkb5)