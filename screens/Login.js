import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const Login = () => {
  return (
    <View style={estilos.container}>
      <Image style={estilos.logo}
      source={uri="https://img.freepik.com/vetores-gratis/vetor-de-design-de-logotipo-de-loja-de-bicicletas_53876-40626.jpg?size=626&ext=jpg&ga=GA1.1.1960802010.1693958446&semt=ais"}
      />
      <Text style={estilos.titulo}>Login</Text>
      <TextInput style={estilos.input}
      placeholder={'E-mail'} 
      keyboardType={'email-address'} 
      />
      <TextInput style={estilos.input}
      placeholder={'Senha'} 
      secureTextEntry={true} 
      />
      <Button title={"Entrar"} />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    paddingHorizontal: 16,
  },
  logo: {
    height: 72,
    width:72,
  },
  titulo:{
    fontSize:28,
    fontWeight:400,
    paddingBottom: 24,
    textAlign: 'center',
  },
  input: {
    lineHeight: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 16,
  },
});

export default Login;
