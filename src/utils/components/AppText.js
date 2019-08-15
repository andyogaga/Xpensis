import React from 'react'
import { Text } from 'react-native';
import PropTypes from 'prop-types';



const AppText = (props) => {

  return ( 
    <Text style={{ fontFamily: `${props.family}${props.variant}`, fontSize: 14, color: '#353535', ...props.style, }}>
      {props.children}
    </Text>
  )
}

AppText.propTypes = {
  style: Text.propTypes.style,
  variant: PropTypes.oneOf(['Bold', 'Light', 'Regular']).isRequired,
  family: PropTypes.oneOf(['Roboto',  'Poppins']).isRequired
}

export default AppText;