<template>
<div>

    <body class=" page-quick-sidebar-over-content">

        <div class="clearfix">
        </div>
        <!-- BEGIN CONTAINER -->
        <div class="page-container">

            <Admin_Header />
            <Admin_Sidebar />

            <!-- BEGIN CONTENT -->
            <div class="page-content-wrapper">
                <div class="page-content">

                    <!-- BEGIN DASHBOARD STATS -->

                    <h3 style="font-weight: bold">Chào mừng đến với trang quản trị Admin!</h3>

                    <!-- END DASHBOARD STATS -->

                </div>
            </div>
            <!-- END CONTENT -->

        </div>
        <!-- END CONTAINER -->

    </body>

</div>
</template>

<script>
import Admin_Header from '../admin_layout/admin_header'
import Admin_Footer from '../admin_layout/admin_footer'
import Admin_Sidebar from '../admin_layout/admin_sidebar'
export default {

    name: 'admin_home',
    data() {
        return {
            msg: 'admin_home'
        }
    },
    components: {
        Admin_Header,
        Admin_Footer,
        Admin_Sidebar
    }

}
</script>
