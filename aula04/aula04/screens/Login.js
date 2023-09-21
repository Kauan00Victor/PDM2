import { useState } from 'react'
import { View} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Titulo from '../components/Titulo';

const Login = (props) => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const handleEntrar = () => {
    console.log(email,senha);
    props.onLogin();
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#6638e2',
      }}>
      <Titulo>Login</Titulo>
      <TextInput
        label={'E-mail'}
        keyboardType={'email-address'}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label={'Senha'}
        secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <Button theme={{ colors: { primary: '#6638e2' } }}
        mode={"contained"}
        onPress={handleEntrar}>
        Enviar{' '}
      </Button>
    </View>
  );
};

export default Login;
