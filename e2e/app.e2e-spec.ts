import { CubblesAngular2IntegrationPage } from './app.po';

describe('cubbles-angular2-integration App', function() {
  let page: CubblesAngular2IntegrationPage;

  beforeEach(() => {
    page = new CubblesAngular2IntegrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
