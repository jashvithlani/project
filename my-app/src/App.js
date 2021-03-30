import { Component } from "react";
import Header from "./Header";
import Options from "./QuestionComponents/Options.js";
import QuestionContainer from "./QuestionComponents/QuestionContainer.js";
import Summary from "./SideNavComponents/Summary";
import SideNav from "./SideNavComponents/SideNav";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: null,
      currentQuestion: null,
      currentAnswers: [],
      reviewQuestions: [],
      counts: {
        answeredQuestionsCount: 0,
        visitedQuestionsCount: 1,
        reviewQuestionsCount: 0,
        totalQuestionsCount: 10,
      },
      sections: [],
      currentSection: null,
      first: true,
    };
  }
  componentDidMount() {
    fetch("./../Data.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          sections: data.sections,
          currentSection: data.sections[0].key,
          questions: data.questions,
          currentQuestion: data.questions[0],
        });
        const temparray = [],
          temparray2 = [];
        this.state.questions.forEach((e) => {
          temparray.push(undefined);
          temparray2.push(false);
        });

        this.setState({
          currentAnswers: temparray,
          reviewQuestions: temparray2,
          counts: {
            answeredQuestionsCount: 0,
            visitedQuestionsCount: 1,
            reviewQuestionsCount: 0,
            totalQuestionsCount: temparray2.length,
          },
        });
        if (this.state.first) {
          this.setState({ first: false });
        }
      });
  }
  modfiyAnswer(id, state) {}
  onClickOption(e) {
    console.log(e.target.htmlFor, " clicked");
  }
  changeSection = (e) => {
    this.setState({
      currentSection: e.target.id,
    });
  };
  countAnsweredQues() {
    const count = 0;

    this.setState();
  }
  render() {
    if (this.state.first == false) {
      // console.log(this.state.currentQuestion)
      return (
        <div>
          <Header
            sections={this.state.sections}
            changeSection={this.changeSection}
            currSection={this.state.currentSection}
          />

          <div className="float-container ">
            <QuestionContainer
              currentQuestion={this.state.currentQuestion}
              onClickOption={this.onClickOption}
            />
            <Summary counts={this.state.counts} />
            <SideNav 
            questions={this.state.questions}
            currentAnswers={this.state.currentAnswers}
            reviewQuestions={this.state.reviewQuestions}
             />
          </div>
          <PreFooter/>
        </div>
      );
    } else {
      return <div />;
    }
  }
}
export default App;
