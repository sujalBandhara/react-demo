import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../utils/Constants';

const ListItem = (props) => {
    return (
      <TouchableOpacity>
        <View style = { styles.listItem }>
          <Text>{ props.placeName }</Text>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: COLORS.Gray
  }
});

export default ListItem;