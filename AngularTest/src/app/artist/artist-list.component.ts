import { Component } from '@angular/core';
import { ArtistService } from './artist.service';

@Component({
  selector: 'artist-list',
  template: require('./artist-list.component.html'),
  styles:[`input[type=number]{
    width:1ex;
    text-align:right;
    border-style:hidden;
  }
  .ui-spinner {
    display: inline-block;
    overflow: hidden;
    padding: 0;
    position: relative;
    vertical-align: middle;
}
.ui-widget {
    font-family: Arial,Helvetica,sans-serif;
    font-size: 1em;
}
.ui-widget-content {
    color: #333333;
}
  `]
})



export class ArtistListComponent {

  artists;

  constructor(artistService: ArtistService) {
    this.artists = artistService.getArtists();

  }

  imgSource="http://www.planwallpaper.com/static/images/4-Nature-Wallpapers-2014-1_ukaavUI.jpg";
  inputType="number";
  baseAmount = 1;
  exchangeRate = 0.70;
  targetAmount=this.exchangeRate;

  update(baseAmount){
    this.targetAmount = parseFloat(baseAmount) * this.exchangeRate;
}
}
