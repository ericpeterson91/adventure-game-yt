const results = [
    {
        score: 10,
        message: 'hello',
        img: './bridge.jpeg'
    },
    {
        score: 10,
        message: 'hello',
        img: './bridge.jpeg'
    },
    {
        score: 10,
        message: 'hello',
        img: './bridge.jpeg'
    },
    {
        score: 10,
        message: 'hello',
        img: './bridge.jpeg'
    },
    {
        score: 10,
        message: 'hello',
        img: './bridge.jpeg'
    },
    {
        score: -10,
        message: 'hello',
        img: './bridge.jpeg'
    },
    {
        score: -10,
        message: 'hello',
        img: './bridge.jpeg'
    },
    {
        score: -10,
        message: 'hello',
        img: './bridge.jpeg'
    },
    {
        score: -10,
        message: 'hello',
        img: './bridge.jpeg'
    },
    {
        score: -10,
        message: 'hello',
        img: './bridge.jpeg'
    }
]

const body = document.querySelector('body'
)
const randomIndex = Math.floor(Math.random() * results.length)

const { score, message, img } = results[randomIndex]

const div = document.createElement('div')
div.innerHTML = ` ${score}, ${message}, ${img}`
body.append(div)