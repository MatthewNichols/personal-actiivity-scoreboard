<template>
    <div id="activity-selector">
        <div v-for="activity in activityList" v-bind:key="activity.id">
            <activity-item :item="activity" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ActivityList, Activity } from "../data/activities";
import ActivityItem from "./activity-item.vue";

interface ComponentData {
    activityList: Activity[];
}

export default defineComponent({
    name: 'ActivitySelector',
    components: { ActivityItem },
    data(): ComponentData {
        return { 
            activityList: ActivityList
        };
    }
});
</script>

<style lang="scss" scoped>
#activity-selector {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>