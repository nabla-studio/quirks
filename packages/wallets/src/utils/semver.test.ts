import { satisfies, extractVer, parseVer } from './semver';

const validVer =
  'osmosis-labs/cosmos-sdk@0.45.0-rc1.0.20230922030206-734f99fba785';
const validVer2 = 'osmosis-labs/cosmos-sdk@0.45';
const invalidVer = 'osmosis-labs/cosmos-sdk';

const versionToCheck = '0.40.0';

test('extract valid version', () => {
  expect(extractVer(validVer)).toBe('0.45.0');
});

test('extract invalid version', () => {
  expect(extractVer(invalidVer)).toBe(null);
});

test('parse version', () => {
  expect(parseVer(validVer)).toBe('0.45.0');
});

test('parse version with missing padding', () => {
  expect(parseVer(validVer2)).toBe('0.45.0');
});

test('satisfies compare gte', () => {
  expect(satisfies(versionToCheck, '>=0.40.0')).toBeTruthy();
});

test('satisfies compare lte', () => {
  expect(satisfies(versionToCheck, '<=0.40.0')).toBeTruthy();
});

test('satisfies compare lte falsy', () => {
  expect(satisfies(versionToCheck, '<=0.39.0')).toBeFalsy();
});

test('satisfies compare gte small version', () => {
  expect(satisfies(versionToCheck, '>=0.4.0')).toBeTruthy();
});
