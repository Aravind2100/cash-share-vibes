
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Copy, Share, MessageCircle, Users } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const shareLink = "https://cashreward.app/ref/user123";
  const shareMessage = `🎉 Win ₹100 PayTM Cash! 💰

Join me in this weekly giveaway - super easy to enter!

Just click this link and sign up:
${shareLink}

✅ Instant PayTM transfer
✅ No hidden charges
✅ Trusted platform

Let's both win! 🚀`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      toast({
        title: "Link copied!",
        description: "Share link copied to clipboard",
      });
    } catch (err) {
      console.log('Failed to copy link');
    }
  };

  const shareToWhatsApp = () => {
    const encodedMessage = encodeURIComponent(shareMessage);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const shareGeneric = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Win ₹100 PayTM Cash',
          text: shareMessage,
          url: shareLink,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      copyToClipboard();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Share & Win ₹100
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <Card className="border border-green-200 bg-green-50">
            <CardContent className="p-4">
              <div className="text-sm text-green-800">
                <div className="font-semibold mb-1">Your Referral Link:</div>
                <div className="bg-white p-2 rounded border text-xs font-mono break-all">
                  {shareLink}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3">
            <Button
              onClick={shareToWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Share on WhatsApp
            </Button>

            <Button
              onClick={copyToClipboard}
              variant="outline"
              className="w-full"
              size="lg"
            >
              <Copy className="w-5 h-5 mr-2" />
              Copy Link
            </Button>

            <Button
              onClick={shareGeneric}
              variant="outline"
              className="w-full"
              size="lg"
            >
              <Share className="w-5 h-5 mr-2" />
              Share Another Way
            </Button>
          </div>

          <div className="text-xs text-gray-500 text-center">
            Each friend must sign up using your link to count towards your 5 referrals
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
