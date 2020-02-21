<template>
    <div class="breadcrumb">
        <ul>
            <li
            v-for="(breadcrumb, idx) in breadcrumbList"
            :key="idx"
            @click="routeTo(idx)"
            :class="{'linked': !!breadcrumb.link}">

            {{ breadcrumb.name }}

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Breadcrumb',
        data() {
            return {
                breadcrumbList: []
            }
        },
        mounted () { this.updateList() }, 
        //mounted ()是vue的「生命週期鉤子」，先了解它是vue網站在創建的初始化過程中的一個階段鉤子，「生命週期鉤子」函式能你在指定階段加入自己的程式，而mounted是在「模板掛載完成」的階段。
        watch: { '$route' () { this.updateList() } }, //讓我們監看指定值，當這個值變更時，就做我們指定的事情，接著在通過$router訪問路由實例
        methods: {
        routeTo (pRouteTo) {
            if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
        },
        updateList () { this.breadcrumbList = this.$route.meta.breadcrumb }
        }
    }
</script>

<style scoped>
    .breadcrumb {
        margin-bottom: line(3);
    }
    ul {
        display: flex;
        list-style: none;
        padding: 0;
        font-size: font(1);
    }
    li {
        cursor: pointer;
        color: #254e8d;
    }
    li:last-child {
        cursor: default;
    }
    li:not(:last-child):after {
        content: ">";
        margin: 5px;
    }
</style>