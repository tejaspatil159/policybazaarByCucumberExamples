package com.abc.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="D:\\TejasSelOwn\\PolicybazaarByCucumberExamples\\policybazaar\\policybazaarData.feature",
                 glue= {"com.abc.stepDefinition"},
                 plugin= {"pretty", "html:target-output","junit:junit_xml/cucumber.xml"},
                 format= {"html:target-output","junit:junit_xml/cucumber.xml"},
                 tags= {"@EndToEndTest"},
                 monochrome=true,
                 strict=true,
                 dryRun=false)
public class RunnerClass {

}
