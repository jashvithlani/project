import FormatText from "./FormatText.js";
function Summary(props) {
  return (
    <div className="float-child-1-top" id="sideNavTop">
      <div className="questionSummary">
        <div className="answeredQuestions" id="ansCount">
          <FormatText count={props.counts.answeredQuestionsCount} />
        </div>
        <div className="answeredQuestionsText">Answered</div>
      </div>
      <div className="questionSummary">
        <div className="notAnsweredQuestions">
          <FormatText
            count={
              props.counts.visitedQuestionsCount -
              props.counts.answeredQuestionsCount
            }
          />
        </div>
        <div className="notAnsweredQuestionsText">Not Answered</div>
      </div>
      <div className="questionSummary">
        <div className="notVisited">
          <FormatText
            count={
              props.counts.totalQuestionsCount -
              props.counts.visitedQuestionsCount
            }
          />
        </div>
        <div className="notVisitedText">Not Visited</div>
      </div>
      <div className="questionSummary">
        <div className="toBeReviewed" id="reviewCount">
          <FormatText count={props.counts.reviewQuestionsCount} />
        </div>
        <div className="toBeReviewedText">To be Reviewed</div>
      </div>
    </div>
  );
}
export default Summary;
