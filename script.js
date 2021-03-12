var fullobj,i;
async function load(){
    await fetch("./data.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        ccopy(data);
        i=0;
        changeToPhy();
        qOnScreen(i);
        createSideNav();
        
      });
}
    
function ccopy(copOfData){
    fullobj=copOfData;
    
}
load();
 
 

    var myObj, myJSON, text, obj;
    
    // fullobj=data;
    //   const fullobj =  require('./data.json');
      
    
    
    function qOnScreen(k)
    {
      var t=k+1;
      document.getElementById("q_number").innerHTML="Q"+t
      document.getElementById("question").innerHTML=obj[k].ques;
      document.getElementById("option_a").innerHTML=obj[k].option_a;
      document.getElementById("option_b").innerHTML=obj[k].option_b;
      document.getElementById("option_c").innerHTML=obj[k].option_c;
      document.getElementById("option_d").innerHTML=obj[k].option_a;
    }
    function changeToMath(){
        obj=fullobj.math;
        i=0;
    qOnScreen(i);
    createSideNav();
    }
    function changeToPhyNum(){
      obj=fullobj.phyNum;
      i=0;
  qOnScreen(i);
  createSideNav();
  }
  function changeToChemNum(){
    obj=fullobj.chemNum;
    i=0;
qOnScreen(i);
createSideNav();
}
    function changeToPhy(){
        obj=fullobj.phy;
        i=0;
    qOnScreen(i);
    createSideNav();
    }
    function changeToChem(){
      obj=fullobj.chem;
      i=0;
  qOnScreen(i);
  createSideNav();
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
