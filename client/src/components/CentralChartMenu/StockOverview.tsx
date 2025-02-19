import { useSelector } from "react-redux";
import { styled } from "styled-components";
import useGetStockInfo from "../../hooks/useGetStockInfo";
import { StateProps } from "../../models/stateProps";
import { dummyLogo } from "../../dummy/dummyLogo";

const marketType: string = "코스피";
const volumeText: string = "거래량";
const valueText: string = "거래대금";

const StockOverview = () => {
  const companyId = useSelector((state: StateProps) => state.companyId);
  const { stockInfo } = useGetStockInfo(companyId);

  const corpName = stockInfo.korName;

  const companyLogo = corpName && dummyLogo[companyId - 1];

  const stockCode = stockInfo.code;
  const stockPrice = parseInt(stockInfo.stockInfResponseDto.stck_prpr, 10).toLocaleString();
  const priceChageRate = parseFloat(stockInfo.stockInfResponseDto.prdy_ctrt);
  const chageDirection = priceChageRate > 0 ? "▲" : "▼";
  const priceChageAmount = Math.abs(parseInt(stockInfo.stockInfResponseDto.prdy_vrss, 10)).toLocaleString();
  const transactionVolume = parseInt(stockInfo.stockInfResponseDto.acml_vol, 10).toLocaleString();

  // 총 거래대금 계산
  const amount = parseInt(stockInfo.stockInfResponseDto.acml_tr_pbmn, 10);
  const [billions, tenThousands] = [Math.floor(amount / 100000000), Math.floor((amount % 100000000) / 10000)];
  const transactionValue = `${billions.toLocaleString()}억 ${tenThousands.toLocaleString()}만`;

  return (
    <Container priceChangeRate={priceChageRate}>
      <img className="CorpLogo" src={companyLogo} alt="stock logo" />
      <div className="CorpName">{corpName}</div>
      <div className="StockCode">
        {stockCode} <span>{marketType}</span>
      </div>
      <div className="StockPrice">{stockPrice}</div>
      <div className="PriceChangeRate">{priceChageRate}%</div>
      <div className="PriceChangeAmount">
        <div className="changeDirection">{chageDirection}</div> {priceChageAmount}
      </div>
      <TransactionVolume>
        <span>{volumeText}</span>
        {transactionVolume}
      </TransactionVolume>
      <TransactionValue>
        <span>{valueText}</span>
        {transactionValue}
      </TransactionValue>
    </Container>
  );
};

export default StockOverview;

// component 생성
const Container = styled.div<{ priceChangeRate: number }>`
  flex: 7 0 0;
  overflow-x: scroll;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  gap: 8px;

  &::-webkit-scrollbar {
    display: none;
  }

  .CorpLogo {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  .CorpName {
    white-space: nowrap;
    min-width: min-content;
    font-size: 18px;
    font-weight: 530;
  }

  .StockCode {
    white-space: nowrap;
    min-width: min-content;
    font-size: 14px;
    color: #999999;
  }

  .StockPrice {
    font-size: 18px;
    color: ${(props) => (props.priceChangeRate > 0 ? "#ed2926" : props.priceChangeRate === 0 ? "black" : "#3177d7")};
    font-weight: 530;
  }

  .PriceChangeRate,
  .PriceChangeAmount {
    font-size: 14px;
    color: ${(props) => (props.priceChangeRate > 0 ? "#ed2926" : props.priceChangeRate === 0 ? "black" : "#3177d7")};

    display: flex;
    flex-direction: row;
    gap: 2px;

    .changeDirection {
      font-size: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const TransactionVolume = styled.div`
  white-space: nowrap;
  min-width: min-content;
  font-size: 14px;
  color: #4e4d4d;

  & span {
    color: #999999;
    padding-right: 5px;
  }
`;

const TransactionValue = styled(TransactionVolume)``;
