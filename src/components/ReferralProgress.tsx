
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Users, Target } from 'lucide-react';

interface ReferralProgressProps {
  current: number;
  required: number;
  percentage: number;
}

const ReferralProgress: React.FC<ReferralProgressProps> = ({ current, required, percentage }) => {
  const remaining = required - current;
  
  return (
    <Card className="border border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-orange-600" />
              <span className="font-semibold text-gray-800">Your Progress</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Target className="w-4 h-4" />
              <span>{current} of {required} friends</span>
            </div>
          </div>
          
          <Progress value={percentage} className="h-3" />
          
          <div className="flex items-center justify-between text-sm">
            <div className="text-gray-600">
              {remaining > 0 ? (
                <span>You need <strong>{remaining} more {remaining === 1 ? 'friend' : 'friends'}</strong> to enter!</span>
              ) : (
                <span className="text-green-600 font-semibold">🎉 You're eligible to win!</span>
              )}
            </div>
            <div className="font-semibold text-orange-600">
              {Math.round(percentage)}%
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralProgress;
