import React from 'react'
import '../components/DapAn.css'
export default function CauHoi(props){
    // console.log('da',props.list)
    return(
<div className="fullQues">
    <div className="point"><h1>POINT :{props.point}</h1></div>
    <div className="playagain"><button id="restart" onClick={props.playAgain}>Chơi lại</button></div>
    <h5>Có tất cả 5 câu hỏi. Mỗi Lần trả lời đúng bạn được 10 điểm! Trả lời sai sẽ được 0 điểm! </h5>
{props.list.map(item => (
              <div className="boxQues">
                  {item.question}
                <div className="quesContainer">
                <button value="answer_correct" onClick={props.checkQuestion}>{item.correct_answer}</button>
                <button value="answer_incorrect" onClick={props.checkQuestion}>{item.incorrect_answers[0]}</button>
                <button value="answer_incorrect" onClick={props.checkQuestion}>{item.incorrect_answers[1]}</button>
                <button value="answer_incorrect" onClick={props.checkQuestion}>{item.incorrect_answers[2]}</button>
                </div>
              </div>
                  ))}
</div>         
    )}