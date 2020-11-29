<template>
    <div id="score-tally">
        ScoreTally
        <div id="score-tally-items">
            <tally-item v-for="item in items" v-bind:key="item.id" :item="item"/>
        </div>

        <div id="footer">
            <div id="total">
                {{tallyTotal}}
            </div>
        </div>
    </div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, mapGetters } from "vuex";

import TallyItem from "./tally-item.vue";
import { RootState } from '../store';

export default defineComponent({
    name: 'ScoreTally',
    components: { TallyItem },
    computed: {
        ...mapState<RootState>({
            items: (state: RootState) => state.dayTally.items
        }),
        ...mapGetters(["tallyTotal"])
    }
});
</script>

<style lang="scss" scoped>
#score-tally {
    #score-tally-items {
        display: flex;
        flex-direction: column;
    }

    #footer {
        display: flex;

        #total {
            width: 100px;
            text-align: right;
            margin-left: auto;
            margin-top: 10px;
            border-top: 2px solid;
        }
    }
}
</style>