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

                <li class="start active open">
                    <a href="javascript:;">
                        <i class="icon-home"></i>

                        <router-link to="/admin_home">Trang chủ</router-link>
                        <span class="selected"></span>
                        <!-- <span class="arrow open"></span> -->
                    </a>

                </li>
                <li>
                    <a href="javascript:;">
                        <i class="icon-basket"></i>
                        <router-link to="/admin_products">Quản lý sản phẩm</router-link>
                        <span class="arrow "></span>
                    </a>

                </li>
                <li>
                    <a href="javascript:;">
                        <i class="icon-rocket"></i>
                        <router-link to="/admin_customers">Quản lý khách hàng</router-link>
                        <span class="arrow "></span>
                    </a>

                </li>

                <li>
                    <a href="javascript:;">
                        <i class="icon-puzzle"></i>
                        <router-link to="/admin_orders">Quản lý đơn hàng</router-link>
                        <span class="arrow "></span>
                    </a>

                </li>

                <li>
                    <a href="javascript:;">
                        <i class="icon-settings"></i>
                        <router-link to="/admin_contacts">Quản lý phản hồi</router-link>
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
    data() {
        return {
            msg: 'admin_footer'
        }
    }

}
</script>
