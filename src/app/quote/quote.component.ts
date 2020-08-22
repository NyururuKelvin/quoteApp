import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  animations: [
    
    trigger('theQuotes', [
      transition('* => *',[
        query(':enter', style({ opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity:0, transform: 'translateY(-75%)',offset: 0}),
            style({opacity:.5, transform: 'translateY(35px)',offset: .3}),
            style({opacity:1, transform: 'translateY(0)',offset: 1}),
          ]))]),{optional: true}),

          query(':leave', stagger('300ms',[
            animate('.6s ease-in',keyframes([
              style({opacity:1, transform: 'translateY(0%)',offset: 0}),
              style({opacity:.5, transform: 'translateY(35px)',offset: .3}),
              style({opacity:0, transform: 'translateY(-75%)',offset: 1}),
            ]))]),{optional: true}),
      ])
    ])
  ]
})
export class QuoteComponent implements OnInit {
  // myQuote : any= {
  //   id: 1,
  //   quote: String,
  //   by: String
  // }

  theQuotes=[new Quote('If opportunity doesn’t knock, build a door.',"Nyururu Kelvin","Me",new Date(2020,8,20))]

  deleteQuote(isComplete,index) {
    this.theQuotes.splice(index,1);
  }
  receiveQuote(get){
    get.timeCreated = new Date (get.timeCreated);
    this.theQuotes.push(get);
    console.log(this.theQuotes);
  }
  public count = 0;

  adding(index){
    this.theQuotes[index].votes = this.theQuotes[index].votes + 1;
    if (this.theQuotes[index].votes>this.count) {
      this.count=this.theQuotes[index].votes;
    }
    console.log(this.theQuotes[index].votes);
  }
  removing(index){
    if(this.theQuotes[index].votes > 0){
      this.theQuotes[index].votes = this.theQuotes[index].votes - 1;
    } else this.theQuotes[index].votes = 0;
    console.log(this.theQuotes[index].votes);
  }

  constructor() { }

  ngOnInit() {
    // this.myQuote.quote = "Remember no one can make you feel inferior without your consent.";
    // this.myQuote.by= "Eleanor Roosevelt";
  }

}