import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-log-info',
  templateUrl: './log-info.component.html',
  styleUrls: ['./log-info.component.scss']
})
export class LogInfoComponent implements OnInit {
  @Input() element: any;

  constructor() { }

  ngOnInit() {
  }

}
