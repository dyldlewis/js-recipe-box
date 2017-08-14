import { JsRecipeBoxPage } from './app.po';

describe('js-recipe-box App', () => {
  let page: JsRecipeBoxPage;

  beforeEach(() => {
    page = new JsRecipeBoxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
