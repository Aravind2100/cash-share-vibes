
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Gift } from 'lucide-react';

interface SuccessPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const SuccessPopup: React.FC<SuccessPopupProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="border-0 shadow-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white max-w-sm w-full animate-scale-in">
        <CardContent className="p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
          </div>
          
          <div className="space-y-2 mb-6">
            <div className="text-2xl font-bold">🎉 You're Entered!</div>
            <div className="text-lg opacity-90">
              Congratulations! You're now eligible to win ₹100 PayTM Cash
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-4 bg-white/20 rounded-lg p-3">
            <Gift className="w-5 h-5" />
            <span className="font-semibold">Winner announced this Monday!</span>
          </div>
          
          <button
            onClick={onClose}
            className="w-full bg-white text-green-600 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Continue Sharing
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuccessPopup;
