<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="8">
				<el-card shadow="hover" class="mgb20" style="height: 252px">
					<div class="user-info">
						<el-avatar :size="120" :src="imgurl" />
						<div class="user-info-cont">
							<div class="user-info-name">{{ name }}</div>
							<div>{{ role }}</div>
						</div>
					</div>
					<div class="user-info-list">
						上次登录时间：
						<span>2024-04-24</span>
					</div>
					<div class="user-info-list">
						上次登录地点：
						<span>山东</span>
					</div>
				</el-card>
				<el-card shadow="hover" style="height: 252px">
					<template #header>
						<div class="clearfix">
							<span>订单状态</span>
						</div>
					</template>
					<div class="order-status" ref="orderStatusRef"></div>
				</el-card>
			</el-col>
			<el-col :span="16">
				<el-row :gutter="20" class="mgb20">
					<el-col :span="8">
						<el-card shadow="hover" :body-style="{ padding: '0px' }">
							<div class="grid-content grid-con-1">
								<el-icon class="grid-con-icon">
									<User />
								</el-icon>
								<div class="grid-cont-right">
									<div class="grid-num">{{ accessData }}</div>
									<div>用户访问量</div>
								</div>
							</div>
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="hover" :body-style="{ padding: '0px' }">
							<div class="grid-content grid-con-2">
								<el-icon class="grid-con-icon">
									<ChatDotRound />
								</el-icon>
								<div class="grid-cont-right">
									<div class="grid-num">2</div>
									<div>系统消息</div>
								</div>
							</div>
						</el-card>
					</el-col>
					<el-col :span="8">
						<el-card shadow="hover" :body-style="{ padding: '0px' }">
							<div class="grid-content grid-con-3">
								<el-icon class="grid-con-icon">
									<Goods />
								</el-icon>
								<div class="grid-cont-right">
									<div class="grid-num">{{ orderCount }}</div>
									<div>订单数量</div>
								</div>
							</div>
						</el-card>
					</el-col>
				</el-row>
				<el-card shadow="hover" style="height: 403px">
					<template #header>
						<div class="clearfix">
							<span>待办事项</span>
							<el-button style="float: right; padding: 3px 0" text>处理</el-button>
						</div>
					</template>

					<el-table :show-header="false" :data="todoList" style="width: 100%">
						<el-table-column width="40">
							<template #default="scope">
								<el-checkbox v-model="scope.row.status"></el-checkbox>
							</template>
						</el-table-column>
						<el-table-column>
							<template #default="scope">
								<div class="todo-item" :class="{ 'todo-item-del': scope.row.status }">
									{{ scope.row.title }}
								</div>
							</template>
						</el-table-column>
					</el-table>
				</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="12">
				<el-card shadow="hover">
					<schart ref="bar" class="schart" canvasId="bar" :options="options"></schart>
				</el-card>
			</el-col>
			<el-col :span="12">
				<el-card shadow="hover">
					<schart ref="line" class="schart" canvasId="line" :options="options2"></schart>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script setup lang="ts" name="dashboard">
import Schart from 'vue-schart';
import * as echarts from 'echarts';
import { ref, reactive, onMounted, watch } from 'vue';
import axios from 'axios'
import imgurl from '../assets/img/img.jpg';
// import { checkboxGroupEmits } from 'element-plus';

const name = localStorage.getItem('ms_username');
const role: string = name.includes('admin') ? '超级管理员' : '管理员';
const orderCount = ref();
axios.get('http://localhost:10081/order/').then(res => {
	orderCount.value = res.data.data.length
})

const accessData = ref(null);
axios.get('http://localhost:10081/log/count').then(res => {
	accessData.value = res.data.data
})


const orderStatusRef = ref(null);

