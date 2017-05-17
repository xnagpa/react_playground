import nightmare from 'nightmare';

describe('when visit the homepage', () => {
  it('welcomes user', async () => {
    let page = nightmare().goto('http://localhost:3000');
    let text = await page.evaluate(() => document.body.textContent).end();
    expect(text).toContain('I like React and JSX, and HAAATE React.createElement');
  });

  it('adds like if pressed', async () => {
    let page = nightmare().goto('http://localhost:3000/posts/1');
    let likes_before = await page.evaluate(() => parseInt(document.querySelector('.content .extra div p').innerHTML));

    let likes_after = page.click('.extra button.ui')
      .evaluate(() => parseInt(document.querySelector('.content .extra div p').innerHTML))
      .end()
      .then(function (result) {
        expect(likes_before - result).toBe(1);
        done();
      })

  }, 20000);
});
