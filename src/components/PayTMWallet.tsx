
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Wallet, ArrowRight, Shield } from 'lucide-react';

const PayTMWallet = () => {
  return (
    <Card className="border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-800">PayTM Wallet</div>
              <div className="text-sm text-gray-600 flex items-center gap-1">
                <Shield className="w-3 h-3" />
                Instant & Secure Transfer
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">₹100</div>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              Prize <ArrowRight className="w-3 h-3" />
            </div>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-blue-200">
          <div className="text-xs text-gray-600 text-center">
            Winners receive cash directly to their PayTM wallet within 24 hours
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PayTMWallet;
