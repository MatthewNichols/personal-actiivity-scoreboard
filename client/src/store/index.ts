import { Store } from 'vuex'
import { DayTallyModule, DayTallyState } from "./day-tally";
export interface RootState {
  dayTally: DayTallyState;
}

export default new Store<RootState>({
  modules: {
    dayTally: DayTallyModule
  }
})
