import * as https from 'https';

export default function (options: Object): Promise<any> {
  return new Promise((resolve, reject) => {
    https
      .request(options)
      .on('error', onError)
      .on('response', onResponse)
      .end();

    function onError (error: Error) {
      return reject(error);
    }

    function onResponse(response: any) {
      let data = '';

      response
        .on('error', onError)
        .on('data', onData)
        .on('end', onEnd);

      function onError(error: Error) {
        return reject(error);
      }

      function onData(chunk: any) {
        data += chunk;
      }

      function onEnd() {
        try {
          if (response.statusCode === 200) {
            resolve(JSON.parse(data.toString()))
          } else {
            reject({error: {message: 'Server Error', code: response.statusCode}});
          }
        } catch (error) {
          return reject(error);
        }
      }
    }
  })
}
