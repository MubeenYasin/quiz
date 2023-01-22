import React from 'react'
import { TQuestion } from '@/config/Types'

type TQues = {
    ques: string
}

const Question = ({ques}:TQues) => {
    return (
        <div>
            <h3 className='card-title'> {ques}</h3>
        </div>
    )
}

export default Question