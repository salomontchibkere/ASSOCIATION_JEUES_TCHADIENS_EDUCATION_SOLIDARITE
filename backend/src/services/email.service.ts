import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || '';
const EMAIL_FROM = process.env.EMAIL_FROM || '"AJTES Tchad" <contact@ajtes.td>';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'salomon@ajtes.td';

// Initialize Transporter
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

const isEmailConfigured = () => {
  return (
    SMTP_USER &&
    SMTP_PASS &&
    SMTP_PASS !== 'votre_mot_de_passe_application'
  );
};

/**
 * Send Welcome Email to a newly registered Member
 */
export async function sendWelcomeEmail(toEmail: string, fullName: string): Promise<boolean> {
  const subject = `🌿 Bienvenue à l'AJTES Tchad, ${fullName} !`;

  const html = `
    <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #F8FAFC; padding: 20px; border-radius: 12px;">
      <div style="background: linear-gradient(135deg, #092014, #007A3D); color: #ffffff; padding: 25px; border-radius: 10px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">AJTES TCHAD</h1>
        <p style="margin: 5px 0 0 0; color: #F5A623; font-weight: bold;">ÉDUQUER & SOLIDARISER</p>
      </div>

      <div style="background-color: #ffffff; padding: 25px; border-radius: 10px; margin-top: 15px; border: 1px solid #E2E8F0;">
        <h2 style="color: #1C2836; font-size: 20px;">Félicitations et Bienvenue, ${fullName} !</h2>
        <p style="color: #4A5568; line-height: 1.6;">
          Nous sommes honorés de vous compter parmi les membres actifs de l'<strong>Association des Jeunes Tchadiens pour l’Éducation et la Solidarité (AJTES)</strong>.
        </p>
        <p style="color: #4A5568; line-height: 1.6;">
          Votre adhésion a bien été enregistrée et votre demande est en cours de validation finale par le bureau exécutif. Vous pouvez désormais vous connecter à votre Espace Membre pour suivre nos actualités et accéder à vos documents officiels.
        </p>

        <div style="background-color: #E6F5ED; border-left: 4px solid #007A3D; padding: 15px; border-radius: 6px; margin: 20px 0;">
          <h3 style="margin: 0 0 5px 0; color: #007A3D; font-size: 16px;">💳 Votre Carte Membre Digitale</h3>
          <p style="margin: 0; color: #1C2836; font-size: 14px;">
            Vous pouvez consulter et imprimer votre carte membre directement depuis votre espace personnel sur le site officiel.
          </p>
        </div>

        <p style="color: #718096; font-size: 13px; text-align: center; margin-top: 25px;">
          « Éduquer la Jeunesse, c'est Construire le Tchad de Demain. »
        </p>
      </div>

      <div style="text-align: center; margin-top: 15px; color: #718096; font-size: 12px;">
        <p>© 2026 AJTES Tchad — Siège Officiel N'Djamena & Nangassou</p>
      </div>
    </div>
  `;

  if (!isEmailConfigured()) {
    console.log(`\n📧 [EMAIL SERVICE - DEV MODE] Email de Bienvenue simulé pour: ${toEmail} (${fullName})`);
    return true;
  }

  try {
    await transporter.sendMail({
      from: EMAIL_FROM,
      to: toEmail,
      subject,
      html,
    });
    console.log(`✅ [EMAIL SERVICE] Email de bienvenue transmis avec succès à: ${toEmail}`);
    return true;
  } catch (error: any) {
    console.error(`❌ [EMAIL SERVICE ERROR] Échec de l'envoi de l'email de bienvenue: ${error.message}`);
    return false;
  }
}

/**
 * Send Official Donation Receipt Email
 */
