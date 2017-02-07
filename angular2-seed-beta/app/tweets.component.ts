import {Component, Input} from 'angular2/core';
import {TweetService} from './tweet.service';
import {LikeComponent} from './like.component';

@Component({
	selector: 'tweets',
	template: `
		<div *ngFor="#tweet of tweets">
			<div class="media">
				<div class="media-left">
					<a href="#"><img class="media-object" src={{tweet.imgUrl}} alt={{tweet.name}}></a>
				</div>
				<div class="media-body">
					<h4 class="media-heading"> {{ tweet.name }} <span class="tweet-handle">{{ tweet.handle }}</span>
					</h4>
					{{ tweet.body }}
					<div>
						<like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
					</div>
				</div>
			</div>
		</div>
	`,
	styles: [`
		.tweet-handle {
			color: #ccc;
		}
	`],
	directives: [LikeComponent],
	providers: [TweetService]
})
export class TweetsComponent {
	tweets = [];

	constructor(tweetService: TweetService) {
		this.tweets = tweetService.getTweets();
	}
}