import React from 'react';
import { ImageBackground, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { PRI_COLOR } from './../../utils/constants/colors';

class SplashScreen extends React.Component {

  startApp = () => {
    setTimeout(() => this.props.navigation.navigate('HomeDrawer'), 1500);
  }


  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/xpense.png')}
        style={{
          flex: 1
        }}>

        <ActivityIndicator
          size={40}
          color={PRI_COLOR}
          style={{
            marginTop: '70%'
          }}
        />

      </ImageBackground>
    );
  }

  componentDidMount() {
    this.startApp();
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  viewDevotionalFull: devotion => dispatch(viewDevotionFull(devotion)),
  viewTestimonyFull: testimony => dispatch(viewTestimonyFull(testimony)),
  updateTestimonyList: testimonyList => dispatch(updateTestimonyList(testimonyList)),
  updateDevotionList: devotionList => dispatch(updateDevotionList(devotionList)),
  viewAnnouncementFull: announcement => dispatch(viewAnnouncementFull(announcement)),
  updateAnnouncementList: announcementList => dispatch(updateAnnouncementList(announcementList)),
  updateSermonList: sermonList => dispatch(updateSermonList(sermonList)),
  viewSermonFull: sermon => dispatch(viewSermonFull(sermon)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
