import FormatText from "./FormatText.js";
function Summary(props) {

  const summary = [
    {
        Class : "answeredQuestions",
        text : 'Answered',
        count : props.counts.answeredQuestionsCount
    },
    {
        Class : "notAnsweredQuestions",
        text : 'Not Answered',
        count : props.counts.visitedQuestionsCount - props.counts.answeredQuestionsCount
    },
    {
        Class : "notVisited",
        text : 'Not Visited',
        count : props.counts.totalQuestionsCount - props.counts.visitedQuestionsCount
    },
    {
        Class : "toBeReviewed",
        text : 'To be Reviewed',
        count : props.counts.reviewQuestionsCount
    }
];
  return (
<div className="float-child-1-top" id="sideNavTop">
  {summary.map((summary)=>{
    return(
      <div className="questionSummary">
        <div className={summary.Class} >
          <FormatText count={summary.count} />
        </div>
        <div className={summary.Class+'Text'}>{summary.text}</div>
      </div>
    )
  })
  }
</div>

   
  );
}
export default Summary;
