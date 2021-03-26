    function controlInitiate(){
        i=0;
        addSummarySection();
        changeSection("phy")
        
        createSideNav();
        addNavbar();
    }
    
    
    
    
    function updateSummary(i,j){
    if(j!=undefined)
    {
      if(visited[j]==1&&answer[j]=='0'&&notAns[i]==1)
      {
        notAnsCount++;
        
        notAns[i]=0;
        var ans=document.getElementById("notAnsQues");
        if(notAnsCount<10)
          ans.innerHTML="0"+notAnsCount;
          else
          ans.innerHTML=notAnsCount;
      }
    }
      if(visited[i]==0)
      {
      notVisitedCount--;
      visited[i]=1;
      }
      document.getElementById("notVisited").innerHTML=notVisitedCount;
    
    }
        var myObj, myJSON, text, obj;
        
        // fullobj=data;
        //   const fullobj =  require('./data.json');
          
       
        function clearSelection(){
          ["optionA", "optionB", "optionC","optionD"].forEach(function(id) {
            document.getElementById(id).checked = false;
          });
          document.getElementById(i+1).className="sideNavButton";
          if(answer[i]!='0')
          {
            answeredCount--;
          var ans=document.getElementById("ansQues")
          if(answeredCount<10)
          ans.innerHTML="0"+answeredCount;
          else
          ans.innerHTML=answeredCount
          }
          data[i]='UA';
          answer[i]="0";
    
          
        }
        
    
    
        function review(){
    
          if(data[i]=='UA')
          {
            document.getElementById(i+1).className="sideNavButtonToBeReviewed";
            data[i]='RE'
          }
          else if(data[i]=='A')
          {
            document.getElementById(i+1).className="sideNavButtonAnsweredAndReview";
            data[i]='AR'
          }
    
    
          
        }
    
    
    
        function changeSection(id1){
      
          obj=fullobj[id1];
          i=0;
          notVisitedCount=obj.length-1;
          qOnScreen(i);
        createSideNav();
        data=[];
        for(let i=0;i<fullobj.phy.length;i++)
        {data.push('UA');
          answer.push("0");
          visited.push(0);
          notAns.push(1);
      }
      visited[0]=1;
        }
        
      
        function ansQues(this1)
        {


          if(answer[i]==0)
          {
            answeredCount++;
          var ans=document.getElementById("ansQues")
          if(answeredCount<10)
          ans.innerHTML="0"+answeredCount;
          else
          ans.innerHTML=answeredCount
          }
          answer[i]=this1;
          if(data[i]=='UA')
          {
            document.getElementById(i+1).className="sideNavButtonAnswered";
            data[i]='A';
    
          }
          else if(data[i]=='RE')
          {
            document.getElementById(i+1).className="sideNavButtonAnsweredAndReview";
            data[i]='AR';
          }

          
          
        }
        
        function nextQues()
        {
          if(i<obj.length-1)
          i++;
          qOnScreen(i,i-1);
        
        }
       
        function navClick(temp1){
            var temp=document.getElementsByClassName("navActive");
            temp[0].className = temp[0].className.replace("navActive", "");
            temp1.className = "navActive";
        }
        
        function prevQues()
        {
          if(i>0)
          i--;
          qOnScreen(i,i+1);
        }
    