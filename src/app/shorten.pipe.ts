// custom pipe, we need to add it to the declarations in the app.module.ts

import { PipeTransform, Pipe } from "@angular/core"

@Pipe({
    name: 'shorten'
})

export class ShortenPipe implements PipeTransform {
    // we need to add a transform method
    transform(value: any) {
        return value.substr(0, 10)
    }
}