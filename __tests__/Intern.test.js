const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('James L Phan');
});

test('set school with constructor', () => {
    const testValue = 'University of Washington';
    const e = new Intern('Foo', 1, 'intern@email.com', testValue);
    expect(e.school).toBe(testValue);
});

test('get school with getSchool() method', () => {
    const testValue = 'University of Washington';
    const e = new Intern('Foo', 1, 'intern@email.com', testValue);
    expect(e.getSchool()).toBe(testValue);
});

// Test if the getRole() value is Intern
test('getRole() return Intern', () => {
    const testValue = 'Intern';
    const e = new Intern('Foo', 1, 'intern@email.com', 'University of Washington');
    expect(e.getRole()).toBe(testValue);
});