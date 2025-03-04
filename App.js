import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import CameraScreen from './components/CameraScreen';
import ImageEditor from './components/ImageEditor';
import PDFGenerator from './components/PDFGenerator';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [capturedImages, setCapturedImages] = useState([]);
  const [currentEditingImage, setCurrentEditingImage] = useState(null);
  
  const handleImageCaptured = (imageUri) => {
    setCurrentEditingImage(imageUri);
    setCurrentScreen('edit');
  };
  
  const handleSaveEditedImage = (editedImageUri) => {
    setCapturedImages([...capturedImages, editedImageUri]);
    setCurrentEditingImage(null);
    setCurrentScreen('preview');
  };
  
  const handleCancelEdit = () => {
    setCurrentEditingImage(null);
    setCurrentScreen('camera');
  };
  
  const handleAddMore = () => {
    setCurrentScreen('camera');
  };
  
  const handleDone = () => {
    setCapturedImages([]);
    setCurrentScreen('home');
  };
  
  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return (
          <View style={styles.homeContainer}>
            <Text style={styles.title}>Document Scanner</Text>
            <TouchableOpacity 
              style={styles.startButton} 
              onPress={() => setCurrentScreen('camera')}
            >
              <Text style={styles.startButtonText}>Start Scanning</Text>
            </TouchableOpacity>
          </View>
        );
        
      case 'camera':
        return <CameraScreen onImageCaptured={handleImageCaptured} />;
        
      case 'edit':
        return (
          <ImageEditor 
            imageUri={currentEditingImage} 
            onSave={handleSaveEditedImage} 
            onCancel={handleCancelEdit} 
          />
        );
        
      case 'preview':
        return (
          <View style={styles.previewContainer}>
            <Text style={styles.title}>Documents ({capturedImages.length})</Text>
            <View style={styles.previewButtonContainer}>
              <TouchableOpacity 
                style={styles.previewButton} 
                onPress={handleAddMore}
              >
                <Text style={styles.previewButtonText}>Add More</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.previewButton, styles.createPdfButton]} 
                onPress={() => setCurrentScreen('pdf')}
              >
                <Text style={styles.createPdfButtonText}>Create PDF</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
        
      case 'pdf':
        return (
          <PDFGenerator 
            images={capturedImages} 
            onBack={() => setCurrentScreen('preview')} 
            onDone={handleDone} 
          />
        );
        
      default:
        return <View />;
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {renderScreen()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  startButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  startButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  previewButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  previewButton: {
    backgroundColor: '#ddd',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  createPdfButton: {
    backgroundColor: '#4CAF50',
  },
  previewButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  createPdfButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});