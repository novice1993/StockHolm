export interface StateProps {
  stockOrderType: boolean;
  stockPriceType: boolean;
  stockOrderPrice: number;
  expandScreen: { left: boolean; right: boolean };
  stockOrderSet: boolean;
  companyId: number;
  stockOrderVolume: number;
  decisionWindow: boolean;
  login: number;
  compareChart: number;
  leftStockListType: number;
}
