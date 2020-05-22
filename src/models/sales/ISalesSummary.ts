import ISale from './ISale';
import ISalesTotals from './ISalesTotals';

export default interface ISalesSummary {
  sales: ISale[];
  totals: ISalesTotals;
}
