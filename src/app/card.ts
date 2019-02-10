export class Card {
    firstname1:string;
    lastname1:string;
    votes1:number;
    
    constructor(
        firstname: string,
        lastname:string,
        votes:number
        ){
            this.firstname1=firstname;
            this.lastname1=lastname;
            this.votes1=votes;

        }
        get name():string{
            return this.firstname1 +' '+ this.lastname1
        }
}

