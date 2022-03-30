import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={
          [
            {key: 1, nombre: "Michael Jordan", profesion: "Empresario"},
            {key: 2, nombre: "Canelo Alvarez", profesion: "Boxeador"},
            {key: 3, nombre: "Checo Perez", profesion: "Piloto"},
            {key: 4, nombre: "Franco Escamilla", profesion: "Comediante"},
            {key: 5, nombre: "Cooper Kupp", profesion: "Jugador NFL"},
            {key: 6, nombre: "Max Verstappen", profesion: "Piloto"},
            {key: 7, nombre: "Aron Judge", profesion: "Beisbolista"},
          ]
        }
        renderItem = {({item})=><Text style = {styles.item}>{item.nombre}</Text>}
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
