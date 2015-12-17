#!/usr/bin/env node
'use strict';
const meow = require('meow');
const getStdin = require('get-stdin');
const fn = require('pretty-bytes');

const cli = meow(`
	Usage
	  $ pretty-bytes <number>
	  $ echo <number> | pretty-bytes

	Example
	  $ pretty-bytes 1337
	  1.34 kB
`);

const input = cli.input[0];

function init(input) {
	console.log(fn(Number(input)));
}

if (!input && process.stdin.isTTY) {
	console.error('Specify a number');
	process.exit(1);
}

if (input) {
	init(input);
} else {
	getStdin().then(init);
}
