import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Grid, Col, Row } from 'react-native-easy-grid';
import { connect } from 'react-redux';
import { PRI_COLOR } from './../../utils/constants/colors';
import CustomHeader from '../../utils/components/header';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export class Expenses extends Component {
  render() {
    const renderExpenses = () => {
      return this.props.expenseList.map((expense, index) => {
        return (
          <Row key={index} style={{ height: 40, width: '100%', marginBottom: 10, justifyContent: 'center' }}>
            <Col >
              <Text style={{ color: PRI_COLOR, fontSize: 16, alignSelf: 'center' }}>{expense.category.toUpperCase()}:</Text>
            </Col>
            <Col >
              <Text style={{ fontSize: 16, alignSelf: 'center' }}>{expense.amount}</Text>
            </Col>
            <Col >
              <TouchableOpacity style={{ backgroundColor: 'red' }}
                onPress={() => {
                  for (let i = 0; i < this.props.expenseList.length; i++) {
                    if (i === index) {
                      this.props.expenseList.splice(i, 1);
                    }
                    console.log('I removed');
                  }
                }
                }
              >
                <Text style={{ fontSize: 12, alignSelf: 'center' }}>Delete</Text>
              </TouchableOpacity>

            </Col>
          </Row>
        )
      })
    }
    return (
      <Grid style={{ flex: 1, backgroundColor: '#fff' }}>
        <Col style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            <CustomHeader drawer='drawer' navIcon={require('../../assets/icons/drawer-open.png')} title='Home' />
            <Col >
              <View style={styles.dashboard}>
                <Text style={{ fontSize: 30, color: '#fff', alignSelf: 'center' }}>Expenses</Text>
              </View>
              {renderExpenses()}
            </Col>
          </ScrollView>
        </Col>
      </Grid>
    )
  }
}

const styles = StyleSheet.create({
  quickLinkContainer: {
    borderRadius: 20,
    backgroundColor: PRI_COLOR,
    height: 70,
    width: '100%',
    alignSelf: 'center'
  },
  dashboard: {
    width: '100%',
    height: SCREEN_HEIGHT * 0.3,
    backgroundColor: PRI_COLOR,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    marginBottom: 30
  },
  viewMoreButton: {
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 40,
    width: '70%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  button: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    alignSelf: 'center',
    color: PRI_COLOR,
    fontSize: 16
  }
});


const mapDispatchToProps = dispatch => ({
  addExpense: expenseList => dispatch(addExpense(expenseList)),
  addExpense: expenseList => dispatch(addExpense(expenseList))
});

const mapStateToProps = state => ({
  expenseList: state.expenseList
})

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
