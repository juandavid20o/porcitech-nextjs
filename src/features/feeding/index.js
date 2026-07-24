import FeedingView from './FeedingView';

export const feedingModule = {
  key: 'feeding',
  name: 'Alimentación',
  path: '/dashboard/feeding',
  scopes: ['consumo', 'raciones', 'seguimiento'],
};

export { FeedingView };
export default FeedingView;