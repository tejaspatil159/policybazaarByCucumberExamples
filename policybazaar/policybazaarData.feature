Feature: Test renew your policy section in policybazzar site
@EndToEndTest
Scenario Outline: Verify motor renewal fuctionality working properly or not
Given that user already on policybazaar home site
When mouse on renew your policy section
And click on motor renewal section
Then click on proceed without car number
When select CityRto "<cityRto>" 
Then select CarModel"<carModel>" and "<index>"
Then select CarFuelType"<carFuelType>"
Then select Varient"<varient>" and "<vIndex>"
Then select RegistrationYear"<carRegistationYear>" 
Then enter "<fullName>" and "<email>" and "<mobileNo>" and click on viewPrices



Examples: 

 |cityRto                |carModel      |index|carFuelType|varient                            |vIndex|carRegistationYear|fullName   |email      |mobileNo  |
 |MH04-THANE(Maharashtra)|HYUNDAI - i 20| 172 |Petrol     |1.2 ASTA (O) WITH SUNROOF (1197 cc)|  3   |2021              |Tejas Patil|t@gmail.com|7485964565|
 |DL13-EAST DELHI(Delhi) |TATA - Harrier|441  |Diesel     |Kaziranga XZA Plus (1956 cc)       |  0   |2021              |Rutik Patil|r@gmail.com|8525654595|