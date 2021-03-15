var fullobj,i;
async function load(){
    await fetch("./data.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        ccopy(data);
        i=0;
        changeSection("phy")
        qOnScreen(i);
        createSideNav();
        addNavbar();
      });
}
    
function ccopy(copOfData){
    fullobj=copOfData;
    
}
load();
 
 

    var myObj, myJSON, text, obj;
    
    // fullobj=data;
    //   const fullobj =  require('./data.json');
      
    
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
    function clearSelection(){
      ["optionA", "optionB", "optionC","optionD"].forEach(function(id) {
        document.getElementById(id).checked = false;
      });
      document.getElementById(i+1).style.backgroundColor="rgb(255, 255, 255)";
      return false;
    }
    function review(){
      document.getElementById(i+1).style.backgroundColor="rgb(147, 204, 100)";
    }
    function changeSection(id1){
  
      obj=fullobj[id1];
      i=0;
      qOnScreen(i);
    createSideNav();
    }
    function qOnScreen(k)
    {
      var t=k+1;
      //adding question to DOM
      var container=document.getElementById("ques");
      container.innerHTML="";
      var qEle=document.createElement("h2");
      qEle.innerHTML="Q"+t;
      qEle.id="q_number";

      var qu=document.createElement("p");
      qu.innerHTML=obj[k].ques;
      qu.id="question";
      
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
        ansQues(this);
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
        ansQues(this);
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
        ansQues(this);
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
        ansQues(this);
      };
      lab1.setAttribute("for","optionD");
      lab1.innerHTML=obj[k].option_d;
      div1=document.createElement("div");
      div1.className="check";
      

      
      container.appendChild(opt1);
      container.appendChild(lab1);
      container.appendChild(div1);
      // document.getElementById("option_a").innerHTML=obj[k].option_a;
      // document.getElementById("option_b").innerHTML=obj[k].option_b;
      // document.getElementById("option_c").innerHTML=obj[k].option_c;
      // document.getElementById("option_d").innerHTML=obj[k].option_d;
      ["optionA", "optionB", "optionC","optionD"].forEach(function(id) {
        document.getElementById(id).checked = false;
      });
    }
  
  
    function ansQues(this1)
    {
      
      
      document.getElementById(i+1).style.backgroundColor="rgb(42, 98, 161)";
    }
    
    function nextQues()
    {
      if(i<obj.length-1)
      i++;
      qOnScreen(i);
    
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
            qOnScreen(j);
            i=j;
        }
            document.getElementById("sideNav").appendChild(newele);
        }
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
      qOnScreen(i);
    }
    
    
    // var i=0;
    // qOnScreen(i);
    // createSideNav();
    
      // myJSON = JSON.stringify(myObj);
      // localStorage.setItem("testJSON", myJSON);
      
      // // Retrieving data:
      // text = localStorage.getItem("testJSON");
      // obj = JSON.parse(text);
