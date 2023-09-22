import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BuscarEventos from '../screens/BuscarEventos'
import MeusEventos from '../screens/MeusEventos'

const Tab = createBottomTabNavigator();

const NavegacaoAba = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Buscar Eventos" component={BuscarEventos} />
      <Tab.Screen name="Meus Eventos" component={MeusEventos} />
    </Tab.Navigator>
  )
}

export default NavegacaoAba;
