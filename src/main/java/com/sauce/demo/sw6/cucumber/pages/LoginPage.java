package com.sauce.demo.sw6.cucumber.pages;

import com.aventstack.extentreports.Status;
import com.sauce.demo.sw6.cucumber.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.Reporter;

public class LoginPage extends Utility {
    @CacheLookup
    @FindBy(id ="user-name")
    WebElement userNameField;
    @CacheLookup
    @FindBy( id="password" )
    WebElement passwordField;
    @CacheLookup
    @FindBy( id="login-button" )
    WebElement loginButton;

    public void enterUserName(String userName){
        sendTextToElement(userNameField,userName);

    }

    public void enterPassword(String password){

        sendTextToElement(passwordField,password);

    }

    public void clickOnLoginButton(){

        clickOnElement(loginButton);

    }



}
