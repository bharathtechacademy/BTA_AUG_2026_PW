import {Given, When, Then} from '@cucumber/cucumber';
import { JMeterCommons } from '../../commons/load/jmeter-commons.ts';

let jmeter : JMeterCommons;

//Given Initialize the JMeter utility
Given('Initialize the JMeter utility', function () {
    jmeter = new JMeterCommons();
});

//Then run the JMeter test plan "LoadTest.jmx" and publish the results
Then('run the JMeter test plan {string} and publish the results', function (testPlanName: string) {
    jmeter.runJMeterTestPlan(testPlanName);
});