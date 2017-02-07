import {Component, Input} from 'angular2/core';

@Component({
	selector: 'zippy',
	template: `
		<div class="panel panel-default">
			<div class="panel-heading">
    			<h3 class="panel-title"> {{ title }}
    				<i class="glyphicon zippy-toggle"
    					[ngClass]="{
    						'glyphicon-chevron-up': isOpen,
    						'glyphicon-chevron-down': !isOpen}"
    					(click)="toggle()"></i>
    			</h3>
			</div>
			<div class="panel-body" [hidden]="!isOpen">
    			<ng-content></ng-content>
			</div>
		</div>
	`,
	styles: [`
		.zippy-toggle {
			float: right
		}
	`]
})
export class ZippyComponent {
	@Input() title;
	isOpen = false;

	toggle() {
		this.isOpen = !this.isOpen;
		console.log("toggled", this.isOpen);
	}
}