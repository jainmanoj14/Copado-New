import { LightningElement } from 'lwc';
export default class FormbindingfromJS extends LightningElement {
    fullName='';
    email='';
    phone='';
    handleChange(event){
        const field = event.target.name;

        if(field=='fullName'){
            this.fullName=event.target.value;
           // fullName=fullName.toUpperCase();            
        }
        else if(field=='email'){
            this.email=event.target.value;
        }
        else if(field=='phone'){
            this.phone=event.target.value;
        }
    }
}