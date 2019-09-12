import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('content') content: ElementRef;

  private component: HTMLElement = null;
  private scriptLoaded = false;

  ngOnInit() {

  }

  public loadWebComponent() {
    if (this.component) {
      return false;
    }

    // add script tag
    if (!this.scriptLoaded) {
      this.scriptLoaded = true;
      const script = document.createElement('script');
      script.src = 'http://127.0.0.1:4200/assets/main.4c7a10ec459e54d52a56.js';
      script.crossOrigin = 'anonymous';
      script.type = 'text/javascript';
      // shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
      script.integrity = 'sha384-47+lPaIRihBT7bcfKb9E/n32N/ogUxzhA6abhctfF8d4NLMPO4QOqYguDWpA0iBa';
      document.body.appendChild(script);
    }

    // add web component
    this.component = document.createElement('custom-element');
    const content = this.content.nativeElement;
    content.appendChild(this.component);

  }

  public removeWebComponent() {
    if (!this.component) {
      return false;
    }

    // remove web component
    const content = this.content.nativeElement;
    content.removeChild(this.component);
    this.component = null;
  }
}
