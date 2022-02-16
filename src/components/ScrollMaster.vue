<template>
	<div class="scroll" ref="scroll">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "scroll",
	data() {
		return {};
	},

	mounted() {
		this.scroll = this.$refs["scroll"];
		this.scroll.addEventListener("touchstart", this.touchstartEvent);
		this.scroll.addEventListener("touchmove", this.touchmoveEvent, {
			passive: false // 阻止默认事件时,设置passive为false,提高性能
		});
	},

	methods: {
		getPoint(e) {
			return {
				x: e.touches ? e.touches[0].pageX : e.clientX,
				y: e.touches ? e.touches[0].pageY : e.clientY
			};
		},

		touchstartEvent(e) {
			this.startPoint = this.getPoint(e);
		},

		touchmoveEvent(e) {
			if (!this.startPoint) return;

			// const scrollLeft = this.scroll.scrollLeft; // 距离页面左边缘的距离
			const curPoint = this.getPoint(e);
			const moveX = curPoint.x - this.startPoint.x; // 纵向移动的距离

			if (Math.abs(moveX) > 0) e.preventDefault();

			// // 右拉
			// if (moveX > window.innerWidth / 3) {
			// 	// 如果在左边缘,阻止浏览器默认的滚动,避免触发bounce
			// 	if (scrollLeft <= 0) e.preventDefault();
			// 	// 左拉
			// } else if (moveX < -window.innerWidth / 3) {
			// 	const scrollWeight = this.scroll.scrollWeight; // 全文区域的宽度
			// 	const clientWeight = this.scroll.clientWeight; // 可见区域的宽度
			// 	const scrollRight = scrollWeight - clientWeight - scrollLeft; // 距离页面右边缘的距离

			// 	// 如果在右边缘,阻止浏览器默认的滚动,避免触发ios的bounce效果
			// 	if (scrollRight <= 0) e.preventDefault();
			// }
		}
	}
};
</script>

<style scoped="scoped">
.scroll {
	width: 100%;
	height: 100%;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
}
</style>