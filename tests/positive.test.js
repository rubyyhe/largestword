const func = require('../func');

describe('Given valid input file', () => {
    it('With word each line and one largest word, should only one result', () => {
        let resultMap = func.findAndTranspose(__dirname + "/files/p1_oneLargest.txt");
        expect(resultMap.size).toBe(1);
        expect(resultMap.has('watermelon')).toBe(true);
        expect(resultMap.get('watermelon')).toBe('nolemretaw'); 
    });

    it('With word each line and duplucated largest word in it, should only one result ', () => {
        let resultMap = func.findAndTranspose(__dirname + "/files/p2_duplicatedLargest.txt");
        expect(resultMap.size).toBe(1);
        expect(resultMap.has('watermelon')).toBe(true);
        expect(resultMap.get('watermelon')).toBe('nolemretaw'); 
    });

    it('With word each line and multiple largest words in it, should have multiple result ', () => {
        let resultMap = func.findAndTranspose(__dirname + "/files/p3_multipleLargest.txt");
        expect(resultMap.size).toBe(2);
        
        expect(resultMap.has('WaterMelon')).toBe(true);
        expect(resultMap.get('WaterMelon')).toBe('noleMretaW'); 

        expect(resultMap.has('strawberry')).toBe(true);
        expect(resultMap.get('strawberry')).toBe('yrrebwarts'); 

    });

    it('With irregular format like tab, multi spaces and has multiple largests, should have multiple result', () => {
        let resultMap = func.findAndTranspose(__dirname + "/files/p4_irregularFormatMultiple.txt");
        expect(resultMap.size).toBe(3);
        
        expect(resultMap.has('WaterMelon')).toBe(true);
        expect(resultMap.get('WaterMelon')).toBe('noleMretaW'); 

        expect(resultMap.has('strawberry')).toBe(true);
        expect(resultMap.get('strawberry')).toBe('yrrebwarts'); 

        expect(resultMap.has('blueberry+')).toBe(true);
        expect(resultMap.get('blueberry+')).toBe('+yrrebeulb'); 
    });

    it('With single letter word, should have one result', () => {
        let resultMap = func.findAndTranspose(__dirname + "/files/p5_singleLetter.txt");
        expect(resultMap.size).toBe(1);
        expect(resultMap.has('A')).toBe(true);
        expect(resultMap.get('A')).toBe('A'); 

    });

    it('With long sentence, and has one result', () => {
        let resultMap = func.findAndTranspose(__dirname + "/files/p6_longSentence.txt");
        expect(resultMap.size).toBe(1);
        expect(resultMap.has('clouds[2][3]),')).toBe(true);
        expect(resultMap.get('clouds[2][3]),')).toBe(',)]3[]2[sduolc'); 
    });

});
