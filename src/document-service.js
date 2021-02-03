const mbHelper = require('./mountebank-helper');
const settings = require('./settings');
const response = require('./responses/mydoc');

function addService() {
  console.log(response, 'hello world');
  const stubs = [
    {
      predicates: [{
        and: [ {
          equals: {
            method: "GET",
          }
        },
        {
          startsWith: {
            path: `/library/relocation/`
          }
        }
      ]
      }],
      responses: [{
        is: {
          statusCode: 200,
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(response)
        }
      }
    ]}
  ];

  const imposter = {
    port: settings.document_service_port,
    protocol: 'http',
    stubs: stubs
  };

  return mbHelper.postImposter(imposter);
}

module.exports = { addService };