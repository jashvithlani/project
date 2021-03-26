import{questionsController} from "./quesController.js";
import{sideNavView} from "./sideNavView.js";
const sideNavController={

    initiate: function(){
        sideNavView.initiate();
    },
    getNumOfQues: function(){
        return questionsController.getNumOfQues();
    },
    setCurrQuestion: function(index){
        questionsController.setCurrQuestion(index);
    },
    renderSummary: function(){
        const answeredele=document.getElementById("ansCount");
        
        const count =questionsController.getNumberOfQuesAnswered();
        if(count<9)
        {
            answeredele.innerHTML="0"+count;
        }
        else
        answeredele.innerHTML=count;
        const reviewele=document.getElementById("reviewCount");
        
        const count1 =questionsController.getNumberOfQuesToReview();
        if(count1<9)
        {
            reviewele.innerHTML="0"+count1;
        }
        else
        reviewele.innerHTML=count1;
        
        
    }


}

export{sideNavController};