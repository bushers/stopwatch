import * as React from 'react'; 


export interface TimerProps{
    className?:string;
}

export interface TimerState{
    timerRunning:boolean;
    startTime:number;
    timeElapsed:number;
}


export class Timer extends React.Component<TimerProps, TimerState>{
    el:HTMLDivElement;
    timer:any;
    constructor(p:TimerProps){
        super(p);
        this.state = {
            timerRunning: false,
            startTime: 0,
            timeElapsed: 0
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    incrementInMs = () => {
        this.timer = setInterval(() => {
            this.setState(prevState => {
                return {
                    timeElapsed: prevState.timeElapsed + 1
                }
            });
        }, 100)
    }

    startTimer = () => {
        this.setState({ timerRunning: true }, () => this.incrementInMs());
    }

    pauseTimer = () => {
        this.setState({ timerRunning: false }, () => clearInterval(this.timer));
    }

    resetTimer = () => {
        this.setState({ timeElapsed: 0 }, () => clearInterval(this.timer));
    }

    handleClick = () => {
        if(this.state.timerRunning) {
            this.pauseTimer();
        } else {
            this.startTimer();
        }
    }

    render(){
        let {props, state} = this,
            cls = this.props.className || "";

        return (
            <div className={"timer " + cls} ref={e=> this.el= e}>
                <div className="timer__num-container">
                    <h1>{state.timeElapsed}</h1>
                </div>

                <div className="timer__start-btn" onClick={this.handleClick}>
                    {state.timerRunning
                        ? <p>Pause</p>
                        : <p>Start</p>}
                </div>

                {state.timeElapsed > 0 && (
                    <div className="timer__reset-btn" onClick={this.resetTimer}>
                        <p>Reset</p>
                    </div>
                )}
            </div>
        )
    }
}