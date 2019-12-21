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
  public response: string = null;

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
      script.src = 'assets/main.0f4a3b2693cf5c633678.js'; // or any other external js file
      script.crossOrigin = 'anonymous';
      script.type = 'text/javascript';
      // shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
      script.integrity = 'sha384-StfjdgbC/N6bjRTLOSA46QOWd9ToJrwMzqdzfGiMoRiaatq6lp8uZl/tBJhNMHJz';
      document.body.appendChild(script);
    }

    // add web component
    this.component = document.createElement('custom-element');
    this.component.setAttribute('title', 'Hello Animus!');
    this.component.addEventListener('response', (event: CustomEvent) => {
      this.response = event.detail;
    });
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
    this.response = null;
  }
}
