import{sideNavController} from "./sideNavController.js";

const sideNavView={

    initiate: function(){
        this.createSideNav();
    },
    createSideNav: function(){
        const numberOfQues=sideNavController.getNumOfQues();
        const sideNavDiv=document.getElementById("sideNav");
        sideNavDiv.innerHTML="";
        for(let j=0;j<numberOfQues;j++)
        {
            const id=j;
            const newele= document.createElement("button");
            newele.className="sideNavButton";
            newele.id="optionNumber_"+id;
            newele.innerHTML="Q"+(id+1);
            newele.onclick=function(){
                sideNavController.setCurrQuestion(id);
        }
            sideNavDiv.appendChild(newele);
        }
    }
}
export{sideNavView};