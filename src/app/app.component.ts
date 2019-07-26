import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Book shop';

  @ViewChild('appTitle', { static: false })
  appTitleField: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit() {
    this.appTitleField.nativeElement.innerText = 'Welcome to Book Shop!';
  }
}
