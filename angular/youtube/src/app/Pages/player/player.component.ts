import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  id: any = 'error';
  playerURL = 'https://www.youtube.com/embed/U6XcNpYQ_zI';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('https://youtu.be/' + this.id);
    //this.playerURL = 'https://www.youtube.com/embed/' + this.id;
  }
}
