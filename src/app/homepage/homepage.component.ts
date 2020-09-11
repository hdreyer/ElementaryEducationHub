import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  imageObject: Array<object> = [
    {
      video: "https://youtu.be/NpWHZJZQDSE",
      title: "Plot Structure",
    },
    {
      video: "https://www.youtube.com/embed/xyMrLQ4ZI-4",
      title: "Prepositions",
    },
    {
      video: "https://www.youtube.com/embed/EzzQ8x-9HTo",
      title: "Count to 120",
    },
    {
      video: "https://www.youtube.com/embed/xUCYFof8QyA",
      title: "Force and Motion",
    },
    {
      video: "https://www.youtube.com/embed/UgfSwlqi4Qg",
      title: "Types of Angles",
    },
    {
      video: "https://www.youtube.com/embed/DR9w4koW2EA",
      title: "Magnetism",
    },
  ];
}
