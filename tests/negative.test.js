const func = require('../func');


describe('Given negative scenario', () => {
    it('With empty path, should throw error', () => {
        expect(() => {
            func.findAndTranspose('');
        }).toThrowError(/Invalid file path/);
    });

    it('With invalid path, should throw error', () => {
        expect(() => {
            func.findAndTranspose('1');
        }).toThrowError(/Invalid file path/);
    });   
    
    it('With not existing file, should throw error', () => {
        expect(() => {
            func.findAndTranspose('/a/b.txt');
        }).toThrowError(/no such file/);
    });
    
    it('With input as directory, should throw error', () => {
        expect(() => {
            func.findAndTranspose(__dirname);
        }).toThrowError(/illegal operation on a directory/);
    });

    it('With empty content, should have no result', () => {
        let resultMap = func.findAndTranspose(__dirname + "/files/n1_emptyFile");
        expect(resultMap.size).toBe(0);
    });

    it('With binary file, should throw error', () => {
        expect(() => {
            func.findAndTranspose(__dirname + "/files/n2_binaryfile.jpg");
        }).toThrowError(/Binary file is not expected/);
    });

    it('With large file size which exceed default upper limit 50k, should throw error', () => {
        expect(() => {
            func.findAndTranspose(__dirname + "/files/n3_fileSizeLimit.txt");
        }).toThrowError(/File size exceed upper limit/);
    });
});