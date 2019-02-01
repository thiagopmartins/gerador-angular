import { browser, by, element } from 'protractor';

export class FerramentaNFSePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('.title')).getText();
  }
}
