import {quesModel} from "./quesModel.js";
import {quesView} from "./quesView.js";
import { sideNavController } from "./sideNavController.js";


const questionsController={

    initiate: function(data){
        quesModel.initiate(data);
        quesView.initiate();
    },
    setReviewValue: function(){
        const currQ=this.getCurrQuestion();
        quesModel.reviewQuestions[currQ.id]=1;
    },
    getReviewValue: function(){
        const currQ=this.getCurrQuestion();
        console.log(quesModel.reviewQuestions[currQ.id]);
        return quesModel.reviewQuestions[currQ.id];
    },
    getCurrQuestion: function(){
        
        return quesModel.currentQuestion;
    },
    setCurrQuestion: function(id){
        if(quesModel.currentAnswers[id]==undefined)
        {
            quesModel.currentAnswers[id]=null;
            this.increaseNumberOfQuesVisited(); 
        }
        quesModel.currentQuestion=quesModel.questions[id];
        quesView.renderQuestion();
    },
    getNumOfQues: function(){
        return quesModel.questions.length;
    },
    getCurrAns: function(){
        // console.log(quesModel.currentAnswers);
        return quesModel.currentAnswers[this.getCurrQuestion().id];
    },
    setCurrAns: function(id){
        // console.log(this.getCurrQuestion().id);

        quesModel.currentAnswers[this.getCurrQuestion().id]=id;
    },
    
    increaseNumberOfQuesAnswered: function(){
        quesModel.answeredQuestionsCount++;
        sideNavController.renderSummary();
    },
    decreaseNumberOfQuesAnswered: function(){
        quesModel.answeredQuestionsCount--;
        sideNavController.renderSummary();
    },
    getNumberOfQuesAnswered: function(){
        return quesModel.answeredQuestionsCount;
    },
    increaseNumberOfQuesToReview: function(){
        quesModel.reviewQuestionsCount++;
        sideNavController.renderSummary();
    },
    decreaseNumberOfQuesToReview: function(){
        quesModel.reviewQuestionsCount--;
        sideNavController.renderSummary();
    },
    getNumberOfQuesToReview: function(){
        return quesModel.reviewQuestionsCount;
    },
    increaseNumberOfQuesVisited: function(){
        quesModel.visitedQuestionsCount++;
        sideNavController.renderSummary();
    },
    getNumberOfQuesVisited: function(){
        return quesModel.visitedQuestionsCount;
    },
    handleNextButton: function(){
        
        const currQ=this.getCurrQuestion();
        if(currQ.id<this.getNumOfQues()-1)
        {
            this.setCurrQuestion(currQ.id+1);
        }

    },
    handleBackButton: function(){
        
        const currQ=this.getCurrQuestion();
        if(currQ.id>0)
        {
            this.setCurrQuestion(currQ.id-1);
        }

    }
}

export{questionsController};

