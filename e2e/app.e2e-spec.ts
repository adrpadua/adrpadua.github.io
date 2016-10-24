import { AdrpaduaPage } from './app.po';

describe('adrpadua App', function() {
  let page: AdrpaduaPage;

  beforeEach(() => {
    page = new AdrpaduaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
