import AWS from 'aws-sdk';

AWS.config.update({
  region: 'ap-northeast-2',
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-northeast-2:d02afe22-f859-40bb-aedb-0c5dead2f8d1',
  }),
});

const uploadFile = (event) => {
  const file = event.target.files[0];

  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: 'bohemian-image',
      Key: file.name,
      Body: file,
    },
  });

  const promise = upload.promise();

  promise.then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error(error);
      return alert('오류가 발생했습니다: ', error.message);
    }
  );
};

export default uploadFile;
