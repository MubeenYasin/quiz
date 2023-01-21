import { TQuestion } from '@/config/Types'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Answer from './Answer'
import Question from './Question'

const Quiz = () => {

    const [questions, setQuestions] = useState()
    const [count, setCount] = useState(0)
    // const answers = [1, 2, 3, 4]
    useEffect(() => {
        const getApi = () => {
            axios
                .get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
                .then(res => setQuestions(res.data.results))
                .catch(err => console.log(err))
        }

        if(!questions){
            getApi()
        }
        console.log(questions)

    }, [questions])
    // const result = answers.map((ansElem) => <Answer answer={ansElem} />)

    return (
        <div className='card-body'>
            {/* <Question question={questions[count].question}/> */}
            <div className='card-text'>
                <div className='btn-group btn-group-vertical btn-group-toggle w-100'
                    data-toggle='buttons'
                >
                    {/* {result.sort(() => Math.random() - 0.5)} */}
                    <Answer />
                </div>
            </div>
        </div>
    )
}

export default Quiz