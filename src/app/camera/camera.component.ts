import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
@ViewChild('video',{static:true}) video;
  constructor() { }

  ngOnInit() {
    const vidroElement: HTMLVideoElement = this.video.nativeElement;
    navigator.mediaDevices.getUserMedia({
      video:{facingMode:'user'}
    }).then((straem)=>{
      vidroElement.srcObject=straem;
    })
  }

}