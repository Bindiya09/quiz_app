import React, { Component } from 'react';
import {quizdata} from './quizdata';

class Quiz extends Component{
    state={
        userans:null,
        currentquest:0,
        options:[],
        quizend:false,
        score:0,
        disabled:true
    };

    loadquiz=()=>{
        const {currentquest}=this.state;
        this.setState(()=>{
        return{
            questions:quizdata[currentquest].question,
            options:quizdata[currentquest].options,
            answers:quizdata[currentquest].answer
              }
    }
        )
    }
    componentDidMount(){
        this.loadquiz();
    }

    
    nextQuestionHandler=()=>{
        const {userans,answers,score} = this.state;
        this.setState({
            currentquest:this.state.currentquest+1
        })
        console.log(this.state.currentquest)
        if(userans === answers){
            this.setState({
                score:score+1
            })
        }
    }

    componentDidUpdate(prevProps,prevState){
        const {currentquest}=this.state;
        if(this.state.currentquest !== prevState.currentquest) {
            this.setState(()=> {
                return{
                    disabled:true,
                    questions:quizdata[currentquest].question,
                    options:quizdata[currentquest].options,
                    answers:quizdata[currentquest].answer
                };
            })
        }
    }

    checkAnswer= answer=>{
        this.setState({
            userans:answer,
            disabled:false
        })
    }

    finishHandler=()=>{
        const {userans,answers,score} = this.state;
        if(userans === answers){
            this.setState({
                score:score+1
            })

        }

        if(this.state.currentquest === quizdata.length-1){
            this.setState({
                quizend:true
            })
        }
    }

    render(){
        const {questions,options,currentquest,userans,quizend}=this.state;
        if(quizend){
            return (
                    <div className="end">
                    <div class="animated slideInUp">
                    <h2>Quiz completed!</h2>
                    <h3>Your score is {this.state.score}/4</h3>
                            
<p>The correct answers were: </p>      
<ul id="ulid">
    {quizdata.map((item, index)=>(
        <li key={index}
        >{item.answer}<br></br></li>
    ))}
</ul>
<a href="/">Try again!</a>
          </div>
         </div>
            )
        }
        return(
            <div className="App">
        <span>{`Question ${currentquest+1} out of ${quizdata.length}`}</span>        
                <h2>{questions}</h2>
        
        
                {options.map(option =>(
                    
                    <p key={option.id}
                    
                         className={`options
                         ${userans === option ? "selected": null}
                         `} 
                    onClick={()=>this.checkAnswer(option)}
                    >
                        {option}                    
                    </p>
                    
                ))}
                {currentquest<quizdata.length-1 &&
                <button id="btn" disabled={this.state.disabled} onClick={this.nextQuestionHandler}>Next</button>}

                {currentquest === quizdata.length-1 && 
                <button id="fin" onClick={this.finishHandler}>Submit</button>}
     
        </div>
            
        )
    }
}

export default Quiz;