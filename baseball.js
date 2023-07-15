const prompt = require("prompt-sync")({ sigint: true })

let answer = []

answer[0] = Math.floor(Math.random() * 10)
answer[1] = Math.floor(Math.random() * 10)
answer[2] = Math.floor(Math.random() * 10)

while (answer[0] === answer[1]) {
    answer[1] = Math.floor(Math.random() * 10)
}

while (answer[0] === answer[2] || answer[1] === answer[2]) {
    answer[2] = Math.floor(Math.random() * 10)
}

console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!")

let c = 1
while (true) {
    let strike = 0, ball = 0
    let input = prompt(`${c}번째 시도 : `)
    let inputArr = [Number(input[0]), Number(input[1]), Number(input[2])]

    if (answer[0] === inputArr[0]) {
        strike++
    }
    if (answer[1] === inputArr[1]) {
        strike++
    }
    if (answer[2] === inputArr[2]) {
        strike++
    }
    if (answer[0] === inputArr[1]) {
        ball++
    }
    if (answer[0] === inputArr[2]) {
        ball++
    }
    if (answer[1] === inputArr[0]) {
        ball++
    }
    if (answer[1] === inputArr[2]) {
        ball++
    }
    if (answer[2] === inputArr[0]) {
        ball++
    }
    if (answer[2] === inputArr[1]) {
        ball++
    }

    console.log(`${strike}S${ball}B`)

    if (strike === 3) {
        console.log(`${c}번만에 맞히셨습니다.\n게임을 종료합니다.`)
        break
    }

    c++
}
