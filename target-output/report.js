$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/TejasSelOwn/PolicybazaarByCucumberExamples/policybazaar/policybazaarData.feature");
formatter.feature({
  "line": 1,
  "name": "Test renew your policy section in policybazzar site",
  "description": "",
  "id": "test-renew-your-policy-section-in-policybazzar-site",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify motor renewal fuctionality working properly or not",
  "description": "",
  "id": "test-renew-your-policy-section-in-policybazzar-site;verify-motor-renewal-fuctionality-working-properly-or-not",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@EndToEndTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "that user already on policybazaar home site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "mouse on renew your policy section",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on motor renewal section",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on proceed without car number",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "select CityRto \"\u003ccityRto\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "select CarModel\"\u003ccarModel\u003e\" and \"\u003cindex\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "select CarFuelType\"\u003ccarFuelType\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "select Varient\"\u003cvarient\u003e\" and \"\u003cvIndex\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "select RegistrationYear\"\u003ccarRegistationYear\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "enter \"\u003cfullName\u003e\" and \"\u003cemail\u003e\" and \"\u003cmobileNo\u003e\" and click on viewPrices",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "test-renew-your-policy-section-in-policybazzar-site;verify-motor-renewal-fuctionality-working-properly-or-not;",
  "rows": [
    {
      "cells": [
        "cityRto",
        "carModel",
        "index",
        "carFuelType",
        "varient",
        "vIndex",
        "carRegistationYear",
        "fullName",
        "email",
        "mobileNo"
      ],
      "line": 19,
      "id": "test-renew-your-policy-section-in-policybazzar-site;verify-motor-renewal-fuctionality-working-properly-or-not;;1"
    },
    {
      "cells": [
        "MH04-THANE(Maharashtra)",
        "HYUNDAI - i 20",
        "172",
        "Petrol",
        "1.2 ASTA (O) WITH SUNROOF (1197 cc)",
        "3",
        "2021",
        "Tejas Patil",
        "t@gmail.com",
        "7485964565"
      ],
      "line": 20,
      "id": "test-renew-your-policy-section-in-policybazzar-site;verify-motor-renewal-fuctionality-working-properly-or-not;;2"
    },
    {
      "cells": [
        "DL13-EAST DELHI(Delhi)",
        "TATA - Harrier",
        "441",
        "Diesel",
        "Kaziranga XZA Plus (1956 cc)",
        "0",
        "2021",
        "Rutik Patil",
        "r@gmail.com",
        "8525654595"
      ],
      "line": 21,
      "id": "test-renew-your-policy-section-in-policybazzar-site;verify-motor-renewal-fuctionality-working-properly-or-not;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4008682600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify motor renewal fuctionality working properly or not",
  "description": "",
  "id": "test-renew-your-policy-section-in-policybazzar-site;verify-motor-renewal-fuctionality-working-properly-or-not;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@EndToEndTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "that user already on policybazaar home site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "mouse on renew your policy section",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on motor renewal section",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on proceed without car number",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "select CityRto \"MH04-THANE(Maharashtra)\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "select CarModel\"HYUNDAI - i 20\" and \"172\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "select CarFuelType\"Petrol\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "select Varient\"1.2 ASTA (O) WITH SUNROOF (1197 cc)\" and \"3\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "select RegistrationYear\"2021\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "enter \"Tejas Patil\" and \"t@gmail.com\" and \"7485964565\" and click on viewPrices",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MasterProgram.that_user_already_on_policybazaar_home_site()"
});
formatter.result({
  "duration": 85484100,
  "status": "passed"
});
formatter.match({
  "location": "MasterProgram.mouse_on_renew_your_policy_section()"
});
formatter.result({
  "duration": 137125900,
  "status": "passed"
});
formatter.match({
  "location": "MasterProgram.click_on_motor_renewal_section()"
});
formatter.result({
  "duration": 441765100,
  "status": "passed"
});
formatter.match({
  "location": "MasterProgram.click_on_proceed_without_car_number()"
});
formatter.result({
  "duration": 588711900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MH04-THANE(Maharashtra)",
      "offset": 16
    }
  ],
  "location": "MasterProgram.select_CityRto(String)"
});
formatter.result({
  "duration": 9887081500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HYUNDAI - i 20",
      "offset": 16
    },
    {
      "val": "172",
      "offset": 37
    }
  ],
  "location": "MasterProgram.select_CarModel(String,String)"
});
formatter.result({
  "duration": 3770496700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Petrol",
      "offset": 19
    }
  ],
  "location": "MasterProgram.select_CarFuelType(String)"
});
formatter.result({
  "duration": 287836200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1.2 ASTA (O) WITH SUNROOF (1197 cc)",
      "offset": 15
    },
    {
      "val": "3",
      "offset": 57
    }
  ],
  "location": "MasterProgram.select_Varient(String,String)"
});
formatter.result({
  "duration": 452575600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021",
      "offset": 24
    }
  ],
  "location": "MasterProgram.select_RegistrationYear(String)"
});
formatter.result({
  "duration": 309961100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tejas Patil",
      "offset": 7
    },
    {
      "val": "t@gmail.com",
      "offset": 25
    },
    {
      "val": "7485964565",
      "offset": 43
    }
  ],
  "location": "MasterProgram.enter_and_and_and_click_on_viewPrices(String,String,String)"
});
formatter.result({
  "duration": 295296200,
  "status": "passed"
});
formatter.before({
  "duration": 2757739100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify motor renewal fuctionality working properly or not",
  "description": "",
  "id": "test-renew-your-policy-section-in-policybazzar-site;verify-motor-renewal-fuctionality-working-properly-or-not;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@EndToEndTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "that user already on policybazaar home site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "mouse on renew your policy section",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "click on motor renewal section",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on proceed without car number",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "select CityRto \"DL13-EAST DELHI(Delhi)\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "select CarModel\"TATA - Harrier\" and \"441\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "select CarFuelType\"Diesel\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "select Varient\"Kaziranga XZA Plus (1956 cc)\" and \"0\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "select RegistrationYear\"2021\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "enter \"Rutik Patil\" and \"r@gmail.com\" and \"8525654595\" and click on viewPrices",
  "matchedColumns": [
    7,
    8,
    9
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MasterProgram.that_user_already_on_policybazaar_home_site()"
});
formatter.result({
  "duration": 19596400,
  "status": "passed"
});
formatter.match({
  "location": "MasterProgram.mouse_on_renew_your_policy_section()"
});
formatter.result({
  "duration": 125115000,
  "status": "passed"
});
formatter.match({
  "location": "MasterProgram.click_on_motor_renewal_section()"
});
formatter.result({
  "duration": 476925800,
  "status": "passed"
});
formatter.match({
  "location": "MasterProgram.click_on_proceed_without_car_number()"
});
formatter.result({
  "duration": 761048600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DL13-EAST DELHI(Delhi)",
      "offset": 16
    }
  ],
  "location": "MasterProgram.select_CityRto(String)"
});
formatter.result({
  "duration": 2729708000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TATA - Harrier",
      "offset": 16
    },
    {
      "val": "441",
      "offset": 37
    }
  ],
  "location": "MasterProgram.select_CarModel(String,String)"
});
formatter.result({
  "duration": 6831145000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Diesel",
      "offset": 19
    }
  ],
  "location": "MasterProgram.select_CarFuelType(String)"
});
formatter.result({
  "duration": 312975200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kaziranga XZA Plus (1956 cc)",
      "offset": 15
    },
    {
      "val": "0",
      "offset": 50
    }
  ],
  "location": "MasterProgram.select_Varient(String,String)"
});
formatter.result({
  "duration": 413930500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021",
      "offset": 24
    }
  ],
  "location": "MasterProgram.select_RegistrationYear(String)"
});
formatter.result({
  "duration": 323705800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rutik Patil",
      "offset": 7
    },
    {
      "val": "r@gmail.com",
      "offset": 25
    },
    {
      "val": "8525654595",
      "offset": 43
    }
  ],
  "location": "MasterProgram.enter_and_and_and_click_on_viewPrices(String,String,String)"
});
formatter.result({
  "duration": 340889700,
  "status": "passed"
});
});