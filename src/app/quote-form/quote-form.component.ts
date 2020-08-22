import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
  @Output() sendQuote = new EventEmitter<any>();
  // quote: string;
  // author: string;
  newQuote = new Quote("","","",new Date());

  getQuotes(get){
    var sendingQuote
    // console.log(get.value);
    sendingQuote = new Quote(get.value.theQuote, get.value.author, get.value.person, get.value.timeCreated)
    this.sendQuote.emit(sendingQuote);
    get.reset();//Clears the form after submitting
  }
  constructor() { }

  ngOnInit() {
  }

}