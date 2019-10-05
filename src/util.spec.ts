import * as path from 'path';
import * as fs from 'fs';
import { compute as comp } from './util';

function compute(fileName: string) {
    const resolvedPath = path.resolve(path.join(__dirname, fileName));
    return comp(fs.readFileSync(resolvedPath).toString(), resolvedPath);
}

describe('computer', () => {
    it('should work if font file is in the same folder', () => {
        const computed = compute("../tests/iconfont-same-folder/iconfont.css");
        expect(computed).toBe("@font-face{font-family:'IconFont';src:url(data:;base64,c2FtcGxlIGZpbGUgd2l0aCBubyBjb250ZW50) format('woff');}");
    });
    it('should work if font file is in another folder', () => {
        const computed = compute("../tests/iconfont-in-another-folder/subfolder/iconfont.css");
        expect(computed).toBe("@font-face{font-family:'IconFont';src:url(data:;base64,YW5vdGhlciBzYW1wbGUgZmlsZSB3aXRoIG5vIGNvbnRlbnQ=) format('woff');}");
    });
});
