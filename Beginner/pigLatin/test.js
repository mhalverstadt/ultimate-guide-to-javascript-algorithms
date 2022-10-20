const pigLatin = require('./index-START');

test('pigLatin is a function', () => {
  expect(typeof pigLatin).toEqual('function');
});

test('pig becomes igpay', () => {
  expect(pigLatin('pig')).toEqual('igpay');
});

test('glove becomes oveglay', () => {
  expect(pigLatin('glove')).toEqual('oveglay');
});

test('explain becomes explainway', () => {
  expect(pigLatin('explain')).toEqual('explainway');
});