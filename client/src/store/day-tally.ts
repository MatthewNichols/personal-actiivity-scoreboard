import { Module } from 'vuex';
import { RootState } from '.';

export interface DayTallyState {
    items: DayTallyItem[];
}

export interface DayTallyItem {
    id: string;
    activityId: string;
    name: string;
    points: number;
}



export const DayTallyModule: Module<DayTallyState, RootState> = {
    state: {
        items: [
            { id: "1", activityId: "test", name: "Test", points: 12 },
            { id: "2", activityId: "test", name: "Test", points: 12 }
        ]
    },
    mutations: {
        insertItem(state: DayTallyState, payload: DayTallyItem) {
            state.items.push(payload);
        }
    },
    actions: {

    },
    getters: {
        tallyTotal(state: DayTallyState): number {
            return state.items.map((item: DayTallyItem) => item.points)
                .reduce((a: number, b: number) => a + b);
        }
    }
}