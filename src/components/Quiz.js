import React, {useRef, useState} from 'react';
import { data } from './quizData';
import './Quiz.css'

function Quiz() {
    let [index, setIndex ] = useState(0);
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);
    let Option1 = useRef(null);
    let Option2= useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);
    let options = [Option1, Option2, Option3, Option4]

    const checkAnswer = (e, answer) => {
        if (lock===false) {
            if (question.answer===answer) {
                e.currentTarget.classList.add('correct');
                setLock(true);
                setScore(prevScore => prevScore + 1);
            }
            else{
                e.currentTarget.classList.add('wrong');
                setLock(true);
                options[question.answer-1].current.classList.add('correct');
            }
        }

    }

    const next = () => {
        if (lock===true) {
            if(index===data.length-1){
                setResult(true);
                return 0;

            }
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            options.map((option) => {
                option.current.classList.remove('wrong');
                option.current.classList.remove('correct');
                return null;
            })
        }


    }

    const newTry = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }


    return(
        <div style={{background: "linear-gradient(to bottom , #630105, #ffffff)", margin:0, paddingTop: "80px"}}>
            <div className="quiz-container">
                <h1>Quiz about Murakami and his books</h1>
                <hr />
                {result?<></>:<>
                    <h2>{index + 1}. {question.question}</h2>
                    <ul>
                        <li ref={Option1} onClick={(e)=>{checkAnswer(e, 1)}}>{question.option1}</li>
                        <li ref={Option2} onClick={(e)=>{checkAnswer(e, 2)}}>{question.option2}</li>
                        <li ref={Option3} onClick={(e)=>{checkAnswer(e, 3)}}>{question.option3}</li>
                        <li ref={Option4} onClick={(e)=>{checkAnswer(e, 4)}}>{question.option4}</li>
                    </ul>
                    <button onClick={next}>Next question</button>
                    <div className="question-index">{index + 1} of {data.length} questions</div>
                </>}
                {result?<>
                    <h2>Your Score is {score} out of {data.length}</h2>
                    <button onClick={newTry}>Try Again</button>
                </>:<></>}

            </div>
        </div>


    );
}

export default Quiz;