const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here ok
    while(line = await readline()){
        let tokens = line.split(' ');
    }
}()
