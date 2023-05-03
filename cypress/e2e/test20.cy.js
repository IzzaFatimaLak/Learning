describe('Cross-Browser Compatibility', () => {
    const browsers = [    { name: 'firefox', width: 1280, height: 800 },    { name: 'safari', width: 1280, height: 800 },    { name: 'chrome', width: 1280, height: 800 },    { name: 'edge', width: 1280, height: 800 },  ]
  
    browsers.forEach((browser) => {
      it(`Works correctly in ${browser.name}`, () => {
        cy.viewport(browser.width, browser.height)
        cy.visit('https://www.amazon.com/')

      })
    })
  })
  