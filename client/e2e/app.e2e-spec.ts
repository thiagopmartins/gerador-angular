import { FerramentaNFCePage } from './app.po';

describe('Ferramenta NFC-e', () => {
  let page: FerramentaNFCePage;

  beforeEach(() => {
    page = new FerramentaNFCePage();
  });

  it('Deve exibir o titulo', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Ferramenta NFCe');
  });
});
