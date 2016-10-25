import { YyyyPage } from './app.po';

describe('yyyy App', function() {
  let page: YyyyPage;

  beforeEach(() => {
    page = new YyyyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
