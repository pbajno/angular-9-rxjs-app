import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  @Input() repos:String[]; 
  @Input() user:String;

  constructor() { }

  ngOnInit(): void {
  }

}
