import React from 'react'
import { TQuestion } from '@/config/Types'

type TQues = {
    ques: string
}

const Question = ({ques}:TQues) => {
    return (
        <div>
            <h3 className='card-title' dangerouslySetInnerHTML={{__html: ques}} />
        </div>
    )
}

export default Question