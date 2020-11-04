import React, {useState} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {Text, IconButton, TextInput, FAB} from 'react-native-paper';
import Header from '../component/Header';

const AddNotes = (props) => {
  console.log(props.route.params.addNote);

  const [noteTitle, setNoteTitle] = useState('');
  const [noteDescription, setNoteDescription] = useState('');
  function onSaveNote() {
    props.route.params.addNote({noteTitle, noteDescription});
    props.navigation.goBack();
  }
  return (
    <>
      {/* <IconButton
        icon="close"
        size={25}
        color="black"
        onPress={() => props.navigation.goBack()}
        style={styles.iconButton}
      /> */}
      <View style={{flexDirection: 'row', backgroundColor: '#80deea'}}>
        <IconButton
          icon="close"
          size={35}
          color="black"
          onPress={() => props.navigation.goBack()}
          style={styles.iconButton}
        />
        <Header titleText="ADD a NEW NOTE " style={{position: 'relative'}} />
      </View>

      <View style={styles.container}>
        <TextInput
          label="Add Note Title here"
          value={noteTitle}
          mode="outlined"
          onChangeText={setNoteTitle}
          style={styles.title}
        />
        <ImageBackground
          style={styles.imgNote}
          source={require('../assets/ipod-touch-ipad-apple-app-store-iphone.jpg')}>
          <TextInput
            label="Add Note Description"
            value={noteDescription}
            mode="flat"
            multiline={true}
            onChangeText={setNoteDescription}
            scrollEnabled={true}
            returnKeyLabel="done"
            blurOnSubmit={true}
            style={styles.text}
          />

          {/* <View style={styles.titleContainer}>
            <Text style={styles.title}>Add Notes Modal Screen</Text>
          </View> */}
        </ImageBackground>

        <FAB
          style={styles.fab}
          small
          icon="check"
          disabled={noteTitle == '' ? true : false}
          onPress={() => onSaveNote()}
        />
      </View>
    </>
  );
};

export default AddNotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  iconButton: {},
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  text: {
    height: 300,
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    margin: 20,
    left: 0,
    bottom: 0,
    // backgroundColor: 'yellow',
  },
  imgNote: {
    width: '100%',
    height: '100%',
    marginVertical: 50,
  },
});
