// @ts-nocheck
import { BaseComponent } from 'https://uc-jsdk.web.app/build/symbiote.js';

class MyApp extends BaseComponent {};
MyApp.template = /*html*/ `
<div>${Date.now()}</div>
`;
MyApp.reg('my-app');