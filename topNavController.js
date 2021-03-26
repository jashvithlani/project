import{topNavModel} from "./topNavModel.js";
import{topNavView} from "./topNavView.js";
import{ questionsController} from"./quesController.js";

const topNavController={
    initiate: function(data){
        topNavModel.initiate(data.sections);
        topNavView.initiate();
    },
    getSections: function(){
        return topNavModel.sections;
    },
    setCurrQuestion: function(id){
        questionsController.setCurrQuestion(id);
    }
}
export{topNavController};