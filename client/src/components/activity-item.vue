<template>
   <button class="activity-item" @click="addTallyItemHandler">
        <div>{{ item.name }}</div>
        <div>{{ item.points }}</div>
    </button> 
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { mapActions } from "vuex";
import { Activity } from '../data/activities';
import { DayTallyItem } from '../store/day-tally';

export default defineComponent({
    name: 'ActivityItem',
    props: {
        item: {
            type: Object as PropType<Activity>
        }
    },
    methods: {
        addTallyItemHandler() {
            const tallyId = Date.now().toString();
            const activity = this.item as Activity;
            const newTallyItem: DayTallyItem = { id: tallyId, activityId: activity.id, name: activity.name, points: activity.points };
            this.insertItem(newTallyItem);
        },
        ...mapActions(['insertItem'])
    }
});
</script>

<style lang="scss" scoped>
button.activity-item {
    font-size: 18px;
    flex-grow: 0;
    flex-shrink: 0;
    padding: 8px 15px;
    margin: 5px;
    border: 1px solid rgba(#000, 0.2);
    box-shadow: none;
    width: calc(50vw - 20px);
    
    &:hover {
        border: 1px solid rgba(#000, 1);
        box-shadow: 5px 5px 2px rgba(#000, 0.6);  
        transition: .75s;
    }
}
</style>