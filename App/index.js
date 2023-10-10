const quiz = [
    {  
        question:'ムーミンの正体は？',
        answers:[
            '妖精',
            'カバ',
            '犬',
            '猫' 
            ],
        correct:'妖精'
    },  {
        question:'ムーミンはどこの国の生まれ？',
        answers:[
            '日本',
            'フィンランド',
            'アメリカ',
            'ウクライナ' 
            ],
        correct:'フィンランド'
    },  { 
        question:'ムーミンの日は？',
        answers:[
            '９月５日',
            '１２月２０日',
            '７月１１日',
            '８月９日' 
            ],
        correct:'８月９日'
    }, { 
        question:'ムーミンの兄弟は？',
        answers:[
            '兄',
            '妹',
            '姉',
            '弟' 
             ],
        correct:'兄'
     }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//console.log();

const $button=document.getElementsByTagName('button');
const buttonLength = $button.length;
//クイズの問題文、選択肢を定義
const setupQuiz=()=>{
    document.getElementById('js-question').textContent=quiz[quizIndex].question;
    let buttonIndex=0;
    while(buttonIndex < buttonLength){
     $button[buttonIndex].textContent=quiz[quizIndex].answers[buttonIndex]
     buttonIndex++;
    }
}
setupQuiz();

const clickHandler=(e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解！');
        score++;
    } else {
        window.alert('不正解！');   
    }
    quizIndex++;
    if (quizIndex < quizLength) {
        //問題数があればこちら
        setupQuiz();
    } else {
        //問題数がなければこっち
        window.alert('終了！あなたの正解数は'+ score + '/'+ quizLength + 'です！');
    }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e)=> {
        clickHandler(e);
    });
    handlerIndex++;
}
