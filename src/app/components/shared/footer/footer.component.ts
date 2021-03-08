import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  today = new Date();
  count: number;
  constructor() { }

  ngOnInit() {
    this.visita();
  }
  visita() {
    this.count = this.count + 1;
  }
}
