import { Component, OnInit } from "@angular/core";
import { HostListener } from "@angular/core";

@Component({
  selector: "app-fourthgrade",
  templateUrl: "./fourthgrade.component.html",
  styleUrls: ["./fourthgrade.component.scss"],
})
export class FourthgradeComponent implements OnInit {
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
