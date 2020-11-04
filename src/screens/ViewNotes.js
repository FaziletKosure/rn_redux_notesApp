import React, {useState} from 'react';
import {StyleSheet, View, FlatList, ImageBackground} from 'react-native';
import {Text, FAB, List, IconButton} from 'react-native-paper';
import Header from '../component/Header';
import {useSelector, useDispatch} from 'react-redux';
import {addnote, deletenote, editnote} from '../reducer/notesApp';

const ViewNotes = (props) => {
  // const [notes, setNotes] = useState('');
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();
  const addNote = (note) => {
    console.log(notes);
    dispatch(addnote(note));
  };
  const deleteNote = (id) => dispatch(deletenote(id));
  const editNote = (id, note) => dispatch(editnote(id, note));

  // const addNote = (note) => {
  //   note.id = notes.length + 1;
  //   setNotes([...notes, note]);
  // };

  return (
    <>
      <View style={{flexDirection: 'row', backgroundColor: '#80deea'}}>
        <IconButton
          icon="close"
          size={35}
          color="black"
          onPress={() => props.navigation.goBack()}
          style={styles.iconButton}
        />
        <Header titleText="MY NOTES" />
      </View>
      <View style={styles.container}>
        {notes.length === 0 ? (
          <View style={styles.titleContainer}>
            <ImageBackground
              style={styles.img}
              source={require('../assets/icon.png')}>
              <Text style={styles.title}>You do not have any Notes</Text>
            </ImageBackground>
          </View>
        ) : (
          <ImageBackground
            style={styles.imgNote}
            source={require('../assets/logo.png')}>
            <FlatList
              data={notes}
              renderItem={({item}) => (
                <List.Item
                  style={{
                    backgroundColor: 'rgba(110,100,120,0.6)',
                    borderRadius: 5,
                  }}
                  title={item.note.noteTitle}
                  description={item.note.noteDescription}
                  descriptionNumberLines={1}
                  titleStyle={styles.listTitle}
                  descriptionStyle={styles.noteDesc}
                  onPress={() => deleteNote(item.id)}
                  onLongPress={() => {
                    console.log(item);
                    editNote(item.id, item.note);
                  }}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => (
                <View style={{borderWidth: 1.5, borderColor: '#bdbdbd'}} />
              )}
            />
          </ImageBackground>
        )}

        <FAB
          style={styles.fab}
          small
          icon="plus"
          label="Add a new Note"
          onPress={() =>
            props.navigation.navigate('AddNotesPage', {
              addNote: addNote,
            })
          }
        />
      </View>
    </>
  );
};

export default ViewNotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ffc1e3',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    transform: [{rotate: '300deg'}],
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 170,
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 10,
    backgroundColor: '#bf5f82',
  },
  listTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  noteDesc: {
    fontSize: 20,
    fontWeight: '500',
  },
  img: {
    width: '100%',
    height: '80%',
  },
  imgNote: {
    width: '100%',
    height: '90%',
    marginVertical: 50,
  },
});
