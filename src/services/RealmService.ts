import Realm from 'realm';
import SalesSummary from '../schemas/SalesSummary';
import Sale from '../schemas/Sale';
import SalesTotals from '../schemas/SalesTotals';

export default function getRealm(): ProgressPromise {
  return Realm.open({
    schema: [Sale, SalesTotals, SalesSummary],
  });
}
