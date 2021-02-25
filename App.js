import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  
  View,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Appbar, TextInput } from 'react-native-paper';
import "react-native-vector-icons";

import manchuCore from "./manchuCore"
import lookup from "./lu"

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    myOwnColor: '#194705',
  }
};

const styles = StyleSheet.create({
  container: {

  },
  subcontainer: {
        marginTop: 48,
    marginLeft: 20,
    marginRight: 20
  },
  title: {
    color: '#20894d',
    fontWeight: 'bold',
    fontSize: 28,
    fontFamily: 'Tahoma, Helvetica, Noto Sans Mono, Noto Sans JCK Mono',
  },
  subtitle: {
    textAlign: 'right',
  },
  manchulyInput: {
    autoCorrect: false,
    height: 48,
    padding: 8,
  },
  manchuScript:{
    fontWeight: 'regular',
    fontFamily: 'Noto Sans Mongolian, Noto Sans Mongolian Regular',
  },
  manchuTextView:{
    padding: 10,
    fontSize: 32
  },
  entryView: {
    flex: 1,
    marginBottom: 4
  },
  entry: {
    color: '#20894d',
    fontWeight: 'regular',
    fontSize: 16,
    fontFamily: 'Tahoma, Helvetica, Noto Sans Mono, Noto Sans JCK Mono',
  },
});

const MyAppBar = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Manchuly" subtitle="Manchurify" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

const QueryInput = () => {
  const [text, setText] = useState('');
  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={styles.manchulyInput}
        placeholder="Type Manchu here to search…"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Text style={[styles.manchuTextView, styles.manchuScript]}>{manchuCore.manchurize(text)}</Text>
     
    </View>
  );
};

let DATA = lookup.byHergen();
console.log(DATA)

const Entry = ({ m, h, z }) => {
  return (
    <View style={styles.entryView}>
      <Text style={styles.title}>{m}</Text>
            <Text style={styles.title}>{h}</Text>
                  <Text style={styles.title}>{z}</Text>
    </View>
  );
};

const App = () => {
  const renderItem = ({ item }) => <Entry m={item.m} h={item.h} z={item.z}/>;
  return (
    
    <View style={styles.container}>
<MyAppBar />
<View style={styles.subcontainer}>
      <Text style={styles.title}>Manchuly Nuktembi</Text>
      <Text style={styles.subtitle}>via React Native</Text>
      <QueryInput />
      <Entry />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      </View>
    </View>
  );
};

const Home = () => {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
};

DATA.push({ id: 'aaa', title: 'aaa' });
export default Home;
