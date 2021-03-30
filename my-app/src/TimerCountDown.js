import React, {Component} from 'react';


class TimerCountDown extends Component{
    constructor(props){
        super(props);

        this.state = {
            hours : 2,
            minutes : 59,
            seconds : 59
        }

        this.subtractASecond = this.subtractASecond.bind(this);
    }

    componentDidMount(){
        this.timer = setInterval(this.subtractASecond, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        
        //close the test after time after timer ends
        window.close();
    }
    
    subtractASecond(){
        let seconds = this.state.seconds;
        let minutes = this.state.minutes;
        let hours = this.state.hours;
        seconds-=1;
        if(seconds < 0){
            seconds = 59;
            minutes-=1;
            if(minutes < 0){
                minutes = 59;
                hours-=1;
                if(hours < 0){
                    clearInterval(this.timer);
                    
                    //close the test after time after timer ends
                    window.close();
                }
            }
        }
        this.setState({
            seconds : seconds,
            minutes : minutes,
            hours : hours
        })
    };

    render(){
        const string=this.state.minutes<10? ':0' : ':';
        const string1=this.state.seconds<10? ':0' : ':';
        const timeLeft = " 0"+this.state.hours + string + this.state.minutes + string1 + this.state.seconds;
        return(
            <h3>Time Left 
                {timeLeft}
            </h3>
        );
    }
}

export default TimerCountDown;