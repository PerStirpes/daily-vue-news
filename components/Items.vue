<template>
    <div class="code">
        <ul class="list pa2">
            <li class="item f6" v-for="item in items" :key="item.id">
                <div class="score f4">
                    {{item.score}}
                </div>
                <div class="title">
                    {{item.title}}
                    <template v-if="item.url">
                        <a class="f7" :href="item.url">{{item.url | hostname}}</a>
                    </template>
                </div>
                <div class="details">
                    <nuxt-link :to="'/user/' + item.by">{{item.by}}</nuxt-link>
                    <p class="ma0 i f7">{{item.time | timeSince}} ago</p>
                </div>
                <template v-if="item.descendants">
                    <div class="comments">
                        <nuxt-link :to="'/item/' + item.id">{{item.descendants}} comments</nuxt-link>
                    </div>
                </template>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: mapState(['items'])
}
</script>
<style scoped>
.item {
    display: grid;
    grid: repeat(4, 1.5em) / repeat(10, 1fr);
    grid-row-gap: 1em;
    grid-column-gap: 1em;
    border-style: groove;
}
.score {
    grid-row: 1 / -1;
    grid-column: span 1;
    align-self: center;
    justify-self: center;
    font-size: 14px;
}
.title {
    grid-row: 1 / 3;
    grid-column: 2 / -3;
    justify-self: start;
    align-self: end;
    font-size: 20px;

}
.comments {
    grid-row: 3 / -1;
    grid-column: 3 / 6;
    align-self: center;
    font-size: 14px;
}
.details {
    grid-row: 3 / -1;
    grid-column: 5 / -1;
    justify-self: end;
    align-self: center;
    font-size: 14px;
}
</style>
