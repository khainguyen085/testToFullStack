import React from 'react'
import CauHoi from './DapAn'
export default class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            point:0,
            value:""
        }
        this.checkQuestion = this.checkQuestion.bind(this);
        this.playAgain = this.playAgain.bind(this);
    }
    componentDidMount(){
        fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
        .then(res=>res.json())
        .then(data=> this.setState({list:data.results}))
        // this.state({list:data.results}))
    }

    playAgain(){
        fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
        .then(res=>res.json())
        .then(data=> this.setState({list:data.results}))
        this.setState({
            point:0
        })
    }
    checkQuestion(e){
        e.preventDefault();
        console.log(e.target.value)
        if(e.target.value === "answer_correct"){
            alert("Trả lời đúng rồi! Bạn được 10 điểm")
        let points = this.state.point;
        this.setState({
            point:points+10,
            bgcolor:"green"
        })
        }
        else{
            alert("Sai rồi! bạn không nhận được điểm nào")
        }  
    }
    render(){
        // console.log(this.state.list)
        console.log(this.state.value)
        return (
            <CauHoi list={this.state.list} checkQuestion={this.checkQuestion} point={this.state.point} playAgain={this.playAgain}/>
        )
    }
}