import React, { useState } from 'react';
import { ScrollView} from 'react-native';
import { Container, Spacing, AddMoney } from '../../components';
import { connect } from 'react-redux';
import { SH, useThemeHelper } from '../../helper';

const AddMoneyScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const [amountValue, setAmountValue] = useState('');
  const [cardValue, setCardValue] = useState('1');
  return (
    <Container>
        <ScrollView>
          <Spacing space={SH(20)} />
          <AddMoney
        navigation={navigation}
        amountValue={amountValue}
        setAmountValue={setAmountValue}
        cardValue={cardValue}
        setCardValue={setCardValue}
      />
        </ScrollView>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(AddMoneyScreen);
