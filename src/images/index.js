import bannerimages from './banner';
import categoryimages from './category';
import productimages from './product';
import subcategoryimages from './subcategory';

const images = {
    splash: require('./common/splash.png'),
    slide1: require('./common/slide1.png'),
    slide2: require('./common/slide2.png'),
    slide3: require('./common/slide3.png'),
    google: require('./common/google.png'),
    apple: require('./common/apple.png'),
    facebook: require('./common/facebook.png'),
    success: require('./lottieAnimation/success.json'),
    successcheck: require('./lottieAnimation/successcheck.json'),
    customer_support: require('./lottieAnimation/Whatsapp.json'),
    notificationnotfound: require('./lottieAnimation/Nonotificationstate.json'),
    notfound: require('./lottieAnimation/notfound.json'),
    notfoundimg: require('./common/notfound.png'),
    backgroundimage: require('./common/bg.png'),
    shoppingCart: require('./lottieAnimation/ShoppingCart.json'),
    couponDiscount: require('./lottieAnimation/CouponDiscount.json'),
    couponimg: require('./common/coupon1.png'),
    couponimg2: require('./common/coupon2.png'),
    couponimg3: require('./common/coupon3.png'),
    couponimg4: require('./common/coupon4.png'),
    wallet: require('./lottieAnimation/wallet.json'),
    pay1: require('./common/pay1.png'),
    pay2: require('./common/pay2.png'),
    pay3: require('./common/pay3.png'),
    walletimage: require('./common/wallet.png'),
    cash: require('./common/cash.png'),
    bg1: require('./common/bg1.png'),
    bg2: require('./common/bg2.png'),
    driver: require('./common/driver.png'),
    user: require('./common/user.png'),

    ...productimages,
    ...categoryimages,
    ...bannerimages,
    ...subcategoryimages
}
export default images;