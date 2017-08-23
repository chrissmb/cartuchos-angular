import { CartuchosAngularPage } from './app.po';

describe('cartuchos-angular App', () => {
  let page: CartuchosAngularPage;

  beforeEach(() => {
    page = new CartuchosAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
