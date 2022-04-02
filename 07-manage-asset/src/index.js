// 导入函数模块
import helloWorld from "./hello-world"
import imgsrc from "./assets/img-1.png"
import logoimgsrc from "./assets/logo.svg"
import exampleText from "./assets/example.txt"
import kb2 from "./assets/2kb.jpg"
import kb5 from "./assets/5kb.jpg"
import './style.css'
import './style.less'
import Data from './assets/data.xml'
import Notes from './assets/data.csv'


import toml from './assets/json/data.toml'
import yaml from './assets/json/data.yaml'
import json from './assets/json/data.json5'

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`


console.log(Data)
console.log(Notes)

document.body.classList.add('hello')
document.body.classList.add('world')

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
background-color: aliceblue`
block.classList.add('block-bg')
block.textContent = exampleText
document.body.appendChild(block)

const imgkb2 = document.createElement('img')
imgkb2.src = kb2
document.body.appendChild(imgkb2)

const imgkb5 = document.createElement('img')
imgkb5.src = kb5
document.body.appendChild(imgkb5)

const span = document.createElement('span')
span.classList.add('iconfont', 'icon-zhexiantu')
span.style.cssText = `font-size: 42px; color: #333; `;
document.body.appendChild(span)