import React, { useRef, useEffect } from "react";
import Quagga from "quagga";
import "./BarcodeScanner.css";

const BarcodeScanner = ({ onDetected, active }) => {
  const scannerRef = useRef(null);

  useEffect(() => {
    if (active) {
      Quagga.init(
        {
          inputStream: {
            type: "LiveStream",
            target: scannerRef.current, // This is where the camera stream will be attached
          },
          decoder: {
            readers: ["code_128_reader", "ean_reader", "upc_reader"], // Add barcode types
          },
        },
        (err) => {
          if (err) {
            console.error("Error initializing Quagga:", err);
            return;
          }
          Quagga.start(); // Start the scanning process
        }
      );

      Quagga.onDetected((data) => {
        if (data.codeResult) {
          onDetected(data.codeResult.code); // Pass the detected barcode to the parent component
          Quagga.stop(); // Stop scanning after detecting a barcode
          stopCamera(); // Stop the camera stream
        }
      });

      return () => {
        // Cleanup: stop scanning and camera stream when the component unmounts or active changes
        Quagga.stop();
        stopCamera();
      };
    } else {
      // If active is false, stop Quagga and camera
      Quagga.stop();
      stopCamera();
    }
  }, [onDetected, active]);

  const stopCamera = () => {
    if (scannerRef.current) {
      const stream = scannerRef.current.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop()); // Stop all camera tracks
      }
    }
  };

  return (
    <div className="barcode-scanner-container">
      <div className="barcode-scanner-header">
        <h2>Scan Barcode</h2>
        <p>Align the barcode within the frame</p>
      </div>
      <div ref={scannerRef} className="barcode-scanner-video" />
    </div>
  );
};

export default BarcodeScanner;
