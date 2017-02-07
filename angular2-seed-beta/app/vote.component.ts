import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
	selector: 'vote',
	template: `
		<div class="voteDiv">
			<i
				class="glyphicon glyphicon-menu-up vote-button"
				[class.highlighted]="myVote == 1"
				(click)="upVote()"></i>

			<span>{{ voteCount + myVote }}</span>
			
			<i
				class="glyphicon glyphicon-menu-down vote-button"
				[class.highlighted]="myVote == -1"
				(click)="downVote()"></i>
		</div>
	`,
	styles: [`
		.voteDiv {
			width: 20px;
			text-align: center;
			color: #999;
		}
		.vote-button {
			color: #ccc;
			cursor: pointer;
		}
		.highlighted {
			color: orange;
		}
	`]

})
export class VoteComponent {
	@Input() voteCount= 0;
	@Input() myVote = 0;
	@Output() vote = new EventEmitter();

	upVote() {
		if (this.myVote == 1) return;

		this.myVote++;
		this.vote.emit({newValue: this.myVote});
	}

	downVote() {
		if (this.myVote == -1) return;
		
		this.myVote--;
		this.vote.emit({newValue: this.myVote});
	}
}