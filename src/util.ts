import * as path from 'path'
import * as fs from 'fs'

const URL_REGEXP = /url\(([^)]+)\)/g;

export function compute(sourceText: string, fileName: string): string{
    return sourceText.replace(URL_REGEXP, (matched, url) => {
        const basePath = path.dirname(fileName);
        const filePath = path.resolve(basePath, url)
        const base64 = fs.readFileSync(filePath).toString('base64');
        return 'url(data:;base64,' + base64 + ')';
    });
} 
