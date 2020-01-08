import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-colour',
  templateUrl: './colour.component.html',
  styleUrls: ['./colour.component.css']
})
export class ColourComponent implements OnInit {
  colour;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getColours().subscribe(d => {this.colour = d;}
      )
  }

}

