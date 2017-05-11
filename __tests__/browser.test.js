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
    console.log("BEFORE: "+likes_before);
    
    let likes_after = page.click('.extra button.ui')
      .evaluate(() => parseInt(document.querySelector('.content .extra div p').innerHTML))
      .end()
      .then(function (result) {
        expect(likes_before - result).toBe(1);
        done();
      })

    // console.log("AFTER: "+likes_after);
    // expect(likes_before - likes_after).toBe(1);
  }, 20000);
});

// nightmare
//   .goto('https://duckduckgo.com')
//   .type('#search_form_input_homepage', 'github nightmare')
//   .click('#search_button_homepage')
//   .wait('#zero_click_wrapper .c-info__title a')
//   .evaluate(function () {
//     return document.querySelector('#zero_click_wrapper .c-info__title a').href
//   })
//   .end()
//   .then(function(link) {
//     expect(link).to.equal('https://github.com/segmentio/nightmare');
//     done();
//   })
