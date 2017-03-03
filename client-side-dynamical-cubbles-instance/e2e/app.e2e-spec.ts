import { ClientSideDynamicalCubblesInstancePage } from './app.po';

describe('client-side-dynamical-cubbles-instance App', () => {
  let page: ClientSideDynamicalCubblesInstancePage;

  beforeEach(() => {
    page = new ClientSideDynamicalCubblesInstancePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
