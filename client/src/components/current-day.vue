<template>
   <div id="current-day">
       <activity-selector/>
       <score-tally/>
    </div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ActivitySelector from "./activity-selector.vue";
import ScoreTally from "./score-tally.vue";

export default defineComponent({
    name: 'CurrentDay',
    components: { ActivitySelector, ScoreTally }
});
</script>