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
      script.src = 'assets/main.2d11822aaff7f5ea352b.js'; // or any other external js file
      script.crossOrigin = 'anonymous';
      script.type = 'text/javascript';
      // shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
      script.integrity = 'sha384-txw1mEUoaTzDrQfs24KlsR/nK8SndayYKKZBKI2nXZ/mhs6CTpJ7KJilvSk942kU';
      document.body.appendChild(script);
    }

    // add web component
    this.component = document.createElement('custom-element');
    this.component.setAttribute('title', 'Hello Animus!');
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
