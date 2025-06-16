import { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';

const QRCodeGenerator = ({ uuid, size = 256 }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [currentUuid, setCurrentUuid] = useState(uuid || '');
  const [loading, setLoading] = useState(false);

  const generateQRCode = async (id) => {
    if (!id) return;
    
    setLoading(true);
    try {
      const url = await QRCode.toDataURL(id, {
        width: size,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
      setQrCodeUrl(url);
    } catch (error) {
      console.error('Error generating QR code:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateNewUuid = () => {
    const newUuid = uuidv4();
    setCurrentUuid(newUuid);
    generateQRCode(newUuid);
  };

  useEffect(() => {
    if (currentUuid) {
      generateQRCode(currentUuid);
    }
  }, [currentUuid, size]);

  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      {qrCodeUrl && (
        <div className="flex flex-col items-center space-y-2">
          <img 
            src={qrCodeUrl} 
            alt="QR Code" 
            className="rounded-md border border-gray-300"
          />
          <a
            href={qrCodeUrl}
            download={`qr-code-${currentUuid}.png`}
            className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Download QR Code
          </a>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;