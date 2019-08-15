import React, { Component } from 'react'
import { TouchableOpacity, View, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { PRI_COLOR } from './../../utils/constants/colors';
import CustomHeader from '../../utils/components/header';
import AddIncome from './addIncome';
import { connect } from 'react-redux';
import AddExpense from './addExpense';
import { addIncome } from './../../store/actions/income.actions';
import { addExpense, setTotal } from '../../store/actions/expense.actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;



export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalIncome: 0,
      totalExpense: 0,
      total: 0 ,
      income: {
        amount: 0,
        category: 'salary'
      },
      expense: {
        amount: 0,
        category: 'rent'
      },
      activeTab: 'income'
    }
  }

  setIncomeCategory = (category) => {
    let income = this.state.income;
    income.category = category;
    return this.setState({ income: income })
  }

  setIncomeAmount = (amount) => {
    let income = this.state.income;
    income.amount = amount
    return this.setState({ income: income })
  }
  setExpenseCategory = (category) => {
    let expense = this.state.expense;
    expense.category = category;
    return this.setState({ expense: expense })
  }

  setExpenseAmount = (amount) => {
    let expense = this.state.expense;
    expense.amount = amount;
    return this.setState({ expense: expense })
  }

  calcTotal = () => {
      let total = this.state.total;
      this.props.incomes.map((income, index) => {
        total = total + income.amount
      })
      this.props.expenses.map((expense, index) => {
        total = total - expense.amount
      })

        return total.toFixed(2);
    }

    calcIncome = () => {
      let total = this.state.totalIncome;
      this.props.incomes.map((income, index) => {
        total = total + income.amount
      })
      return total;
    }

    calcExpense = () => {
      let total = this.state.totalExpense;
      this.props.expenses.map((expense, index) => {
        total = total + expense.amount
      })
      return total;
    }

  render() {
    return (
      <Grid style={{ flex: 1, backgroundColor: '#fff' }}>
        <Col style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            <CustomHeader drawer='drawer' navIcon={require('../../assets/icons/drawer-open.png')} title='Home' />
            <Col >
              <View style={styles.dashboard}>
                <Row size={3} >
                  <Col style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
                    <Text  style={{ fontSize: 50, color: '#fff', alignSelf: 'center' }}>Total</Text>
                    <Text style={{ fontSize: 50, color: '#fff', alignSelf: 'center' }} >{`N${this.calcTotal()}`}</Text>
                  </Col>
                </Row>
                <Row size={2}>
                  <Col >
                    <Text  style={{ fontSize: 20, color: '#fff', alignSelf: 'center' }}>Total Incomes</Text>
                    <Text style={{ fontSize: 16, color: '#fff', alignSelf: 'center' }}>{`N${this.calcIncome()}`}</Text>
                    <TouchableOpacity style={styles.viewMoreButton}
                    onPress={() => this.props.navigation.navigate('Incomes')}>
                      <Text style={{ fontSize: 14, color: '#000', alignSelf: 'center' }} >
                        VIEW INCOMES
                        </Text>
                    </TouchableOpacity>
                  </Col>
                  <Col >
                    <Text style={{ fontSize: 20, color: '#fff', alignSelf: 'center' }}>Total Expenses</Text>
                    <Text style={{ fontSize: 16, color: '#fff', alignSelf: 'center' }}>{`N${this.calcExpense()}`}</Text>
                    <TouchableOpacity style={styles.viewMoreButton}
                      onPress={() => this.props.navigation.navigate('Expenses')}
                    >
                      <Text style={{ fontSize: 14, color: '#000', alignSelf: 'center' }} >
                        VIEW EXPENSES
                        </Text>
                    </TouchableOpacity>
                  </Col>
                </Row>
              </View>
              <Row style={{ height: 60, alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                <Col style={{ alignSelf: 'center' }}>
                  <TouchableOpacity style={{ ...styles.button, backgroundColor: this.state.activeTab === 'income' ? '#fff' : '#f1f1f1' }}
                    onPress={() => this.setState({ activeTab: 'income' })}
                  >
                    <Text style={{ ...styles.buttonText }}>ADD INCOME</Text>
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity style={{ ...styles.button, backgroundColor: this.state.activeTab === 'expense' ? '#fff' : '#f1f1f1' }}
                    onPress={() => this.setState({ activeTab: 'expense' })}>
                    <Text style={styles.buttonText} >ADD EXPENSE</Text>
                  </TouchableOpacity>
                </Col>
              </Row>
              <Col style={{ padding: 20 }}>
                {this.state.activeTab === 'income' ?
                  <AddIncome incomeAmount={this.state.income.amount} category={this.state.income.category} setIncomeCategory={this.setIncomeCategory} setIncomeAmount={this.setIncomeAmount} addIncome={this.props.addIncome} calcTotal={this.calcTotal} /> :
                  <AddExpense expenseAmount={this.state.expense.amount} category={this.state.expense.category} setExpenseCategory={this.setExpenseCategory} setExpenseAmount={this.setExpenseAmount} addExpense={this.props.addExpense} calcTotal={this.calcTotal}/>}
              </Col>


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
    height: SCREEN_HEIGHT * 0.5,
    backgroundColor: PRI_COLOR,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60
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
  addIncome: incomeList => dispatch(addIncome(incomeList)),
  addExpense: expenseList => dispatch(addExpense(expenseList)),
  setTotal: total => dispatch(setTotal(total))
});

const mapStateToProps = state => ({
  incomes: state.incomeList,
  expenses: state.expenseList,
  // total: state.total
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
