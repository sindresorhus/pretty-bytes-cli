import test from 'ava';
import execa from 'execa';

test('main', async t => {
	t.is(await execa.stdout('./cli.js', ['1337']), '1.34 kB');
});

test('stdin', async t => {
	t.is(await execa.stdout('./cli.js', {input: '1337'}), '1.34 kB');
});
