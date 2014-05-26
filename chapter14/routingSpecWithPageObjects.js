// File: chapter14/routingSpecWithPageObjects.js

// The Page Objects are ideally in separate files
// to allow for reuse across all the tests,
// but here are listed together for ease of understanding

function TeamsListPage() {
  this.open = function() {
    browser.get('/');
  };

  this.getTeamsListRows = function() {
    return element.all(by.repeater('team in teamListCtrl.teams'));
  };

  this.getRankForRow = function(row) {
    return element(
      by.repeater('team in teamListCtrl.teams')
        .row(row).column('team.rank'));
  };

  this.getNameForRow = function(row) {
    return element(
      by.repeater('team in teamListCtrl.teams')
        .row(row).column('team.name'));
  };

  this.isLoginLinkVisible = function() {
    return element(by.css('.login-link')).isDisplayed();
  };

  this.isLogoutLinkVisible = function() {
    return element(by.css('.logout-link')).isDisplayed();
  };
}

describe('Routing Test With Page objects', function() {

  it('should show teams on the first page', function() {
    var teamsListPage = new TeamsListPage();

    teamsListPage.open();

    expect(teamsListPage.getTeamsListRows().count()).toEqual(5);

    expect(teamsListPage.getRankForRow(0).getText())
      .toEqual('1');
    expect(teamsListPage.getNameForRow(0).getText())
      .toEqual('Spain');

    expect(teamsListPage.getRankForRow(4).getText())
      .toEqual('5');
    expect(teamsListPage.getNameForRow(4).getText())
      .toEqual('Uruguay');

    // Check that login link is shown and
    // logout link is hidden
    expect(teamsListPage.isLoginLinkVisible()).toBe(true);
    expect(teamsListPage.isLogoutLinkVisible()).toBe(false);
  });
});
