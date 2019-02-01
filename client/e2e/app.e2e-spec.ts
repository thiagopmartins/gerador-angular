import { FerramentaNFSePage } from './app.po';

describe('Ferramenta NFC-e', () => {
  let page: FerramentaNFSePage;

  beforeEach(() => {
    page = new FerramentaNFSePage();
  });

  it('Deve exibir o titulo', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Ferramenta NFSe');
  });
});
