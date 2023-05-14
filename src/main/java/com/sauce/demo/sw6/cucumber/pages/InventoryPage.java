package com.sauce.demo.sw6.cucumber.pages;

import com.aventstack.extentreports.Status;
import com.sauce.demo.sw6.cucumber.utility.Utility;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import org.testng.Reporter;

import java.util.List;

public class InventoryPage extends Utility {

    @CacheLookup
    @FindBy(className = "title")
    WebElement productsText;

    public String getProductText() {

        return getTextFromElement(productsText);

    }

    public int findActualNumberOfProducts() {

        List<WebElement> productList = findElementsFromWebPage(By.xpath("//img[starts-with(@class,'inventory_item_img')]"));
        return productList.size();
    }

}
