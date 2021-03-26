import{topNavController} from "./topNavController.js";

const topNavView={
    initiate: function(){
        const sections=topNavController.getSections();
        
        this.createButtons();
        
        this.changeSection(sections[0].id);
    },
    createButtons: function(){

        const sections=topNavController.getSections();
        const parent=document.getElementById("navbar");
        sections.forEach((element,index) => {
            
            const newButton=document.createElement("button");
            newButton.onclick=()=>{
                this.changeSection(element.id);
        };
                newButton.innerHTML=element.text;
                newButton.id=element.id;
                parent.appendChild(newButton);
        });
    },
    changeSection: function(id){
        this.removeActiveClass();
        const element=document.getElementById(id);
        element.className="navActive";
        // topNavController.setCurrQuestion(registry.id);
    },
    removeActiveClass: function(){
        const element=document.getElementsByClassName("navActive");
        if(element[0]!=undefined)
        element[0].className=element[0].className.replace("navActive", "");
    }



};

export{topNavView};