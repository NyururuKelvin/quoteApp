import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quote[] = [
    new Quote(1, 'The man that hath no music in himself, Nor is not moved with concord of sweet sounds, is fit for treasons, stratagems and spoils.','William Shakespeare',"Nyururu",new Date(2020,8,22),0,0),
    new Quote(2, 'Must is a hard nut to crack, but it has a sweet kernel.','Charles Spurgeon', "Nyururu",new Date(2020,8,22),0,0),
    new Quote(3, 'As a man sow, shall he reap. and I know that talk is cheap. But the heat of the battle is as sweet as the victory.' , 'Bob Marley', "Nyururu",new Date(2020,8,22),0,0),
    new Quote(4, 'Yesterday is not ours to recover, but tomorrow is ours to win or lose.' , 'Lyndon B. Johnson', "Nyururu",new Date(2020,8,22),0,0),
    new Quote(5, 'Virtually nothing is impossible in this world if you just put your mind to it and maintain a positive attitude.', 'Lou Holtz', "Nyururu",new Date(2020,8,22),0,0),
  ];
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
    quote.postingDate= new Date()
    
    if (quote.author === ''|| quote.author === '' || quote.blogger === ''){
      alert('all fields are required!')
    }else{
      alert('Your Quote has been added Successfully')
    this.quotes.push(quote);
    
  }
  }
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
    deleteQuote(isComplete, index){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete this Quote?`)
  
        if (toDelete){
          this.quotes.splice(index,1)
        }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}