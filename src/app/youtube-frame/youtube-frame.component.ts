import { Component, Input, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-youtube-frame",
  templateUrl: "./youtube-frame.component.html",
  styleUrls: ["./youtube-frame.component.scss"],
})
export class YoutubeFrameComponent implements OnInit {
  @Input() src: string;
  safeUrl: SafeResourceUrl;
  showVideo = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/" + this.src + "?autoplay=1"
    );
  }

  loadVideo() {
    console.log("click detected, loading video.");
    this.showVideo = true;
  }

  // youtubeUrl(): SafeResourceUrl {
  //   let url: SafeResourceUrl = ;
  //   return url;
  // }
}
