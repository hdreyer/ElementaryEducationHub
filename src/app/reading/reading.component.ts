import { Component, OnInit } from "@angular/core";
import { HostListener } from "@angular/core";

@Component({
  selector: "app-reading",
  templateUrl: "./reading.component.html",
  styleUrls: ["./reading.component.css"],
})
export class ReadingComponent implements OnInit {
  scrolled = 0;

  @HostListener("window:scroll", ["$event"]) onScrollEvent($event) {
    const number = window.pageYOffset;
    if (number >= 50) {
      this.scrolled = 1;
    } else {
      this.scrolled = 0;
    }
    console.log($event, "Page Y-axis offset by:" + window.pageYOffset);
  }

  goToTop() {
    window.scrollTo(0, 0);
  }

  // scroll() {
  //   document
  //     .querySelector("#target")
  //     .scrollIntoView({ behavior: "smooth", block: "center" });
  // }

  // scroll(el: HTMLElement) {
  //   el.scrollIntoView();
  // }

  constructor() {}

  ngOnInit() {}
}
