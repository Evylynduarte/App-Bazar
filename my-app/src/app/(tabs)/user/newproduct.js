import { StatusBar, Text, View } from 'react-native';

export default function newProduct() {
 return (
   <View className="items-center justify-center flex w-full h-full">
    <StatusBar barStyle="dark-content" backgroundColor="#0286EA" />
    <Text>Formulário do Produto</Text>
   </View>
  );
}