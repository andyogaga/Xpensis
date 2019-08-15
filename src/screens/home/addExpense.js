import React, { Component } from 'react'
import { Text, TouchableOpacity, Picker } from 'react-native'
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Input } from 'react-native-elements';
import {PRI_COLOR} from '../../utils/constants/colors';

class AddExpense extends Component {
  render() {
    return (
      <Grid style={{ backgroundColor: '#fff' }}>
        <Col >
          <Row style={{ width: '100%', marginTop: 25, }}>
            <Col style={{ justifyContent: 'center' }}>
              <Text style={{ marginLeft: 10, textAlign: 'justify' }}>Category</Text>
            </Col>
            <Col style={{ justifyContent: 'center' }}>
              <Picker
                selectedValue={this.props.category}
                mode={'dialog'}
                style={{ height: 40, width: '100%', alignSelf: 'center' }}
                onValueChange={(itemValue) => {
                  this.props.setExpenseCategory(itemValue)
                }
                }>
                <Picker.Item label="Food" value="food" />
                <Picker.Item label="Rent" value="rent" />
                <Picker.Item label="Fees" value="fees" />
              </Picker>
            </Col>
          </Row>

          <Input
            value={this.props.expenseAmount}
            containerStyle={{
              marginTop: 25,
              borderColor: 'rgba(0,71,34,0.8)',
            }}
            keyboardType='number-pad'
            inputStyle={{ marginLeft: 10, paddingBottom: 0 }}
            placeholder={'Amount'}
            onChangeText={amount => this.props.setExpenseAmount(amount)}
          />

          <TouchableOpacity
            style={{ backgroundColor: PRI_COLOR, height: 40, width: '100%', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}
            onPress={() => {
              this.props.addExpense({
                amount: parseFloat(this.props.expenseAmount),
                category: this.props.category
              });

              this.props.calcTotal();
            }}>
            <Text
              style={{ color: '#fff', alignSelf: 'center' }}
            >
              ADD INCOME
              </Text>
          </TouchableOpacity>
        </Col>
      </Grid>
    )
  }
}

export default AddExpense;
