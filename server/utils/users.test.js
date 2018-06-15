const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Henry',
            room: 'Garden'
        }, {
            id: '2',
            name: 'Bao',
            room: 'Hot box'
        }, {
            id: '3',
            name: 'Corey',
            room: 'Hot box'
        }]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Charlie',
            room: 'test'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    })

    it('should remove a user', () => {
        var removedUser = users.removeUser('1');
        expect(users.users.length).toBe(2);
        expect(removedUser.name).toBe('Henry')

    });

    it('should not remove user', () => {
        var removedUser = users.removeUser('4');
        expect(users.users.length).toBe(3);
        expect(removedUser).toNotExist();
    });

    it('should find user', () => {
        var user = users.getUser('1');
        expect(user.name).toBe('Henry');
    });

    it('should not find user', () => {
        var user = users.getUser('0');
        expect(user).toNotExist();
    });

    it('should return names for Hot box', () => {
        var userList = users.getUserList('Hot box');

        expect(userList).toEqual(['Bao', 'Corey']);
    });

    it('should return names for Garden', () => {
        var userList = users.getUserList('Garden');

        expect(userList).toEqual(['Henry']);
    });
})