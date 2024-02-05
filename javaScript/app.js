let Start_btn = document.querySelector(".s_btn");
let intro = document.querySelector(".intro");
let none = document.querySelector(".none");

Start_btn.addEventListener("click", () => {

    intro.classList.add("active");
    none.classList.add("after_none");
    Start_btn.style.display = "none"

})


let Quiz_Que = [
    {
        'que': 'Who made the desigin of Pakistan first Stamp Ticket?',
        'a': 'Waqar-ul-Hassan',
        'b': 'Abdur-rehman Chugtai',
        'c': 'none of these',
        'd': 'Rehmat Ali',
        'correct': 'b'
    },
    {
        'que': '22 March is observed internationally as?',
        'a': 'World Health Day',
        'b': 'Women \' Day ',
        'c': 'World Water Day',
        'd': 'Human Right Day',
        'correct': 'c'
    },
    {
        'que': 'The height of all 4 Minars of Badshai Mosque are?',
        'a': '170 feet',
        'b': '175 feet',
        'c': '177 feet',
        'd': '172 feet',
        'correct': 'c'
    },
    {
        'que': 'Hitler party which came into power in 1933 is known as?',
        'a': 'Nazi Party',
        'b': 'Labour Party',
        'c': 'Ku-Klux-Klan',
        'd': 'Democratic Party',
        'correct': 'a'
    },
    {
        'que': 'Quid-e-Azam\'s mother tougue was?',
        'a': 'Gujarati',
        'b': 'Hindi',
        'c': 'none of these',
        'd': 'Urdu',
        'correct': 'a'
    },  {
        'que': 'Grand Central Terminal,Park Avenue,New York is the world\'s?',
        'a': 'longest railway station',
        'b': 'higest railway station',
        'c': 'largest railway station',
        'd': 'none of these',
        'correct': 'c'
    },
    {
        'que': 'When did Fatima Jinnah Joined All India Muslim league?',
        'a': '1947',
        'b': '1949',
        'c': '1927',
        'd': '1939',
        'correct': 'd'
    },
    {
        'que': 'The United Nations Has principal organs?',
        'a': '7',
        'b': '5',
        'c': '4',
        'd': '6',
        'correct': 'd'
    },
    {
        'que': 'Which one  countries made an exit from Kyoto Protocol?',
        'a': 'India',
        'b': 'France',
        'c': 'Canada',
        'd': 'China',
        'correct': 'c'
    },
    {
        'que': 'The largest Peninsula in the world is?',
        'a': 'Arabia',
        'b': 'Europe',
        'c': 'Asia',
        'd': 'Africa',
        'correct': 'a'
    }
]

let main_box = document.querySelector(".main_box");
let questions = document.querySelector(".questions");
let options = document.querySelectorAll(".options");
let btn = document.querySelector(".btn");
let bar = document.querySelector(".bar");
let total_win = document.querySelector(".total");
let end = document.querySelector(".end");
let resetQuiz = document.querySelector(".reset");




let index = 0;
let right = 0;
let wrong = 0;
let total = Quiz_Que.length;



const loadQuestions = () => {


    if (total === index) {
        endQuiz();

    }
    else {


        let data = Quiz_Que[index];
        questions.innerText = `${index + 1}) ${data.que}`;
        options[0].nextElementSibling.innerText = data.a;
        options[1].nextElementSibling.innerText = data.b;
        options[2].nextElementSibling.innerText = data.c;
        options[3].nextElementSibling.innerText = data.d;
    }
}
loadQuestions();



btn.addEventListener('click', () => {

    let data = Quiz_Que[index];
    let ans = getAnswer();
    if (ans === data.correct) {
        right++;
        total_win_fn();
        total_win.style.color="green";
        
    }
    else {
        wrong++;
        total_win_fn();
        total_win.style.color="red";
    }


    index++;
    question_up();
    loadQuestions();
    reset();


})

const reset = () => {
    options.forEach((input) => {
        input.checked = false;
    })
}




const getAnswer = () => {
    let answer;
    options.forEach((inputs) => {
        if (inputs.checked) {
            answer = inputs.value;
        }
    })
    return answer;
}

const question_up = () => {
    if (index == total) {

        bar.innerText = `Question No: ${index} `
    }
    else {

        bar.innerText = `Question No: ${index + 1} `
    }
}

const endQuiz = () => {

    // main_box.innerHTML=`Total:${total} / Wins: ${right}`;

    // main_box.innerText=`Quiz End.`

    end.classList.add("end_active");


}


const total_win_fn = () => {
    total_win.innerText = ` Wrong: ${wrong} / Correct: ${right}.`
    
}

resetQuiz.addEventListener("click", () => {


    index = 0;
    right = 0;
    wrong = 0;
    total = Quiz_Que.length;


    loadQuestions();
    end.classList.remove("end_active");
    total_win.innerText = ` Wrong: ${wrong} / Correct: ${right}.`
    total_win.style.color="black";




})