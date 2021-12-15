
//import greet from './greetings';

Import = './greet.js';

describe('test greet()', function () {
  it('should greet a name', function () {
    expect(greet('Elizabeth')).toEqual('Hello, Elizabeth');
  });
//trying to comment all else out, to see if i can get one test to work
  // failed to make it work

 /*
  it(name === null || name == undefined, function () {
    expect(greet()).toEqual('Hello there!');
  });
  it('should handle shouting', function () {
    expect(greet('JOSE')).toEqual('HELLO JOSE!');
  });
  it('should handle 2 names', function () {
    expect(greet(['Jose', 'Pep'])).toEqual('Hello, Jose, Pep');
  });
  it('should handle multiple names', function () {
    expect(greet(['Alex', 'Arsene', 'Jose', 'Zidane'])).toEqual(
      'Hello, Alex, Arsene, Jose, Zidane'
    );
  });
  */
});