export async function sendDonationReceiptEmail(
  toEmail: string,
  donorName: string,
  amount: number,
  transactionRef: string,
  paymentMethod: string
): Promise<boolean> {
  const subject = `🧾 Attestation & Reçu de Don AJTES (Ref: ${transactionRef})`;

  const html = `
    <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #F8FAFC; padding: 20px; border-radius: 12px;">
      <div style="background: linear-gradient(135deg, #121A24, #007A3D); color: #ffffff; padding: 25px; border-radius: 10px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">AJTES TCHAD</h1>
        <p style="margin: 5px 0 0 0; color: #F5A623; font-weight: bold;">REÇU OFFICIEL DE DON</p>
      </div>

      <div style="background-color: #ffffff; padding: 25px; border-radius: 10px; margin-top: 15px; border: 1px solid #E2E8F0;">
        <h2 style="color: #1C2836; font-size: 18px;">Merci pour votre générosité, ${donorName} !</h2>
        <p style="color: #4A5568; line-height: 1.6;">
          Au nom de toute l'équipe du bureau exécutif et des élèves bénéficiaires du Tchad, nous vous adressons nos plus sincères remerciements pour votre soutien financier.
        </p>

        <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
          <tr style="border-bottom: 1px solid #E2E8F0;">
            <td style="padding: 10px 0; color: #718096;">Référence Transaction:</td>
            <td style="padding: 10px 0; font-weight: bold; color: #1C2836; text-align: right;">${transactionRef}</td>
          </tr>
          <tr style="border-bottom: 1px solid #E2E8F0;">
            <td style="padding: 10px 0; color: #718096;">Montant du Don:</td>
            <td style="padding: 10px 0; font-weight: bold; color: #007A3D; font-size: 18px; text-align: right;">${amount.toLocaleString()} XAF (FCFA)</td>
          </tr>
          <tr style="border-bottom: 1px solid #E2E8F0;">
            <td style="padding: 10px 0; color: #718096;">Moyen de Paiement:</td>
            <td style="padding: 10px 0; font-weight: bold; color: #1C2836; text-align: right;">${paymentMethod}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #718096;">Statut:</td>
            <td style="padding: 10px 0; font-weight: bold; color: #007A3D; text-align: right;">✅ Confirmé & Validé</td>
          </tr>
        </table>

        <div style="background-color: #FFF8EB; border: 1px solid #F5A623; padding: 15px; border-radius: 6px; margin-top: 15px;">
          <p style="margin: 0; color: #121A24; font-size: 13px;">
            💡 Ce reçu fait foi de votre contribution directe au financement des kits scolaires et des infrastructures au Tchad.
          </p>
        </div>
      </div>

      <div style="text-align: center; margin-top: 15px; color: #718096; font-size: 12px;">
        <p>© 2026 AJTES Tchad — Tous droits réservés.</p>
      </div>
    </div>
  `;

  if (!isEmailConfigured()) {
    console.log(`\n📧 [EMAIL SERVICE - DEV MODE] Reçu de don envoyé pour: ${toEmail} (${amount} FCFA, Ref: ${transactionRef})`);
    return true;
  }

  try {
    await transporter.sendMail({
      from: EMAIL_FROM,
      to: toEmail,
      subject,
      html,
    });
    console.log(`✅ [EMAIL SERVICE] Reçu de don transmis à: ${toEmail}`);
    return true;
  } catch (error: any) {
    console.error(`❌ [EMAIL SERVICE ERROR] Échec d'envoi du reçu: ${error.message}`);
    return false;
  }
}

/**
 * Send Contact Message Alert to Admin Bureau
 */
export async function sendContactAlertEmail(contactData: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}): Promise<boolean> {
  const emailSubject = `📩 NOUVEAU MESSAGE CITOYEN: ${contactData.subject}`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #F8FAFC;">
      <div style="background: #121A24; color: #FFF; padding: 15px; border-radius: 8px; text-align: center;">
        <h2 style="margin: 0;">Nouveau Message Reçu sur le Site AJTES</h2>
      </div>
      <div style="background: #FFF; padding: 20px; border-radius: 8px; margin-top: 15px; border: 1px solid #E2E8F0;">
        <p><strong>Expéditeur:</strong> ${contactData.name} (${contactData.email})</p>
        <p><strong>Téléphone:</strong> ${contactData.phone || 'Non renseigné'}</p>
        <p><strong>Sujet:</strong> ${contactData.subject}</p>
        <hr style="border: 0; border-top: 1px solid #E2E8F0; margin: 15px 0;" />
        <p><strong>Message:</strong></p>
        <p style="background: #F1F5F9; padding: 12px; border-radius: 6px; white-space: pre-wrap;">${contactData.message}</p>
      </div>
    </div>
  `;

  if (!isEmailConfigured()) {
    console.log(`\n📧 [EMAIL SERVICE - DEV MODE] Alerte de contact simulée pour le bureau (${ADMIN_EMAIL}) de la part de ${contactData.email}`);
    return true;
  }

  try {
    await transporter.sendMail({
      from: EMAIL_FROM,
      to: ADMIN_EMAIL,
      subject: emailSubject,
      html,
    });
    console.log(`✅ [EMAIL SERVICE] Alerte de message de contact transmise au bureau (${ADMIN_EMAIL})`);
    return true;
  } catch (error: any) {
    console.error(`❌ [EMAIL SERVICE ERROR] Échec de l'alerte contact: ${error.message}`);
    return false;
  }
}
