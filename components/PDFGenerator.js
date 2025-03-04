import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, ScrollView, Image } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

export default function PDFGenerator({ images, onBack, onDone }) {
  const [isPdfGenerating, setIsPdfGenerating] = useState(false);
  const [pdfUri, setPdfUri] = useState(null);
  const [isSharing, setIsSharing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const generatePDF = async () => {
    if (isPdfGenerating || images.length === 0) return;
    
    setIsPdfGenerating(true);
    
    try {
      // Convert images to base64 for embedding in HTML
      const base64Images = await Promise.all(
        images.map(async (uri) => {
          const base64 = await FileSystem.readAsStringAsync(uri, {
            encoding: FileSystem.EncodingType.Base64,
          });
          return `data:image/jpeg;base64,${base64}`;
        })
      );
      
      // Create HTML content for PDF
      const htmlContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
            <style>
              body {
                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
                margin: 0;
                padding: 0;
              }
              .page {
                page-break-after: always;
                margin: 0;
                padding: 0;
              }
              .page img {
                width: 100%;
                height: auto;
                display: block;
                margin: 0;
                padding: 0;
              }
              h1 {
                font-size: 18px;
                margin: 10px 0;
                text-align: center;
              }
            </style>
          </head>
          <body>
            <h1>Scanned Document</h1>
            ${base64Images.map((image, index) => `
              <div class="page">
                <img src="${image}" />
              </div>
            `).join('')}
          </body>
        </html>
      `;
      
      // Generate PDF
      const { uri } = await Print.printToFileAsync({ 
        html: htmlContent,
        width: 612, // Standard letter width in points (8.5 inches)
        height: 792, // Standard letter height in points (11 inches)
      });
      
      setPdfUri(uri);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsPdfGenerating(false);
    }
  };

  const sharePDF = async () => {
    if (!pdfUri || isSharing) return;
    
    setIsSharing(true);
    
    try {
      // Check if sharing is available
      if (!(await Sharing.isAvailableAsync())) {
        alert('Sharing is not available on your device');
        return;
      }
      
      // Share the PDF
      await Sharing.shareAsync(pdfUri, {
        mimeType: 'application/pdf',
        dialogTitle: 'Share your scanned document',
        UTI: 'com.adobe.pdf',
      });
    } catch (error) {
      console.error('Error sharing PDF:', error);
    } finally {
      setIsSharing(false);
    }
  };

  const savePDF = async () => {
    if (!pdfUri || isSaving) return;
    
    setIsSaving(true);
    
    try {
      // Save the PDF to media library
      const asset = await MediaLibrary.createAssetAsync(pdfUri);
      await MediaLibrary.createAlbumAsync('DocumentScanner', asset, false);
      
      alert('PDF saved to your device');
      
      if (onDone) {
        onDone();
      }
    } catch (error) {
      console.error('Error saving PDF:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Document Preview</Text>
      
      <ScrollView style={styles.previewContainer}>
        {images.map((uri, index) => (
          <Image 
            key={index} 
            source={{ uri }} 
            style={styles.previewImage} 
            resizeMode="contain" 
          />
        ))}
      </ScrollView>
      
      <View style={styles.buttonContainer}>
        {!pdfUri ? (
          <TouchableOpacity
            style={[styles.button, styles.generateButton]}
            onPress={generatePDF}
            disabled={isPdfGenerating}
          >
            {isPdfGenerating ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.buttonText}>Generate PDF</Text>
            )}
          </TouchableOpacity>
        ) : (
          <View style={styles.pdfActionsContainer}>
            <TouchableOpacity
              style={[styles.button, styles.shareButton]}
              onPress={sharePDF}
              disabled={isSharing}
            >
              {isSharing ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={styles.buttonText}>Share PDF</Text>
              )}
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.button, styles.saveButton]}
              onPress={savePDF}
              disabled={isSaving}
            >
              {isSaving ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text style={styles.buttonText}>Save PDF</Text>
              )}
            </TouchableOpacity>
          </View>
        )}
        
        <TouchableOpacity
          style={[styles.button, styles.backButton]}
          onPress={onBack}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  previewContainer: {
    flex: 1,
    marginBottom: 20,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  previewImage: {
    width: '100%',
    height: 400,
    marginVertical: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  pdfActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  generateButton: {
    backgroundColor: '#2196F3',
    width: '100%',
    marginBottom: 15,
  },
  shareButton: {
    backgroundColor: '#4CAF50',
    width: '48%',
  },
  saveButton: {
    backgroundColor: '#FF9800',
    width: '48%',
  },
  backButton: {
    backgroundColor: '#ddd',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});