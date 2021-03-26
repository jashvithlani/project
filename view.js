 
    function addNavbar()
    {
      var newbutton=document.createElement("button");
      newbutton.className="navActive";
      newbutton.onclick=function(){
        navClick(this); changeSection(this.id);
      };
      newbutton.id=fullobj.navBar[0].id;
      newbutton.innerHTML=fullobj.navBar[0].text;
      var parent=document.getElementById("navbar");
      parent.appendChild(newbutton);
      for(let i=1;i<fullobj.navBar.length;i++)
      {
      var newbutton1=document.createElement("button");
      newbutton1.onclick=function(){
        navClick(this); changeSection(this.id);
      };
      newbutton1.id=fullobj.navBar[i].id;
      newbutton1.innerHTML=fullobj.navBar[i].text;
      parent.appendChild(newbutton1);
      }
    }
    function createSideNav()
    {
        document.getElementById("sideNav").innerHTML="";
        for(let j=0;j<obj.length;j++)
        {
            var newele= document.createElement("button");
            newele.className="sideNavButton";
            newele.id=obj[j].id
            newele.innerHTML="Q"+obj[j].id;
            newele.onclick=function(){
            qOnScreen(j,i);
            i=j;
        }
            document.getElementById("sideNav").appendChild(newele);
        }
    }
  


    function addSummarySection()
    {
        var parent=document.getElementById("sideNavTop");
        parent.innerHTML="";

        var maindiv=document.createElement("div");
        maindiv.className="questionSummary";
        
        var num=document.createElement("div");
        num.className="answeredQuestions";
        num.id="ansQues";
        num.innerHTML="00";
        var text=document.createElement("div");
        text.className="answeredQuestionsText";
        text.innerHTML="Answered";
        
        maindiv.appendChild(num);
        maindiv.appendChild(text);
        parent.appendChild(maindiv);





         maindiv=document.createElement("div");
        maindiv.className="questionSummary";
        
         num=document.createElement("div");
        num.className="notAnsweredQuestions";
        num.id="notAnsQues";
        num.innerHTML="00";
         text=document.createElement("div");
        text.className="notAnsweredQuestionsText";
        text.innerHTML="Not Answered";
        
        maindiv.appendChild(num);
        maindiv.appendChild(text);
        parent.appendChild(maindiv);











        maindiv=document.createElement("div");
        maindiv.className="questionSummary";
        
         num=document.createElement("div");
        num.className="notVisited";
        num.id="notVisited";
        num.innerHTML=notVisitedCount;
         text=document.createElement("div");
        text.className="notVisitedText";
        text.innerHTML="Not Visited";
        
        maindiv.appendChild(num);
        maindiv.appendChild(text);
        parent.appendChild(maindiv);




        maindiv=document.createElement("div");
        maindiv.className="questionSummary";
        maindiv.id="toBeReviewed";
         num=document.createElement("div");
        num.className="toBeReviewed";
        num.innerHTML="00";
         text=document.createElement("div");
        text.className="toBeReviewedText";
        text.innerHTML="To be Reviewed";
        
        maindiv.appendChild(num);
        maindiv.appendChild(text);
        parent.appendChild(maindiv);





        maindiv=document.createElement("div");
        maindiv.className="questionSummary";
        maindiv.id="answeredAndToBeReviewed";
         num=document.createElement("div");
        num.className="AnsweredAndtoBeReviewed";
        num.innerHTML="00";
         text=document.createElement("div");
        text.className="AnsweredAndtoBeReviewedText";
        text.innerHTML="Answered & Review";
        
        maindiv.appendChild(num);
        maindiv.appendChild(text);
        parent.appendChild(maindiv);

        

    }


function qOnScreen(k,previd)
    {
        
      var t=k+1;
      updateSummary(k,previd);
      //adding question to DOM
      var container=document.getElementById("ques");
      container.innerHTML="";
      // var qEle=document.createElement("h2");
      // qEle.innerHTML="Q"+t;
      // qEle.id="q_number";

      // var qu=document.createElement("p");
      // qu.innerHTML=obj[k].ques;
      // qu.id="question";
      
      container.appendChild(qEle);
      container.appendChild(qu);
      
      //adding option1 to DOM

      container=document.getElementById("option_1");
      container.innerHTML="";
      var opt1=document.createElement("input");
      opt1.type="radio";
      opt1.id="optionA";
      opt1.name="answer";
      var lab1=document.createElement("label");
      lab1.id="option_a";
      lab1.onclick=function(){
        ansQues("optionA");

      };
      lab1.setAttribute("for","optionA");
      lab1.innerHTML=obj[k].option_a;
      var div1=document.createElement("div");
      div1.className="check";
      
      
      container.appendChild(opt1);
      container.appendChild(lab1);
      container.appendChild(div1);


      //adding option 2 to DOM

      container=document.getElementById("option_2");
      container.innerHTML="";
      opt1=document.createElement("input");
      opt1.type="radio";
      opt1.id="optionB";
      opt1.name="answer";
      lab1=document.createElement("label");
      lab1.id="option_b";
      lab1.onclick=function(){
        ansQues("optionB");
      };
      lab1.setAttribute("for","optionB");
      lab1.innerHTML=obj[k].option_b;
      div1=document.createElement("div");
      div1.className="check";
      container.appendChild(opt1);
      container.appendChild(lab1);
      container.appendChild(div1);

      //adding option 3 to DOM

      container=document.getElementById("option_3");
      container.innerHTML="";
      opt1=document.createElement("input");
      opt1.type="radio";
      opt1.id="optionC";
      opt1.name="answer";
      lab1=document.createElement("label");
      lab1.id="option_C";
      lab1.onclick=function(){
        ansQues("optionC");
      };
      lab1.setAttribute("for","optionC");
      lab1.innerHTML=obj[k].option_c;
      div1=document.createElement("div");
      div1.className="check";
      container.appendChild(opt1);
      container.appendChild(lab1);
      container.appendChild(div1);
      //adding option 4 to DOM

      container=document.getElementById("option_4");
      container.innerHTML="";
      opt1=document.createElement("input");
      opt1.type="radio";
      opt1.id="optionD";
      opt1.name="answer";
      lab1=document.createElement("label");
      lab1.id="option_D";
      lab1.onclick=function(){
        ansQues("optionD");
      };
      lab1.setAttribute("for","optionD");
      lab1.innerHTML=obj[k].option_d;
      div1=document.createElement("div");
      div1.className="check";
      

      
      container.appendChild(opt1);
      container.appendChild(lab1);
      container.appendChild(div1);
      
      ["optionA", "optionB", "optionC","optionD"].forEach(function(id) {
        document.getElementById(id).checked = false;
      });


      if(data[k]=='A'||data[k]=='AR')
      {
          document.getElementById(answer[k]).checked=true;
      }
    }
  