import { questionsController } from "./quesController.js";
import{sideNavController} from "./sideNavController.js";
import{topNavController} from "./topNavController.js";

async function load(){
    await fetch("/data.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        questionsController.initiate(data);
        sideNavController.initiate();
        topNavController.initiate(data);
      });
}
load();
    





 
    
    