import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from "./pages/home";
import { Cliente } from "./pages/home/cliente";
import { Funcionario } from "./pages/home/funcionario";
import {View, Text} from 'react'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
            name='home'
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: ({focused, size, color}) => {
                    if(focused){
                        return 
                    }                     
                     },
                      
            }}
            />
        
            <Tab.Screen
            name='cliente'
            component={Cliente}
            options={{
                headerShown: false,
                tabBarIcon: ({focused, size, color}) => {
                    if(focused){
                        return 
                    }                     
                     },
            }}
            />

            <Tab.Screen
            name='Funcionario'
            component={Funcionario}
            options={{
                headerShown: false,
                tabBarIcon: ({focused, size, color}) => {
                    if(focused){
                        return 
                    }                     
                     },
            }}
            />
        </Tab.Navigator>  

    )
}
