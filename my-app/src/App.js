import { Component } from "react";
import Header from "./Header";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: null,
      currentQuestion: null,
      currentAnswers: [],
      reviewQuestions: [],
      answeredQuestionsCount: 0,
      visitedQuestionsCount: 1,
      reviewQuestionsCount: 0,
      sections: [],
      currentSection: null
    };
  }
  componentDidMount() {
      
    fetch("./../Data.json")
      .then((response) => response.json())
      .then((data) => {
       
        this.setState({
          sections: data.sections,
          currentSection: data.sections[0].key
        });
      });
  }
  modfiyAnswer(id, state) {}
  changeSection=(e)=>{
      
      this.setState({
          currentSection:e.target.id
      })

  };
  countAnsweredQues() {
    const count = 0;

    this.setState();
  }
  render() {
    
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div>
        <Header sections={this.state.sections} changeSection={this.changeSection} currSection={this.state.currentSection} />
        <>
      </div>
    );
  }
}
export default App;
