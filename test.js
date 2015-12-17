import test from 'ava';
import execa from 'execa';

test('main', async t => {
	t.is((await execa('./cli.js', ['1337'])).stdout, '1.34 kB');
});

test('stdin', async t => {
	t.is((await execa.shell('echo 1337 | ./cli.js', ['1337'])).stdout, '1.34 kB');
});
