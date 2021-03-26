import{ questionsController} from"./quesController.js";

const quesView = {
    initiate: function(){
        this.renderQuestion();
        this.createBackButton();
        this.createNextButton();
        this.addEventListenerToBack();
        
        this.addEventListenerToNext();
        this.addEventListenerToReview();
    },

    renderQuestion: function(){
        const containerDiv= document.getElementById("quesAndOptionsContainer");
        const quesDiv=this.createQuestion();
        const optionsDiv=this.createOptions();

        containerDiv.innerHTML="";
        containerDiv.appendChild(quesDiv);
        containerDiv.appendChild(optionsDiv);
        if(questionsController.getCurrAns()==undefined)
        questionsController.setCurrAns(null);
        this.addEventListener();
        this.renderOptions();


    },


    createQuestion: function(){
        const currQ=questionsController.getCurrQuestion();
        
        const quesDiv=document.createElement("div");
            quesDiv.setAttribute("id","questionContainer");
        const quesNo=document.createElement("h2");
        const qNumber=currQ.id+1
            quesNo.innerHTML="Q"+qNumber;
            quesNo.id="q_number";
        const que=document.createElement("p");
            que.innerHTML=currQ.ques+qNumber;
            que.id="question";

        quesDiv.appendChild(quesNo);
        quesDiv.appendChild(que);
        return quesDiv;
    },


    createOptions: function(){
        const currQ=questionsController.getCurrQuestion();
        const optionsDiv=document.createElement("ul");
            optionsDiv.setAttribute("id","listAns");
        
        currQ.options.forEach((ele,index)=>{
            optionsDiv.innerHTML+=`
             <li >
                 <input type="radio" id="option_`+index+`" name="radioAnswer">
                 <label for="option_`+index+`" name="answer">`+ele.text+`</label>
                 <div class="check"></div>
             </li>`;
        })
    return optionsDiv;
    },


    addEventListener: function(){
        const options1=document.getElementsByName("answer");
        const currQ=questionsController.getCurrQuestion();
        options1.forEach((e,index)=>{
            e.addEventListener('click',()=>{
                if(questionsController.getCurrAns()==null){
                questionsController.increaseNumberOfQuesAnswered();
                }
                questionsController.setCurrAns(index);
                const val= questionsController.getReviewValue();
                const button=document.getElementById("optionNumber_"+currQ.id);
                if(val==1)
                {
                    button.className="sideNavButtonAnsweredAndReview";
                }
                else
                {
                    button.className="sideNavButtonAnswered";
                }
                
                this.renderOptions();
            },true);

        })
        
    },


    renderOptions: function(){
        const options=document.getElementsByName("radioAnswer");
        options.forEach((ele,index)=>{
            if(questionsController.getCurrAns()==index)
            {
                ele.checked=true;
            }
            else
            ele.checked=false;
        })
    },
    createNextButton: function(){
        const foot=document.getElementById("footerButtons");
        foot.innerHTML+=`
            <div class="nextdiv" id="next">
                <button id="nextButton">Next &rarr;</button>
            </div>
            <div class="endtestdiv" id="endtest">
               <button>END TEST</button>
            </div>
        `;
        
        
    },
    addEventListenerToNext(){
        const element=document.getElementById("nextButton");
        element.addEventListener('click',()=>{questionsController.handleNextButton()},true);
    },
    createBackButton: function(){
        const foot=document.getElementById("footerButtons");
        foot.innerHTML+=`
       <div class="prevdiv" id="prev">
        <button id="prevButton">&larr; Back</button>
        </div>
        
        `;
        
    },
    addEventListenerToBack: function(){
        
        const element=document.getElementById("prevButton");
        // console.log(element);
        element.addEventListener('click',()=>{
            questionsController.handleBackButton();
        },true);
    },
    addEventListenerToReview: function(){
        const element=document.getElementById("reviewButton");
        element.addEventListener('click',()=>{
            const currQ=questionsController.getCurrQuestion();
            const button=document.getElementById("optionNumber_"+currQ.id);
            questionsController.setReviewValue();
            if(questionsController.getReviewValue()!=null){
                questionsController.increaseNumberOfQuesToReview();
                }
            if(questionsController.getCurrAns()==undefined||questionsController.getCurrAns()==null)
            {
                
                button.className="sideNavButtonToBeReviewed";
            }
            else
            {
                button.className="sideNavButtonAnsweredAndReview";
            }
            
        },true)
    }

}

export{quesView};