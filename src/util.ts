import * as d from './declarations';
import * as path from 'path'
import * as fs from 'fs'

const URL_REGEXP = /url\(([^)]+)\)/g;

export function compute(sourceText: string, id: string, context: d.PluginCtx): string{
    return sourceText.replace(URL_REGEXP, (matched, url) => {
        const basePath = path.dirname(id);
        const filePath = path.resolve(basePath, url)
        const base64 = fs.readFileSync(filePath, 'base64');
        return 'url(data:;base64,' + base64 + ')';
    });
} 
