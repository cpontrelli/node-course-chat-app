var expect = require('expect');

var {generateMessage} = require('./message');
describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var message = generateMessage('Test Sender', 'Test message');
        
        expect(message.from).toBe('Test Sender');
        expect(message.text).toBe('Test message');
        expect(message.createdAt).toBeA('number');
    });
});