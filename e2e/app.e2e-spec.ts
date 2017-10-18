import { DatabasePage } from './app.po';

describe('database App', function() {
  let page: DatabasePage;

  beforeEach(() => {
    page = new DatabasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
