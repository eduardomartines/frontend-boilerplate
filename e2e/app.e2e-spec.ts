describe('angular-quickstart E2E Tests', function () {
  let expectedMsg = 'My First Angular App';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });
});
