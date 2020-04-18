import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class GoogleSearchTest {

    private WebDriver driver;
    private String apiKey = "EGHGOu43mrAkgm4AGjYpX5TNkn19SARE";

    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver","src/main/resources/chromedriver/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://weatherhector.z6.web.core.windows.net/index.html");
    }

/*
    @Test
    public void pruebas(){

    }*/

    @Test
    public void testViewHourly() throws InterruptedException {
        DateFormat dateFormat = new SimpleDateFormat("HH");
        Date date = new Date(System.currentTimeMillis() + TimeUnit.HOURS.toMillis(1));
        Thread.sleep(1000);
        WebElement open_menu = driver.findElement(By.cssSelector("#basic-navbar-nav > div > div > a"));
        open_menu.click();
        WebElement go_hourly = driver.findElement(By.cssSelector("#hourls"));
        go_hourly.click();
        driver.findElement(By.cssSelector("#formBasicEmail")).sendKeys(apiKey);
        driver.findElement(By.cssSelector("#contenedor > div > div:nth-child(1) > input.rbt-input-main.form-control.rbt-input")).sendKeys("madrid");
        Thread.sleep(3000);
        WebElement select = driver.findElement(By.cssSelector("#search-city-item-0"));
        select.click();
        Thread.sleep(3000);
        assertEquals("Madrid-España", driver.findElement(By.cssSelector("#contenedor > div > div:nth-child(1) > input.rbt-input-main.form-control.rbt-input")).getAttribute("value"));
        assertEquals(dateFormat.format(date)+":00",driver.findElement(By.cssSelector("#contenedor > table > tbody > tr:nth-child(1) > td:nth-child(1) > time")).getText());
        assertTrue(driver.findElement(By.cssSelector("#contenedor > table > tbody > tr:nth-child(1) > td:nth-child(2)")).getText().contains("°C"));
        assertTrue(driver.findElement(By.cssSelector("#contenedor > table > tbody > tr:nth-child(1) > td:nth-child(4)")).getText().contains("%"));
        assertTrue(driver.findElement(By.cssSelector("#contenedor > table > tbody > tr:nth-child(12) > td:nth-child(3) > td:nth-child(2) > img")).isDisplayed());

    }

    @Test
    public void testViewDaily() throws InterruptedException {
        DateFormat dateFormat = new SimpleDateFormat("MMM, dd", Locale.ENGLISH);
        Date date = new Date();
        System.out.println("Hora actual: " + dateFormat.format(date));
        Thread.sleep(3000);
        WebElement open_menu = driver.findElement(By.cssSelector("#basic-navbar-nav > div > div > a"));
        open_menu.click();
        WebElement go_hourly = driver.findElement(By.cssSelector("#daily"));
        go_hourly.click();
        driver.findElement(By.cssSelector("#formBasicEmail")).sendKeys(apiKey);
        Thread.sleep(1000);
        driver.findElement(By.cssSelector("#contenedor > div > div:nth-child(1) > input.rbt-input-main.form-control.rbt-input")).sendKeys("Barcelona");
        Thread.sleep(3000);
        WebElement select = driver.findElement(By.cssSelector("#search-city-item-0"));
        select.click();
        Thread.sleep(3000);
        assertEquals("Barcelona-España", driver.findElement(By.cssSelector("#contenedor > div > div:nth-child(1) > input.rbt-input-main.form-control.rbt-input")).getAttribute("value"));
        assertEquals(dateFormat.format(date),driver.findElement(By.cssSelector("#contenedor > table > tbody > tr:nth-child(1) > td:nth-child(1) > time")).getText());
        assertTrue(driver.findElement(By.cssSelector("#contenedor > table > tbody > tr:nth-child(1) > td:nth-child(3)")).getText().contains("°C"));
        assertTrue(driver.findElement(By.cssSelector("#contenedor > table > tbody > tr:nth-child(1) > td:nth-child(4)")).getText().contains("°C"));
        assertTrue(driver.findElement(By.cssSelector("#contenedor > table > tbody > tr:nth-child(1) > td:nth-child(2) > td:nth-child(2) > img")).isDisplayed());
        assertTrue(driver.findElement(By.cssSelector("#contenedor > table > tbody > tr:nth-child(5) > td:nth-child(2) > td:nth-child(2) > img")).isDisplayed());


    }



/*
    @Test
    public void testGooglePage(){

        WebElement searchbox = driver.findElement(By.name("q"));
        searchbox.clear();
        searchbox.sendKeys("gfi");
        searchbox.submit();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        assertEquals("gfi - Buscar con Google", driver.getTitle());
    }*/

    @After
    public void tearDown(){
        driver.quit();
    }

}
