import React from 'react'

type TAns = {
  ansP: string
}
const Answer = ({ansP}:TAns) => {
  return (
    <label className='btn btn-lg btn-secondary m-1'>
      <input type='radio' name='options' id='option1' />
      <span dangerouslySetInnerHTML={{__html: ansP}} />
    </label>
  )
}

export default Answer