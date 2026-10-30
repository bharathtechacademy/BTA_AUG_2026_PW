import {test} from '@playwright/test';
import { JMeterCommons } from '../../commons/load/jmeter-commons.ts';

test.describe('Load Tests', () => {

    let jmeter: JMeterCommons;


    test.beforeEach(() => {
        jmeter = new JMeterCommons();
    });

    test('Run GitHub API request performance test. ', async () => {
        const testPlanName = 'LoadTest.jmx';
        await jmeter.runJMeterTestPlan(testPlanName);
    });
});