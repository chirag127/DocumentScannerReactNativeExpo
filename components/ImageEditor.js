import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';

const filters = [
  { name: 'Original', manipulations: [] },
  { name: 'B&W', manipulations: [{ saturate: 0 }] },
  { name: 'Enhanced', manipulations: [{ contrast: 1.2 }, { brightness: -0.05 }, { saturate: 1.2 }] },
  { name: 'Document', manipulations: [{ contrast: 1.3 }, { brightness: 0.1 }, { saturate: 0.8 }] },
  { name: 'High Contrast', manipulations: [{ contrast: 1.5 }, { brightness: -0.1 }] },
];

export default function ImageEditor({ imageUri, onSave, onCancel }) {
  const [currentImageUri, setCurrentImageUri] = useState(imageUri);
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const applyFilter = async (filterIndex) => {
    if (isProcessing) return;
    setIsProcessing(true);
    
    try {
      setSelectedFilter(filterIndex);
      const filter = filters[filterIndex];
      
      // If it's the original filter, just use the original image
      if (filterIndex === 0) {
        setCurrentImageUri(imageUri);
        return;
      }
      
      // Apply the selected filter
      const processedImage = await manipulateAsync(
        imageUri,
        filter.manipulations,
        { format: SaveFormat.JPEG, compress: 0.8 }
      );
      
      setCurrentImageUri(processedImage.uri);
    } catch (error) {
      console.error('Error applying filter:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const saveImage = () => {
    if (onSave) {
      onSave(currentImageUri);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: currentImageUri }} style={styles.image} resizeMode="contain" />
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersContainer}>
        {filters.map((filter, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.filterButton,
              selectedFilter === index && styles.selectedFilter
            ]}
            onPress={() => applyFilter(index)}
            disabled={isProcessing}
          >
            <Text style={styles.filterText}>{filter.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={saveImage}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  image: {
    flex: 1,
    marginVertical: 20,
    backgroundColor: '#eee',
  },
  filtersContainer: {
    height: 60,
    marginBottom: 10,
  },
  filterButton: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80,
  },
  selectedFilter: {
    backgroundColor: '#2196F3',
  },
  filterText: {
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#ddd',
    width: '40%',
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    fontWeight: '600',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});