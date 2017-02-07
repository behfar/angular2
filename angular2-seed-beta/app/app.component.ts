import {Component} from 'angular2/core';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoteComponent} from './vote.component';
import {TweetsComponent} from './tweets.component';
import {ZippyComponent} from './zippy.component';

@Component({
    selector: 'my-app',
    template: `
    	<div *ngIf="false">
			<favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
			<like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
			<vote [myVote]="vote.myVote" [voteCount]="vote.voteCount" (vote)="onVoteChange($event)"></vote>
			<tweets></tweets>
		</div>
		<zippy title="This is the title">
			Here is the content.
		</zippy>
		<zippy title="Another zippy, another title...">
			Shumbabla should never have run for president of Gambonia because he is a hutu!
		</zippy>
		`,
    directives: [FavoriteComponent, LikeComponent, VoteComponent, TweetsComponent, ZippyComponent]
})
export class AppComponent {

	vote = {
		voteCount: 9,
		myVote: -1
	}

	post = {
		isFavorite: false
	}

	tweet = {
		totalLikes: 10,
		iLike: false
	}

	onFavoriteChange($event){
		console.log($event);
	}

	onVoteChange($event) {
		console.log($event);
	}
}