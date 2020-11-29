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
        items: []
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
        insertItem({ commit }, item: DayTallyItem) {
            commit('insertItem', item)
        },
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