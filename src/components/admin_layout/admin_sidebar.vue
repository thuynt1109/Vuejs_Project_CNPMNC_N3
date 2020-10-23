<template>
<div class="page-sidebar">
	<!-- BEGIN SIDEBAR -->
	<div class="page-sidebar-wrapper">

		<div class="page-sidebar navbar-collapse collapse">
			<!-- BEGIN SIDEBAR MENU -->

			<ul class="ul page-sidebar-menu page-sidebar-menu-light" data-keep-expanded="true" data-auto-scroll="true" data-slide-speed="200">

				<li class="sidebar-toggler-wrapper">
					<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
					<div class="sidebar-toggler">
					</div>
					<!-- END SIDEBAR TOGGLER BUTTON -->
				</li>
				<!-- DOC: To remove the search box from the sidebar you just need to completely remove the below "sidebar-search-wrapper" LI element -->
				<li class="sidebar-search-wrapper">

					<form class="sidebar-search " action="extra_search.html" method="POST">
						<a href="javascript:;" class="remove">
						<i class="icon-close"></i>
						</a>
						<div class="input-group">
							<input type="text" class="form-control" placeholder="Search...">
							<span class="input-group-btn">
							<a href="javascript:;" class="btn submit"><i class="icon-magnifier"></i></a>
							</span>
						</div>
					</form>

				</li>
				<li class="start active open">
					<a href="javascript:;">
					<i class="icon-home"></i>
					<span class="title">Trang chủ</span>
					<span class="selected"></span>
					<!-- <span class="arrow open"></span> -->
					</a>

				</li>
				<li>
					<a href="javascript:;">
					<i class="icon-basket"></i>
					<span class="title">Quản lý sản phẩm</span>
					<span class="arrow "></span>
					</a>

				</li>
				<li>
					<a href="javascript:;">
					<i class="icon-rocket"></i>
					<span class="title">Quản lý khách hàng</span>
					<span class="arrow "></span>
					</a>

				</li>

				<li>
					<a href="javascript:;">
					<i class="icon-puzzle"></i>
					<span class="title">Quản lý đơn hàng</span>
					<span class="arrow "></span>
					</a>

				</li>

				<li>
					<a href="javascript:;">
					<i class="icon-settings"></i>
					<span class="title">Quản lý phản hồi</span>
					<span class="arrow "></span>
					</a>

				</li>

				<li>
					<a href="javascript:;">
					<i class="icon-logout"></i>
					<span class="title">Quick Sidebar</span>
					<span class="arrow "></span>
					</a>

				</li>


			</ul>
			<!-- END SIDEBAR MENU -->
		</div>
	</div>
	<!-- END SIDEBAR -->
</div>
</template>

<script>
export default {

  name: 'admin_footer',
  data () {
    return {
      msg: 'admin_footer'
    }
  }

}

</script>
