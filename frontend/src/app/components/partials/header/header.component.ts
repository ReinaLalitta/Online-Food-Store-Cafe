import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Corrected from styleUrl to styleUrls
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      
  }
}