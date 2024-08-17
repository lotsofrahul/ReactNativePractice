import React, {useEffect, useState} from 'react';
import {
  //These are called components, like tags in HTML
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  ScrollView,
  SectionList,
} from 'react-native';
import Style1 from './Styles/Style1';
import Users from './Utilities/Users';
import Util2 from './Utilities/Util2';

const App = () => {
  const [value, setValue] = useState('');
  const [show, setShow] = useState(true);
  //runs when a component/state/prop change(when mouting happen)
  // useEffect(() => {
  //   console.warn('jb');
  // }, []); //empty array => component did mount (runs only after mounting)
  // useEffect(() => {
  //   console.warn('jb');
  // }, [value]); //passing state/prop, useEffect runs only when these state/prop updates. (component did update)

  //useEffect when component Unmount

  return (
    // <View>
    //   <Text style={{fontSize: 30, color: 'red'}}>Hello Hai ....</Text>
    //   <Text style={[Style1.sty1, {color: 'red'}]}>Hello Hai ....</Text>
    //   <Button title={value} />
    //   <TextInput
    //     style={{margin: 10, fontSize: 30, borderColor: 'red', borderWidth: 2}}
    //     placeholder="Enter something"
    //     value={value}
    //     onChangeText={text => setValue(text)}
    //   />
    //   <TextInput
    //     style={{margin: 10, fontSize: 30, borderColor: 'red', borderWidth: 2}}
    //     placeholder="Enter Password"
    //     value={value}
    //     secureTextEntry={true}
    //     onChangeText={text => setValue(text)}
    //   />
    //   <Button
    //     title="Clear Text"
    //     onPress={() => {
    //       setValue('');
    //     }}
    //   />

    //   {/* <FlatList
    //     data={Users}
    //     renderItem={({item}) => <Text>{item.name}</Text>}
    //     keyExtractor={item => item.id}
    //   /> */}

    //   {/* <ScrollView>
    //     <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
    //       {Users.map(item => (
    //         <Text
    //           style={{
    //             fontSize: 40,
    //           }}>
    //           {item.name}
    //         </Text>
    //       ))}
    //     </View>
    //   </ScrollView> */}
    //   <Button title="Toggle" onPress={() => setShow(!show)} />
    //   {show ? <Util2 /> : null}
    // </View>
    <View style={{flex:1}}>
      <View style={{flex:1,backgroundColor:'red'}} ></View>
      <View style={{flex:1,backgroundColor:'yellow'}} ></View>
      <View style={{flex:1,backgroundColor:'blue'}} ></View>
    </View>
  );
};

export default App;
