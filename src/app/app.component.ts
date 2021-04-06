import { Component } from '@angular/core';
import { Track } from 'ngx-audio-player'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'distimia';
  cover_src: string = '../assets/cover/distimia.jpeg'
  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [3];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = false;
  msaapPlaylist: Track[] = [
    {
      link: "../assets/songs/Intro.mp3",
      title: "Intro"
    },
    {
      link: "../assets/songs/Encerrado.mp3",
      title: "Encerrado"
    },
    {
      link: "../assets/songs/Cuerdos.mp3",
      title: "Cuerdos"
    },
    {
      link: "../assets/songs/Corto 1.mp3",
      title: "Corto 1"
    },
    {
      link: "../assets/songs/Casi nunca.mp3",
      title: "Casi nunca"
    },
    {
      link: "../assets/songs/Expuestos.mp3",
      title: "Expuestos"
    },
    {
      link: "../assets/songs/Corto 2 pirata.mp3",
      title: "Corto 2 pirata"
    },
    {
      link: "../assets/songs/Fama.mp3",
      title: "Fama"
    },
    {
      link: "../assets/songs/Ganar o perder.mp3",
      title: "Ganar o perder"
    },
    {
      link: "../assets/songs/Desampáramo.mp3",
      title: "Desampáramo"
    }
  ];
  audioList: object[] = [
    {
      url: "../assets/songs/Intro.mp3",
      title: "Intro"
    },
    {
      url: "../assets/songs/Encerrado.mp3",
      title: "Encerrado"
    },
    {
      url: "../assets/songs/Cuerdos.mp3",
      title: "Cuerdos"
    },
    {
      url: "../assets/songs/Corto 1.mp3",
      title: "Corto 1"
    },
    {
      url: "../assets/songs/Casi nunca.mp3",
      title: "Casi nunca"
    },
    {
      url: "../assets/songs/Expuestos.mp3",
      title: "Expuestos"
    },
    {
      url: "../assets/songs/Corto 2 pirata.mp3",
      title: "Corto 2 pirata"
    },
    {
      url: "../assets/songs/Fama.mp3",
      title: "Fama"
    },
    {
      url: "../assets/songs/Ganar o perder.mp3",
      title: "Ganar o perder"
    },
    {
      url: "../assets/songs/Desampáramo.mp3",
      title: "Desampáramo"
    },
  ];
}
