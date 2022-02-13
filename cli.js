#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import getStdin from 'get-stdin';
import prettyBytes from 'pretty-bytes';

const cli = meow(`
	Usage
	  $ pretty-bytes <number>
	  $ echo <number> | pretty-bytes

	Example
	  $ pretty-bytes 1337
	  1.34 kB
`, {
	importMeta: import.meta,
});

const input = cli.input[0];

function init(input) {
	console.log(prettyBytes(Number(input)));
}

if (!input && process.stdin.isTTY) {
	console.error('Specify a number');
	process.exit(1);
}

init(input ? input : await getStdin());
