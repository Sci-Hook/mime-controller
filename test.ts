import {findMime} from './index';
import {readFileSync} from 'fs';

var test = readFileSync('/home/lim10/İndirilenler/success_bell-6776.mp3')

async function main() {
    console.log(await findMime(test))
}

main();