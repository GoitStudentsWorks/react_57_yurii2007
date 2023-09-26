import { Container } from 'components/Container/Container';
import ChartComponent from 'components/StatisticsModules/components/Chart/Chart';
import SelectComponent from 'components/StatisticsModules/components/Select/Select';
import Title from 'components/StatisticsModules/components/Title/Title';
import Transaction from 'components/StatisticsModules/components/Transaction/Transaction';
import React from 'react';
import { useTransaction } from 'utils/useTransaction';

const StatisticsPage = () => {
  const { transactions } = useTransaction();
  return (
    <Container>
      <div style={{ paddingBottom: '32px' }}>
        <div style={{ width: '280px', margin: '0 auto' }}>
          <Title>Statistics</Title>
          <ChartComponent transactions={transactions} />
        </div>
        <SelectComponent />
        <Transaction />
      </div>
    </Container>
  );
};

export default StatisticsPage;
