<template>
    <div id="score-tally">
        ScoreTally
        <div id="score-tally-items">
            <div class="score-tally-item" v-for="item in items" v-bind:key="item.id">
                <div>{{ item.name }}</div>
                <div class="score-tally-item-points">{{ item.points }}</div>
            </div>
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
import { RootState } from '../store';

export default defineComponent({
    name: 'ScoreTally',
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

        .score-tally-item {
            display: flex;

            &-points {
                margin-left: auto;
            }
        }
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