$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Sauce Demo",
  "description": "",
  "id": "sauce-demo",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7648291000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User enters username",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enters Password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSteps.userEntersUsername()"
});
formatter.result({
  "duration": 743071000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userEntersPassword()"
});
formatter.result({
  "duration": 139477200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.userClicksOnLoginButton()"
});
formatter.result({
  "duration": 235823100,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User should Login Successfully with valid Credentials",
  "description": "",
  "id": "sauce-demo;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    },
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is able to Login and able to verify text Products",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.userIsAbleToLoginAndAbleToVerifyTextProducts()"
});
formatter.result({
  "duration": 218910100,
  "status": "passed"
});
formatter.after({
  "duration": 1220775900,
  "status": "passed"
});
});