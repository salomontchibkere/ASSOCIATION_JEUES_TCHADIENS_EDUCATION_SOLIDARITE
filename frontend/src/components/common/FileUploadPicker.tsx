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
  placeholder = 'Saisir une URL ou parcourir un fichier...',
  required = false,
  helpText
}) => {
  const [mode, setMode] = useState<'upload' | 'url'>('upload');
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileDetails, setFileDetails] = useState<{ name: string; size: string } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

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

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleClear = () => {
    onChange('', undefined);
    setFileDetails(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
  };

  const isBase64 = value.startsWith('data:');
  const isImage = fileTypeHint === 'image' || fileTypeHint === 'photo' || value.startsWith('data:image') || /\.(jpg|jpeg|png|gif|webp|svg)/i.test(value);
  const isPdf = fileTypeHint === 'pdf' || value.startsWith('data:application/pdf') || /\.pdf/i.test(value);
  const isVideo = fileTypeHint === 'video' || value.startsWith('data:video') || /\.(mp4|webm|mov|mkv)/i.test(value) || value.includes('youtube') || value.includes('vimeo');

  const captureType = isVideo ? 'video/*' : 'image/*';

  return (
    <div className="file-upload-picker-container" style={{ marginBottom: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.4rem' }}>
        <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1E293B' }}>
          {label} {required && <span style={{ color: '#DC2626' }}>*</span>}
        </label>
        
        {/* Toggle Mode Buttons */}
        <div style={{ display: 'flex', gap: '0.25rem', background: '#F1F5F9', padding: '2px', borderRadius: '6px' }}>
          <button
            type="button"
            onClick={() => setMode('upload')}
            style={{
              padding: '0.25rem 0.6rem',
              fontSize: '0.78rem',
              fontWeight: 700,
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              background: mode === 'upload' ? '#007A3D' : 'transparent',
              color: mode === 'upload' ? '#FFF' : '#64748B',
              transition: 'all 0.2s'
            }}
          >
            📁 Fichier / Caméra
          </button>
          <button
            type="button"
            onClick={() => setMode('url')}
            style={{
              padding: '0.25rem 0.6rem',
              fontSize: '0.78rem',
              fontWeight: 700,
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              background: mode === 'url' ? '#007A3D' : 'transparent',
              color: mode === 'url' ? '#FFF' : '#64748B',
              transition: 'all 0.2s'
            }}
          >
            🔗 Lien URL Web
          </button>
        </div>
      </div>

      {helpText && (
        <p style={{ margin: '0 0 0.5rem 0', fontSize: '0.8rem', color: '#64748B' }}>
          {helpText}
        </p>
      )}

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
        accept={captureType}
        capture="environment"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {mode === 'upload' ? (
        <div>
          {value ? (
            /* Selected File / Preview Box */
            <div style={{
              background: '#F8FAFC',
              border: '2px dashed #10B981',
              borderRadius: '10px',
              padding: '1rem',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                {/* Visual Preview */}
                {isImage && (
                  <img
                    src={value}
                    alt="Aperçu"
                    style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '6px', border: '1px solid #CBD5E1' }}
                  />
                )}

                {isPdf && (
                  <div style={{
                    width: '60px',
                    height: '60px',
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
                    <span>PDF</span>
                    <span style={{ fontSize: '1.1rem' }}>📄</span>
                  </div>
                )}

                {isVideo && (
                  <div style={{
                    width: '80px',
                    height: '60px',
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
                    <span>VIDÉO</span>
                    <span style={{ fontSize: '1.1rem' }}>🎥</span>
                  </div>
                )}

                <div style={{ flex: 1, minWidth: '180px' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A', wordBreak: 'break-all' }}>
                    {fileDetails?.name || (isBase64 ? 'Fichier importé avec succès' : value)}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 600, marginTop: '0.15rem' }}>
                    ✔ Prêt pour publication {fileDetails?.size ? `• ${fileDetails.size}` : ''}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="btn btn-secondary btn-sm"
                    style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem' }}
                  >
                    Changer
                  </button>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="btn btn-secondary btn-sm"
                    style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem', background: '#FEE2E2', color: '#991B1B', border: '1px solid #FCA5A5' }}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Upload Options Area (Galerie vs Caméra) */
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                style={{
                  border: isDragging ? '2px solid #007A3D' : '2px dashed #CBD5E1',
                  background: isDragging ? '#ECFDF5' : '#F8FAFC',
                  borderRadius: '10px',
                  padding: '1.25rem 1rem',
                  textAlign: 'center',
                  transition: 'all 0.2s'
                }}
              >
                {loading ? (
                  <div style={{ color: '#007A3D', fontWeight: 700 }}>Chargement et encodage du fichier...</div>
                ) : (
                  <>
                    <div style={{ fontSize: '1.6rem', marginBottom: '0.3rem' }}>
                      {fileTypeHint === 'pdf' ? '📄' : fileTypeHint === 'video' ? '🎥' : '📷'}
                    </div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1E293B', marginBottom: '0.6rem' }}>
                      Choisissez l'une des 2 options d'importation :
                    </div>
                    
                    <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="btn btn-secondary btn-sm"
                        style={{ background: '#FFF', border: '1px solid #CBD5E1', color: '#0F172A', fontWeight: 700 }}
                      >
                        📁 Importer un fichier / Galerie
                      </button>

                      {(isImage || isVideo) && (
                        <button
                          type="button"
                          onClick={() => cameraInputRef.current?.click()}
                          className="btn btn-primary btn-sm"
                          style={{ background: '#007A3D', color: '#FFF', fontWeight: 700 }}
                        >
                          📸 {isVideo ? 'Filmer en direct (Caméra)' : 'Prendre une photo (Caméra)'}
                        </button>
                      )}
                    </div>

                    <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.6rem' }}>
                      ou glissez-déposez le fichier ici depuis votre appareil
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* URL Input Mode */
        <div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="url"
              required={required && !value}
              placeholder={placeholder}
              value={isBase64 ? '' : value}
              onChange={e => onChange(e.target.value)}
              className="form-control"
              style={{ flex: 1 }}
            />
            {value && (
              <button
                type="button"
                onClick={handleClear}
                className="btn btn-secondary btn-sm"
                style={{ background: '#FEE2E2', color: '#991B1B', border: '1px solid #FCA5A5' }}
              >
                Effacer
              </button>
            )}
          </div>
          {isBase64 && (
            <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.3rem', fontStyle: 'italic' }}>
              Un fichier local est actuellement sélectionné. Saisissez une URL pour le remplacer.
            </div>
          )}
        </div>
      )}
    </div>
  );
};
