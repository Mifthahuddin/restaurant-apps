Feature('End-to-End Tests');

Scenario('View Detail, Add to Favorite, Click Back', async ({ I }) => {
  I.amOnPage('/');
  I.click('View Details');
  await I.waitForElement('.restaurant-detail', 10);
  await I.seeElement('.restaurant-detail .like-button');
  I.click('.restaurant-detail .like-button');
  I.wait(2);
  I.click('Back');
  I.wait(2);
  I.click('Favorite');
  I.wait(2);
  I.click('View Details');
  I.wait(2);
  I.click('.restaurant-detail .like-button');
  I.wait(2);
  I.click('Back');
});
