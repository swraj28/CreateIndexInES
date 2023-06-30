// backend/create-index.js
const elasticClient = require('./elasticsearch/client');
const request = require('request');

var Q= require('q');

// async function createIndexAndStoreDocument() {

//   try {
//     const indexName = 'my_index_h';
//     const document = {
//       item_id: [1, 2, 3, 4, 5],
//       misMatchAmount: 0,
//       refundAmount: 59.0
//     };

//     const auth = {
//       user: 'elastic',
//       pass: 'SbSVsH5VCIuLKKLwn3MxeLWH',
//     };


//     // Create the index
//     request.put({
//       url: `https://my-deployment-d97b33.es.us-central1.gcp.cloud.es.io/${indexName}`,
//       auth: auth,
//     }, (error, response, body) => {
//       if (error) {
//         console.error('Error:', error);
//       } else if (response.statusCode !== 200) {
//         console.error('Error:', body);
//       } else {
//         console.log(response.statusCode);
//         // Store the document in the index
//         request.post({
//           url: `https://my-deployment-d97b33.es.us-central1.gcp.cloud.es.io/${indexName}/_doc`,
//           auth: auth,
//           json: document
//         }, (error, response, body) => {
//           if (error) {
//             console.error('Error:', error);
//           } else if (response.statusCode !== 201) {
//             console.error('Error:', body);
//           } else {
//             console.log('Document stored:', body);
//             console.log(response.statusCode);
//           }
//         });
//       }
//     });
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

async function createIndexAndStoreDocument() {

  try {
    const indexName = 'my_index_swra';
    const document = {
      item_id: [1, 2, 3, 4, 5],
      misMatchAmount: 0,
      refundAmount: 59.0
    };

    const auth = {
      user: 'elastic',
      pass: 'SbSVsH5VCIuLKKLwn3MxeLWH',
    };

    request.post({
      url: `https://my-deployment-d97b33.es.us-central1.gcp.cloud.es.io/${indexName}/_doc`,
      auth: auth,
      json: document
    }, (error, response, body) => {
      if (error) {
        console.error('Error:', error);
      } else if (response.statusCode !== 201) {
        console.error('Error:', body);
      } else {
        console.log('Document stored:', body);
        console.log(response.statusCode);
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

  
module.exports= createIndexAndStoreDocument();
