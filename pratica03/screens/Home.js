import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={estilos.container}>
      <View style={estilos.appBar}>
        <Text style={estilos.appBarTitle}>Home</Text>
      </View>
      <FlatList style={estilos.listItem}
        data={['item1', 'item2', 'item3', 'item4']}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <Button>Adicionar</Button>
    </View>
  );
};

const estilos = StyleSheet.create ({
  container:{
    flex:1,
    backgroundColor:"#f0f0f0"
  },
  appBar:{
    backgroundColor:"blue",
    padding:16,
    alignItems:"center"
  },
  appBarTitle:{
    color:"white",
    fontSize:18,
    fontWeight:"bold"
  },
  listItem:{
    backgroundColor:"white",
    padding:16,
    borderBottomWidth:1,
    borderBottomColor:"%cccccc"
  },
});

export default Home;