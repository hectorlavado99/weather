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

public class moreflights {

    private WebDriver driver;

    @Before
    public void setUp() {
        System.setProperty("webdriver.chrome.driver","src/main/resources/chromedriver/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://moreflights-dinamic.azurewebsites.net/html/index.php");
    }

/*
    @Test
    public void pruebas(){

    }*/

    @Test
    public void testViewHourly() throws InterruptedException {
        Thread.sleep(1000);

        driver.findElement(By.cssSelector("#bLeavingfrom")).sendKeys("madrid");
        Thread.sleep(1500);
        WebElement ida_city = driver.findElement(By.cssSelector("#ui-id-3"));
        ida_city.click();
        driver.findElement(By.cssSelector("#bciudades")).sendKeys("barcelona");
        Thread.sleep(1500);
        WebElement vuelta_city = driver.findElement(By.cssSelector("#ui-id-4"));
        vuelta_city.click();


        WebElement fecha_ida = driver.findElement(By.cssSelector("#checkin"));
        fecha_ida.click();
        Thread.sleep(1500);
        WebElement fecha_ida_value = driver.findElement(By.cssSelector("#ui-datepicker-div > div.ui-datepicker-group.ui-datepicker-group-first > table > tbody > tr:nth-child(5) > td:nth-child(4) > a"));
        fecha_ida_value.click();

        WebElement fecha_vuelta = driver.findElement(By.cssSelector("#checkout"));
        fecha_vuelta.click();
        Thread.sleep(1500);
        WebElement fecha_vuelta_value = driver.findElement(By.cssSelector("#ui-datepicker-div > div.ui-datepicker-group.ui-datepicker-group-middle > table > tbody > tr:nth-child(2) > td:nth-child(2) > a"));
        fecha_vuelta_value.click();

        Thread.sleep(4000);

        WebElement search = driver.findElement(By.cssSelector("#enviar"));
        search.click();
        //assertEquals("Madrid-España", driver.findElement(By.cssSelector("#contenedor > div > div:nth-child(1) > input.rbt-input-main.form-control.rbt-input")).getAttribute("value"));
        Thread.sleep(4000);
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
