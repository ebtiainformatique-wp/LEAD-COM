const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAILS = ['leadcomfat@gmail.com', 'contact@lead.cm'];

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Méthode non autorisée.' });
    return;
  }

  const { name, company, email, phone, subject, message } = req.body || {};

  if (!name || !email || !message) {
    res.status(400).json({ error: 'Champs obligatoires manquants (nom, email, message).' });
    return;
  }

  const bodyLines = [
    `Nom complet : ${name}`,
    company ? `Entreprise : ${company}` : null,
    `Email : ${email}`,
    phone ? `Téléphone : ${phone}` : null,
    `Marque de service concernée : ${subject || 'Non précisé'}`,
    '',
    'Message :',
    message
  ].filter(Boolean).join('\n');

  try {
    const { error } = await resend.emails.send({
      from: 'Site LEAD COM <contact@lead.cm>',
      to: ADMIN_EMAILS,
      replyTo: email,
      subject: `[Site Web] Demande — ${subject || 'Contact'}`,
      text: bodyLines
    });

    if (error) {
      console.error('Resend a renvoyé une erreur:', error);
      res.status(502).json({ error: "Échec de l'envoi de l'email." });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Erreur envoi email contact:', error);
    res.status(500).json({ error: "Échec de l'envoi de l'email." });
  }
};
