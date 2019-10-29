import util from 'util';

export const logHarmlessError = (err) =>
{
   console.log(`%c harmless %c ${util.inspect(err, {showHidden: false, depth: null})}`, 'color: green', 'color: grey');
}