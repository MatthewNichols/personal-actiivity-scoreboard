<template>
   <div class="score-tally-item">
        <div>{{ item.name }}</div>
        <div>
            <button @click="deleteItemHandler">X</button>
        </div>
        <div class="score-tally-item-points">{{ item.points }}</div>
    </div> 
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { mapActions } from "vuex";
import { DayTallyItem } from '../store/day-tally';

export default defineComponent({
    name: 'TallyItem',
    props: {
        item: {
            type: Object as PropType<DayTallyItem>
        }
    },
    methods: {
        deleteItemHandler(){
            this.deleteItem(this.item);
        },
        ...mapActions(['deleteItem'])
    }
});
</script>

<style lang="scss" scoped>
.score-tally-item {
    display: flex;

    &-points {
        margin-left: auto;
    }

    button {
        font-size: 18px;
        background: none;
        flex-grow: 0;
        padding: 0 8px;
        margin: 5px;
        border: none;
    }
}
</style>