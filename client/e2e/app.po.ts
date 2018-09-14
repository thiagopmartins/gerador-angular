import { browser, by, element } from 'protractor';

export class FerramentaNFCePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('.title')).getText();
  }
}
