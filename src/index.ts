import * as d from './declarations';
import { compute } from "./util";

export function cssBase64URL() : d.Plugin {
    return {
        name: 'cssBase64URL',
        pluginType: 'css',
        transform(sourceText: string, id: string, context: d.PluginCtx){
            return Promise.resolve({id,code: compute(sourceText, id, context)})
        }
    }
}