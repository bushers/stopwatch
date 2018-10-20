import * as React from 'react'; 


export interface TimerProps{
    className?:string;
}

export interface TimerState{
    timerRunning:boolean;
}


export class Timer extends React.Component<TimerProps, TimerState>{
    el:HTMLDivElement;
    date:Date;
    constructor(p:TimerProps){
        super(p);
        this.state = {
            timerRunning: false
        }
    }
    
    toggleTimer = () => {
        this.setState(prevState => {
            return {
                timerRunning: !prevState.timerRunning
            }
        })
    }

    render(){
        let {props, state} = this,
            cls = this.props.className || "";

        return (
            <div className={"timer " + cls} ref={e=> this.el= e}>
                <div className="timer__num-container">
                    <h1>{`0:00`}</h1>
                </div>

                <div className="timer__start-btn" onClick={this.toggleTimer}>
                    {state.timerRunning
                        ? <p>Pause</p>
                        : <p>Start</p>}
                </div>
            </div>
        )
    }
}