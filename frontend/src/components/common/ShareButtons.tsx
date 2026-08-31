import React, { useState } from 'react';
import { Share2, Copy, Check, MessageCircle, ExternalLink } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareWhatsapp = () => {
    const text = encodeURIComponent(` découvrez : ${title} - ${shareUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const shareFacebook = () => {
    const fbUrl = encodeURIComponent(shareUrl);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${fbUrl}`, '_blank');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
      <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
        <Share2 size={15} /> Partager :
      </span>

      <button
        onClick={shareWhatsapp}
        style={{
          background: '#25D366',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          padding: '0.35rem 0.65rem',
          fontSize: '0.8rem',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
          transition: 'transform 0.2s',
        }}
        title="Partager sur WhatsApp"
      >
        <MessageCircle size={14} /> WhatsApp
      </button>

      <button
        onClick={shareFacebook}
        style={{
          background: '#1877F2',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          padding: '0.35rem 0.65rem',
          fontSize: '0.8rem',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
        }}
        title="Partager sur Facebook"
      >
        <ExternalLink size={14} /> Facebook
      </button>

      <button
        onClick={handleCopy}
        style={{
          background: copied ? '#16a34a' : '#f1f5f9',
          color: copied ? '#fff' : '#334155',
          border: '1px solid #cbd5e1',
          borderRadius: '6px',
          padding: '0.35rem 0.65rem',
          fontSize: '0.8rem',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.3rem',
        }}
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {copied ? 'Copié !' : 'Copier le lien'}
      </button>
    </div>
  );
};
