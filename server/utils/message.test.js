var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');
describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var message = generateMessage('Test Sender', 'Test message');
        
        expect(message.from).toBe('Test Sender');
        expect(message.text).toBe('Test message');
        expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'User';
        var longitude = 1;
        var latitude = 1;
        var locationMessage = generateLocationMessage(from, longitude, latitude);

        expect(locationMessage.createdAt).toBeA('number');
        expect(locationMessage.from).toBe(from);
        expect(locationMessage.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`)
    });
})