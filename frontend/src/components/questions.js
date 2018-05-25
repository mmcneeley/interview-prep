import React from 'react';
import RecordView from './record_view'

class Questions extends React.Component {

  state = {
    questions: [],
    current_question: {content: "Press enter to start"},
    timer: 0,
    interval: null,
  }

  componentDidMount() {

    // fetch the data to display questions
    fetch('http://localhost:5000/api/v1/questions')
      .then(response => response.json())
      .then(api_questions => {
        this.setState({
          questions: api_questions,
        })
      })

    // listen for key events
    document.addEventListener('keyup', (e) => {
      if (e.key === " " || e.key === "Enter" || e.key === "ArrowLeft" || e.key === "ArrowRight") {
        console.log(e)
        console.log(this.state.current_question.content)
        this.refreshQuestion()
      } else {
        console.log("Not a key I want to track");
      }
    })
  }

  refreshQuestion = () => {
    if (this.state.questions.length > 0) {
      this.setState({
        current_question: this.state.questions[Math.floor(Math.random()*this.state.questions.length)]
      })
      this.startTimer()
    } else {}
  }

  startTimer = () => {
    clearInterval(this.state.interval)
    this.refreshTimer()
    let timer = setInterval(() => {
      this.setState({
        timer: this.state.timer + 1,
      })
    }, 1000)
    this.setState({
      interval: timer
    })
  }

  refreshTimer = () => {
    this.setState({
      timer: 0
    })
  }

  render(){
    console.log(this.state);
    return(
      <div>
        <p>{this.state.current_question.content}</p>
        <p>{this.state.current_question.content === "Press enter to start" ? null : this.state.timer}</p>
        <p>{this.state.current_question.content === "Press enter to start" ? null : <RecordView />}</p>
      </div>
    )
  }
}

export default Questions;
