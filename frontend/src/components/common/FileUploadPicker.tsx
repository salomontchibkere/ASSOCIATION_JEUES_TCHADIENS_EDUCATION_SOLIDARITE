import React, { useState, useRef } from 'react';

interface FileUploadPickerProps {
  label: string;
  value: string;
  onChange: (val: string, fileMetadata?: { fileName?: string; fileSize?: string; fileType?: string }) => void;
  accept?: string; // e.g. "image/*", "application/pdf", "video/*", "*/*"
  fileTypeHint?: 'image' | 'photo' | 'pdf' | 'video' | 'link' | 'any';
  placeholder?: string;
  required?: boolean;
  helpText?: string;
}

export const FileUploadPicker: React.FC<FileUploadPickerProps> = ({
  label,
  value,
  onChange,
  accept = 'image/*',
  fileTypeHint = 'image',
  placeholder = 'Saisir une URL Web...',
  required = false,
  helpText
}) => {
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileDetails, setFileDetails] = useState<{ name: string; size: string } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const isImage = fileTypeHint === 'image' || fileTypeHint === 'photo';
  const isPdf = fileTypeHint === 'pdf';
  const isVideo = fileTypeHint === 'video';

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Octet';
    const k = 1024;
    const sizes = ['Octets', 'Ko', 'Mo', 'Go'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const processFile = (file: File) => {
    setLoading(true);
    const sizeFormatted = formatFileSize(file.size);
    const details = { name: file.name, size: sizeFormatted };
    setFileDetails(details);

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setLoading(false);
      onChange(result, {
        fileName: file.name,
        fileSize: sizeFormatted,
        fileType: file.type
      });
    };
    reader.onerror = () => {
      setLoading(false);
      alert('Erreur lors de la lecture du fichier. Veuillez réessayer.');
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleClear = () => {
    onChange('', undefined);
    setFileDetails(null);
    setShowUrlInput(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
  };

  const isBase64 = value.startsWith('data:');
  const hasValue = Boolean(value);

  const isValueImage = isImage || value.startsWith('data:image') || /\.(jpg|jpeg|png|gif|webp|svg)/i.test(value);
  const isValuePdf = isPdf || value.startsWith('data:application/pdf') || /\.pdf/i.test(value);
  const isValueVideo = isVideo || value.startsWith('data:video') || /\.(mp4|webm|mov|mkv)/i.test(value) || value.includes('youtube') || value.includes('vimeo');

  return (
    <div className="file-upload-picker-box" style={{
      background: '#F8FAFC',
      border: '1px solid #CBD5E1',
      borderRadius: '12px',
      padding: '1.1rem',
      marginBottom: '1.25rem',
      boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
    }}>
      {/* Label Header */}
      <div style={{ marginBottom: '0.6rem' }}>
        <label style={{ fontWeight: 800, fontSize: '0.92rem', color: '#0F172A', display: 'block' }}>
          {label} {required && <span style={{ color: '#DC2626' }}>*</span>}
        </label>
        {helpText && (
          <span style={{ fontSize: '0.8rem', color: '#64748B', display: 'block', marginTop: '0.15rem' }}>
            {helpText}
          </span>
        )}
      </div>

      {/* Hidden File Inputs */}
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <input
        ref={cameraInputRef}
        type="file"
        accept={isVideo ? 'video/*' : 'image/*'}
        capture="environment"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {/* Action Buttons Row */}
      {!hasValue && (
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: showUrlInput ? '0.75rem' : '0' }}>
          {/* Button 1: Importer Fichier */}
          <button
            type="button"
            onClick={() => { setShowUrlInput(false); fileInputRef.current?.click(); }}
            style={{
              flex: '1 1 180px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1rem',
              background: '#007A3D',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0,122,61,0.2)',
              transition: 'transform 0.15s, background 0.15s'
            }}
          >
            <span style={{ fontSize: '1.1rem' }}>📁</span>
            <span>
              {isImage ? 'Importer une Photo' : isVideo ? 'Importer une Vidéo' : isPdf ? 'Importer un PDF' : 'Importer un Fichier'}
            </span>
          </button>

          {/* Button 2: Filmer / Prendre Photo Caméra (Si Image ou Vidéo) */}
          {(isImage || isVideo) && (
            <button
              type="button"
              onClick={() => { setShowUrlInput(false); cameraInputRef.current?.click(); }}
              style={{
                flex: '1 1 180px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.65rem 1rem',
                background: '#D97706',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(217,119,6,0.2)',
                transition: 'transform 0.15s, background 0.15s'
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>📸</span>
              <span>{isVideo ? 'Filmer (Caméra)' : 'Prendre Photo (Caméra)'}</span>
            </button>
          )}

          {/* Button 3: Saisir URL / Lien */}
          <button
            type="button"
            onClick={() => setShowUrlInput(!showUrlInput)}
            style={{
              padding: '0.65rem 1rem',
              background: showUrlInput ? '#E2E8F0' : '#FFF',
              color: '#334155',
              border: '1px solid #CBD5E1',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            🔗 Lien URL Web
          </button>
        </div>
      )}

      {/* URL Input Box if toggled */}
      {!hasValue && showUrlInput && (
        <div style={{ marginTop: '0.6rem' }}>
          <input
            type="url"
            placeholder={placeholder}
            value={value}
            onChange={e => onChange(e.target.value)}
            className="form-control"
            style={{ width: '100%' }}
          />
        </div>
      )}

      {/* Loading state */}
      {loading && (
        <div style={{ padding: '0.75rem', color: '#007A3D', fontWeight: 700, textAlign: 'center' }}>
          ⏳ Traitement et encodage du fichier en cours...
        </div>
      )}

      {/* Preview box when file is selected */}
      {hasValue && !loading && (
        <div style={{
          background: '#ECFDF5',
          border: '2px solid #10B981',
          borderRadius: '10px',
          padding: '0.85rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          {/* Image Thumbnail */}
          {isValueImage && (
            <img
              src={value}
              alt="Aperçu"
              style={{ width: '80px', height: '65px', objectFit: 'cover', borderRadius: '6px', border: '1px solid #A7F3D0' }}
            />
          )}

          {/* PDF Badge */}
          {isValuePdf && (
            <div style={{
              width: '65px',
              height: '65px',
              background: '#FEE2E2',
              color: '#991B1B',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '0.8rem'
            }}>
              <span>📄 PDF</span>
            </div>
          )}

          {/* Video Badge */}
          {isValueVideo && (
            <div style={{
              width: '80px',
              height: '65px',
              background: '#FEF3C7',
              color: '#92400E',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '0.8rem'
            }}>
              <span>🎥 VIDÉO</span>
            </div>
          )}

          <div style={{ flex: 1, minWidth: '180px' }}>
            <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#065F46', wordBreak: 'break-all' }}>
              ✔ {fileDetails?.name || (isBase64 ? 'Fichier sélectionné avec succès' : value)}
            </div>
            <div style={{ fontSize: '0.78rem', color: '#047857', marginTop: '0.2rem' }}>
              {fileDetails?.size ? `Taille : ${fileDetails.size}` : 'Prêt pour publication'}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '0.78rem', padding: '0.35rem 0.65rem' }}
            >
              Changer
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '0.78rem', padding: '0.35rem 0.65rem', background: '#FEE2E2', color: '#991B1B', border: '1px solid #FCA5A5' }}
            >
              Supprimer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
