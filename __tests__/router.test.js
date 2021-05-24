/**
 * @jest-environment jsdom
 */

 import { pushToHistory } from '../scripts/router.js';


 function test1_caseSettings() {
    pushToHistory("settings", 0);
    expect(JSON.stringify(history.state)).toBe(JSON.stringify({"page": "settings"}));
    expect(history.length).toBe(2);
 }

 function test2_caseEntry() {
    pushToHistory("entry", 1);
    expect(JSON.stringify(history.state)).toBe(JSON.stringify({"page": "entry1"}));
    expect(history.length).toBe(3);
 }

 function test3_caseOthers () {
    pushToHistory("others", 10000);
    expect(JSON.stringify(history.state)).toBe(JSON.stringify({}));
    expect(history.length).toBe(4);
 }

 describe('test pushToHistory() in router.js', () => {
    test('test 1 case settings', test1_caseSettings);
    test('test 2 case entry with entryNum=1', test2_caseEntry);
    test('test 3 case others', test3_caseOthers);
 });