export class Quote {
    showDescription: boolean;
    constructor(public id: number,public name: string,public author: string, public blogger:string,public postingDate: Date, public clickCounter: number, public clickCounter1: number){
      this.showDescription=false;
    }
  }