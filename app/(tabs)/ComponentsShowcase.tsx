import React from 'react';
import { ScrollView, Text, Button, Image, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  ComponentShowcase: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'ComponentShowcase'>;

const ComponentShowcase: React.FC<Props> = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Text Component */}
      <View style={styles.section}>
        <Text style={styles.title}>Text Component</Text>
        <Text style={styles.text}>This is a sample text to showcase the Text component. Feel free to style it!</Text>
      </View>

      {/* Button Component */}
      <View style={styles.section}>
        <Text style={styles.title}>Button Component</Text>
        <Button
          title="Click Me"
          onPress={() => alert('Button Pressed!')}
          color="#6200EE"
        />
      </View>

      {/* Image Component */}
      <View style={styles.section}>
        <Text style={styles.title}>Image Component</Text>
        <Image
          source={{ uri: 'https://i.kym-cdn.com/entries/icons/facebook/000/041/895/AALIYAH_WROTE_JAY_AN_APOLOGY_LETTER%F0%9F%93%83__MARK_WANT_DESIREE_AND_HANNAH!%F0%9F%98%B1_4-32_screenshot_(1).jpg' }}
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  text: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default ComponentShowcase;