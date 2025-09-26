import React from 'react';
import { PrayerInfo } from '../constants';

interface PrayerDetailsProps {
  prayer: PrayerInfo | undefined;
  onClose: () => void;
}

const PrayerDetails: React.FC<PrayerDetailsProps> = ({ prayer, onClose }) => {
  if (!prayer) {
    return (
      <div className="h-full min-h-[200px] flex items-center justify-center bg-gray-900/50 p-6 rounded-2xl shadow-lg border border-gray-700 backdrop-blur-sm text-gray-400">
        <p>Pilih waktu sholat untuk melihat detailnya.</p>
      </div>
    );
  }

  return (
    <div className="relative bg-gray-900/50 p-6 rounded-2xl shadow-lg border border-gray-700 backdrop-blur-sm h-full flex flex-col">
       <button 
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors"
        aria-label="Close details"
       >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
       </button>
      
      <h2 className="text-3xl font-bold text-green-300 mb-4 pr-8">{prayer.displayName}</h2>
      <div className="overflow-y-auto pr-2 text-left text-sm text-gray-300 space-y-4">
        <p>{prayer.description}</p>
        
        <div className="border-t border-gray-700 pt-3">
          <h4 className="font-semibold text-green-300 mb-1 text-base">Keutamaan</h4>
          <p>{prayer.details.significance}</p>
        </div>
        
        {prayer.details.hadith && (
          <div className="border-t border-gray-700 pt-3">
            <h4 className="font-semibold text-green-300 mb-1 text-base">Hadits Terkait</h4>
            <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-400">
              <p>"{prayer.details.hadith.text}"</p>
              <cite className="block text-right not-italic mt-2 text-xs text-gray-500">{prayer.details.hadith.source}</cite>
            </blockquote>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrayerDetails;
