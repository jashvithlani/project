
import React from 'react';


class TimerCountDown extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            remainingSeconds : 3*60*60
        }

        this.subtractASecond = this.subtractASecond.bind(this);
    }

    componentDidMount(){
        this.timer = setInterval(this.subtractASecond, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
    
    subtractASecond(){
        this.setState((prevState)=>({
            remainingSeconds : prevState.remainingSeconds -1
        }))
    };

    render(){
        if(this.state.remainingSeconds < 0){
            clearInterval(this.timer);
            window.close();
        }
        const hours = Math.floor(this.state.remainingSeconds/3600);
        const minutes = (Math.floor(this.state.remainingSeconds/60))%60;
        const seconds = this.state.remainingSeconds%60;
        const string=minutes<10? ':0' : ':';
        const string1=seconds<10? ':0' : ':';
        const timeLeft = " 0"+hours + string + minutes + string1 + seconds;
        return(
            <h3>Time Left 
                {timeLeft}
            </h3>
        );
    }
}

export default TimerCountDown;