export const tierOrder = ['free', 'silver', 'gold', 'platinum'] as const;

export function getTierIndex(tier: string): number {
  return tierOrder.indexOf(tier as (typeof tierOrder)[number]);
}