// 订单状态
const orderStatusOption = reactive({
	tooltip: {
		trigger: 'item'
	},
	legend: {
		top: '5%',
		left: 'center'
	},
	series: [
		{
			name: '状态',
			type: 'pie',
			radius: ['40%', '70%'],
			center: ['50%', '70%'],
			// adjust the start and end angle
			startAngle: 180,
			endAngle: 360,
			data: [
				{ value: 1048, name: 'Search Engine' },
				{ value: 735, name: 'Direct' },
				{ value: 580, name: 'Email' },
				{ value: 484, name: 'Union Ads' },
				{ value: 300, name: 'Video Ads' }
			]
		}
	]
});
const orderStatusList = reactive([])
axios.get('http://localhost:10081/orderStatus/').then(res => {
	res.data.data.forEach(item => {
		orderStatusList.push(item)
	});
})

axios.get('http://localhost:10081/dataAnalysis/orderStatusQuantity').then(res => {
	orderStatusOption.series[0].data = res.data.data.map(item => {
		return {
			value: item.orderCount,
			name: orderStatusList.find(iitem => iitem.statusId == item.orderStatus).statusName
		}
	})
})

const options = reactive({
	type: 'bar',
	title: {
		text: '近半年订单数量'
	},
	xRorate: 25,
	labels: [],
	datasets: [
		{
			label: '订单数',
			data: []
		}
	]
});

axios.get('http://localhost:10081/dataAnalysis/orderQuantity').then(res => {
	options.labels = res.data.data.months
	options.datasets[0].data = res.data.data.orderCounts
})
const options2 = reactive({
	type: 'line',
	title: {
		text: '最近几个月用户和代取员注册数量'
	},
	labels: [],
	datasets: [
		{
			label: '用户',
			data: []
		},
		{
			label: '代取员',
			data: []
		},
	]
});
axios.get('http://localhost:10081/dataAnalysis/userAndCourierQuantity').then(res => {
	options2.labels = res.data.data.months.map(item => item.slice(0, 7))
	options2.datasets[0].data = res.data.data.userCounts
	options2.datasets[1].data = res.data.data.courierCounts
})

const todoList = reactive([]);

axios.get('http://localhost:10081/feedback/').then(res => {
	res.data.data.forEach(item => {
		todoList.push({
			title: item.feedbackContent,
			status: item.feedbackStatus === '已处理'
		});
	});
})

watch([orderStatusList, orderStatusOption], () => {
	const orderChart = echarts.init(orderStatusRef.value);
	orderChart.setOption(orderStatusOption);
});

onMounted(() => {
	var orderChart = echarts.init(orderStatusRef.value);
	orderChart.setOption(orderStatusOption)
})

</script>

<style scoped>
.el-row {
	margin-bottom: 20px;
}

.grid-content {
	display: flex;
	align-items: center;
	height: 100px;
}

.grid-cont-right {
	flex: 1;
	text-align: center;
	font-size: 14px;
	color: #999;
}

.grid-num {
	font-size: 30px;
	font-weight: bold;
}

.grid-con-icon {
	font-size: 50px;
	width: 100px;
	height: 100px;
	text-align: center;
	line-height: 100px;
	color: #fff;
}

.grid-con-1 .grid-con-icon {
	background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
	color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
	background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
	color: rgb(100, 213, 114);
}

.grid-con-3 .grid-con-icon {
	background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
	color: rgb(242, 94, 67);
}

.user-info {
	display: flex;
	align-items: center;
	padding-bottom: 20px;
	border-bottom: 2px solid #ccc;
	margin-bottom: 20px;
}

.user-info-cont {
	padding-left: 50px;
	flex: 1;
	font-size: 14px;
	color: #999;
}

.user-info-cont div:first-child {
	font-size: 30px;
	color: #222;
}

.user-info-list {
	font-size: 14px;
	color: #999;
	line-height: 25px;
}

.user-info-list span {
	margin-left: 70px;
}

.mgb20 {
	margin-bottom: 20px;
}

.todo-item {
	font-size: 14px;
}

.todo-item-del {
	text-decoration: line-through;
	color: #999;
}

.schart {
	width: 100%;
	height: 300px;
}

.order-status {
	width: 400px;
	height: 200px;
}
</style>
