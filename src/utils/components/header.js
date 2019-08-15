import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

class CustomHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid style={{ flex: 1, height: 50, marginBottom: -50, zIndex: 3,  }}>
        <Row style={{ flex: 1, alignItems: 'flex-start', backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', }}>
          <Col style={{ width: 50, backgroundColor: 'transparent', }}>
            <TouchableOpacity
              onPress={() => {
                (this.props.drawer == 'drawer') ?
                  this.props.navigation.toggleDrawer()
                  :
                  this.props.navigation.goBack()
              }
              }
              style={{alignSelf: 'center'}}
            >
              <Image source={this.props.navIcon } style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
          </Col>
          <Col style={{ backgroundColor: 'transparent' }}>
            <Text style={{ fontSize: 16, color: '#fff', alignSelf: 'flex-start' }}>{this.props.title}</Text>
          </Col>
        </Row>
      </Grid>
    )
  }
}


export default withNavigation(CustomHeader);