import test from 'ava';
import {execa} from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['1337']);
	t.is(stdout, '1.34 kB');
});

test('stdin', async t => {
	const {stdout} = await execa('./cli.js', {input: '1337'});
	t.is(stdout, '1.34 kB');
});
