import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:3000/')
    // driver.sleep(1000);
})

afterAll(async () => {
    // await driver.sleep(1000);
    await driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000);
})

test('See all bots button shows up when page loads',async () => {
    const seeAllbtn = await driver.findElement(By.id('see-all'));
    expect(seeAllbtn.isDisplayed).toBeTruthy();
    await driver.sleep(1000);
})

test('Draw button shows up when page loads',async () => {
    const drawBtn = await driver.findElement(By.id('draw'));
    expect(drawBtn.isDisplayed).toBeTruthy();
    await driver.sleep(1000);
})

test("clicking the Draw button displays the div with id = 'choices'",async () => {
    const drawBtn = await driver.findElement(By.id('draw'));
    drawBtn.click();
    const choices = await driver.findElement(By.id('choices'));
    expect(choices.isDisplayed).toBeTruthy();
    await driver.sleep(1000);
})
