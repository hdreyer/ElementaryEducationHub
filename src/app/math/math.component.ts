import { Component, OnInit } from "@angular/core";
import { HostListener } from "@angular/core";

@Component({
  selector: "app-math",
  templateUrl: "./math.component.html",
  styleUrls: ["./math.component.css"],
})
export class MathComponent implements OnInit {
  scrolled = 0;

  @HostListener("window:scroll", ["$event"]) onScrollEvent($event) {
    const number = window.pageYOffset;
    if (number >= 50) {
      this.scrolled = 1;
    } else {
      this.scrolled = 0;
    }
  }

  goToTop() {
    window.scrollTo(0, 0);
  }

  constructor() {}

  ngOnInit() {}
}
