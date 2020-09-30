import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { KindergartenComponent } from "./kindergarten/kindergarten.component";
import { FirstgradeComponent } from "./firstgrade/firstgrade.component";
import { SecondgradeComponent } from "./secondgrade/secondgrade.component";
import { ThirdgradeComponent } from "./thirdgrade/thirdgrade.component";
import { FourthgradeComponent } from "./fourthgrade/fourthgrade.component";
import { FifthgradeComponent } from "./fifthgrade/fifthgrade.component";
import { ReadingComponent } from "./reading/reading.component";
import { SpellingComponent } from "./spelling/spelling.component";
import { WritingComponent } from "./writing/writing.component";
import { MathComponent } from "./math/math.component";
import { ScienceComponent } from "./science/science.component";
import { HistoryComponent } from "./history/history.component";
import { ArtComponent } from "./art/art.component";
import { SpecialneedsComponent } from "./specialneeds/specialneeds.component";
import { MissionComponent } from "./mission/mission.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactComponent } from "./contact/contact.component";

import { GoTopButtonModule } from "ng2-go-top-button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgImageSliderModule } from "ng-image-slider";
import { NgxPageScrollCoreModule } from "ngx-page-scroll-core";
import { NgxPageScrollModule } from "ngx-page-scroll";
import { NgbDropdownModule, NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { YoutubeFrameComponent } from "./youtube-frame/youtube-frame.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    KindergartenComponent,
    FirstgradeComponent,
    SecondgradeComponent,
    ThirdgradeComponent,
    FourthgradeComponent,
    FifthgradeComponent,
    ReadingComponent,
    SpellingComponent,
    WritingComponent,
    MathComponent,
    ScienceComponent,
    HistoryComponent,
    ArtComponent,
    SpecialneedsComponent,
    MissionComponent,
    FooterComponent,
    ContactComponent,
    YoutubeFrameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoTopButtonModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    NgbDropdownModule,
    NgbNavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
