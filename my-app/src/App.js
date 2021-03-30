import { Component } from "react";
import Header from "./Header";
import Options from "./QuestionComponents/Options.js";
import QuestionContainer from "./QuestionComponents/QuestionContainer.js";
import Summary from "./SideNavComponents/Summary";
import SideNav from "./SideNavComponents/SideNav";
import PreFooter from "./FooterComponents/PreFooter";
import Footer from "./FooterComponents/Footer";
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
        temparray[0] = null;
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
  handleSideNavClick = (e) => {
    this.changeQuestion(e.target.id);
  };
  handleNextButtonClick = (e) => {
    const currId = this.state.currentQuestion.id;
    if (currId < this.state.counts.totalQuestionsCount - 1) {
      this.changeQuestion(currId + 1);
    }
  };
  handlePrevButtonClick = (e) => {
    const currId = this.state.currentQuestion.id;
    if (currId > 0) {
      this.changeQuestion(currId - 1);
    }
  };
  handleClearSelectionClick=()=>{
    let answers = this.state.currentAnswers;
    const currId = this.state.currentQuestion.id;
    answers[currId] = null;
    this.setState({
      currentAnswers: answers,
    });
    // console.log(answers);
    this.updateCounts();
  };
  onClickOption = (e) => {
    let answers = this.state.currentAnswers;
    const currId = this.state.currentQuestion.id;
    answers[currId] = e.target.htmlFor;
    this.setState({
      currentAnswers: answers,
    });
    // console.log(answers);
    this.updateCounts();
  };

  changeQuestion = (id) => {
    const visited = this.state.currentAnswers[id];

    if (visited === undefined) {
      let currA = this.state.currentAnswers;
      currA[id] = null;
      this.setState({
        currentQuestion: this.state.questions[id],
        currentAnswers: currA,
      });
    } else {
      this.setState({
        currentQuestion: this.state.questions[id],
      });
    }
    this.updateCounts();
  };
  handleReviewButtonClick = () => {
    const currId = this.state.currentQuestion.id;
    let review = this.state.reviewQuestions;
    review[currId] = true;

    this.setState({
      reviewQuestions: review,
    });
    this.updateCounts();
  };

  changeSection = (e) => {
    this.setState({
      currentSection: e.target.id,
    });
  };
  updateCounts() {
    let ansQ = 0,
      visQ = 0,
      reviewQ = 0;
    this.state.currentAnswers.forEach((e, ind) => {
      if (e != undefined && e != null) {
        ansQ++;
      }
      if (e !== undefined) {
        visQ++;
      }
    });
    this.state.reviewQuestions.forEach((e) => {
      if (e) {
        reviewQ++;
      }
    });
    // console.log(ansQ, visQ, this.state.currentAnswers);
    this.setState({
      counts: {
        answeredQuestionsCount: ansQ,
        visitedQuestionsCount: visQ,
        reviewQuestionsCount: reviewQ,
        totalQuestionsCount: this.state.currentAnswers.length,
      },
    });
  }
  render() {
    if (this.state.first == false) {
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
              currentAnswers={this.state.currentAnswers}
            />
            <Summary counts={this.state.counts} />
            <SideNav
              questions={this.state.questions}
              currentAnswers={this.state.currentAnswers}
              reviewQuestions={this.state.reviewQuestions}
              handleClick={this.handleSideNavClick}
            />
          </div>
          <PreFooter 
          handleReviewButtonClick={this.handleReviewButtonClick} 
          handleClearSelectionClick={this.handleClearSelectionClick}
          />
          <Footer
            handleNextButtonClick={this.handleNextButtonClick}
            handlePrevButtonClick={this.handlePrevButtonClick}
            
          />
        </div>
      );
    } else {
      return <div />;
    }
  }
}
export default App;
