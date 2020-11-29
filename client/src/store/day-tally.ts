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
            { id: "2", activityId: "test", name: "Test", points: 12 },
            { id: "3", activityId: "test", name: "Test", points: 12 },
        ]
    },
    mutations: {
        insertItem(state: DayTallyState, payload: DayTallyItem) {
            state.items.push(payload);
        },
        deleteItem(state: DayTallyState, payload: DayTallyItem) {
            
            state.items = state.items.filter((item: DayTallyItem) => item.id !== payload.id) || [];
        }
    },
    actions: {
        deleteItem({ commit }, item: DayTallyItem) {
            commit('deleteItem', item)
        }
    },
    getters: {
        tallyTotal(state: DayTallyState): number {
            if (state.items.length === 0) { return 0; }

            return state.items.map((item: DayTallyItem) => item.points)
                .reduce((a: number, b: number) => a + b);
        }
    }
}