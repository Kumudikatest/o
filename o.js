const fs = require('fs');
const AWS = require('aws-sdk');
const ACCESS = process.env.access;
const SECRET = process.env.secret;
// The name of the bucket that you have created
const BUCKET_NAME = 'mftg-staging-kumu';
const s3 = new AWS.S3({
    accessKeyId: ACCESS,
    secretAccessKey: SECRET
});
const uploadFile = (filename) => {
   
    const fileContent = fs.readFileSync(filename);
       
    const params = {
        Bucket: BUCKET_NAME,
        Key: 'AS2/send/hirucloud/AS2Mendelson/cat.jpg',
        Body: fileContent
    };
    s3.upload(params, function(err, data) {
        if (err) {
            console.log(`An error occured  `+err);
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};
uploadFile('cat.jpg');