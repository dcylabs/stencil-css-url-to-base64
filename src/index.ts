import { compute } from "./util";

export function cssBase64URL () {
    return {
        name: 'cssBase64URL',
        pluginType: 'css',
        transform(sourceText: string, fileName: string){
            return Promise.resolve({id: fileName,code: compute(sourceText, fileName)})
        }
    }
}