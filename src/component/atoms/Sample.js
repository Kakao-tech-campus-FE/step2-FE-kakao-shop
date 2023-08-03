import { isElement } from "lodash";

const elementCheck = isElement(mountCheck(Component)(payload));

if(!elemntCheck){
    console.log("mountCheck occured error")
}