// add this file to .gitignore

const { session } = require("passport");

module.exports = {
        google: {
            clientID: '427308354107-pg547o8qcpmev1vrai19q12uc5akdla5.apps.googleusercontent.com',
            clientSecret: 'MqLGmJ3pwgyXhHuDu94_l3fu'
        },
        mongodb:{
            dbURI:'mongodb+srv://user1:pass101@cluster0.m4m6b.mongodb.net/test101?retryWrites=true&w=majority'
        },
        session:{
            key:'myKey123'
        }
};
