
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wallet, Share, Users, Gift, CheckCircle, ArrowRight } from 'lucide-react';
import ShareModal from '@/components/ShareModal';
import PayTMWallet from '@/components/PayTMWallet';
import ReferralProgress from '@/components/ReferralProgress';
import LiveActivity from '@/components/LiveActivity';
import SuccessPopup from '@/components/SuccessPopup';

const Index = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [referralCount, setReferralCount] = useState(0);
  const requiredReferrals = 5;
  const progressPercentage = (referralCount / requiredReferrals) * 100;
  const isEligible = referralCount >= requiredReferrals;

  const handleShare = () => {
    setIsShareModalOpen(true);
  };

  const handleShareComplete = () => {
    if (referralCount < requiredReferrals) {
      setReferralCount(prev => Math.min(prev + 1, requiredReferrals));
    }
    if (referralCount + 1 >= requiredReferrals) {
      setShowSuccessPopup(true);
    }
    setIsShareModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <Gift className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-gray-800">CashReward</span>
          </div>
          <Badge variant="secondary" className="bg-red-100 text-red-700 animate-pulse">
            🔥 Live Contest
          </Badge>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* Enhanced Main Prize Banner */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          <div className="absolute top-4 right-4 text-2xl animate-bounce">🎉</div>
          
          <CardContent className="p-6 relative z-10">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm">
                <Wallet className="w-4 h-4" />
                Weekly Giveaway
              </div>
              
              <div className="space-y-2">
                <div className="text-5xl font-bold">₹100</div>
                <div className="text-xl opacity-90">PayTM Cash Prize Weekly!</div>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-sm opacity-90">
                <CheckCircle className="w-4 h-4" />
                <span>Instant Transfer • No Hidden Fees</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Activity Feed */}
        <LiveActivity />

        {/* Referral Progress */}
        <ReferralProgress 
          current={referralCount} 
          required={requiredReferrals} 
          percentage={progressPercentage} 
        />

        {/* How it Works */}
        <Card className="border border-gray-200 shadow-md">
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              How to Enter & Win
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-blue-600">1</span>
                </div>
                <div className="text-sm text-gray-600">
                  Share your unique link with friends on WhatsApp
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-blue-600">2</span>
                </div>
                <div className="text-sm text-gray-600">
                  Get 5 friends to click your link and sign up
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-green-600">3</span>
                </div>
                <div className="text-sm text-gray-600">
                  Win ₹100 PayTM cash instantly! 🎉
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* PayTM Wallet Display */}
        <PayTMWallet />

        {/* Enhanced Share Button */}
        <div className="space-y-3">
          <Button 
            onClick={handleShare} 
            className={`w-full py-6 text-lg font-semibold shadow-lg transition-all ${
              isEligible 
                ? 'bg-green-600 hover:bg-green-700 animate-pulse' 
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
            size="lg"
          >
            <Share className="w-5 h-5 mr-2" />
            {isEligible ? '🎉 Share More & Stay Eligible!' : `Share with ${Math.ceil(requiredReferrals - referralCount)} More Friends`}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <div className="text-center text-sm text-gray-500">
            Contest ends this Sunday • Winners announced Monday • No spam guarantee
          </div>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4">
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Verified Platform</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>Instant Payout</span>
            </div>
          </div>
        </div>
      </div>

      <ShareModal 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)}
        onShareComplete={handleShareComplete}
      />

      <SuccessPopup
        isVisible={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
      />
    </div>
  );
};

export default Index;
