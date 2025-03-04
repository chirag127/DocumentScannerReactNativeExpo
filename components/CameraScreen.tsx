import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import {
    Camera,
    CameraView,
    CameraType,
    useCameraPermissions,
} from "expo-camera";
import { manipulateAsync, SaveFormat } from "expo-image-manipulator";
import * as MediaLibrary from "expo-media-library";

export default function CameraScreen({ onImageCaptured }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraType, setCameraType] = useState<CameraType>('back');
    const [isProcessing, setIsProcessing] = useState(false);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            const { status: cameraStatus } =
                await Camera.requestCameraPermissionsAsync();
            const { status: mediaStatus } =
                await MediaLibrary.requestPermissionsAsync();
            setHasPermission(
                cameraStatus === "granted" && mediaStatus === "granted"
            );
        })();
    }, []);

    const takePicture = async () => {
        if (cameraRef.current && !isProcessing) {
            setIsProcessing(true);
            try {
                // Take the picture
                const photo = await cameraRef.current.takePictureAsync({
                    quality: 1,
                    base64: false,
                });

                // Basic processing - you can enhance this for better document detection
                // const processedImage = await manipulateAsync(
                //     photo.uri,
                //     [
                //         { resize: { width: 1500 } },
                //         { contrast: 1.2 },
                //         { brightness: -0.05 },
                //         { saturate: 1.5 },
                //     ],
                //     { format: SaveFormat.JPEG, compress: 0.8 }
                // );
                const processedImage = photo;

                // Pass the processed image to parent component
                if (onImageCaptured) {
                    onImageCaptured(processedImage.uri);
                }
            } catch (error) {
                console.error("Error capturing document:", error);
            } finally {
                setIsProcessing(false);
            }
        }
    };

    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text>Requesting camera permission...</Text>
            </View>
        );
    }
    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text>No access to camera</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <CameraView
                style={styles.camera}
                type={cameraType}
                ref={cameraRef}
                ratio="4:3"
            >
                <View style={styles.overlay}>
                    <View style={styles.documentFrame} />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.captureButton}
                        onPress={takePicture}
                        disabled={isProcessing}
                    >
                        {isProcessing ? (
                            <Text style={styles.buttonText}>Processing...</Text>
                        ) : (
                            <Text style={styles.buttonText}>Capture</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </CameraView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center",
    },
    documentFrame: {
        width: "80%",
        height: "60%",
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 8,
    },
    buttonContainer: {
        position: "absolute",
        bottom: 30,
        width: "100%",
        alignItems: "center",
    },
    captureButton: {
        backgroundColor: "white",
        borderRadius: 30,
        height: 60,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 14,
    },
});
