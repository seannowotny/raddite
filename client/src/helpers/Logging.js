// @flow

import util from 'util';
//eslint-disable-next-line
export const logHarmlessError = (err: string) =>
{
   console.log(`%c harmless %c ${util.inspect(err, {showHidden: false, depth: null})}`, 'color: green', 'color: grey');
}