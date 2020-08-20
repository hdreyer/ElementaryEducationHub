import { Component, OnInit } from "@angular/core";
import { HostListener } from "@angular/core";

@Component({
  selector: "app-art",
  templateUrl: "./art.component.html",
  styleUrls: ["./art.component.css"],
})
export class ArtComponent implements OnInit {
  scrolled = 0;

  @HostListener("window:scroll", ["$event"]) onScrollEvent($event) {
    const number = window.pageYOffset;
    if (number >= 50) {
      this.scrolled = 1;
    } else {
      this.scrolled = 0;
    }
    // console.log($event, "Page Y-axis offset by:" + window.pageYOffset);
  }

  goToTop() {
    window.scrollTo(0, 0);
  }

  constructor() {}

  ngOnInit() {}
}
