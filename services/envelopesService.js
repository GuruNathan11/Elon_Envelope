const axios = require('axios');
const EnvelopeDAO = require('../dao/envelopeDAO');

exports.createEnvelope = async (templateId, signers) => {
  
  const payload = {
    emailBlurb: 'Create an envelope with a templateId',
    emailSubject: 'Template',
    compositeTemplates: [
      {
        serverTemplates: [
          {
            sequence: '1',
            templateId
          }
        ],
        inlineTemplates: [
          
            {
              recipients: {
                signers: signers.map((signer) => ({
                  email: signer.email,
                  name: signer.name,
                  recipientId: signer.recipientId,
                  roleName: signer.roleName,
                  routingOrder: signer.routingOrder
                }))
              },
            sequence: '2'
          }
        ]
      }
    ],
    
    status: 'sent'
  };

  // Send the request to DocuSign API
  const envelopeResponse = await axios.post(
    EnvelopeDAO.getEnvelopeApiUrl(),
    payload,
    { headers: EnvelopeDAO.getEnvelopeApiHeaders() }
  );

  return envelopeResponse.data;
};
