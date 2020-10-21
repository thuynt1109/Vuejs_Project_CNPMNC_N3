<template>
<div id="home">
    <Header />
    <div class="row product-list">
        <!-- PRODUCT ITEM START -->
        <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="product-item">
                <div class="pi-img-wrapper">
                    <img src="/static/assets/frontend/pages/img/products/model1.jpg" class="img-responsive" alt="Berry Lace Dress">
                    <div>
                        <a href="/static/assets/frontend/pages/img/products/model1.jpg" class="btn btn-default fancybox-button">Zoom</a>
                        <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                    </div>
                </div>
                <h3><a href="shop-item.html">Berry Lace Dress Berry Lace Dress</a></h3>
                <div class="pi-price">$29.00</div>
                <a href="#" class="btn btn-default add2cart">Add to cart</a>
            </div>
        </div>
        <!-- PRODUCT ITEM END -->
        <!-- PRODUCT ITEM START -->
        <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="product-item">
                <div class="pi-img-wrapper">
                    <img src="/static/assets/frontend/pages/img/products/model2.jpg" class="img-responsive" alt="Berry Lace Dress">
                    <div>
                        <a href="/static/assets/frontend/pages/img/products/model2.jpg" class="btn btn-default fancybox-button">Zoom</a>
                        <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                    </div>
                </div>
                <h3><a href="shop-item.html">Berry Lace Dress</a></h3>
                <div class="pi-price">$29.00</div>
                <a href="#" class="btn btn-default add2cart">Add to cart</a>
            </div>
        </div>
        <!-- PRODUCT ITEM END -->
        <!-- PRODUCT ITEM START -->
        <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="product-item">
                <div class="pi-img-wrapper">
                    <img src="/static/assets/frontend/pages/img/products/model6.jpg" class="img-responsive" alt="Berry Lace Dress">
                    <div>
                        <a href="/static/assets/frontend/pages/img/products/model6.jpg" class="btn btn-default fancybox-button">Zoom</a>
                        <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                    </div>
                </div>
                <h3><a href="shop-item.html">Berry Lace Dress 2</a></h3>
                <div class="pi-price">$29.00</div>
                <a href="#" class="btn btn-default add2cart">Add to cart</a>
            </div>
        </div>
        <!-- PRODUCT ITEM END -->
    </div>

    <div class="row product-list">
        <!-- PRODUCT ITEM START -->
        <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="product-item">
                <div class="pi-img-wrapper">
                    <img src="/static/assets/frontend/pages/img/products/model4.jpg" class="img-responsive" alt="Berry Lace Dress">
                    <div>
                        <a href="/static/assets/frontend/pages/img/products/model4.jpg" class="btn btn-default fancybox-button">Zoom</a>
                        <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                    </div>
                </div>
                <h3><a href="shop-item.html">Berry Lace Dress Berry Lace Dress</a></h3>
                <div class="pi-price">$29.00</div>
                <a href="#" class="btn btn-default add2cart">Add to cart</a>
            </div>
        </div>
        <!-- PRODUCT ITEM END -->
        <!-- PRODUCT ITEM START -->
        <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="product-item">
                <div class="pi-img-wrapper">
                    <img src="/static/assets/frontend/pages/img/products/model5.jpg" class="img-responsive" alt="Berry Lace Dress">
                    <div>
                        <a href="/static/assets/frontend/pages/img/products/model5.jpg" class="btn btn-default fancybox-button">Zoom</a>
                        <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                    </div>
                </div>
                <h3><a href="shop-item.html">Berry Lace Dress</a></h3>
                <div class="pi-price">$29.00</div>
                <a href="#" class="btn btn-default add2cart">Add to cart</a>
                <div class="sticker sticker-new"></div>
            </div>
        </div>
        <!-- PRODUCT ITEM END -->
        <!-- PRODUCT ITEM START -->
        <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="product-item">
                <div class="pi-img-wrapper">
                    <img src="/static/assets/frontend/pages/img/products/model3.jpg" class="img-responsive" alt="Berry Lace Dress">
                    <div>
                        <a href="/static/assets/frontend/pages/img/products/model3.jpg" class="btn btn-default fancybox-button">Zoom</a>
                        <a href="#product-pop-up" class="btn btn-default fancybox-fast-view">View</a>
                    </div>
                </div>
                <h3><a href="shop-item.html">Berry Lace Dress</a></h3>
                <div class="pi-price">$29.00</div>
                <a href="#" class="btn btn-default add2cart">Add to cart</a>
            </div>
        </div>
        <!-- PRODUCT ITEM END -->
    </div>

    <Footer />
</div>
</template>

<script>
import Header from '../layout/header'
import Footer from '../layout/footer'
import Sidebar from '../layout/sidebar'
export default {
    name: 'shop',
    data() {
        return {

        }
    },
    components: {
        Header,
        Footer,
        Sidebar
    }

}
</script>
