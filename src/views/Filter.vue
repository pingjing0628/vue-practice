<template>
    <div id="app">
        <div>空汙指數 {{ airPollution | filterData | releaseTime(saveDate)}}</div> <!-- airpollution 是放資料的名稱 ,filterData 過濾器的函式名稱-->
        <p>Filters主要用在簡單的文字格式處理</p>

        <Parent/>
    </div>
</template>

<script>
    import * as dayjs from 'dayjs'
    import Parent from '../components/Parent'

    export default {
        name: 'parent',
        components: {
            Parent
        },
        data() {
            const saveDate = dayjs().format('YYYY-MM-DD')
            return {
                airPollution: 100,
                saveDate: saveDate,
            }
        },
        filters: {
            filterData(airPollution) {
                return 'AQI: ' + airPollution + ' / Time: ';
            },
            releaseTime(saveDate, airPollution) {
                return saveDate + airPollution
            }
        }
    }
</script> 