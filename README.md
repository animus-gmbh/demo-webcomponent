# demo-webcomponent

This project adds an external web component to the dom.

You can create your own angular (or any other) web component using ngx-build-plus.
@see https://github.com/manfredsteyer/ngx-build-plus/tree/master/sample

### usage
```bash
cd component-integration
npm i
ng serve --port 4200 --host 0.0.0.0 --disable-host-check
```

### create a web component with angular
```bash
git clone https://github.com/manfredsteyer/ngx-build-plus
cd ngx-build-plus/sample
ng build --single-bundle true --prod
```
