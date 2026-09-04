import PDFDocument from 'pdfkit';
import QRCode from 'qrcode';

export const generateMemberCardPDF = async (memberData: any): Promise<Buffer> => {
  return new Promise(async (resolve, reject) => {
    try {
      const doc = new PDFDocument({ size: [400, 240], margin: 15 });
      const buffers: Buffer[] = [];

      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => resolve(Buffer.concat(buffers)));

      // Colors & Styling
      doc.rect(0, 0, 400, 240).fill('#0f172a'); // Background slate-900
      
      // Header Accent Bar
      doc.rect(0, 0, 400, 10).fill('#16a34a'); // Green accent

      // Title & Org Name
      doc.fillColor('#ffffff').fontSize(14).font('Helvetica-Bold').text('AJTES TCHAD', 20, 25);
      doc.fillColor('#94a3b8').fontSize(8).font('Helvetica').text('Association des Jeunes Tchadiens pour l\'Éducation et la Solidarité', 20, 42);

      doc.moveTo(20, 56).lineTo(380, 56).strokeColor('#334155').stroke();

      // Member Badge Info
      const fullName = memberData.user?.fullName || memberData.fullName || 'Membre AJTES';
      const email = memberData.user?.email || memberData.email || '';
      const status = memberData.status || 'APPROVED';
      const role = memberData.user?.role || 'MEMBRE';
      const memberId = memberData.id.slice(0, 8).toUpperCase();

      doc.fillColor('#38bdf8').fontSize(10).font('Helvetica-Bold').text(`CARTE D'ADHÉRENT OFFICIELLE`, 20, 68);

      doc.fillColor('#f8fafc').fontSize(12).font('Helvetica-Bold').text(fullName, 20, 88);
      doc.fillColor('#cbd5e1').fontSize(9).font('Helvetica').text(`Statut : ${status === 'APPROVED' ? 'Validé / Actif' : status}`, 20, 108);
      doc.fillColor('#cbd5e1').fontSize(9).font('Helvetica').text(`Rôle : ${role}`, 20, 124);
      doc.fillColor('#94a3b8').fontSize(8).font('Helvetica').text(`Email : ${email}`, 20, 140);
      doc.fillColor('#64748b').fontSize(8).font('Helvetica').text(`Matricule : AJTES-${memberId}`, 20, 156);

      // Generate QR Code with verification link
      const qrData = `https://ajtes.td/verify/member/${memberData.id}`;
      const qrDataUrl = await QRCode.toDataURL(qrData, { margin: 1, width: 85 });
      const qrBuffer = Buffer.from(qrDataUrl.split(',')[1], 'base64');

      doc.image(qrBuffer, 290, 75, { width: 85 });
      doc.fillColor('#64748b').fontSize(7).font('Helvetica').text('Scanner pour vérifier', 285, 168, { width: 95, align: 'center' });

      // Footer Accent
      doc.fillColor('#475569').fontSize(7).font('Helvetica').text('Document officiel certifié par le Bureau Exécutif AJTES — www.ajtes.td', 20, 215, { align: 'center' });

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
};

export const generateDonationReceiptPDF = async (donation: any): Promise<Buffer> => {
  return new Promise(async (resolve, reject) => {
    try {
      const doc = new PDFDocument({ size: 'A4', margin: 40 });
      const buffers: Buffer[] = [];

      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => resolve(Buffer.concat(buffers)));

      // Header Banner
      doc.rect(0, 0, 595.28, 90).fill('#0f172a');
      doc.fillColor('#16a34a').fontSize(22).font('Helvetica-Bold').text('AJTES TCHAD', 40, 25);
      doc.fillColor('#94a3b8').fontSize(10).font('Helvetica').text('Éduquer • Solidariser • Construire l\'Avenir', 40, 52);
      
      doc.fillColor('#ffffff').fontSize(14).font('Helvetica-Bold').text('REÇU OFFICIEL DE DON', 360, 35, { align: 'right' });

      // Body Section
      doc.moveDown(4);
      doc.fillColor('#0f172a').fontSize(12).font('Helvetica-Bold').text(`Référence Transaction : ${donation.transactionRef || donation.id}`);
      doc.fontSize(10).font('Helvetica').fillColor('#64748b').text(`Date d'émission : ${new Date(donation.createdAt).toLocaleDateString('fr-FR')}`);

      doc.moveDown(1.5);

      // Box styling for details
      const boxY = 160;
      doc.rect(40, boxY, 515, 140).fillAndStroke('#f8fafc', '#e2e8f0');

      doc.fillColor('#0f172a').fontSize(11).font('Helvetica-Bold').text('INFORMATIONS DU DONATEUR & TRANSACTION', 55, boxY + 15);
      
      doc.fontSize(10).font('Helvetica').fillColor('#334155');
      doc.text(`Donateur : ${donation.donorName}`, 55, boxY + 40);
      doc.text(`Email : ${donation.donorEmail}`, 55, boxY + 58);
      if (donation.donorPhone) doc.text(`Téléphone : ${donation.donorPhone}`, 55, boxY + 76);
      doc.text(`Moyen de Paiement : ${donation.paymentMethod}`, 55, boxY + 94);

      // Amount Display
      doc.rect(340, boxY + 35, 190, 75).fill('#16a34a');
      doc.fillColor('#ffffff').fontSize(10).font('Helvetica-Bold').text('MONTANT REÇU', 350, boxY + 47, { align: 'center' });
      doc.fontSize(16).font('Helvetica-Bold').text(`${donation.amount?.toLocaleString('fr-FR')} ${donation.currency || 'FCFA'}`, 350, boxY + 67, { align: 'center' });

      // Impact Message
      doc.moveDown(7);
      doc.fillColor('#0f172a').fontSize(11).font('Helvetica-Bold').text('REMERCIEMENTS INSTITUTIONNELS');
      doc.fillColor('#475569').fontSize(10).font('Helvetica').text(
        'L\'Association des Jeunes Tchadiens pour l\'Éducation et la Solidarité (AJTES) vous remercie chaleureusement pour votre généreuse contribution. Grâce à votre don, nous continuons d\'équiper les écoles et de soutenir la jeunesse tchadienne.',
        { width: 515, align: 'justify' }
      );

      // QR Code & Validation
      const qrData = `https://ajtes.td/verify/donation/${donation.transactionRef || donation.id}`;
      const qrDataUrl = await QRCode.toDataURL(qrData, { margin: 1, width: 90 });
      const qrBuffer = Buffer.from(qrDataUrl.split(',')[1], 'base64');

      doc.image(qrBuffer, 40, 420, { width: 90 });
      doc.fillColor('#64748b').fontSize(8).font('Helvetica').text('Document authentifié numériquement.', 140, 440);
      doc.text('Scannez le QR Code pour vérifier ce reçu sur le serveur officiel AJTES.', 140, 455);

      // Signature block
      doc.fillColor('#0f172a').fontSize(10).font('Helvetica-Bold').text('Pour le Bureau Exécutif AJTES', 370, 430);
      doc.fillColor('#16a34a').fontSize(9).font('Helvetica-Bold').text('Secrétariat aux Finances & Trésorerie', 370, 445);

      // Footer
      doc.rect(0, 790, 595.28, 52).fill('#0f172a');
      doc.fillColor('#94a3b8').fontSize(8).font('Helvetica').text('AJTES Tchad — Siège Administratif N\'Djamena — Email : contact@ajtes.td — Site : www.ajtes.td', 40, 808, { align: 'center' });

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
};
