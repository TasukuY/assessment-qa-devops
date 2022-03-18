import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:3000/')
    driver.sleep(1000);
})

afterAll(async () => {
    await driver.quit()
})

test('testing',async () => {
    const seeAllbtn = await driver.findElement(By.id('see-all'));
    expect(seeAllbtn.isDisplayed).toBeTruthy();
    await driver.sleep(2000);
})



// test('Title shows up when page loads', async () => {
//     const title = await driver.findElement(By.id('title'))
//     const displayed = await title.isDisplayed()
//     expect(displayed).toBe(true)
// })

// test("Check that clicking the Draw button displays the div with id = 'choices'", async () => {
//     const title = await driver.findElement(By.id('title'))
//     const displayed = await title.isDisplayed()
//     expect(displayed).toBe(true)
// })

// test("Check that clicking an “Add to Duo” button displays the div with id = 'player-duo'", async () => {
//     const title = await driver.findElement(By.id('title'))
//     const displayed = await title.isDisplayed()
//     expect(displayed).toBe(true)
// })