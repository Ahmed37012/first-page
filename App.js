import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqData = [
    'Dois-je payer pour récupérer un don ?',
    'Dois-je payer pour récupérer un don ?',
    'Dois-je payer pour récupérer un don ?',
    'Dois-je payer pour récupérer un don ?',
    'Puis-je m’inscrire en tant qu’entreprise et bénéficiaire en même temps ?',
    'Dois-je payer pour récupérer un don ?',
    'Puis-je m’inscrire en tant qu’entreprise et bénéficiaire en même temps ?',
  ];

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backCircle}>
          <Text style={styles.backArrow}>{'‹'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.foundationText}>Fondation</Text>
          <Text style={styles.daamText}>DAAM</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
        {faqData.map((question, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => toggleIndex(index)}
            style={styles.questionContainer}
          >
            <Text style={styles.questionText}>{question}</Text>
            <Text style={{ fontSize: 16, color: activeIndex === index ? '#003DA6' : '#F5A623' }}>
              {activeIndex === index ? '▲' : '▼'}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#003DA6',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomRightRadius: 40,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  backCircle: {
    borderColor: 'white',
    borderWidth: 2,
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  foundationText: {
    fontSize: 18,
    color: '#003DA6',
  },
  daamText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003DA6',
    textTransform: 'uppercase',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  faqTitle: {
    fontSize: 24, 
    fontWeight: '800', 
    marginVertical: 20,
    textAlign: 'center',
    color: '#003DA6',
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E6EFFD',
    padding: 16,
    marginBottom: 30,
    borderRadius: 10,
  },
  questionText: {
    flex: 1,
    fontSize: 14,
    marginRight: 10,
  },
});
