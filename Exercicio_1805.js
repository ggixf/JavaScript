import React from 'react';
import {Text, View} from 'react-native';

export default function App() {

  const Nome = 'Celular';
  const Preco = 2800;
  const Quant = 2;
  const Secao = 'Eletrônicos';


  let desconto

const Total = Preco * Quant;
 
 if (Total <= 500) {
   desconto = 0
 } else if (Total <= 1000) {
   desconto = 2.7
 } else {
   desconto = 4.6
 }

 if (Secao == 'Eletrônicos' || Secao == 'Informática') {
   desconto = desconto + 2
 }

 const ValorDesconto = ((Total / 100) * desconto) * Total
 const ValorFinal = Total - ValorDesconto
 //2800 / 100 = 280
 //280 * 6,6

 return (
   <View>
    <Text> {ValorFinal} </Text>
   </View>

 )



}
