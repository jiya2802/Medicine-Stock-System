import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Quagga: any; // Declare Quagga globally

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.css']
})
export class BarcodeScannerComponent implements OnInit {
  @ViewChild('video', { static: true }) videoElement!: ElementRef;
  @ViewChild('canvas', { static: true }) canvasElement!: ElementRef;
  video!: HTMLVideoElement;
  canvas!: HTMLCanvasElement;
  barcode: string = '';

  constructor() { }

  ngOnInit(): void {
    this.video = this.videoElement.nativeElement;
    this.canvas = this.canvasElement.nativeElement;
  }

  ngAfterViewInit() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(stream => {
          this.video.srcObject = stream;
          this.video.play();
          Quagga.init({
            inputStream: {
              constraints: {
                width: { min: 640 },
                height: { min: 480 },
                facingMode: 'environment',
                aspectRatio: { min: 1, max: 2 }
              },
              target: this.canvas
            },
            locator: {
              patchSize: 'medium',
              halfSample: true
            },
            numOfWorkers: navigator.hardwareConcurrency,
            decoder: {
              readers: ['ean_reader']
            },
            locate: true
          });

          Quagga.start();

          Quagga.onDetected((result: any) => {
            this.barcode = result.codeResult.code;
            console.log(this.barcode);
            this.stopScanner();
          });
          
        })
        .catch((err: any) => {
          console.error(err);
        });
    }
  }

  stopScanner() {
    Quagga.stop();
    if (this.video.srcObject instanceof MediaStream) {
      const tracks = this.video.srcObject.getTracks();
      tracks.forEach(track => {
        track.stop();
      });
    }
  }
}
