import React, { useState } from 'react'

export default () => {
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState('')
  const [numOne, setNumOne] = useState('')
  const [numTwo, setNumTwo] = useState('')
  const [operator, setOperator] = useState('')

  const calculateAndUpdateAnswer = () => {
    const num1 = Number(numOne)
    const num2 = Number(numTwo)
    if (num1 && num2) {
      if (error) setError('')
      switch (operator) {
        case 'add':
          setAnswer(num1 + num2)
          break
        case 'subtract':
          setAnswer(num1 - num2)
          break
        case 'multiply':
          setAnswer(num1 * num2)
          break
        case 'divide':
          setAnswer(num1 / num2)
          break
        default:
          setAnswer(num1 + num2)
      }
    } else {
      setError('something went wrong.')
      setAnswer('')
    }
  }
  return (
    <div className="page">
      <h1>React Calculator</h1>
      <input type="text" onChange={(e) => { setNumOne(e.target.value) }} />
      <select className="operator" defaultValue="add" onChange={(e) => { setOperator(e.target.value) }}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="devide"> / </option>
      </select>
      <input type="text" onChange={(e) => { setNumTwo(e.target.value) }} />
      <button type="button" className="equals" onClick={calculateAndUpdateAnswer}> = </button>
      <input name="answer" disabled defaultValue={answer} />
      <div className="error">{error ? `${error}` : null}</div>
    </div>
  )
}
