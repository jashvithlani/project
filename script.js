
  var myObj, myJSON, text, obj;
  
  // Storing data:
  obj =  [
    {
    ques:"this is question 1",
    A:"option A q1",
    B:"option B q1",
    C:"option C q1",
    D:"option D q1"
    },

    {
      ques:"this is question 2",
    A:"option A q2",
    B:"option B q2",
    C:"option C q2",
    D:"option D q2"
    },

    {
      ques:"this is question 3",
    A:"option A q3",
    B:"option B q3",
    C:"option C q3",
    D:"option D q3"
    },

    {
      ques:"this is question 4",
    A:"option A q4",
    B:"option B q4",
    C:"option C q4",
    D:"option D q4"
    },
    {
      ques:"this is question 5",
    A:"option A q5",
    B:"option B q5",
    C:"option C q5",
    D:"option D q5"
    },
    {
      ques:"this is question 6",
    A:"option A q6",
    B:"option B q6",
    C:"option C q6",
    D:"option D q6"
    },
    {
      ques:"this is question 7",
    A:"option A q7",
    B:"option B q7",
    C:"option C q7",
    D:"option D q7"
    },
    {
      ques:"this is question 8",
    A:"option A q8",
    B:"option B q8",
    C:"option C q8",
    D:"option D q8"
    }
  
  ] ;


  function qonscreen(i)
{
  var t=i+1;
  document.getElementById("q_number").innerHTML="Q"+t
  document.getElementById("question").innerHTML=obj[i].ques;
  document.getElementById("option_a").innerHTML=obj[i].A;
  document.getElementById("option_b").innerHTML=obj[i].B;
  document.getElementById("option_c").innerHTML=obj[i].C;
  document.getElementById("option_d").innerHTML=obj[i].D;
}
var i=0;
qonscreen(i);

function nextques()
{
  if(i<obj.length-1)
  i++;
  qonscreen(i);

}


function prevques()
{
  if(i>0)
  i--;
  qonscreen(i);
}

  // myJSON = JSON.stringify(myObj);
  // localStorage.setItem("testJSON", myJSON);
  
  // // Retrieving data:
  // text = localStorage.getItem("testJSON");
  // obj = JSON.parse(text);