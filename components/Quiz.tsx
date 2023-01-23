import { TQuestion, TUsers } from '@/config/Types'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Answer from './Answer'
import Question from './Question'

const Quiz = () => {

    const [questions, setQuestions] = useState<TQuestion>()
    const [count, setCount] = useState(0)
    const [score, setScore] = useState(0)
    // const answers = [1, 2, 3, 4]
    // const result = answers.map((ansE, index) => <Answer answerP={ansE} key={index} />)

    useEffect(() => {
        const getApi = () => {
            axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
                .then(res => setQuestions(res.data.results))
                .catch(err => console.log(err))
        }

        if (!questions) {
            getApi()
        }

        console.log(questions)
    }, [questions, count])
    if (!questions) return <p className='text-light text-muted'>Loading</p>

    const answers: string[] = [...questions[count].incorrect_answers, questions[count].correct_answer]
    // console.log(answers)
    const randomAns = answers.sort(() => Math.random() - 0.5)

    const checkAnswer = (selectedAnswer) => {
        if (selectedAnswer === questions[count].correct_answer) {
            setScore(score + 10)
        }

        setCount(count + 1)
    }

    return (
        <div className='card-body'>
            <Question ques={questions[count].question} />
            <div className='card-text'>
                <div className='btn-group btn-group-vertical btn-group-toggle w-100'
                    data-toggle='buttons'
                >
                    {
                        randomAns.map((ansElem, index) =>
                        (
                            <Answer ansP={ansElem}
                                onAnswer={(selectedAnswer) => checkAnswer(selectedAnswer)}
                                key={index} />
                        )
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Quiz