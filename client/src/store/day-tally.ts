import { Module } from 'vuex';
import { RootState } from '.';

const DayTallyStateKey = "DayTallyState";

export interface DayTallyState {
    items: DayTallyItem[];
}

export interface DayTallyItem {
    id: string;
    activityId: string;
    name: string;
    points: number;
}


const StateStore = {
    getSavedState(): DayTallyState | null {
        if (window.localStorage) {
            const jsonString = localStorage.getItem(DayTallyStateKey);

            if (jsonString == null) {
                return null;
            }

            const storedState = JSON.parse(jsonString);
            return storedState;
        }

        return null;
    },
    saveState(state: DayTallyState) {
        if (window.localStorage) {
            const jsonState = JSON.stringify(state);
            localStorage.setItem(DayTallyStateKey, jsonState);          
        }
    }

};

// TODO: Initialize state from StateStore
export const DayTallyModule: Module<DayTallyState, RootState> = {
    state(): DayTallyState {
        const savedState = StateStore.getSavedState();
        if (savedState !== null) {
            return savedState;
        }

        return {
            items: []
        }
    },
    mutations: {
        insertItem(state: DayTallyState, payload: DayTallyItem) {
            state.items.push(payload);
        },
        deleteItem(state: DayTallyState, payload: DayTallyItem) {
            state.items = state.items.filter((item: DayTallyItem) => item.id !== payload.id) || [];
        },
        clearItems(state: DayTallyState) {
            state.items = [];
        }
    },
    actions: {
        insertItem({ commit, state }, item: DayTallyItem) {
            commit('insertItem', item);
            StateStore.saveState(state);
        },
        deleteItem({ commit, state }, item: DayTallyItem) {
            commit('deleteItem', item);
            StateStore.saveState(state);
        },
        clearItems({ commit, state }) {
            commit('clearItems');
            StateStore.saveState(state);
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
