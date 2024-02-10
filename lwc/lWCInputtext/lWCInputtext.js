import { LightningElement } from 'lwc';
export default class LWCInputtext extends LightningElement {
    myValue = 'World';

    handleChange(event){
        this.myValue = event.target.value;
    }
}