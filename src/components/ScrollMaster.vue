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

			const scrollTop = this.scroll.scrollTop; // 距离页面顶部的距离
			const curPoint = this.getPoint(e);
			const moveY = curPoint.y - this.startPoint.y; // 纵向移动的距离

			// 下拉
			if (moveY > 0) {
				// 如果在顶部,阻止浏览器默认的滚动,避免触发bounce
				if (scrollTop <= 0) e.preventDefault();
				// 上拉
			} else {
				const scrollHeight = this.scroll.scrollHeight; // 全文区域的高度
				const clientHeight = this.scroll.clientHeight; // 可见区域的高度
				const scrollBottom = scrollHeight - clientHeight - scrollTop; // 距离页面底部的距离

				// 如果在底部,阻止浏览器默认的滚动,避免触发ios的bounce效果
				if (scrollBottom <= 0) e.preventDefault();
			}
		}
	}
};
</script>

<style scoped="scoped">
.scroll {
	width: 100%;
	height: 100%;
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;
}
</style>