

const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'dqjqeogxe', 
    api_key: '124253595398815', 
    api_secret: 'XxLeMNzY6ylIe3Jtd8FsKIc_IFA' // Click 'View API Keys' above to copy your API secret
});

module.exports = cloudinary;