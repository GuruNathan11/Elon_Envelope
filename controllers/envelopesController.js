const envelopesService = require('../services/envelopesService.js');

exports.createEnvelope = async (req, res) => {
  try {
    const { templateId, signers } = req.body;
    const envelope = await envelopesService.createEnvelope(templateId,signers);
    res.status(201).json(envelope);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
