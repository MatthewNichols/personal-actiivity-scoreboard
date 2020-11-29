<template>
   <button class="activity-item">
        <div>{{ item.name }}</div>
        <div>{{ item.points }}</div>
    </button> 
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Activity } from '../data/activities';

export default defineComponent({
    name: 'ActivityItem',
    props: {
        item: {
            type: Object as PropType<Activity>
        }
    }
});
</script>

<style lang="scss" scoped>
button {
    flex-grow: 0;
    padding: 30px;
    margin: 5px;
    border: 1px solid rgba(#000, 0.2);
    box-shadow: none;
    
    &:hover {
        border: 1px solid rgba(#000, 1);
        box-shadow: 5px 5px 2px rgba(#000, 0.6);  
        transition: .75s;
    }
}
</style>