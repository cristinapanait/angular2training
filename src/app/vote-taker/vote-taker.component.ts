import {Component} from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  templateUrl: './vote-taker.component.html',
  styleUrls: ['./vote-taker.component.css']
})
export class VoteTakerComponent {

  agreed = 0;
  disagreed = 0;
  voters = ['gogu', 'dorel', 'vasilica'];

  onVoted(agreed) {
    agreed ? this.agreed++ : this.disagreed++;
  }
}
