import {Event, Match, Ranking, Team} from "@the-orange-alliance/lib-ems/";

export interface IApplicationState {
  seasons: any[];
  teams: Team[];
  event: Event;
  matches: Match[];
  rankings: Ranking[];
}