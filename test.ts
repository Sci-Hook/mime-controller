import {findMime} from './index';
import {readFileSync} from 'fs';

var test = readFileSync('C:\\Users\\lim10\\Documents\\examples\\jpg\\r.jpg')

async function main() {
    console.log(await findMime(test))
}

main();