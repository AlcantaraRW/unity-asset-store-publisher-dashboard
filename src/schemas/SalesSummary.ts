import ISale from '../models/sales/ISale';
import ISalesTotals from '../models/sales/ISalesTotals';
import ISalesSummary from '../models/sales/ISalesSummary';

class SalesSummary implements ISalesSummary {
  static schema = {
    name: 'SalesSummary',
    primaryKey: 'id',
    properties: {
      id: 'string',
      sales: 'Sale[]',
      totals: 'SalesTotals',
    },
  };

  id = '';

  sales: ISale[] = [];

  totals: ISalesTotals = {} as ISalesTotals;
}

export default SalesSummary;
