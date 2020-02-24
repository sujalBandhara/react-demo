
import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { COLORS } from '../utils/Constants';


const CustomButton = props => {
    const {
      labelText,
      handleNextButton,
    } = props;
    return (
      <TouchableOpacity
        style={[styles.containerDefaultStyle]}
        onPress={handleNextButton}
        >
        <Text style={[styles.textDefaultStyle]}>
          {labelText}
        </Text>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    containerDefaultStyle: {
      height: 50,
      alignSelf: 'stretch',
      backgroundColor: COLORS.Black,
      marginLeft: 30,
      marginRight: 30,
      borderRadius: 7,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textDefaultStyle: {
      fontSize: 16,
      color: COLORS.White,
      textAlign: 'center',
      alignSelf: 'center',
    },
  });
  export default CustomButton;