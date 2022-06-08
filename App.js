import React, { useEffect, useState } from 'react';
import { FlatList, View, Text} from 'react-native';


export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try{
    const response = await fetch('https://reactnative.dev/movies.json'); //tarea 1
    const json = await response.json(); //tarea 2'
    setData(json.movies);

  } catch (error){
    console.error(error);
  }
}

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style= {{flex: 1, padding:24}}>
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}</Text>
          )}
        />
      
    </View>
  );
}

