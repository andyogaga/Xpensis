import React, { Component } from 'react';
import { View, ScrollView, } from 'react-native';
import { DrawerItems, withNavigation } from 'react-navigation';

class CustomDrawerContentComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        
        <ScrollView>
          <DrawerItems {...this.props} itemsContainerStyle={{ justifyContent: 'center' }} itemStyle={{ alignItems: 'center', height: 50 }} iconContainerStyle={{ justifyContent: 'center', alignItems: 'center', width: 50 }} />
        </ScrollView>
      </View>
    )
  }
}



export default withNavigation(CustomDrawerContentComponent);
