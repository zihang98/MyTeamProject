const prompt = require("prompt-sync")({sigint:true});
//컴퓨터 숫자 만들기
setNumber();

function setNumber(){
    let Number = '';
    while (Number.length<3){
        const randomNum = Math.floor(Math.random()*(9-1+1));
        if(!Number.includes(randomNum))Number +=randomNum;
        //while문을 돌려서 랜덤값을 뽑고, randomNum이 값이 없으면 Number에 값 추가
    }

let count = 0; //최초 카운트 0
console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!');
compare(Number, count); //사용자가 입력하는 값과 답안을 비교하는 함수
}

//입력값 받기
function useranswer (){
    let answer = prompt("정답을 입력하세요 :", ""); 
    if(answer === null){    //입력값이 없는 경우
        alert(`입력값이 없습니다. `);
        return false;
    }else if(answer.length>3){
        alert(`3자리 숫자만 입력해야 합니다`);
        return useranswer();    //count 증가시키지 않고 다시 입력
    }
    return answer;
}

////////// 숫자가 아닌 다른 문자 입력시 오류 뜨게 하고싶은데 방법,..

//생성된 숫자와 입력값 비교
function compare (Number, count){
    let answer = useranswer();
    if(!answer) return;
    count++;
    console.log(`${count}번째 시도 : ${answer}`);

    let S = 0; let B = 0;
    let str = '';
    answer.split('').forEach((num, index) => {
        if(Number.indexOf(num) === index) S++;
        else if(Number.split('').includes(num)) B++;
    })

    if(S === 3) str = `${S}S`;
    else if(B === 3) str = `${B}B`;
    else str = `${B}B${S}S` ;
    console.log(str);
    Number !== answer ? compare(Number, count) : console.log(`${count}번만에 맞히셨습니다. \n게임을 종료합니다.`);
}

