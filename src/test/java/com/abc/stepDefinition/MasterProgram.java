package com.abc.stepDefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;

public class MasterProgram {
	
	public static WebDriver driver;
	public static Actions act;
	public static JavascriptExecutor js;
	
	@Before
	public void siteLaunch() {
		WebDriverManager.chromedriver().setup();
		ChromeOptions opt=new ChromeOptions();
		opt.addArguments("--disable-notifications");
		driver=new ChromeDriver(opt);
		act=new Actions(driver);
		js=((JavascriptExecutor)driver);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
		driver.manage().deleteAllCookies();
		driver.get("https://www.policybazaar.com");
		String tit=driver.getTitle();
		System.out.println("Title of current webpage is "+tit);
		System.out.println("Site lauch successfully");
	}
	
	
	@Given("^that user already on policybazaar home site$")
	public void that_user_already_on_policybazaar_home_site() throws Throwable {
		Assert.assertEquals("Sign in",driver.findElement(By.xpath("//a[contains(text(),'Sign in')]")).getText());
		System.out.println("Verification of user is already on policybazaar home page is done");
		  
	}

	@When("^mouse on renew your policy section$")
	public void mouse_on_renew_your_policy_section() throws Throwable {
		act.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Renew Your Policy ')]"))).build().perform();
		System.out.println("Verification of mouse on renew your policy is done");
	}

	@When("^click on motor renewal section$")
	public void click_on_motor_renewal_section() throws Throwable {
		driver.findElement(By.xpath("//i[@class='menu-ico icon-bg renew-motor-insurance']")).click();
	    Assert.assertEquals("View Prices",driver.findElement(By.xpath("//span[contains(text(),'View Prices')]")).getText());
	    System.out.println("Verification of click on motor renewal section is done");
	}

	@Then("^click on proceed without car number$")
	public void click_on_proceed_without_car_number() throws Throwable {
		driver.findElement(By.xpath("//a[@class='btn-proceed']")).click();
		Assert.assertEquals("Select City & RTO",driver.findElement(By.xpath("//span[contains(text(),'Select City & RTO')]")).getText());
	    System.out.println("Verification of click on proceed without car number is done");
	}

	@When("^select CityRto \"([^\"]*)\"$")
	public void select_CityRto(String cityRto) throws Throwable {
		driver.findElement(By.xpath("//input[@aria-autocomplete='list']")).click();
		List <WebElement> cr=driver.findElements(By.xpath("//ul[@role='listbox']/li[@role='option']"));
		String myData=cityRto;
		System.out.println(cr.size());
		for(int i=0;i<=cr.size()-1;i++)
		{
			WebElement one=cr.get(i);
			String dt=one.getText();
			System.out.println(dt);
			if(dt.equals(myData))
			{
				one.click();
				break;
			}
		}
		Assert.assertEquals("Others",driver.findElement(By.xpath("//div[@class='show']")).getText());
		System.out.println("Verification of select cityRto is done");
	    
	}


	@Then("^select CarModel\"([^\"]*)\" and \"([^\"]*)\"$")
	public void select_CarModel(String carModel, String index) throws Throwable {
		driver.findElement(By.xpath("//input[@placeholder='Search car brand']")).click();
		List <WebElement> cm=driver.findElements(By.xpath("//li[@role='option']/span"));
	    String myData=carModel;
	    for(int i=0;i<=cm.size()-1;i++)
	    {
	    	WebElement one=cm.get(i);
	    	String dt=one.getText();
	    	System.out.println(dt);
	    	if(dt.equals(myData))
	    	{
	    		driver.findElement(By.xpath("//li[@data-suggestion-index='"+index+"']")).click();
	    		break;
	    	}
	    }
	    Assert.assertEquals("Diesel",driver.findElement(By.xpath("//span[@id='Diesel']")).getAttribute("id"));
	    System.out.println("Verification of carmodel selection is done");
	    
	}

	@Then("^select CarFuelType\"([^\"]*)\"$")
	public void select_CarFuelType(String carFuelType) throws Throwable {
		driver.findElement(By.xpath("//span[@id='"+carFuelType+"']")).click();
		Assert.assertEquals("All variants",driver.findElement(By.xpath("//li[contains(text(),'All variants')]")).getText());
	    System.out.println("Verification of carFuelType selection is done");
	}

	@Then("^select Varient\"([^\"]*)\" and \"([^\"]*)\"$")
	public void select_Varient(String varient, String vIndex) throws Throwable {
		driver.findElement(By.xpath("//input[@aria-autocomplete='list']")).click();
		List <WebElement> sv=driver.findElements(By.xpath("//ul[@role='listbox']/li[@role='option']/span"));
		String myData=varient;
		for(int i=0;i<=sv.size()-1;i++)
		{
			WebElement one=sv.get(i);
			String dt=one.getText();
			System.out.println(dt);
			if(dt.equals(myData))
			{
				driver.findElement(By.xpath("//ul[@role='listbox']/li[@data-suggestion-index='"+vIndex+"']")).click();
				break;
			}
		}
		Assert.assertEquals("Brand New Car",driver.findElement(By.xpath("//li[@class='col-sm-4 col-xs-4 ']/span/b[contains(text(),'Brand New Car')]")).getText());
		System.out.println("Verification of select varient is done");
	  
	}

	@Then("^select RegistrationYear\"([^\"]*)\"$")
	public void select_RegistrationYear(String carRegistationYear) throws Throwable {
		driver.findElement(By.xpath("//li[@class='col-sm-4 col-xs-4 ']/span/b[contains(text(),'"+carRegistationYear+"')]")).click();
		Assert.assertEquals("Full Name",driver.findElement(By.xpath("//label[contains(text(),'Full Name')]")).getText());
	   System.out.println("Verification of selection of registrationYear is done");
	}

	@Then("^enter \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and click on viewPrices$")
	public void enter_and_and_and_click_on_viewPrices(String fullName, String email, String mobileNo) throws Throwable {
		driver.findElement(By.xpath("//input[@id='name']")).sendKeys(fullName);
		driver.findElement(By.xpath("//input[@id='email']")).sendKeys(email);
		driver.findElement(By.xpath("//input[@id='mobileNo']")).sendKeys(mobileNo);
		WebElement viewPrice=driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div/div/div/div[2]/div/div[2]/div/div/div/div[2]/button"));
		viewPrice.click();
		//js.executeScript("arguments[0],click();",viewPrice);

	}

	


}
