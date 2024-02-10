import { LightningElement } from 'lwc';
export default class Conditionallyrenderelement extends LightningElement {

    myValue = "Conditionally rendering";

    showMe = false;
    handleChange(event){
        this.showMe= event.target.checked;

    }


}