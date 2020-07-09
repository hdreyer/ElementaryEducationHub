import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { KindergartenComponent } from "./kindergarten/kindergarten.component";
import { FirstgradeComponent } from "./firstgrade/firstgrade.component";
import { SecondgradeComponent } from "./secondgrade/secondgrade.component";
import { ThirdgradeComponent } from "./thirdgrade/thirdgrade.component";
import { FourthgradeComponent } from "./fourthgrade/fourthgrade.component";
import { FifthgradeComponent } from "./fifthgrade/fifthgrade.component";
import { PhonicsComponent } from "./phonics/phonics.component";
import { ReadingComponent } from "./reading/reading.component";
import { SpellingComponent } from "./spelling/spelling.component";
import { GrammarComponent } from "./grammar/grammar.component";
import { MathComponent } from "./math/math.component";
import { ScienceComponent } from "./science/science.component";
import { HistoryComponent } from "./history/history.component";
import { ArtComponent } from "./art/art.component";
import { SpecialneedsComponent } from "./specialneeds/specialneeds.component";
import { MissionComponent } from "./mission/mission.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "kindergarten", component: KindergartenComponent },
  { path: "firstgrade", component: FirstgradeComponent },
  { path: "secondgrade", component: SecondgradeComponent },
  { path: "thirdgrade", component: ThirdgradeComponent },
  { path: "fourthgrade", component: FourthgradeComponent },
  { path: "fifthgrade", component: FifthgradeComponent },
  { path: "phonics", component: PhonicsComponent },
  { path: "reading", component: ReadingComponent },
  { path: "spelling", component: SpellingComponent },
  { path: "grammar", component: GrammarComponent },
  { path: "math", component: MathComponent },
  { path: "science", component: ScienceComponent },
  { path: "history", component: HistoryComponent },
  { path: "art", component: ArtComponent },
  { path: "specialneeds", component: SpecialneedsComponent },
  { path: "mission", component: MissionComponent },
  { path: "contact", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
