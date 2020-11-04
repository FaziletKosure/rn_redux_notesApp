import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Appbar, Title} from 'react-native-paper';
import {Platform} from 'react-native';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const Header = ({titleText}) => {
  return (
    <Appbar.Header style={styles.headerContainer}>
      <View style={styles.container}>
        <Title style={styles.title}>{titleText}</Title>
        <Appbar.Action
          style={{marginHorizontal: 50}}
          icon={MORE_ICON}
          size={40}
          color="white"
          onPress={() => {}}
        />
      </View>
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#80deea',
  },
  container: {
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 70,
  },
});
