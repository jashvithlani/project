const quesModel = {
    questions: null,
    currentQuestion: null,
    currentAnswers:[],
    reviewQuestions:[],
    answeredQuestionsCount:0,
    visitedQuestionsCount:1,
    reviewQuestionsCount:0,
    initiate : function(data){
        this.questions=data.questions;
        
        this.currentQuestion=data.questions[0];
        this.questions.forEach(element => {
            this.currentAnswers.push(undefined);
            this.reviewQuestions.push(null);
        });
        this.currentAnswers[0]=null;
    }
}


export {quesModel};