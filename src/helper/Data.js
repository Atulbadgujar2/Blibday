import SvgIconsFiles from "../components/Common/SvgIconsFiles";
import { String } from "../constants";
import images from "../images";
import RouteName from "../routes/RouteName";

export const OnboardingData = [
  {
    key: 's1',
    text: "Get Fresh & Organic Grocery Daily",
    boldText: 'Order the freshest fruits, veggies, and essentials delivered right to your home.',
    image: images.slide1,
  },
  {
    key: 's2',
    text: "Fast Delivery for Your Daily Needs",
    boldText: 'Get groceries delivered quickly with a smooth and hassle-free experience.',
    image: images.slide2,
  },
  {
    key: 's3',
    text: "Shop Smart & Save More Everyday",
    boldText: 'Discover budget-friendly deals and top-quality products in one place.',
    image: images.slide3,
  },

];
export const ProfileListArray = [
  {
    heading: 'Account Settings',
    data: [{
      title: "Edit Profile",
      icon: 'account-outline',
      iconFamily: 'MaterialDesignIcons',
      size: 22,
      navigate: RouteName.EDIT_PROFILE_SCREEN
    },
    {
      title: "Reset Password",
      icon: 'lock-outline',
      iconFamily: 'MaterialDesignIcons',
      size: 22,
      navigate: RouteName.CHANGE_PASSWORD_SCREEN
    },
    {
      title: "Save Address",
      icon: 'map-marker-outline',
      iconFamily: 'MaterialDesignIcons',
      size: 22,
      navigate: RouteName.SAVE_ADDRESS_SCREEN
    },
    {
      title: "Change Language",
      icon: 'language',
      iconFamily: 'Entypo',
      size: 22,
      navigate: RouteName.LANGUAGE_SCREEN
    },
    {
      title: "Settings",
      icon: 'cog-outline',
      iconFamily: 'MaterialDesignIcons',
      size: 22,
      navigate: RouteName.SETTING_SCREEN
    }
    ]
  },
  {
    heading: 'My Activity',
    data: [{
      title: "Reviews",
      icon: 'square-edit-outline',
      iconFamily: 'MaterialDesignIcons',
      size: 22
    },
    {
      title: "Wishlisted Products",
      icon: 'heart-settings-outline',
      iconFamily: 'MaterialDesignIcons',
      size: 22,
      navigate: RouteName.WISHLIST_SCREEN
    },
    {
      title: "Shared Products",
      icon: 'share-variant-outline',
      iconFamily: 'MaterialDesignIcons',
      size: 22,
      navigate: 'share'

    },
    {
      title: "Coupon",
      icon: 'gift-outline',
      iconFamily: 'MaterialDesignIcons',
      size: 22,
      navigate: RouteName.COUPON_SCREEN
    },
    {
      title: "Notification",
      icon: 'bell-outline',
      iconFamily: 'MaterialDesignIcons',
      size: 22,
      navigate: RouteName.NOTIFICATION_SCREEN
    }
    ]
  },
  {
    heading: 'My Payments',
    data: [
      {
        title: "My Wallet",
        icon: 'wallet-bifold-outline',
        iconFamily: 'MaterialDesignIcons',
        size: 22,
        navigate: RouteName.MY_WALLET_SCREEN
      },
      {
        title: "Bank & UPI Details",
        icon: 'bank',
        iconFamily: 'MaterialDesignIcons',
        size: 22,
        navigate: RouteName.PAYMENT_METHOD_SCREEN
      },
      {
        title: "Transactions",
        icon: 'payment',
        iconFamily: 'MaterialIcons',
        size: 22,
        navigate: RouteName.TRANSACTION_SCREEN

      }
    ]
  },
  {
    heading: 'Other',
    data: [{
      title: "Help Center",
      icon: 'headset-mic',
      iconFamily: 'MaterialIcons',
      size: 22,
      navigate: RouteName.SUPPORT_SCREEN

    },
    {
      title: "Rate " + String.appname,
      icon: 'star-outline',
      iconFamily: 'MaterialDesignIcons',
      size: 22,
      navigate: RouteName.APP_REVIEW_SCREEN

    },
    {
      title: "Privacy Center",
      icon: 'shield-lock-outline',
      iconFamily: 'MaterialDesignIcons',
      size: 22,
      navigate: RouteName.PRIVACY_POLICY_SCREEN
    },
    {
      title: "About " + String.appname,
      icon: 'groups-3',
      iconFamily: 'MaterialIcons',
      size: 22,
      navigate: RouteName.ABOUT_SCREEN
    }
    ]
  }

];
export const SaveAddressData = [
  {
    key: '1',
    tag: 'My Home',
    location: "742 Evergreen Terrace, San Francisco, CA 94107, USA",
    icon: 'home',
  },
  {
    key: '2',
    tag: 'Office',
    location: "18 High Street, Shoreditch, London EC2A 4DP, United Kingdom",
    icon: 'office-building-outline',
  },
  {
    key: '3',
    tag: 'Friends House',
    location: "120 Orchard Road, #15-02, Singapore 238826",
    icon: 'map-marker',
  }
];

export const UserDetails = {
  name: "Eliza",
  email: "eliza@gmail.com",
  phone: "+9155545454",
  gender: "Female",
  lastname: "Rock"
};

export const LanguageList = [
  { "id": 1, value: "English", lable: "English (US)" },
  { "id": 2, value: "EnglishUk", lable: "English (UK)" },
  { "id": 3, value: "Hindi", lable: "Hindi" },
  { "id": 4, value: "Spanish", lable: "Spanish" },
  { "id": 5, value: "Arabic", lable: "Arabic" },
  { "id": 6, value: "French", lable: "French" },
  { "id": 7, value: "Bengali", lable: "Bengali" },
  { "id": 8, value: "Russian", lable: "Russian" },
  { "id": 9, value: "Indonesia", lable: "Indonesia" },
];

// Category List
export const faqCategoriesArray = [
  { id: 0, name: "All" },
  { id: 1, name: "Account" },
  { id: 2, name: "Orders" },
  { id: 3, name: "Refunds" },
  { id: 4, name: "Returns & Cancellations" },
  { id: 5, name: "Offers & Discounts" },
  { id: 6, name: "Shipping & Delivery Charges" },
  { id: 7, name: "Product Information" },
  { id: 8, name: "Technical & App Support" },
  { id: 9, name: "Customer Support" },
];

//  FAQ Data (Linked by categoryId)
export const faqListArray = [
  //  Account & Profile
  {
    categoryId: 1,
    faqs: [
      {
        question: "How do I create an account?",
        answer:
          "You can sign up using your email address, phone number, or social media account from the login screen.",
      },
      {
        question: "I forgot my password. What should I do?",
        answer:
          "Tap on 'Forgot Password?' and follow the steps to reset your password via email or OTP.",
      },
      {
        question: "How do I update my profile information?",
        answer:
          "Go to 'My Account → Edit Profile' to change your name, phone number, or address.",
      },
      {
        question: "How do I delete my account?",
        answer:
          "Please contact our customer support team via 'Help & Support → Contact Us' to request account deletion.",
      },
    ],
  },

  //  Orders & Delivery
  {
    categoryId: 2,
    faqs: [
      {
        question: "How can I track my order?",
        answer:
          "Go to 'My Orders' → select your order → tap 'Track Order' to view live status.",
      },
      {
        question: "Can I change my shipping address after placing an order?",
        answer:
          "Address can be updated only before the order is shipped. Once shipped, the address cannot be changed.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Delivery usually takes 3–7 business days, depending on your location and selected shipping method.",
      },
      {
        question: "My order is delayed. What should I do?",
        answer:
          "Please check the 'Track Order' page or contact customer support if the order is delayed beyond the expected delivery date.",
      },
    ],
  },

  //  Payments & Refunds
  {
    categoryId: 3,
    faqs: [
      {
        question: "What payment methods are accepted?",
        answer:
          "We accept credit/debit cards, UPI, net banking, wallets, and Cash on Delivery (COD).",
      },
      {
        question: "Is online payment secure?",
        answer:
          "Yes, all transactions are encrypted and processed securely through trusted payment gateways.",
      },
      {
        question: "I was charged, but my order didn’t go through. What should I do?",
        answer:
          "Please wait a few minutes — if payment isn’t reflected, contact support with your transaction ID.",
      },
      {
        question: "How do I get a refund?",
        answer:
          "Refunds are processed within 5–7 business days after your return is approved.",
      },
    ],
  },

  //  Returns & Cancellations
  {
    categoryId: 4,
    faqs: [
      {
        question: "How do I return a product?",
        answer:
          "Go to 'My Orders → Select Item → Request Return'. Follow on-screen instructions.",
      },
      {
        question: "What is the return policy?",
        answer:
          "Most products can be returned within 7 days of delivery. Items like lingerie, food, and personal care are non-returnable.",
      },
      {
        question: "Can I cancel my order?",
        answer: "Yes, orders can be cancelled before they are shipped.",
      },
      {
        question: "When will I receive my refund after cancellation?",
        answer:
          "Refunds for prepaid orders are initiated within 3–5 business days after successful cancellation.",
      },
    ],
  },

  //  Offers & Discounts
  {
    categoryId: 5,
    faqs: [
      {
        question: "How do I apply a coupon code?",
        answer:
          "At checkout, enter your coupon code in the 'Apply Coupon' field before payment.",
      },
      {
        question: "My coupon isn’t working. Why?",
        answer:
          "Ensure the coupon is valid for your selected products and not expired.",
      },
      {
        question: "Can I combine multiple offers?",
        answer: "No, only one coupon or promotional offer can be applied per order.",
      },
    ],
  },

  //  Shipping & Delivery Charges
  {
    categoryId: 6,
    faqs: [
      {
        question: "Is there any delivery fee?",
        answer:
          "Delivery is free for orders above ₹499. For smaller orders, a nominal fee may apply.",
      },
      {
        question: "Do you offer same-day or express delivery?",
        answer:
          "Yes, in select cities we offer same-day or next-day delivery at an extra charge.",
      },
      {
        question: "Do you deliver to my area?",
        answer: "Enter your PIN code at checkout to confirm delivery availability.",
      },
    ],
  },

  //  Product Information
  {
    categoryId: 7,
    faqs: [
      {
        question: "How do I find the right size?",
        answer: "Each product page includes a 'Size Guide' to help you choose accurately.",
      },
      {
        question: "Are the products original?",
        answer:
          "Yes, we sell only 100% authentic products sourced directly from verified brands and suppliers.",
      },
      {
        question: "Can I get a product that’s out of stock?",
        answer:
          "Tap 'Notify Me' on the product page to get an alert when it’s back in stock.",
      },
    ],
  },

  //  Technical & App Support
  {
    categoryId: 8,
    faqs: [
      {
        question: "The app is crashing or freezing. What should I do?",
        answer: "Try clearing cache, updating the app, or restarting your phone.",
      },
      {
        question: "I’m not receiving notifications.",
        answer:
          "Check your notification settings and ensure permissions are enabled for the app.",
      },
      {
        question: "How do I report a bug or issue?",
        answer: "Go to 'Help & Support → Report a Problem' and describe the issue.",
      },
    ],
  },

  //  Customer Support
  {
    categoryId: 9,
    faqs: [
      {
        question: "How do I contact customer support?",
        answer:
          "You can reach us via 'Help & Support → Chat with Us' or email us at support@yourecom.com.",
      },
      {
        question: "What are your support hours?",
        answer:
          "Our customer service is available 24×7 for chat and 9 AM – 8 PM for phone support.",
      },
    ],
  },
];

export const NotificationData = [
  {
    "id": 1,
    "title": "Credit Card Connected",
    "message": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    "time": "Today | 11:30 AM",
    isChecked: false,
    "svgicon": <SvgIconsFiles name="WalletIcon" />

  },
  {
    "id": 2,
    "title": "Order Cancelled",
    "message": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    "time": "Yesterday | 04:30 PM",
    isChecked: true,
    "svgicon": <SvgIconsFiles name="CartBagCancelIcon" />
  },
  {
    "id": 3,
    "title": "New service available",
    "message": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    "time": "1 Oct 2024",
    isChecked: false,
    "svgicon": <SvgIconsFiles name="ServiceBoxIcon" />

  },
  {
    "id": 4,
    "title": "Order Successfull",
    "message": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    "time": "1 Oct 2024",
    isChecked: true,
    "svgicon": <SvgIconsFiles name="CartBagSuccessIcon" />

  },
  {
    "id": 5,
    "title": "Flash Sale Alert",
    "message": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    "time": "1 Oct 2024",
    isChecked: false,
    "svgicon": <SvgIconsFiles name="SaleIcon" />

  },
  {
    "id": 6,
    "title": "Order Cancelled",
    "message": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    "time": "Yesterday | 04:30 PM",
    isChecked: false,
    "svgicon": <SvgIconsFiles name="CartBagCancelIcon" />
  }
];



export const MyCouponData = [
  {
    id: 1,
    name: 'Add Item worth $2 more to unlock',
    code: 'TBHASHDD001',
    discount: 'Get 50% OFF',
    details: 'Add Item worth $2 more to unlock',
    image: images.couponimg
  },
  {
    id: 2,
    name: 'Add Item worth $2 more to unlock',
    code: 'TBHASHDD001',
    discount: 'Get 50% OFF',
    details: 'Add Item worth $2 more to unlock',
    image: images.couponimg3
  },
  {
    id: 3,
    name: 'Add Item worth $2 more to unlock',
    code: 'TBHASHDD001',
    discount: 'Get 50% OFF',
    details: 'Add Item worth $2 more to unlock',
    image: images.couponimg4
  },
  {
    id: 4,
    name: 'Add Item worth $2 more to unlock',
    code: 'TBHASHDD001',
    discount: 'Get 50% OFF',
    details: 'Add Item worth $2 more to unlock',
    image: images.couponimg2
  }
]

export const MyWalletData = [
  {
    "id": 1,
    "title": "Order Placed",
    "details": "For 0GHGYU0964546",
    "amount": "-$120",
    "time": "Today | 11:30 AM",
    isAdded: false,
  },
  {
    "id": 2,
    "title": "Gift Card Added",
    "details": "From example@gmial.com",
    "amount": "+$20",
    "time": "Yesterday | 04:30 PM",
    isAdded: true,
  },
  {
    "id": 3,
    "title": "Gift Card Added",
    "details": "From example@gmial.com",
    "amount": "+$10",
    "time": "1 Oct 2024",
    isAdded: true,

  },
  {
    "id": 4,
    "title": "Order Placed",
    "details": "For 0GHGYU0964546",
    "amount": "-$20",
    "time": "1 Oct 2024",
    isAdded: false,

  },
  {
    "id": 5,
    "title": "Order Placed",
    "details": "For 0GHGYU0964546",
    "amount": "-$20",
    "time": "1 Oct 2024",
    isAdded: false,

  },
  {
    "id": 6,
    "title": "Gift Card Added",
    "details": "From example@gmail.com",
    "amount": "+$20",
    "time": "Yesterday | 04:30 PM",
    isAdded: true,
  }
];

export const CardData = [
  {
    "id": 1,
    "title": "Master Card",
    "image": images.pay2,
  },
  {
    "id": 2,
    "title": "Visa Card",
    "image": images.pay3,
  },
  {
    "id": 3,
    "title": "Paypal",
    "image": images.pay1,

  }
];

export const SettingsData = [
  {
    id: 1, lable: "Notification Settings",
    icon: 'bell-cog-outline',
    iconFamily: 'MaterialDesignIcons',
    size: 22,
    navigate: RouteName.NOTIFICATION_SETTING_SCREEN
  },
  {
    id: 2, lable: "Password Manager",
    icon: 'account-key-outline',
    iconFamily: 'MaterialDesignIcons',
    size: 22,
    navigate: RouteName.CHANGE_PASSWORD_SCREEN
  },
  {
    id: 3, lable: "Delete Acctount",
    icon: 'delete-outline',
    iconFamily: 'MaterialDesignIcons',
    size: 22,
    navigate: RouteName.EDIT_PROFILE_SCREEN
  }
];

export const NotificationSettingData = [
  {
    "id": 1,
    "title": "Allow Notifcations",
    "message": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",

    isChecked: true,

  },
  {
    "id": 2,
    "title": "Email Notifcations",
    "message": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',

    isChecked: false,
  },
  {
    "id": 3,
    "title": "Order Notifcations",
    "message": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',

    isChecked: true,

  },
  {
    "id": 4,
    "title": "General Notifcations",
    "message": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',

    isChecked: false,

  },

];

export const TransactionHistoryData = [
  {
    "id": 1,
    "title": "Order Placed",
    "details": "For 0GHGYU0964546",
    "amount": "-$120",
    "time": "Today | 11:30 AM",
    isAdded: false,
  },
  {
    "id": 2,
    "title": "Gift Card Added",
    "details": "From example@gmial.com",
    "amount": "+$20",
    "time": "Yesterday | 04:30 PM",
    isAdded: true,
  },
  {
    "id": 3,
    "title": "Gift Card Added",
    "details": "From example@gmial.com",
    "amount": "+$10",
    "time": "1 Oct 2024",
    isAdded: true,

  },
  {
    "id": 4,
    "title": "Order Placed",
    "details": "For 0GHGYU0964546",
    "amount": "-$20",
    "time": "1 Oct 2024",
    isAdded: false,

  },
  {
    "id": 5,
    "title": "Order Placed",
    "details": "For 0GHGYU0964546",
    "amount": "-$20",
    "time": "1 Oct 2024",
    isAdded: false,

  },
  {
    "id": 6,
    "title": "Gift Card Added",
    "details": "From example@gmail.com",
    "amount": "+$20",
    "time": "Yesterday | 04:30 PM",
    isAdded: true,
  },
  {
    "id": 7,
    "title": "Gift Card Added",
    "details": "From example@gmail.com",
    "amount": "+$20",
    "time": "Yesterday | 04:30 PM",
    isAdded: true,
  },
  {
    "id": 8,
    "title": "Gift Card Added",
    "details": "From example@gmail.com",
    "amount": "+$20",
    "time": "Yesterday | 04:30 PM",
    isAdded: true,
  }
];

export const PaymentMethodData = [
  {
    "id": 1,
    "type": "Credit Card",
    "data": [
      {
        "id": 4,
        "name": "Master Card",
        "image": images.pay2,
      },
      {
        "id": 5,
        "name": "Visa Card",
        "image": images.pay3,
      }
    ]
  },
  {
    "id": 2,
    "type": "Other Method",
    "data": [
      {
        "id": 6,
        "name": "Paypal",
        "image": images.pay1,
      },
      {
        "id": 7,
        "name": "Apple Pay",
        "image": images.apple,
      },
      {
        "id": 8,
        "name": "Google Pay",
        "image": images.google,
      }
    ]
  }
];

export const AllCategoriesData = [
  {
    id: "1",
    name: "Fruits & Vegetables",
    shortName: "Fruits",
    color: '#b0e1b0ff',
    image: images.cat58X58
  },
  {
    id: "2",
    name: "Biscuits, Drink & Packaged Foods",
    shortName: "Packages",
    color: '#FFE0B2',
    image: images.cat58X58
  },
  {
    id: "4",
    name: "Dairy & Bakery",
    shortName: "Dairy",
    color: '#B3E5FC',
    image: images.cat58X58
  },
  {
    id: "3",
    name: "Cooking Essentials",
    shortName: "Cooking",
    color: '#FFCCBC',
    image: images.cat58X58
  },
  {
    id: "5",
    name: "Personal Care",
    shortName: "Personal Care",
    color: '#E1BEE7',
    image: images.cat58X58
  }
];

export const AllSubcategoriesData = [
  { id: "1-1", parentCategoryId: "1", name: "Fresh Fruits", image: images.cat1 },
  { id: "1-2", parentCategoryId: "1", name: "Fresh Vegetables", image: images.cat2 },
  { id: "1-3", parentCategoryId: "1", name: "Herbs & Seasonings", image: images.cat3 },
  { id: "2-1", parentCategoryId: "2", name: "Biscuits & Cookies", image: images.cat5 },
  { id: "2-2", parentCategoryId: "2", name: "Soft Drinks & Juices", image: images.cat6 },
  { id: "2-3", parentCategoryId: "2", name: "Namkeen & Snacks", image: images.cat7 },
  { id: "2-4", parentCategoryId: "2", name: "Instant Foods", image: images.cat8 },
  { id: "2-5", parentCategoryId: "2", name: "Chocolates & Sweets", image: images.cat9 },
  { id: "3-1", parentCategoryId: "3", name: "Dals & Pulses", image: images.cat10 },
  { id: "3-2", parentCategoryId: "3", name: "Oils & Ghee", image: images.cat11 },
  { id: "3-3", parentCategoryId: "3", name: "Atta, Flour & Sooji", image: images.cat12 },
  { id: "3-4", parentCategoryId: "3", name: "Masalas & Spices", image: images.cat13 },
  { id: "3-5", parentCategoryId: "3", name: "Rice & Grains", image: images.cat14 },
  { id: "4-1", parentCategoryId: "4", name: "Milk & Curd", image: images.cat15 },
  { id: "4-2", parentCategoryId: "4", name: "Bakery Breads", image: images.cat16 },
  { id: "4-5", parentCategoryId: "4", name: "Butter, Ghee & Cream", image: images.cat17 },
  { id: "5-1", parentCategoryId: "5", name: "Skin Care", image: images.cat20 },
  { id: "5-2", parentCategoryId: "5", name: "Hair Care", image: images.cat18 },
  { id: "5-4", parentCategoryId: "5", name: "Men's Grooming", image: images.cat19 }
];

export const AllChildcategoriesData = [
  // Fresh Fruits (1-1)
  { id: "1-1-1", parentSubcategoryId: "1-1", name: "Citrus Fruits", image: images.product5 },
  { id: "1-1-2", parentSubcategoryId: "1-1", name: "Banana Family", image: images.product10 },
  { id: "1-1-3", parentSubcategoryId: "1-1", name: "Imported Fruits", image: images.product7 },
  { id: "1-1-4", parentSubcategoryId: "1-1", name: "Seasonal Fruits", image: images.subcat4 },
  { id: "1-1-5", parentSubcategoryId: "1-1", name: "Apple & Grapes", image: images.subcat5 },
  // Fresh Vegetables (1-2)
  { id: "1-2-1", parentSubcategoryId: "1-2", name: "Leafy Vegetables", image: images.product13 },
  { id: "1-2-2", parentSubcategoryId: "1-2", name: "Root Vegetables", image: images.product17 },
  { id: "1-2-3", parentSubcategoryId: "1-2", name: "Gourd Family", image: images.product14 },
  { id: "1-2-4", parentSubcategoryId: "1-2", name: "Onion & Garlic", image: images.product38 },
  { id: "1-2-5", parentSubcategoryId: "1-2", name: "Capsicum Family", image: images.product36 },
  // Herbs & Seasonings (1-3)
  { id: "1-3-1", parentSubcategoryId: "1-3", name: "Indian Herbs", image: images.product32 },
  { id: "1-3-2", parentSubcategoryId: "1-3", name: "Exotic Herbs", image: images.product27 },
  { id: "1-3-3", parentSubcategoryId: "1-3", name: "Seasoning Powders", image: images.product33 },
  { id: "1-3-4", parentSubcategoryId: "1-3", name: "Chilli Variants", image: images.product36 },
  { id: "1-3-5", parentSubcategoryId: "1-3", name: "Garlic Variants", image: images.product38 },
  // Biscuits & Cookies (2-1)
  { id: "2-1-1", parentSubcategoryId: "2-1", name: "Cream Biscuits", image: images.product45 },
  { id: "2-1-2", parentSubcategoryId: "2-1", name: "Glucose Biscuits", image: images.product46 },
  { id: "2-1-3", parentSubcategoryId: "2-1", name: "Cookies", image: images.product42 },
  { id: "2-1-4", parentSubcategoryId: "2-1", name: "Digestive & Healthy Biscuits", image: images.product48 },
  { id: "2-1-5", parentSubcategoryId: "2-1", name: "Salted Crackers", image: images.product49 },

  // Soft Drinks & Juices (2-2)
  { id: "2-2-1", parentSubcategoryId: "2-2", name: "Aerated Drinks", image: images.product61 },
  { id: "2-2-2", parentSubcategoryId: "2-2", name: "Fruit Juices", image: images.product62 },
  { id: "2-2-3", parentSubcategoryId: "2-2", name: "Energy Drinks", image: images.product63 },
  { id: "2-2-4", parentSubcategoryId: "2-2", name: "Packaged Water", image: images.product64 },
  { id: "2-2-5", parentSubcategoryId: "2-2", name: "Milk Drinks & Shakes", image: images.product65 },

  // Namkeen & Snacks (2-3)
  { id: "2-3-1", parentSubcategoryId: "2-3", name: "Chips", image: images.product59 },
  { id: "2-3-2", parentSubcategoryId: "2-3", name: "Mixtures", image: images.product60 },
  { id: "2-3-3", parentSubcategoryId: "2-3", name: "Bhujia & Sev", image: images.product29 },
  { id: "2-3-4", parentSubcategoryId: "2-3", name: "Popcorn", image: images.product50 },
  { id: "2-3-5", parentSubcategoryId: "2-3", name: "Baked Snacks", image: images.product21 },

  // Instant Foods (2-4)
  { id: "2-4-1", parentSubcategoryId: "2-4", name: "Instant Noodles", image: images.product56 },
  { id: "2-4-2", parentSubcategoryId: "2-4", name: "Instant Soups", image: images.product57 },
  { id: "2-4-3", parentSubcategoryId: "2-4", name: "Ready-to-Eat Meals", image: images.product27 },
  { id: "2-4-4", parentSubcategoryId: "2-4", name: "Instant Breakfast", image: images.product58 },
  { id: "2-4-5", parentSubcategoryId: "2-4", name: "Instant Pasta", image: images.product59 },

  // Chocolates & Sweets (2-5)
  { id: "2-5-1", parentSubcategoryId: "2-5", name: "Milk Chocolates", image: images.product51 },
  { id: "2-5-2", parentSubcategoryId: "2-5", name: "Dark Chocolates", image: images.product52 },
  { id: "2-5-3", parentSubcategoryId: "2-5", name: "Candies", image: images.product47 },
  { id: "2-5-4", parentSubcategoryId: "2-5", name: "Indian Sweets (Packaged)", image: images.product43 },
  { id: "2-5-5", parentSubcategoryId: "2-5", name: "Health Bars", image: images.product48 },
  // Dals & Pulses (3-1)
  { id: "3-1-1", parentSubcategoryId: "3-1", name: "Toor Dal", image: images.product40 },
  { id: "3-1-2", parentSubcategoryId: "3-1", name: "Moong Dal", image: images.product39 },
  { id: "3-1-3", parentSubcategoryId: "3-1", name: "Chana Dal", image: images.product33 },
  { id: "3-1-4", parentSubcategoryId: "3-1", name: "Masoor Dal", image: images.product31 },
  { id: "3-1-5", parentSubcategoryId: "3-1", name: "Rajma", image: images.product32 },

  // Oils & Ghee (3-2)
  { id: "3-2-1", parentSubcategoryId: "3-2", name: "Sunflower Oil", image: images.product24 },
  { id: "3-2-2", parentSubcategoryId: "3-2", name: "Mustard Oil", image: images.product34 },
  { id: "3-2-3", parentSubcategoryId: "3-2", name: "Groundnut Oil", image: images.product21 },
  { id: "3-2-4", parentSubcategoryId: "3-2", name: "Ghee", image: images.product27 },
  { id: "3-2-5", parentSubcategoryId: "3-2", name: "Olive Oil", image: images.product23 },

  // Atta, Flour & Sooji (3-3)
  { id: "3-3-1", parentSubcategoryId: "3-3", name: "Atta", image: images.product29 },
  { id: "3-3-2", parentSubcategoryId: "3-3", name: "Maida", image: images.product30 },
  { id: "3-3-3", parentSubcategoryId: "3-3", name: "Sooji", image: images.product31 },
  { id: "3-3-4", parentSubcategoryId: "3-3", name: "Besan", image: images.product33 },
  { id: "3-3-5", parentSubcategoryId: "3-3", name: "Corn Flour", image: images.product32 },

  // Masalas & Spices (3-4)
  { id: "3-4-1", parentSubcategoryId: "3-4", name: "Chilli Powder", image: images.product27 },
  { id: "3-4-2", parentSubcategoryId: "3-4", name: "Turmeric Powder", image: images.product30 },
  { id: "3-4-3", parentSubcategoryId: "3-4", name: "Garam Masala", image: images.product29 },
  { id: "3-4-4", parentSubcategoryId: "3-4", name: "Coriander Powder", image: images.product32 },
  { id: "3-4-5", parentSubcategoryId: "3-4", name: "Whole Spices", image: images.product40 },

  // Rice & Grains (3-5)
  { id: "3-5-1", parentSubcategoryId: "3-5", name: "Basmati Rice", image: images.product41 },
  { id: "3-5-2", parentSubcategoryId: "3-5", name: "Sona Masoori Rice", image: images.product33 },
  { id: "3-5-3", parentSubcategoryId: "3-5", name: "Poha", image: images.product29 },
  { id: "3-5-4", parentSubcategoryId: "3-5", name: "Millets", image: images.product31 },
  { id: "3-5-5", parentSubcategoryId: "3-5", name: "Flattened Rice", image: images.product40 },

  // Milk & Curd (4-1)
  { id: "4-1-1", parentSubcategoryId: "4-1", name: "Fresh Milk", image: images.product34 },
  { id: "4-1-2", parentSubcategoryId: "4-1", name: "Curd", image: images.product31 },
  { id: "4-1-3", parentSubcategoryId: "4-1", name: "Flavoured Milk", image: images.product65 },
  { id: "4-1-4", parentSubcategoryId: "4-1", name: "Paneer", image: images.product40 },
  { id: "4-1-5", parentSubcategoryId: "4-1", name: "Butter & Cheese", image: images.product32 },

  // Bakery Breads (4-2)
  { id: "4-2-1", parentSubcategoryId: "4-2", name: "White Bread", image: images.product44 },
  { id: "4-2-2", parentSubcategoryId: "4-2", name: "Brown Bread", image: images.product47 },
  { id: "4-2-3", parentSubcategoryId: "4-2", name: "Cakes", image: images.product44 },
  { id: "4-2-4", parentSubcategoryId: "4-2", name: "Buns & Pav", image: images.product48 },
  { id: "4-2-5", parentSubcategoryId: "4-2", name: "Cookies", image: images.product42 },

  // Butter, Ghee & Cream (4-5)
  { id: "4-5-1", parentSubcategoryId: "4-5", name: "Butter", image: images.product32 },
  { id: "4-5-2", parentSubcategoryId: "4-5", name: "Ghee", image: images.product33 },
  { id: "4-5-3", parentSubcategoryId: "4-5", name: "Fresh Cream", image: images.product40 },
  { id: "4-5-4", parentSubcategoryId: "4-5", name: "Whipping Cream", image: images.product31 },
  { id: "4-5-5", parentSubcategoryId: "4-5", name: "Cheese Blocks", image: images.product21 },

  // Skin Care (5-1)
  { id: "5-1-1", parentSubcategoryId: "5-1", name: "Moisturizers & Face Creams", image: images.product20 },
  { id: "5-1-2", parentSubcategoryId: "5-1", name: "Sunscreens & Sunblocks", image: images.product21 },
  { id: "5-1-3", parentSubcategoryId: "5-1", name: "Face Wash & Cleansers", image: images.product28 },
  { id: "5-1-4", parentSubcategoryId: "5-1", name: "Serums & Toners", image: images.product25 },
  { id: "5-1-5", parentSubcategoryId: "5-1", name: "Face Masks & Scrubs", image: images.product34 },

  // Hair Care (5-2)
  { id: "5-2-1", parentSubcategoryId: "5-2", name: "Shampoos", image: images.product24 },
  { id: "5-2-2", parentSubcategoryId: "5-2", name: "Conditioners", image: images.product28 },
  { id: "5-2-3", parentSubcategoryId: "5-2", name: "Hair Oils & Serums", image: images.product23 },
  { id: "5-2-4", parentSubcategoryId: "5-2", name: "Hair Styling Products", image: images.product22 },
  { id: "5-2-5", parentSubcategoryId: "5-2", name: "Hair Color & Treatment Kits", image: images.product34 },

  // Men's Grooming (5-4)
  { id: "5-4-1", parentSubcategoryId: "5-4", name: "Beard Oils & Grooming Kits", image: images.product20 },
  { id: "5-4-2", parentSubcategoryId: "5-4", name: "Shaving Creams & Razors", image: images.product23 },
  { id: "5-4-3", parentSubcategoryId: "5-4", name: "Men’s Face Wash", image: images.product24 }
];

export const AllproductsData = [
  // Category: Citrus Fruits (1-1-1)
  { id: "P1", name: "Orange", weight: "1 kg", price: 120, oldPrice: 150, image: images.product5, ifnew: true, ifwishlist: false, qty: 1, parentChildCategoryId: "1-1-1" },
  { id: "P3", name: "Lemon", weight: "500 g", price: 40, oldPrice: 60, image: images.product9, ifnew: false, ifwishlist: true, qty: 0, disocunt: 10, parentChildCategoryId: "1-1-1" },
  { id: "P4", name: "Grapefruit", weight: "1 pc", price: 90, oldPrice: 120, image: images.product7, parentChildCategoryId: "1-1-1" },
  { id: "P5", name: "Kinno Orange", weight: "1 kg", price: 130, oldPrice: 160, image: images.product8, parentChildCategoryId: "1-1-1" },

  // Category: Banana Family (1-1-2)
  { id: "P6", name: "Banana Robusta", weight: "1 dozen", price: 60, oldPrice: 80, image: images.product10, ifwishlist: true, parentChildCategoryId: "1-1-2" },
  { id: "P7", name: "Banana Yelakki", weight: "500 g", price: 70, oldPrice: 90, image: images.product3, parentChildCategoryId: "1-1-2" },
  { id: "P8", name: "Banana Red", weight: "1 kg", price: 110, oldPrice: 130, image: images.product4, parentChildCategoryId: "1-1-2" },
  { id: "P9", name: "Banana Nendran", weight: "1 kg", price: 80, oldPrice: 100, image: images.product6, ifwishlist: true, parentChildCategoryId: "1-1-2" },
  { id: "P10", name: "Raw Banana", weight: "1 kg", price: 40, oldPrice: 60, image: images.product1, parentChildCategoryId: "1-1-2" },

  // Category: Imported Fruits (1-1-3)
  { id: "P11", name: "Kiwi", weight: "3 pcs", price: 150, oldPrice: 180, image: images.product11, parentChildCategoryId: "1-1-3" },
  { id: "P12", name: "Apple Washington", weight: "1 kg", price: 220, oldPrice: 260, image: images.product3, ifwishlist: true, parentChildCategoryId: "1-1-3" },
  { id: "P13", name: "Dragon Fruit", weight: "1 pc", price: 180, oldPrice: 220, image: images.product10, parentChildCategoryId: "1-1-3" },
  { id: "P14", name: "Green Apple", weight: "1 kg", price: 240, oldPrice: 280, image: images.product8, parentChildCategoryId: "1-1-3" },
  { id: "P15", name: "Blueberries", weight: "125 g", price: 200, oldPrice: 250, image: images.product6, parentChildCategoryId: "1-1-3" },

  // Category: Seasonal Fruits (1-1-4)
  { id: "P16", name: "Mango Alphonso", weight: "1 kg", price: 300, oldPrice: 350, image: images.product10, parentChildCategoryId: "1-1-4" },
  { id: "P17", name: "Watermelon", weight: "1 pc", price: 60, oldPrice: 80, image: images.product9, parentChildCategoryId: "1-1-4" },
  { id: "P18", name: "Muskmelon", weight: "1 pc", price: 70, oldPrice: 90, image: images.product5, parentChildCategoryId: "1-1-4" },
  { id: "P19", name: "Jamun", weight: "250 g", price: 90, oldPrice: 120, image: images.product3, parentChildCategoryId: "1-1-4" },
  { id: "P20", name: "Lychee", weight: "500 g", price: 160, oldPrice: 200, image: images.product2, parentChildCategoryId: "1-1-4" },

  // Category: Apple & Grapes (1-1-5)
  { id: "P21", name: "Apple Shimla", weight: "1 kg", price: 150, oldPrice: 180, image: images.product3, parentChildCategoryId: "1-1-5" },
  { id: "P22", name: "Black Grapes", weight: "500 g", price: 90, oldPrice: 120, image: images.product29, parentChildCategoryId: "1-1-5" },
  { id: "P23", name: "Green Grapes", weight: "500 g", price: 80, oldPrice: 100, image: images.product7, parentChildCategoryId: "1-1-5" },
  { id: "P24", name: "Apple Gala", weight: "1 kg", price: 170, oldPrice: 200, image: images.product3, parentChildCategoryId: "1-1-5" },
  { id: "P25", name: "Golden Apple", weight: "1 kg", price: 180, oldPrice: 210, image: images.product8, parentChildCategoryId: "1-1-5" },

  // Category: Leafy Vegetables (1-2-1)
  { id: "P26", name: "Spinach", weight: "250 g", price: 25, oldPrice: 35, image: images.product55, parentChildCategoryId: "1-2-1" },
  { id: "P27", name: "Coriander", weight: "100 g", price: 15, oldPrice: 20, image: images.product15, ifwishlist: true, parentChildCategoryId: "1-2-1" },
  { id: "P28", name: "Mint", weight: "100 g", price: 20, oldPrice: 30, image: images.product15, parentChildCategoryId: "1-2-1" },
  { id: "P29", name: "Fenugreek", weight: "250 g", price: 30, oldPrice: 40, image: images.product13, parentChildCategoryId: "1-2-1" },
  { id: "P30", name: "Celery", weight: "250 g", price: 45, oldPrice: 60, image: images.product12, parentChildCategoryId: "1-2-1" },

  // Category: Root Vegetables (1-2-2)
  { id: "P31", name: "Potato", weight: "1 kg", price: 30, oldPrice: 40, image: images.product17, parentChildCategoryId: "1-2-2" },
  { id: "P32", name: "Carrot", weight: "1 kg", price: 60, oldPrice: 80, image: images.product14, ifwishlist: true, parentChildCategoryId: "1-2-2" },
  { id: "P33", name: "Beetroot", weight: "1 kg", price: 50, oldPrice: 70, image: images.product16, parentChildCategoryId: "1-2-2" },
  { id: "P34", name: "Radish", weight: "500 g", price: 20, oldPrice: 30, image: images.product18, parentChildCategoryId: "1-2-2" },
  { id: "P35", name: "Sweet Potato", weight: "1 kg", price: 55, oldPrice: 75, image: images.product17, parentChildCategoryId: "1-2-2" },

  // Category: Gourd Family (1-2-3)
  { id: "P36", name: "Bottle Gourd", weight: "1 pc", price: 40, oldPrice: 55, image: images.product55, parentChildCategoryId: "1-2-3" },
  { id: "P37", name: "Bitter Gourd", weight: "500 g", price: 30, oldPrice: 45, image: images.product54, parentChildCategoryId: "1-2-3" },
  { id: "P38", name: "Ridge Gourd", weight: "500 g", price: 35, oldPrice: 50, image: images.product17, parentChildCategoryId: "1-2-3" },
  { id: "P39", name: "Snake Gourd", weight: "1 pc", price: 45, oldPrice: 60, image: images.product18, ifwishlist: true, parentChildCategoryId: "1-2-3" },
  { id: "P40", name: "Ash Gourd", weight: "1 kg", price: 30, oldPrice: 45, image: images.product14, parentChildCategoryId: "1-2-3" },

  // Category: Onion & Garlic (1-2-4)
  { id: "P41", name: "Onion", weight: "1 kg", price: 40, oldPrice: 60, image: images.product12, parentChildCategoryId: "1-2-4" },
  { id: "P42", name: "Garlic", weight: "250 g", price: 40, oldPrice: 55, image: images.product38, parentChildCategoryId: "1-2-4" },
  { id: "P43", name: "Ginger", weight: "250 g", price: 35, oldPrice: 45, image: images.product12, parentChildCategoryId: "1-2-4" },
  { id: "P44", name: "Shallots", weight: "500 g", price: 60, oldPrice: 80, image: images.product13, parentChildCategoryId: "1-2-4" },
  { id: "P45", name: "Spring Onion", weight: "250 g", price: 30, oldPrice: 40, image: images.product18, parentChildCategoryId: "1-2-4" },

  // Category: Capsicum Family (1-2-5)
  { id: "P46", name: "Green Capsicum", weight: "500 g", price: 60, oldPrice: 80, image: images.product37, ifwishlist: true, parentChildCategoryId: "1-2-5" },
  { id: "P47", name: "Red Capsicum", weight: "500 g", price: 120, oldPrice: 150, image: images.product36, parentChildCategoryId: "1-2-5" },
  { id: "P48", name: "Yellow Capsicum", weight: "500 g", price: 120, oldPrice: 150, image: images.product55, parentChildCategoryId: "1-2-5" },
  { id: "P49", name: "Green Chilli", weight: "100 g", price: 20, oldPrice: 30, image: images.product56, parentChildCategoryId: "1-2-5" },
  { id: "P50", name: "Jalapeno", weight: "250 g", price: 90, oldPrice: 120, image: images.product13, parentChildCategoryId: "1-2-5" },

  // Category: Indian Herbs (1-3-1)
  { id: "P51", name: "Curry Leaves", weight: "50 g", price: 10, oldPrice: 20, image: images.product15, ifwishlist: true, parentChildCategoryId: "1-3-1" },
  { id: "P52", name: "Lemongrass", weight: "50 g", price: 20, oldPrice: 30, image: images.product16, parentChildCategoryId: "1-3-1" },
  { id: "P53", name: "Bay Leaves", weight: "20 g", price: 15, oldPrice: 25, image: images.product14, parentChildCategoryId: "1-3-1" },
  { id: "P54", name: "Black Stone Flower", weight: "20 g", price: 20, oldPrice: 30, image: images.product18, parentChildCategoryId: "1-3-1" },
  { id: "P55", name: "Star Anise", weight: "20 g", price: 30, oldPrice: 40, image: images.product55, parentChildCategoryId: "1-3-1" },

  // Category: Exotic Herbs (1-3-2)
  { id: "P56", name: "Oregano", weight: "50 g", price: 60, oldPrice: 80, image: images.product55, ifwishlist: true, parentChildCategoryId: "1-3-2" },
  { id: "P57", name: "Basil", weight: "50 g", price: 50, oldPrice: 70, image: images.product35, parentChildCategoryId: "1-3-2" },
  { id: "P58", name: "Rosemary", weight: "50 g", price: 70, oldPrice: 90, image: images.product38, parentChildCategoryId: "1-3-2" },
  { id: "P59", name: "Parsley", weight: "50 g", price: 60, oldPrice: 80, image: images.product35, parentChildCategoryId: "1-3-2" },
  { id: "P60", name: "Thyme", weight: "50 g", price: 70, oldPrice: 90, image: images.product18, parentChildCategoryId: "1-3-2" },

  // Category: Seasoning Powders (1-3-3)
  { id: "P61", name: "Black Pepper", weight: "50 g", price: 60, oldPrice: 80, image: images.product36, ifwishlist: true, parentChildCategoryId: "1-3-3" },
  { id: "P62", name: "Chilli Flakes", weight: "50 g", price: 40, oldPrice: 60, image: images.product12, parentChildCategoryId: "1-3-3" },
  { id: "P63", name: "Garlic Seasoning", weight: "50 g", price: 50, oldPrice: 70, image: images.product19, parentChildCategoryId: "1-3-3" },
  { id: "P64", name: "Mixed Herbs", weight: "50 g", price: 70, oldPrice: 90, image: images.product13, parentChildCategoryId: "1-3-3" },
  { id: "P65", name: "Pizza Seasoning", weight: "50 g", price: 50, oldPrice: 70, image: images.product26, parentChildCategoryId: "1-3-3" },

  // Category: Chilli Variants (1-3-4)
  { id: "P66", name: "Red Chilli", weight: "250 g", price: 60, oldPrice: 80, image: images.product36, ifwishlist: true, parentChildCategoryId: "1-3-4" },
  { id: "P67", name: "Green Chilli", weight: "100 g", price: 20, oldPrice: 30, image: images.product37, parentChildCategoryId: "1-3-4" },
  { id: "P68", name: "Dry Red Chilli", weight: "250 g", price: 80, oldPrice: 100, image: images.product26, parentChildCategoryId: "1-3-4" },
  { id: "P69", name: "Bird Eye Chilli", weight: "100 g", price: 90, oldPrice: 120, image: images.product35, parentChildCategoryId: "1-3-4" },
  { id: "P70", name: "Bhut Jolokia", weight: "50 g", price: 150, oldPrice: 180, image: images.product38, parentChildCategoryId: "1-3-4" },

  // Category: Garlic Variants (1-3-5)
  { id: "P71", name: "Peeled Garlic", weight: "250 g", price: 60, oldPrice: 80, image: images.product36, parentChildCategoryId: "1-3-5" },
  { id: "P72", name: "Large Garlic", weight: "250 g", price: 70, oldPrice: 90, image: images.product37, parentChildCategoryId: "1-3-5" },
  { id: "P73", name: "Small Garlic", weight: "250 g", price: 50, oldPrice: 70, image: images.product38, parentChildCategoryId: "1-3-5" },
  { id: "P74", name: "Black Garlic", weight: "100 g", price: 150, oldPrice: 180, image: images.product35, parentChildCategoryId: "1-3-5" },
  { id: "P75", name: "Powdered Garlic", weight: "100 g", price: 60, oldPrice: 90, image: images.product55, parentChildCategoryId: "1-3-5" },
  // Category: Cream Biscuits (2-1-1)
  { id: "P2-1-1-1", name: "Oreo Chocolate Cream", weight: "120 g", price: 30, oldPrice: 40, image: images.product39, ifwishlist: true, parentChildCategoryId: "2-1-1" },
  { id: "P2-1-1-2", name: "Sunfeast Cream Biscuits", weight: "150 g", price: 35, oldPrice: 45, image: images.product45, parentChildCategoryId: "2-1-1" },
  { id: "P2-1-1-3", name: "Britannia Treat Cream", weight: "100 g", price: 28, oldPrice: 35, image: images.product46, parentChildCategoryId: "2-1-1" },
  { id: "P2-1-1-4", name: "Dukes Cream  Biscuits", weight: "130 g", price: 25, oldPrice: 35, image: images.product42, parentChildCategoryId: "2-1-1" },
  { id: "P2-1-1-5", name: "Happy Cream Biscuits", weight: "110 g", price: 20, oldPrice: 30, image: images.product45, parentChildCategoryId: "2-1-1" },

  // Category: Glucose Biscuits (2-1-2)
  { id: "P2-1-2-1", name: "Parle-G", weight: "250 g", price: 30, oldPrice: 35, image: images.product46, parentChildCategoryId: "2-1-2" },
  { id: "P2-1-2-2", name: "Britannia Tiger", weight: "200 g", price: 28, oldPrice: 35, image: images.product44, ifwishlist: true, parentChildCategoryId: "2-1-2" },
  { id: "P2-1-2-3", name: "Happy Bite Glucose", weight: "300 g", price: 32, oldPrice: 40, image: images.product47, parentChildCategoryId: "2-1-2" },
  { id: "P2-1-2-4", name: "Gold Glucose Biscuits", weight: "250 g", price: 25, oldPrice: 30, image: images.product49, parentChildCategoryId: "2-1-2" },
  { id: "P2-1-2-5", name: "Fresh Glucose Biscuits", weight: "150 g", price: 18, oldPrice: 25, image: images.product46, parentChildCategoryId: "2-1-2" },

  // Category: Cookies (2-1-3)
  { id: "P2-1-3-1", name: "Unibic Choco Chip Cookies", weight: "75 g", price: 35, oldPrice: 45, image: images.product42, parentChildCategoryId: "2-1-3" },
  { id: "P2-1-3-2", name: "Sunfeast Mom's Magic", weight: "100 g", price: 40, oldPrice: 50, image: images.product43, parentChildCategoryId: "2-1-3" },
  { id: "P2-1-3-3", name: "Britannia Good Day", weight: "100 g", price: 35, oldPrice: 45, image: images.product47, parentChildCategoryId: "2-1-3" },
  { id: "P2-1-3-4", name: "Soft Bake Cookies", weight: "80 g", price: 32, oldPrice: 40, image: images.product48, parentChildCategoryId: "2-1-3" },
  { id: "P2-1-3-5", name: "Fresh Butter Cookies", weight: "90 g", price: 30, oldPrice: 38, image: images.product44, parentChildCategoryId: "2-1-3" },

  // Category: Digestive & Healthy Biscuits (2-1-4)
  { id: "P2-1-4-1", name: "McVitie's Digestive", weight: "250 g", price: 60, oldPrice: 75, image: images.product48, parentChildCategoryId: "2-1-4" },
  { id: "P2-1-4-2", name: "NutriChoice Digestive", weight: "300 g", price: 65, oldPrice: 80, image: images.product43, parentChildCategoryId: "2-1-4" },
  { id: "P2-1-4-3", name: "Oats Digestive Biscuits", weight: "200 g", price: 55, oldPrice: 70, image: images.product46, parentChildCategoryId: "2-1-4" },
  { id: "P2-1-4-4", name: "Wheat Crisps", weight: "180 g", price: 45, oldPrice: 55, image: images.product42, parentChildCategoryId: "2-1-4" },
  { id: "P2-1-4-5", name: "Healthy Digestive Lite", weight: "200 g", price: 50, oldPrice: 60, image: images.product49, parentChildCategoryId: "2-1-4" },

  // Category: Salted Crackers (2-1-5)
  { id: "P2-1-5-1", name: "Monaco Salted Biscuits", weight: "200 g", price: 30, oldPrice: 40, image: images.product44, parentChildCategoryId: "2-1-5" },
  { id: "P2-1-5-2", name: "Unibic Crackers", weight: "150 g", price: 28, oldPrice: 35, image: images.product49, parentChildCategoryId: "2-1-5" },
  { id: "P2-1-5-3", name: "Salt & Lite Crackers", weight: "200 g", price: 35, oldPrice: 45, image: images.product59, parentChildCategoryId: "2-1-5" },
  { id: "P2-1-5-4", name: "Crunchy Crackers", weight: "180 g", price: 32, oldPrice: 40, image: images.product47, parentChildCategoryId: "2-1-5" },
  { id: "P2-1-5-5", name: "Baked Salt Snacks", weight: "150 g", price: 25, oldPrice: 30, image: images.product44, parentChildCategoryId: "2-1-5" },

  // Category: Aerated Drinks (2-2-1)
  { id: "P2-2-1-1", name: "Coca-Cola", weight: "750 ml", price: 40, oldPrice: 45, image: images.product25, parentChildCategoryId: "2-2-1" },
  { id: "P2-2-1-2", name: "Pepsi", weight: "750 ml", price: 38, oldPrice: 45, image: images.product34, parentChildCategoryId: "2-2-1" },
  { id: "P2-2-1-3", name: "Sprite", weight: "750 ml", price: 40, oldPrice: 48, image: images.product22, parentChildCategoryId: "2-2-1" },
  { id: "P2-2-1-4", name: "Thums Up", weight: "750 ml", price: 42, oldPrice: 50, image: images.product20, parentChildCategoryId: "2-2-1" },
  { id: "P2-2-1-5", name: "7UP", weight: "750 ml", price: 38, oldPrice: 45, image: images.product23, parentChildCategoryId: "2-2-1" },

  // Category: Fruit Juices (2-2-2)
  { id: "P2-2-2-1", name: "Real Mango Juice", weight: "1 L", price: 105, oldPrice: 120, image: images.product24, parentChildCategoryId: "2-2-2" },
  { id: "P2-2-2-2", name: "Tropicana Orange", weight: "1 L", price: 110, oldPrice: 125, image: images.product23, parentChildCategoryId: "2-2-2" },
  { id: "P2-2-2-3", name: "B Natural Apple", weight: "1 L", price: 100, oldPrice: 115, image: images.product34, parentChildCategoryId: "2-2-2" },
  { id: "P2-2-2-4", name: "Paper Boat Juice", weight: "1 L", price: 95, oldPrice: 110, image: images.product63, parentChildCategoryId: "2-2-2" },
  { id: "P2-2-2-5", name: "Mixed Fruit Juice", weight: "1 L", price: 90, oldPrice: 105, image: images.product65, parentChildCategoryId: "2-2-2" },

  // Category: Energy Drinks (2-2-3)
  { id: "P2-2-3-1", name: "Red Bull", weight: "250 ml", price: 110, oldPrice: 130, image: images.product61, parentChildCategoryId: "2-2-3" },
  { id: "P2-2-3-2", name: "Sting Energy", weight: "250 ml", price: 20, oldPrice: 25, image: images.product63, parentChildCategoryId: "2-2-3" },
  { id: "P2-2-3-3", name: "Monster Energy", weight: "350 ml", price: 130, oldPrice: 150, image: images.product20, parentChildCategoryId: "2-2-3" },
  { id: "P2-2-3-4", name: "Tzinga Energy", weight: "250 ml", price: 18, oldPrice: 25, image: images.product23, parentChildCategoryId: "2-2-3" },
  { id: "P2-2-3-5", name: "Blue Charge", weight: "250 ml", price: 15, oldPrice: 20, image: images.product22, parentChildCategoryId: "2-2-3" },

  // Category: Packaged Water (2-2-4)
  { id: "P2-2-4-1", name: "Bisleri Water", weight: "1 L", price: 20, oldPrice: 25, image: images.product64, parentChildCategoryId: "2-2-4" },
  { id: "P2-2-4-2", name: "Aquafina", weight: "1 L", price: 20, oldPrice: 25, image: images.product61, parentChildCategoryId: "2-2-4" },
  { id: "P2-2-4-3", name: "Kinley", weight: "1 L", price: 20, oldPrice: 25, image: images.product62, parentChildCategoryId: "2-2-4" },
  { id: "P2-2-4-4", name: "Himalayan Water", weight: "1 L", price: 60, oldPrice: 70, image: images.product63, parentChildCategoryId: "2-2-4" },
  { id: "P2-2-4-5", name: "Local Mineral Water", weight: "1 L", price: 15, oldPrice: 20, image: images.product66, parentChildCategoryId: "2-2-4" },

  // Category: Milk Drinks & Shakes (2-2-5)
  { id: "P2-2-5-1", name: "Amul Kool", weight: "200 ml", price: 25, oldPrice: 30, image: images.product65, parentChildCategoryId: "2-2-5" },
  { id: "P2-2-5-2", name: "Appy Fizz", weight: "250 ml", price: 20, oldPrice: 25, image: images.product22, parentChildCategoryId: "2-2-5" },
  { id: "P2-2-5-3", name: "Boost Shake", weight: "200 ml", price: 30, oldPrice: 35, image: images.product62, parentChildCategoryId: "2-2-5" },
  { id: "P2-2-5-4", name: "Horlicks Milkshake", weight: "200 ml", price: 28, oldPrice: 35, image: images.product65, parentChildCategoryId: "2-2-5" },
  { id: "P2-2-5-5", name: "Chocolate Milk Drink", weight: "200 ml", price: 22, oldPrice: 28, image: images.product52, parentChildCategoryId: "2-2-5" },

  // Category: Chips (2-3-1)
  { id: "P2-3-1-1", name: "Lays Classic Salted", weight: "52 g", price: 20, oldPrice: 25, image: images.product60, parentChildCategoryId: "2-3-1" },
  { id: "P2-3-1-2", name: "Bingo Mad Angles", weight: "70 g", price: 25, oldPrice: 30, image: images.product56, parentChildCategoryId: "2-3-1" },
  { id: "P2-3-1-3", name: "Kurkure Masala Munch", weight: "60 g", price: 20, oldPrice: 25, image: images.product59, parentChildCategoryId: "2-3-1" },
  { id: "P2-3-1-4", name: "Uncle Chips", weight: "60 g", price: 20, oldPrice: 25, image: images.product58, parentChildCategoryId: "2-3-1" },
  { id: "P2-3-1-5", name: "Classic Potato Chips", weight: "50 g", price: 18, oldPrice: 25, image: images.product64, parentChildCategoryId: "2-3-1" },

  // Category: Mixtures (2-3-2)
  { id: "P2-3-2-1", name: "Haldiram's Mixture", weight: "200 g", price: 45, oldPrice: 55, image: images.product49, parentChildCategoryId: "2-3-2" },
  { id: "P2-3-2-2", name: "Navratan Mix", weight: "200 g", price: 40, oldPrice: 50, image: images.product48, parentChildCategoryId: "2-3-2" },
  { id: "P2-3-2-3", name: "South Mixture", weight: "180 g", price: 38, oldPrice: 45, image: images.product57, parentChildCategoryId: "2-3-2" },
  { id: "P2-3-2-4", name: "Spicy Namkeen Mix", weight: "200 g", price: 42, oldPrice: 50, image: images.product22, parentChildCategoryId: "2-3-2" },
  { id: "P2-3-2-5", name: "Punjabi Tadka Mix", weight: "180 g", price: 35, oldPrice: 40, image: images.product51, parentChildCategoryId: "2-3-2" },

  // Category: Bhujia & Sev (2-3-3)
  { id: "P2-3-3-1", name: "Aloo Bhujia", weight: "150 g", price: 35, oldPrice: 45, image: images.product54, parentChildCategoryId: "2-3-3" },
  { id: "P2-3-3-2", name: "Bikaneri Bhujia", weight: "150 g", price: 38, oldPrice: 48, image: images.product56, parentChildCategoryId: "2-3-3" },
  { id: "P2-3-3-3", name: "Nylon Sev", weight: "180 g", price: 40, oldPrice: 50, image: images.product33, parentChildCategoryId: "2-3-3" },
  { id: "P2-3-3-4", name: "Plain Sev", weight: "160 g", price: 32, oldPrice: 40, image: images.product47, parentChildCategoryId: "2-3-3" },
  { id: "P2-3-3-5", name: "Masala Sev", weight: "180 g", price: 38, oldPrice: 45, image: images.product44, parentChildCategoryId: "2-3-3" },

  // Category: Popcorn (2-3-4)
  { id: "P2-3-4-1", name: "Act II Butter Popcorn", weight: "35 g", price: 20, oldPrice: 25, image: images.product50, parentChildCategoryId: "2-3-4" },
  { id: "P2-3-4-2", name: "Act II Cheese Popcorn", weight: "35 g", price: 22, oldPrice: 28, image: images.product63, parentChildCategoryId: "2-3-4" },
  { id: "P2-3-4-3", name: "Classic Salted Popcorn", weight: "40 g", price: 18, oldPrice: 25, image: images.product54, parentChildCategoryId: "2-3-4" },
  { id: "P2-3-4-4", name: "Sweet Caramel Popcorn", weight: "40 g", price: 25, oldPrice: 35, image: images.product43, parentChildCategoryId: "2-3-4" },
  { id: "P2-3-4-5", name: "Masala Popcorn", weight: "35 g", price: 20, oldPrice: 28, image: images.product14, parentChildCategoryId: "2-3-4" },

  // Category: Baked Snacks (2-3-5)
  { id: "P2-3-5-1", name: "Baked Veg Sticks", weight: "120 g", price: 40, oldPrice: 50, image: images.product43, parentChildCategoryId: "2-3-5" },
  { id: "P2-3-5-2", name: "Healthy Baked Chips", weight: "100 g", price: 38, oldPrice: 45, image: images.product64, parentChildCategoryId: "2-3-5" },
  { id: "P2-3-5-3", name: "Oats Snacks", weight: "90 g", price: 35, oldPrice: 45, image: images.product42, parentChildCategoryId: "2-3-5" },
  { id: "P2-3-5-4", name: "Multigrain Snacks", weight: "100 g", price: 42, oldPrice: 50, image: images.product43, parentChildCategoryId: "2-3-5" },
  { id: "P2-3-5-5", name: "Baked Masala Wheels", weight: "120 g", price: 40, oldPrice: 48, image: images.product23, parentChildCategoryId: "2-3-5" },

  // Category: Instant Noodles (2-4-1)
  { id: "P2-4-1-1", name: "Maggi Masala", weight: "70 g", price: 14, oldPrice: 20, image: images.product56, parentChildCategoryId: "2-4-1" },
  { id: "P2-4-1-2", name: "Yippee Noodles", weight: "70 g", price: 15, oldPrice: 20, image: images.product49, parentChildCategoryId: "2-4-1" },
  { id: "P2-4-1-3", name: "Chings Noodles", weight: "70 g", price: 15, oldPrice: 20, image: images.product26, parentChildCategoryId: "2-4-1" },
  { id: "P2-4-1-4", name: "Top Ramen", weight: "70 g", price: 15, oldPrice: 20, image: images.product47, parentChildCategoryId: "2-4-1" },
  { id: "P2-4-1-5", name: "Soupy Noodles", weight: "60 g", price: 12, oldPrice: 15, image: images.product63, parentChildCategoryId: "2-4-1" },

  // Category: Instant Soups (2-4-2)
  { id: "P2-4-2-1", name: "Knorr Tomato Soup", weight: "50 g", price: 10, oldPrice: 15, image: images.product57, parentChildCategoryId: "2-4-2" },
  { id: "P2-4-2-2", name: "Knorr Sweet Corn Soup", weight: "50 g", price: 12, oldPrice: 18, image: images.product55, parentChildCategoryId: "2-4-2" },
  { id: "P2-4-2-3", name: "Veg Soup Premix", weight: "50 g", price: 10, oldPrice: 15, image: images.product47, parentChildCategoryId: "2-4-2" },
  { id: "P2-4-2-4", name: "Mushroom Soup", weight: "50 g", price: 15, oldPrice: 20, image: images.product54, parentChildCategoryId: "2-4-2" },
  { id: "P2-4-2-5", name: "Instant Hot & Sour Soup", weight: "50 g", price: 12, oldPrice: 18, image: images.product35, parentChildCategoryId: "2-4-2" },

  // Category: Ready-to-Eat Meals (2-4-3)
  { id: "P2-4-3-1", name: "MTR Poha", weight: "230 g", price: 55, oldPrice: 70, image: images.product41, parentChildCategoryId: "2-4-3" },
  { id: "P2-4-3-2", name: "MTR Upma", weight: "200 g", price: 50, oldPrice: 65, image: images.product24, parentChildCategoryId: "2-4-3" },
  { id: "P2-4-3-3", name: "Haldiram's Rajma", weight: "300 g", price: 85, oldPrice: 100, image: images.product63, parentChildCategoryId: "2-4-3" },
  { id: "P2-4-3-4", name: "Ready Dal Tadka", weight: "300 g", price: 80, oldPrice: 95, image: images.product37, parentChildCategoryId: "2-4-3" },
  { id: "P2-4-3-5", name: "Ready Pav Bhaji", weight: "300 g", price: 90, oldPrice: 110, image: images.product17, parentChildCategoryId: "2-4-3" },

  // Category: Instant Breakfast (2-4-4)
  { id: "P2-4-4-1", name: "Kellogg's Oats", weight: "500 g", price: 80, oldPrice: 95, image: images.product12, parentChildCategoryId: "2-4-4" },
  { id: "P2-4-4-2", name: "Kellogg's Cornflakes", weight: "475 g", price: 140, oldPrice: 160, image: images.product55, parentChildCategoryId: "2-4-4" },
  { id: "P2-4-4-3", name: "Muesli Mix", weight: "400 g", price: 180, oldPrice: 200, image: images.product50, parentChildCategoryId: "2-4-4" },
  { id: "P2-4-4-4", name: "Poha Instant Mix", weight: "200 g", price: 40, oldPrice: 50, image: images.product61, parentChildCategoryId: "2-4-4" },
  { id: "P2-4-4-5", name: "Upma Instant Mix", weight: "200 g", price: 45, oldPrice: 55, image: images.product60, parentChildCategoryId: "2-4-4" },

  // Category: Instant Pasta (2-4-5)
  { id: "P2-4-5-1", name: "Maggi Pazzta", weight: "65 g", price: 25, oldPrice: 30, image: images.product20, parentChildCategoryId: "2-4-5" },
  { id: "P2-4-5-2", name: "Yippee Pasta Treat", weight: "65 g", price: 22, oldPrice: 30, image: images.product40, parentChildCategoryId: "2-4-5" },
  { id: "P2-4-5-3", name: "Cheese Pasta", weight: "70 g", price: 28, oldPrice: 35, image: images.product44, parentChildCategoryId: "2-4-5" },
  { id: "P2-4-5-4", name: "Tomato Pasta", weight: "70 g", price: 26, oldPrice: 35, image: images.product30, parentChildCategoryId: "2-4-5" },
  { id: "P2-4-5-5", name: "Masala Pasta", weight: "70 g", price: 25, oldPrice: 32, image: images.product52, parentChildCategoryId: "2-4-5" },

  // Category: Milk Chocolates (2-5-1)
  { id: "P2-5-1-1", name: "Dairy Milk", weight: "24 g", price: 20, oldPrice: 25, image: images.product52, parentChildCategoryId: "2-5-1" },
  { id: "P2-5-1-2", name: "Milky Bar", weight: "25 g", price: 20, oldPrice: 25, image: images.product58, parentChildCategoryId: "2-5-1" },
  { id: "P2-5-1-3", name: "Perk", weight: "20 g", price: 10, oldPrice: 15, image: images.product51, parentChildCategoryId: "2-5-1" },
  { id: "P2-5-1-4", name: "5 Star", weight: "22 g", price: 15, oldPrice: 20, image: images.product43, parentChildCategoryId: "2-5-1" },
  { id: "P2-5-1-5", name: "Crunch Bar", weight: "25 g", price: 20, oldPrice: 25, image: images.product42, parentChildCategoryId: "2-5-1" },

  // Category: Dark Chocolates (2-5-2)
  { id: "P2-5-2-1", name: "Bournville", weight: "80 g", price: 90, oldPrice: 110, image: images.product42, parentChildCategoryId: "2-5-2" },
  { id: "P2-5-2-2", name: "Lindt 70% Cocoa", weight: "100 g", price: 450, oldPrice: 500, image: images.product31, parentChildCategoryId: "2-5-2" },
  { id: "P2-5-2-3", name: "Dark Fantasy Bar", weight: "50 g", price: 50, oldPrice: 60, image: images.product56, parentChildCategoryId: "2-5-2" },
  { id: "P2-5-2-4", name: "Dark Rich Bar", weight: "70 g", price: 70, oldPrice: 80, image: images.product52, parentChildCategoryId: "2-5-2" },
  { id: "P2-5-2-5", name: "Premium Dark Bar", weight: "60 g", price: 60, oldPrice: 75, image: images.product44, parentChildCategoryId: "2-5-2" },

  // Category: Candies (2-5-3)
  { id: "P2-5-3-1", name: "Pulse Candy", weight: "100 g", price: 50, oldPrice: 60, image: images.product24, parentChildCategoryId: "2-5-3" },
  { id: "P2-5-3-2", name: "Kaccha Mango Bite", weight: "100 g", price: 40, oldPrice: 50, image: images.product64, parentChildCategoryId: "2-5-3" },
  { id: "P2-5-3-3", name: "Orange Candy", weight: "120 g", price: 45, oldPrice: 55, image: images.product33, parentChildCategoryId: "2-5-3" },
  { id: "P2-5-3-4", name: "Mint Candy", weight: "100 g", price: 30, oldPrice: 40, image: images.product52, parentChildCategoryId: "2-5-3" },
  { id: "P2-5-3-5", name: "Mix Fruit Candy", weight: "100 g", price: 35, oldPrice: 45, image: images.product43, parentChildCategoryId: "2-5-3" },

  // Category: Indian Sweets (Packaged) (2-5-4)
  { id: "P2-5-4-1", name: "Haldiram's Rasgulla", weight: "1 kg", price: 180, oldPrice: 200, image: images.product33, parentChildCategoryId: "2-5-4" },
  { id: "P2-5-4-2", name: "Haldiram's Gulab Jamun", weight: "1 kg", price: 170, oldPrice: 200, image: images.product61, parentChildCategoryId: "2-5-4" },
  { id: "P2-5-4-3", name: "Soan Papdi", weight: "250 g", price: 80, oldPrice: 100, image: images.product20, parentChildCategoryId: "2-5-4" },
  { id: "P2-5-4-4", name: "Dry Fruit Barfi", weight: "300 g", price: 150, oldPrice: 180, image: images.product42, parentChildCategoryId: "2-5-4" },
  { id: "P2-5-4-5", name: "Mysore Pak", weight: "400 g", price: 180, oldPrice: 200, image: images.product50, parentChildCategoryId: "2-5-4" },

  // Category: Health Bars (2-5-5)
  { id: "P2-5-5-1", name: "Yoga Bar", weight: "50 g", price: 40, oldPrice: 50, image: images.product44, parentChildCategoryId: "2-5-5" },
  { id: "P2-5-5-2", name: "Protein Bar", weight: "60 g", price: 70, oldPrice: 90, image: images.product53, parentChildCategoryId: "2-5-5" },
  { id: "P2-5-5-3", name: "Granola Bar", weight: "50 g", price: 50, oldPrice: 65, image: images.product42, parentChildCategoryId: "2-5-5" },
  { id: "P2-5-5-4", name: "Oats Health Bar", weight: "45 g", price: 35, oldPrice: 45, image: images.product31, parentChildCategoryId: "2-5-5" },
  { id: "P2-5-5-5", name: "Energy Bar", weight: "50 g", price: 40, oldPrice: 55, image: images.product62, parentChildCategoryId: "2-5-5" },
  // Toor Dal (3-1-1)
  { id: "P3-1-1-1", name: "Premium Toor Dal", weight: "1 kg", price: 120, oldPrice: 150, image: images.product29, parentChildCategoryId: "3-1-1" },
  { id: "P3-1-1-2", name: "Good Life Toor Dal", weight: "1 kg", price: 110, oldPrice: 140, image: images.product42, parentChildCategoryId: "3-1-1" },
  { id: "P3-1-1-3", name: "Organic Toor Dal", weight: "1 kg", price: 160, oldPrice: 180, image: images.product44, parentChildCategoryId: "3-1-1" },
  { id: "P3-1-1-4", name: "Unpolished Toor Dal", weight: "1 kg", price: 130, oldPrice: 155, image: images.product42, parentChildCategoryId: "3-1-1" },
  { id: "P3-1-1-5", name: "Daily Toor Dal", weight: "1 kg", price: 100, oldPrice: 130, image: images.product53, parentChildCategoryId: "3-1-1" },

  // Moong Dal (3-1-2)
  { id: "P3-1-2-1", name: "Moong Dal Yellow", weight: "1 kg", price: 95, oldPrice: 115, image: images.product29, parentChildCategoryId: "3-1-2" },
  { id: "P3-1-2-2", name: "Organic Moong Dal", weight: "1 kg", price: 140, oldPrice: 160, image: images.product53, parentChildCategoryId: "3-1-2" },
  { id: "P3-1-2-3", name: "Unpolished Moong Dal", weight: "1 kg", price: 105, oldPrice: 130, image: images.product12, parentChildCategoryId: "3-1-2" },
  { id: "P3-1-2-4", name: "Moong Dal Split", weight: "1 kg", price: 120, oldPrice: 140, image: images.product52, parentChildCategoryId: "3-1-2" },
  { id: "P3-1-2-5", name: "Moong Dal Whole", weight: "1 kg", price: 110, oldPrice: 135, image: images.product35, parentChildCategoryId: "3-1-2" },

  // Chana Dal (3-1-3)
  { id: "P3-1-3-1", name: "Premium Chana Dal", weight: "1 kg", price: 90, oldPrice: 110, image: images.product45, parentChildCategoryId: "3-1-3" },
  { id: "P3-1-3-2", name: "Organic Chana Dal", weight: "1 kg", price: 120, oldPrice: 150, image: images.product33, parentChildCategoryId: "3-1-3" },
  { id: "P3-1-3-3", name: "Daily Chana Dal", weight: "1 kg", price: 85, oldPrice: 100, image: images.product29, parentChildCategoryId: "3-1-3" },
  { id: "P3-1-3-4", name: "Unpolished Chana Dal", weight: "1 kg", price: 95, oldPrice: 115, image: images.product52, parentChildCategoryId: "3-1-3" },
  { id: "P3-1-3-5", name: "Chana Dal Cleaned", weight: "1 kg", price: 105, oldPrice: 130, image: images.product26, parentChildCategoryId: "3-1-3" },

  // Masoor Dal (3-1-4)
  { id: "P3-1-4-1", name: "Red Masoor Dal", weight: "1 kg", price: 95, oldPrice: 120, image: images.product63, parentChildCategoryId: "3-1-4" },
  { id: "P3-1-4-2", name: "Whole Masoor Dal", weight: "1 kg", price: 105, oldPrice: 130, image: images.product55, parentChildCategoryId: "3-1-4" },
  { id: "P3-1-4-3", name: "Organic Masoor Dal", weight: "1 kg", price: 130, oldPrice: 150, image: images.product42, parentChildCategoryId: "3-1-4" },
  { id: "P3-1-4-4", name: "Unpolished Masoor Dal", weight: "1 kg", price: 115, oldPrice: 140, image: images.product29, parentChildCategoryId: "3-1-4" },
  { id: "P3-1-4-5", name: "Masoor Dal Split", weight: "1 kg", price: 100, oldPrice: 125, image: images.product42, parentChildCategoryId: "3-1-4" },

  // Rajma (3-1-5)
  { id: "P3-1-5-1", name: "Rajma Chitra", weight: "1 kg", price: 140, oldPrice: 170, image: images.product34, parentChildCategoryId: "3-1-5" },
  { id: "P3-1-5-2", name: "Rajma Red", weight: "1 kg", price: 130, oldPrice: 160, image: images.product37, parentChildCategoryId: "3-1-5" },
  { id: "P3-1-5-3", name: "Organic Rajma", weight: "1 kg", price: 160, oldPrice: 190, image: images.product40, parentChildCategoryId: "3-1-5" },
  { id: "P3-1-5-4", name: "Rajma Kashmiri", weight: "1 kg", price: 180, oldPrice: 210, image: images.product17, parentChildCategoryId: "3-1-5" },
  { id: "P3-1-5-5", name: "Rajma Small", weight: "1 kg", price: 120, oldPrice: 150, image: images.product33, parentChildCategoryId: "3-1-5" },

  // Sunflower Oil (3-2-1)
  { id: "P3-2-1-1", name: "Fortune Sunflower Oil", weight: "1 L", price: 140, oldPrice: 160, image: images.product27, parentChildCategoryId: "3-2-1" },
  { id: "P3-2-1-2", name: "Saffola Sunflower Oil", weight: "1 L", price: 155, oldPrice: 180, image: images.product33, parentChildCategoryId: "3-2-1" },
  { id: "P3-2-1-3", name: "Gemini Sunflower Oil", weight: "1 L", price: 145, oldPrice: 170, image: images.product49, parentChildCategoryId: "3-2-1" },
  { id: "P3-2-1-4", name: "Dhara Sunflower Oil", weight: "1 L", price: 150, oldPrice: 170, image: images.product44, parentChildCategoryId: "3-2-1" },
  { id: "P3-2-1-5", name: "Organic Sunflower Oil", weight: "1 L", price: 180, oldPrice: 200, image: images.product39, parentChildCategoryId: "3-2-1" },

  // Mustard Oil (3-2-2)
  { id: "P3-2-2-1", name: "Fortune Mustard Oil", weight: "1 L", price: 170, oldPrice: 200, image: images.product22, parentChildCategoryId: "3-2-2" },
  { id: "P3-2-2-2", name: "Organic Mustard Oil", weight: "1 L", price: 190, oldPrice: 220, image: images.product61, parentChildCategoryId: "3-2-2" },
  { id: "P3-2-2-3", name: "Engine Mustard Oil", weight: "1 L", price: 160, oldPrice: 180, image: images.product51, parentChildCategoryId: "3-2-2" },
  { id: "P3-2-2-4", name: "Kachi Ghani Mustard Oil", weight: "1 L", price: 180, oldPrice: 210, image: images.product52, parentChildCategoryId: "3-2-2" },
  { id: "P3-2-2-5", name: "Pure Mustard Oil", weight: "1 L", price: 165, oldPrice: 190, image: images.product52, parentChildCategoryId: "3-2-2" },

  // Groundnut Oil (3-2-3)
  { id: "P3-2-3-1", name: "Groundnut Oil", weight: "1 L", price: 180, oldPrice: 210, image: images.product37, parentChildCategoryId: "3-2-3" },
  { id: "P3-2-3-2", name: "Organic Groundnut Oil", weight: "1 L", price: 200, oldPrice: 230, image: images.product42, parentChildCategoryId: "3-2-3" },
  { id: "P3-2-3-3", name: "Cold Pressed Groundnut Oil", weight: "1 L", price: 220, oldPrice: 260, image: images.product60, parentChildCategoryId: "3-2-3" },
  { id: "P3-2-3-4", name: "Unrefined Groundnut Oil", weight: "1 L", price: 190, oldPrice: 230, image: images.product53, parentChildCategoryId: "3-2-3" },
  { id: "P3-2-3-5", name: "Premium Groundnut Oil", weight: "1 L", price: 210, oldPrice: 240, image: images.product30, parentChildCategoryId: "3-2-3" },

  // Ghee (3-2-4)
  { id: "P3-2-4-1", name: "Amul Ghee", weight: "1 L", price: 520, oldPrice: 580, image: images.product52, parentChildCategoryId: "3-2-4" },
  { id: "P3-2-4-2", name: "Aashirvaad Ghee", weight: "1 L", price: 500, oldPrice: 550, image: images.product41, parentChildCategoryId: "3-2-4" },
  { id: "P3-2-4-3", name: "Organic Ghee", weight: "1 L", price: 600, oldPrice: 650, image: images.product52, parentChildCategoryId: "3-2-4" },
  { id: "P3-2-4-4", name: "Fresh Cow Ghee", weight: "1 L", price: 550, oldPrice: 600, image: images.product41, parentChildCategoryId: "3-2-4" },
  { id: "P3-2-4-5", name: "Premium Desi Ghee", weight: "1 L", price: 580, oldPrice: 630, image: images.product62, parentChildCategoryId: "3-2-4" },

  // Olive Oil (3-2-5)
  { id: "P3-2-5-1", name: "Extra Virgin Olive Oil", weight: "1 L", price: 600, oldPrice: 700, image: images.product27, parentChildCategoryId: "3-2-5" },
  { id: "P3-2-5-2", name: "Pomace Olive Oil", weight: "1 L", price: 450, oldPrice: 550, image: images.product63, parentChildCategoryId: "3-2-5" },
  { id: "P3-2-5-3", name: "Organic Olive Oil", weight: "1 L", price: 650, oldPrice: 750, image: images.product32, parentChildCategoryId: "3-2-5" },
  { id: "P3-2-5-4", name: "Imported Olive Oil", weight: "1 L", price: 700, oldPrice: 780, image: images.product33, parentChildCategoryId: "3-2-5" },
  { id: "P3-2-5-5", name: "Light Olive Oil", weight: "1 L", price: 500, oldPrice: 600, image: images.product65, parentChildCategoryId: "3-2-5" },

  // Atta (3-3-1)
  { id: "P3-3-1-1", name: "Aashirvaad Wheat Atta", weight: "5 kg", price: 250, oldPrice: 300, image: images.product26, parentChildCategoryId: "3-3-1" },
  { id: "P3-3-1-2", name: "Pillsbury Atta", weight: "5 kg", price: 260, oldPrice: 310, image: images.product52, parentChildCategoryId: "3-3-1" },
  { id: "P3-3-1-3", name: "Fortune Atta", weight: "5 kg", price: 240, oldPrice: 280, image: images.product58, parentChildCategoryId: "3-3-1" },
  { id: "P3-3-1-4", name: "Organic Wheat Atta", weight: "5 kg", price: 300, oldPrice: 350, image: images.product42, parentChildCategoryId: "3-3-1" },
  { id: "P3-3-1-5", name: "Multigrain Atta", weight: "5 kg", price: 320, oldPrice: 360, image: images.product47, parentChildCategoryId: "3-3-1" },

  // Maida (3-3-2)
  { id: "P3-3-2-1", name: "Refined Maida", weight: "1 kg", price: 45, oldPrice: 55, image: images.product19, parentChildCategoryId: "3-3-2" },
  { id: "P3-3-2-2", name: "Premium Maida", weight: "1 kg", price: 55, oldPrice: 70, image: images.product44, parentChildCategoryId: "3-3-2" },
  { id: "P3-3-2-3", name: "Baking Maida", weight: "1 kg", price: 60, oldPrice: 75, image: images.product61, parentChildCategoryId: "3-3-2" },
  { id: "P3-3-2-4", name: "Organic Maida", weight: "1 kg", price: 70, oldPrice: 90, image: images.product42, parentChildCategoryId: "3-3-2" },
  { id: "P3-3-2-5", name: "Fine Maida", weight: "1 kg", price: 50, oldPrice: 65, image: images.product43, parentChildCategoryId: "3-3-2" },

  // Sooji (3-3-3)
  { id: "P3-3-3-1", name: "Regular Sooji", weight: "1 kg", price: 50, oldPrice: 65, image: images.product56, parentChildCategoryId: "3-3-3" },
  { id: "P3-3-3-2", name: "Bombay Rava", weight: "1 kg", price: 60, oldPrice: 70, image: images.product56, parentChildCategoryId: "3-3-3" },
  { id: "P3-3-3-3", name: "Fine Sooji", weight: "1 kg", price: 55, oldPrice: 65, image: images.product34, parentChildCategoryId: "3-3-3" },
  { id: "P3-3-3-4", name: "Organic Sooji", weight: "1 kg", price: 80, oldPrice: 90, image: images.product43, parentChildCategoryId: "3-3-3" },
  { id: "P3-3-3-5", name: "Coarse Sooji", weight: "1 kg", price: 65, oldPrice: 75, image: images.product33, parentChildCategoryId: "3-3-3" },

  // Besan (3-3-4)
  { id: "P3-3-4-1", name: "Gram Flour Besan", weight: "1 kg", price: 70, oldPrice: 85, image: images.product44, parentChildCategoryId: "3-3-4" },
  { id: "P3-3-4-2", name: "Premium Besan", weight: "1 kg", price: 90, oldPrice: 110, image: images.product23, parentChildCategoryId: "3-3-4" },
  { id: "P3-3-4-3", name: "Organic Besan", weight: "1 kg", price: 100, oldPrice: 120, image: images.product36, parentChildCategoryId: "3-3-4" },
  { id: "P3-3-4-4", name: "Fine Besan", weight: "1 kg", price: 75, oldPrice: 90, image: images.product55, parentChildCategoryId: "3-3-4" },
  { id: "P3-3-4-5", name: "Chickpea Besan", weight: "1 kg", price: 85, oldPrice: 100, image: images.product33, parentChildCategoryId: "3-3-4" },

  // Corn Flour (3-3-5)
  { id: "P3-3-5-1", name: "Corn Flour", weight: "500 g", price: 40, oldPrice: 50, image: images.product16, parentChildCategoryId: "3-3-5" },
  { id: "P3-3-5-2", name: "Baking Corn Flour", weight: "500 g", price: 55, oldPrice: 70, image: images.product17, parentChildCategoryId: "3-3-5" },
  { id: "P3-3-5-3", name: "Premium Corn Flour", weight: "500 g", price: 60, oldPrice: 75, image: images.product53, parentChildCategoryId: "3-3-5" },
  { id: "P3-3-5-4", name: "Organic Corn Flour", weight: "500 g", price: 70, oldPrice: 80, image: images.product34, parentChildCategoryId: "3-3-5" },
  { id: "P3-3-5-5", name: "Fine Corn Flour", weight: "500 g", price: 50, oldPrice: 65, image: images.product44, parentChildCategoryId: "3-3-5" },

  // Chilli Powder (3-4-1)
  { id: "P3-4-1-1", name: "Red Chilli Powder", weight: "500 g", price: 120, oldPrice: 150, image: images.product35, parentChildCategoryId: "3-4-1" },
  { id: "P3-4-1-2", name: "Kashmiri Chilli Powder", weight: "500 g", price: 180, oldPrice: 200, image: images.product47, parentChildCategoryId: "3-4-1" },
  { id: "P3-4-1-3", name: "Organic Chilli Powder", weight: "500 g", price: 200, oldPrice: 240, image: images.product58, parentChildCategoryId: "3-4-1" },
  { id: "P3-4-1-4", name: "Hot Chilli Powder", weight: "500 g", price: 150, oldPrice: 180, image: images.product48, parentChildCategoryId: "3-4-1" },
  { id: "P3-4-1-5", name: "Desi Chilli Powder", weight: "500 g", price: 140, oldPrice: 160, image: images.product33, parentChildCategoryId: "3-4-1" },

  // Turmeric Powder (3-4-2)
  { id: "P3-4-2-1", name: "Haldi Powder", weight: "500 g", price: 80, oldPrice: 95, image: images.product22, parentChildCategoryId: "3-4-2" },
  { id: "P3-4-2-2", name: "Organic Haldi", weight: "500 g", price: 120, oldPrice: 140, image: images.product63, parentChildCategoryId: "3-4-2" },
  { id: "P3-4-2-3", name: "Premium Turmeric", weight: "500 g", price: 100, oldPrice: 130, image: images.product55, parentChildCategoryId: "3-4-2" },
  { id: "P3-4-2-4", name: "Desi Haldi", weight: "500 g", price: 90, oldPrice: 110, image: images.product44, parentChildCategoryId: "3-4-2" },
  { id: "P3-4-2-5", name: "Ground Turmeric", weight: "500 g", price: 95, oldPrice: 115, image: images.product46, parentChildCategoryId: "3-4-2" },

  // Garam Masala (3-4-3)
  { id: "P3-4-3-1", name: "Garam Masala", weight: "200 g", price: 60, oldPrice: 75, image: images.product37, parentChildCategoryId: "3-4-3" },
  { id: "P3-4-3-2", name: "Kitchen King Masala", weight: "200 g", price: 70, oldPrice: 85, image: images.product47, parentChildCategoryId: "3-4-3" },
  { id: "P3-4-3-3", name: "Special Garam Masala", weight: "200 g", price: 90, oldPrice: 110, image: images.product48, parentChildCategoryId: "3-4-3" },
  { id: "P3-4-3-4", name: "Premium Garam Masala", weight: "200 g", price: 80, oldPrice: 100, image: images.product28, parentChildCategoryId: "3-4-3" },
  { id: "P3-4-3-5", name: "Organic Garam Masala", weight: "200 g", price: 120, oldPrice: 140, image: images.product53, parentChildCategoryId: "3-4-3" },

  // Coriander Powder (3-4-4)
  { id: "P3-4-4-1", name: "Dhaniya Powder", weight: "500 g", price: 70, oldPrice: 85, image: images.product14, parentChildCategoryId: "3-4-4" },
  { id: "P3-4-4-2", name: "Premium Dhaniya", weight: "500 g", price: 85, oldPrice: 100, image: images.product44, parentChildCategoryId: "3-4-4" },
  { id: "P3-4-4-3", name: "Organic Coriander", weight: "500 g", price: 120, oldPrice: 140, image: images.product15, parentChildCategoryId: "3-4-4" },
  { id: "P3-4-4-4", name: "Fine Dhaniya", weight: "500 g", price: 75, oldPrice: 90, image: images.product22, parentChildCategoryId: "3-4-4" },
  { id: "P3-4-4-5", name: "Pure Coriander Powder", weight: "500 g", price: 95, oldPrice: 115, image: images.product55, parentChildCategoryId: "3-4-4" },

  // Whole Spices (3-4-5)
  { id: "P3-4-5-1", name: "Cumin Seeds", weight: "200 g", price: 70, oldPrice: 90, image: images.product54, parentChildCategoryId: "3-4-5" },
  { id: "P3-4-5-2", name: "Cloves Whole", weight: "100 g", price: 120, oldPrice: 150, image: images.product45, parentChildCategoryId: "3-4-5" },
  { id: "P3-4-5-3", name: "Black Pepper Whole", weight: "200 g", price: 180, oldPrice: 210, image: images.product54, parentChildCategoryId: "3-4-5" },
  { id: "P3-4-5-4", name: "Cinnamon Sticks", weight: "100 g", price: 150, oldPrice: 180, image: images.product43, parentChildCategoryId: "3-4-5" },
  { id: "P3-4-5-5", name: "Cardamom", weight: "100 g", price: 350, oldPrice: 400, image: images.product23, parentChildCategoryId: "3-4-5" },

  // Basmati Rice (3-5-1)
  { id: "P3-5-1-1", name: "Premium Basmati Rice", weight: "1 kg", price: 110, oldPrice: 130, image: images.productmain4, parentChildCategoryId: "3-5-1" },
  { id: "P3-5-1-2", name: "Long Grain Basmati", weight: "1 kg", price: 120, oldPrice: 140, image: images.product49, parentChildCategoryId: "3-5-1" },
  { id: "P3-5-1-3", name: "Extra Long Basmati", weight: "1 kg", price: 150, oldPrice: 180, image: images.product47, parentChildCategoryId: "3-5-1" },
  { id: "P3-5-1-4", name: "Organic Basmati", weight: "1 kg", price: 170, oldPrice: 200, image: images.product55, parentChildCategoryId: "3-5-1" },
  { id: "P3-5-1-5", name: "Daily Basmati Rice", weight: "1 kg", price: 90, oldPrice: 110, image: images.product36, parentChildCategoryId: "3-5-1" },

  // Sona Masoori Rice (3-5-2)
  { id: "P3-5-2-1", name: "Sona Masoori Rice", weight: "1 kg", price: 55, oldPrice: 70, image: images.product33, parentChildCategoryId: "3-5-2" },
  { id: "P3-5-2-2", name: "Premium Sona Masoori", weight: "1 kg", price: 70, oldPrice: 85, image: images.product44, parentChildCategoryId: "3-5-2" },
  { id: "P3-5-2-3", name: "Polished Sona Masoori", weight: "1 kg", price: 60, oldPrice: 75, image: images.product65, parentChildCategoryId: "3-5-2" },
  { id: "P3-5-2-4", name: "Unpolished Sona Masoori", weight: "1 kg", price: 75, oldPrice: 90, image: images.product13, parentChildCategoryId: "3-5-2" },
  { id: "P3-5-2-5", name: "Daily Sona Masoori", weight: "1 kg", price: 50, oldPrice: 65, image: images.product56, parentChildCategoryId: "3-5-2" },

  // Poha (3-5-3)
  { id: "P3-5-3-1", name: "Thick Poha", weight: "1 kg", price: 60, oldPrice: 80, image: images.product34, parentChildCategoryId: "3-5-3" },
  { id: "P3-5-3-2", name: "Thin Poha", weight: "1 kg", price: 55, oldPrice: 70, image: images.product54, parentChildCategoryId: "3-5-3" },
  { id: "P3-5-3-3", name: "Premium Poha", weight: "1 kg", price: 70, oldPrice: 90, image: images.product36, parentChildCategoryId: "3-5-3" },
  { id: "P3-5-3-4", name: "Organic Poha", weight: "1 kg", price: 90, oldPrice: 110, image: images.product44, parentChildCategoryId: "3-5-3" },
  { id: "P3-5-3-5", name: "Nylon Poha", weight: "1 kg", price: 65, oldPrice: 80, image: images.product17, parentChildCategoryId: "3-5-3" },

  // Millets (3-5-4)
  { id: "P3-5-4-1", name: "Little Millet", weight: "500 g", price: 60, oldPrice: 75, image: images.product27, parentChildCategoryId: "3-5-4" },
  { id: "P3-5-4-2", name: "Foxtail Millet", weight: "500 g", price: 70, oldPrice: 85, image: images.product47, parentChildCategoryId: "3-5-4" },
  { id: "P3-5-4-3", name: "Barnyard Millet", weight: "500 g", price: 80, oldPrice: 95, image: images.product22, parentChildCategoryId: "3-5-4" },
  { id: "P3-5-4-4", name: "Kodo Millet", weight: "500 g", price: 85, oldPrice: 100, image: images.product66, parentChildCategoryId: "3-5-4" },
  { id: "P3-5-4-5", name: "Organic Millet Mix", weight: "500 g", price: 100, oldPrice: 120, image: images.product55, parentChildCategoryId: "3-5-4" },

  // Flattened Rice (3-5-5)
  { id: "P3-5-5-1", name: "White Flattened Rice", weight: "1 kg", price: 50, oldPrice: 65, image: images.product34, parentChildCategoryId: "3-5-5" },
  { id: "P3-5-5-2", name: "Brown Flattened Rice", weight: "1 kg", price: 70, oldPrice: 85, image: images.product22, parentChildCategoryId: "3-5-5" },
  { id: "P3-5-5-3", name: "Organic Flattened Rice", weight: "1 kg", price: 90, oldPrice: 110, image: images.product47, parentChildCategoryId: "3-5-5" },
  { id: "P3-5-5-4", name: "Premium Flattened Rice", weight: "1 kg", price: 60, oldPrice: 80, image: images.product34, parentChildCategoryId: "3-5-5" },
  { id: "P3-5-5-5", name: "Thin Flattened Rice", weight: "1 kg", price: 55, oldPrice: 70, image: images.product65, parentChildCategoryId: "3-5-5" },
  // Fresh Milk (4-1-1)
  { id: "P4-1-1-1", name: "Amul Fresh Milk", weight: "1 L", price: 62, oldPrice: 70, image: images.product23, parentChildCategoryId: "4-1-1" },
  { id: "P4-1-1-2", name: "Mother Dairy Milk", weight: "1 L", price: 60, oldPrice: 68, image: images.product57, parentChildCategoryId: "4-1-1" },
  { id: "P4-1-1-3", name: "Nandini Milk", weight: "1 L", price: 58, oldPrice: 65, image: images.product53, parentChildCategoryId: "4-1-1" },
  { id: "P4-1-1-4", name: "Heritage Milk", weight: "1 L", price: 59, oldPrice: 66, image: images.product64, parentChildCategoryId: "4-1-1" },
  { id: "P4-1-1-5", name: "Aavin Milk", weight: "1 L", price: 57, oldPrice: 63, image: images.product33, parentChildCategoryId: "4-1-1" },

  // Curd (4-1-2)
  { id: "P4-1-2-1", name: "Amul Masti Curd", weight: "500 g", price: 30, oldPrice: 38, image: images.product53, parentChildCategoryId: "4-1-2" },
  { id: "P4-1-2-2", name: "Mother Dairy Curd", weight: "500 g", price: 32, oldPrice: 40, image: images.product13, parentChildCategoryId: "4-1-2" },
  { id: "P4-1-2-3", name: "Nandini Curd", weight: "500 g", price: 28, oldPrice: 35, image: images.product63, parentChildCategoryId: "4-1-2" },
  { id: "P4-1-2-4", name: "Aashirvaad Curd", weight: "500 g", price: 34, oldPrice: 42, image: images.product35, parentChildCategoryId: "4-1-2" },
  { id: "P4-1-2-5", name: "Heritage Curd", weight: "500 g", price: 29, oldPrice: 36, image: images.product12, parentChildCategoryId: "4-1-2" },

  // Flavoured Milk (4-1-3)
  { id: "P4-1-3-1", name: "Amul Kool", weight: "200 ml", price: 25, oldPrice: 30, image: images.product65, parentChildCategoryId: "4-1-3" },
  { id: "P4-1-3-2", name: "Mother Dairy Flavoured Milk", weight: "200 ml", price: 22, oldPrice: 28, image: images.product30, parentChildCategoryId: "4-1-3" },
  { id: "P4-1-3-3", name: "Heritage Flavoured Milk", weight: "200 ml", price: 20, oldPrice: 25, image: images.product39, parentChildCategoryId: "4-1-3" },
  { id: "P4-1-3-4", name: "Britannia Flavored Milk", weight: "200 ml", price: 23, oldPrice: 29, image: images.product49, parentChildCategoryId: "4-1-3" },
  { id: "P4-1-3-5", name: "Milky Mist", weight: "200 ml", price: 24, oldPrice: 30, image: images.product56, parentChildCategoryId: "4-1-3" },

  // Paneer (4-1-4)
  { id: "P4-1-4-1", name: "Amul Paneer", weight: "200 g", price: 80, oldPrice: 95, image: images.product33, parentChildCategoryId: "4-1-4" },
  { id: "P4-1-4-2", name: "Mother Dairy Paneer", weight: "200 g", price: 78, oldPrice: 92, image: images.product45, parentChildCategoryId: "4-1-4" },
  { id: "P4-1-4-3", name: "Milky Mist Paneer", weight: "200 g", price: 75, oldPrice: 90, image: images.product44, parentChildCategoryId: "4-1-4" },
  { id: "P4-1-4-4", name: "Hatsun Paneer", weight: "200 g", price: 77, oldPrice: 89, image: images.product23, parentChildCategoryId: "4-1-4" },
  { id: "P4-1-4-5", name: "Aashirvaad Paneer", weight: "200 g", price: 79, oldPrice: 94, image: images.product20, parentChildCategoryId: "4-1-4" },

  // Butter & Cheese (4-1-5)
  { id: "P4-1-5-1", name: "Amul Butter", weight: "100 g", price: 58, oldPrice: 65, image: images.product22, parentChildCategoryId: "4-1-5" },
  { id: "P4-1-5-2", name: "Britannia Cheese Slices", weight: "200 g", price: 120, oldPrice: 140, image: images.product29, parentChildCategoryId: "4-1-5" },
  { id: "P4-1-5-3", name: "Go Cheese", weight: "200 g", price: 110, oldPrice: 130, image: images.product47, parentChildCategoryId: "4-1-5" },
  { id: "P4-1-5-4", name: "Milky Mist Butter", weight: "100 g", price: 55, oldPrice: 63, image: images.product55, parentChildCategoryId: "4-1-5" },
  { id: "P4-1-5-5", name: "Mother Dairy Butter", weight: "100 g", price: 56, oldPrice: 64, image: images.product56, parentChildCategoryId: "4-1-5" },

  // White Bread (4-2-1)
  { id: "P4-2-1-1", name: "Britannia White Bread", weight: "400 g", price: 45, oldPrice: 50, image: images.product12, parentChildCategoryId: "4-2-1" },
  { id: "P4-2-1-2", name: "Modern White Bread", weight: "400 g", price: 40, oldPrice: 48, image: images.product49, parentChildCategoryId: "4-2-1" },
  { id: "P4-2-1-3", name: "Harvest Gold Bread", weight: "400 g", price: 42, oldPrice: 50, image: images.product44, parentChildCategoryId: "4-2-1" },
  { id: "P4-2-1-4", name: "Bonn White Bread", weight: "400 g", price: 43, oldPrice: 52, image: images.product53, parentChildCategoryId: "4-2-1" },
  { id: "P4-2-1-5", name: "Kwality Bread", weight: "400 g", price: 41, oldPrice: 49, image: images.product52, parentChildCategoryId: "4-2-1" },

  // Brown Bread (4-2-2)
  { id: "P4-2-2-1", name: "Britannia Brown Bread", weight: "400 g", price: 50, oldPrice: 55, image: images.product60, parentChildCategoryId: "4-2-2" },
  { id: "P4-2-2-2", name: "Modern Brown Bread", weight: "400 g", price: 48, oldPrice: 54, image: images.product56, parentChildCategoryId: "4-2-2" },
  { id: "P4-2-2-3", name: "Harvest Gold Brown", weight: "400 g", price: 49, oldPrice: 56, image: images.product57, parentChildCategoryId: "4-2-2" },
  { id: "P4-2-2-4", name: "Bonn Brown Bread", weight: "400 g", price: 47, oldPrice: 55, image: images.product59, parentChildCategoryId: "4-2-2" },
  { id: "P4-2-2-5", name: "Kwality Brown Bread", weight: "400 g", price: 46, oldPrice: 53, image: images.product61, parentChildCategoryId: "4-2-2" },

  // Cakes (4-2-3)
  { id: "P4-2-3-1", name: "Britannia Cake", weight: "150 g", price: 35, oldPrice: 40, image: images.product50, parentChildCategoryId: "4-2-3" },
  { id: "P4-2-3-2", name: "Elite Cake", weight: "150 g", price: 32, oldPrice: 38, image: images.product62, parentChildCategoryId: "4-2-3" },
  { id: "P4-2-3-3", name: "Bonn Cake", weight: "150 g", price: 33, oldPrice: 39, image: images.product34, parentChildCategoryId: "4-2-3" },
  { id: "P4-2-3-4", name: "Kwality Fresh Cake", weight: "150 g", price: 34, oldPrice: 41, image: images.product63, parentChildCategoryId: "4-2-3" },
  { id: "P4-2-3-5", name: "Modern Cake", weight: "150 g", price: 36, oldPrice: 42, image: images.product12, parentChildCategoryId: "4-2-3" },

  // Buns & Pav (4-2-4)
  { id: "P4-2-4-1", name: "Milk Bun", weight: "4 pcs", price: 30, oldPrice: 35, image: images.product45, parentChildCategoryId: "4-2-4" },
  { id: "P4-2-4-2", name: "Ladi Pav", weight: "6 pcs", price: 28, oldPrice: 32, image: images.product27, parentChildCategoryId: "4-2-4" },
  { id: "P4-2-4-3", name: "Masala Bun", weight: "4 pcs", price: 32, oldPrice: 38, image: images.product33, parentChildCategoryId: "4-2-4" },
  { id: "P4-2-4-4", name: "Soft Bun", weight: "4 pcs", price: 29, oldPrice: 34, image: images.product53, parentChildCategoryId: "4-2-4" },
  { id: "P4-2-4-5", name: "Burger Bun", weight: "4 pcs", price: 35, oldPrice: 40, image: images.product66, parentChildCategoryId: "4-2-4" },

  // Cookies (4-2-5)
  { id: "P4-2-5-1", name: "Britannia Cookies", weight: "200 g", price: 55, oldPrice: 65, image: images.product16, parentChildCategoryId: "4-2-5" },
  { id: "P4-2-5-2", name: "Sunfeast Cookies", weight: "200 g", price: 50, oldPrice: 60, image: images.product31, parentChildCategoryId: "4-2-5" },
  { id: "P4-2-5-3", name: "Unibic Cookies", weight: "200 g", price: 60, oldPrice: 70, image: images.product23, parentChildCategoryId: "4-2-5" },
  { id: "P4-2-5-4", name: "Modern Cookies", weight: "200 g", price: 52, oldPrice: 62, image: images.product20, parentChildCategoryId: "4-2-5" },
  { id: "P4-2-5-5", name: "Oreo Cookies", weight: "200 g", price: 65, oldPrice: 75, image: images.product12, parentChildCategoryId: "4-2-5" },

  // Butter (4-5-1)
  { id: "P4-5-1-1", name: "Amul Butter", weight: "500 g", price: 250, oldPrice: 290, image: images.product33, ifwishlist: true, parentChildCategoryId: "4-5-1" },
  { id: "P4-5-1-2", name: "Britannia Butter", weight: "500 g", price: 240, oldPrice: 280, image: images.product64, parentChildCategoryId: "4-5-1" },
  { id: "P4-5-1-3", name: "Milky Mist Butter", weight: "500 g", price: 230, oldPrice: 270, image: images.product27, parentChildCategoryId: "4-5-1" },
  { id: "P4-5-1-4", name: "Nandini Butter", weight: "500 g", price: 225, oldPrice: 265, image: images.product44, parentChildCategoryId: "4-5-1" },
  { id: "P4-5-1-5", name: "Mother Dairy Butter", weight: "500 g", price: 235, oldPrice: 275, image: images.product38, parentChildCategoryId: "4-5-1" },

  // Ghee (4-5-2)
  { id: "P4-5-2-1", name: "Amul Ghee", weight: "1 L", price: 560, oldPrice: 620, image: images.product44, parentChildCategoryId: "4-5-2" },
  { id: "P4-5-2-2", name: "Aashirvaad Ghee", weight: "1 L", price: 550, oldPrice: 600, image: images.product28, parentChildCategoryId: "4-5-2" },
  { id: "P4-5-2-3", name: "Nandini Ghee", weight: "1 L", price: 540, oldPrice: 590, image: images.product12, parentChildCategoryId: "4-5-2" },
  { id: "P4-5-2-4", name: "Himalaya Ghee", weight: "1 L", price: 570, oldPrice: 630, image: images.product17, parentChildCategoryId: "4-5-2" },
  { id: "P4-5-2-5", name: "Mother Dairy Ghee", weight: "1 L", price: 565, oldPrice: 620, image: images.product22, parentChildCategoryId: "4-5-2" },

  // Fresh Cream (4-5-3)
  { id: "P4-5-3-1", name: "Amul Fresh Cream", weight: "250 ml", price: 65, oldPrice: 75, image: images.product27, parentChildCategoryId: "4-5-3" },
  { id: "P4-5-3-2", name: "Britannia Cream", weight: "250 ml", price: 60, oldPrice: 72, image: images.product22, parentChildCategoryId: "4-5-3" },
  { id: "P4-5-3-3", name: "Milky Mist Cream", weight: "250 ml", price: 58, oldPrice: 70, image: images.product31, parentChildCategoryId: "4-5-3" },
  { id: "P4-5-3-4", name: "Mother Dairy Cream", weight: "250 ml", price: 62, oldPrice: 74, image: images.product29, parentChildCategoryId: "4-5-3" },
  { id: "P4-5-3-5", name: "Aavin Cream", weight: "250 ml", price: 56, oldPrice: 68, image: images.product24, parentChildCategoryId: "4-5-3" },

  // Whipping Cream (4-5-4)
  { id: "P4-5-4-1", name: "Rich Whip Cream", weight: "1 L", price: 180, oldPrice: 210, image: images.product19, parentChildCategoryId: "4-5-4" },
  { id: "P4-5-4-2", name: "Tropolite Whip Cream", weight: "1 L", price: 175, oldPrice: 200, image: images.product16, parentChildCategoryId: "4-5-4" },
  { id: "P4-5-4-3", name: "Amul Whip Cream", weight: "1 L", price: 190, oldPrice: 220, image: images.product21, parentChildCategoryId: "4-5-4" },
  { id: "P4-5-4-4", name: "Joy Whip Cream", weight: "1 L", price: 170, oldPrice: 200, image: images.product29, parentChildCategoryId: "4-5-4" },
  { id: "P4-5-4-5", name: "Delight Whip Cream", weight: "1 L", price: 185, oldPrice: 215, image: images.product13, parentChildCategoryId: "4-5-4" },

  // Cheese Blocks (4-5-5)
  { id: "P4-5-5-1", name: "Amul Cheese Block", weight: "500 g", price: 270, oldPrice: 320, image: images.product47, parentChildCategoryId: "4-5-5" },
  { id: "P4-5-5-2", name: "Britannia Cheese Block", weight: "500 g", price: 260, oldPrice: 300, image: images.product22, parentChildCategoryId: "4-5-5" },
  { id: "P4-5-5-3", name: "Go Cheese Block", weight: "500 g", price: 250, oldPrice: 295, image: images.product31, parentChildCategoryId: "4-5-5" },
  { id: "P4-5-5-4", name: "Milky Mist Cheese Block", weight: "500 g", price: 255, oldPrice: 305, image: images.product44, parentChildCategoryId: "4-5-5" },
  { id: "P4-5-5-5", name: "Mother Dairy Cheese Block", weight: "500 g", price: 265, oldPrice: 315, image: images.product20, parentChildCategoryId: "4-5-5" },

  // Moisturizers & Face Creams (5-1-1)
  { id: "P5-1-1-1", name: "Nivea Soft Cream", weight: "100 ml", price: 120, oldPrice: 150, image: images.product28, parentChildCategoryId: "5-1-1" },
  { id: "P5-1-1-2", name: "Ponds Light Moisturizer", weight: "150 ml", price: 140, oldPrice: 180, image: images.product12, parentChildCategoryId: "5-1-1" },
  { id: "P5-1-1-3", name: "Himalaya Nourishing Cream", weight: "100 ml", price: 110, oldPrice: 140, image: images.product40, parentChildCategoryId: "5-1-1" },

  // Sunscreens & Sunblocks (5-1-2)
  { id: "P5-1-2-1", name: "Lakme Sun Expert SPF 50", weight: "100 ml", price: 250, oldPrice: 300, image: images.product33, parentChildCategoryId: "5-1-2" },
  { id: "P5-1-2-2", name: "Neutrogena Ultra Sheer SPF 55", weight: "80 ml", price: 350, oldPrice: 420, image: images.product52, parentChildCategoryId: "5-1-2" },
  { id: "P5-1-2-3", name: "Mamaearth SPF 50 Sunscreen", weight: "100 ml", price: 299, oldPrice: 349, image: images.product37, parentChildCategoryId: "5-1-2" },

  // Face Wash & Cleansers (5-1-3)
  { id: "P5-1-3-1", name: "Himalaya Neem Face Wash", weight: "100 ml", price: 95, oldPrice: 120, image: images.product44, parentChildCategoryId: "5-1-3" },
  { id: "P5-1-3-2", name: "Garnier Brightening Face Wash", weight: "100 ml", price: 130, oldPrice: 160, image: images.product41, parentChildCategoryId: "5-1-3" },
  { id: "P5-1-3-3", name: "Clean & Clear Foaming Face Wash", weight: "100 ml", price: 99, oldPrice: 130, image: images.product40, parentChildCategoryId: "5-1-3" },

  // Serums & Toners (5-1-4)
  { id: "P5-1-4-1", name: "Minimalist Vitamin C Serum", weight: "30 ml", price: 499, oldPrice: 599, image: images.product48, parentChildCategoryId: "5-1-4" },
  { id: "P5-1-4-2", name: "Mamaearth Vitamin C Toner", weight: "200 ml", price: 280, oldPrice: 330, image: images.product39, parentChildCategoryId: "5-1-4" },
  { id: "P5-1-4-3", name: "Lakme Toner", weight: "120 ml", price: 150, oldPrice: 180, image: images.product51, parentChildCategoryId: "5-1-4" },

  // Face Masks & Scrubs (5-1-5)
  { id: "P5-1-5-1", name: "Mamaearth Ubtan Scrub", weight: "100 g", price: 299, oldPrice: 349, image: images.product36, parentChildCategoryId: "5-1-5" },
  { id: "P5-1-5-2", name: "Ponds Brightening Scrub", weight: "100 g", price: 140, oldPrice: 180, image: images.product49, parentChildCategoryId: "5-1-5" },
  { id: "P5-1-5-3", name: "Himalaya Face Pack", weight: "100 g", price: 130, oldPrice: 160, image: images.product64, parentChildCategoryId: "5-1-5" },

  // Shampoos (5-2-1)
  { id: "P5-2-1-1", name: "Clinic Plus Shampoo", weight: "175 ml", price: 99, oldPrice: 120, image: images.product51, parentChildCategoryId: "5-2-1" },
  { id: "P5-2-1-2", name: "Dove Hair Fall Rescue", weight: "180 ml", price: 160, oldPrice: 190, image: images.product64, parentChildCategoryId: "5-2-1" },
  { id: "P5-2-1-3", name: "Head & Shoulders Anti-Dandruff", weight: "180 ml", price: 170, oldPrice: 210, image: images.product53, parentChildCategoryId: "5-2-1" },

  // Conditioners (5-2-2)
  { id: "P5-2-2-1", name: "Pantene Smooth Conditioner", weight: "180 ml", price: 170, oldPrice: 210, image: images.product55, parentChildCategoryId: "5-2-2" },
  { id: "P5-2-2-2", name: "Dove Intense Repair Conditioner", weight: "180 ml", price: 180, oldPrice: 220, image: images.product52, parentChildCategoryId: "5-2-2" },
  { id: "P5-2-2-3", name: "Tresemme Keratin Conditioner", weight: "190 ml", price: 220, oldPrice: 260, image: images.product65, parentChildCategoryId: "5-2-2" },

  // Hair Oils & Serums (5-2-3)
  { id: "P5-2-3-1", name: "Parachute Coconut Oil", weight: "200 ml", price: 110, oldPrice: 130, image: images.product66, parentChildCategoryId: "5-2-3" },
  { id: "P5-2-3-2", name: "Indulekha Hair Oil", weight: "100 ml", price: 399, oldPrice: 450, image: images.product59, parentChildCategoryId: "5-2-3" },
  { id: "P5-2-3-3", name: "Livon Hair Serum", weight: "50 ml", price: 150, oldPrice: 180, image: images.product56, parentChildCategoryId: "5-2-3" },

  // Hair Styling Products (5-2-4)
  { id: "P5-2-4-1", name: "Set Wet Hair Gel", weight: "250 g", price: 120, oldPrice: 150, image: images.product48, parentChildCategoryId: "5-2-4" },
  { id: "P5-2-4-2", name: "Gatsby Hair Wax", weight: "75 g", price: 180, oldPrice: 220, image: images.product33, parentChildCategoryId: "5-2-4" },
  { id: "P5-2-4-3", name: "UrbanGabru Hair Spray", weight: "250 ml", price: 220, oldPrice: 280, image: images.product52, parentChildCategoryId: "5-2-4" },

  // Hair Color & Treatment Kits (5-2-5)
  { id: "P5-2-5-1", name: "Garnier Hair Color", weight: "1 pack", price: 180, oldPrice: 200, image: images.product14, parentChildCategoryId: "5-2-5" },
  { id: "P5-2-5-2", name: "Loreal Hair Colour Kit", weight: "1 pack", price: 350, oldPrice: 400, image: images.product44, parentChildCategoryId: "5-2-5" },
  { id: "P5-2-5-3", name: "Revlon Hair Color", weight: "1 pack", price: 310, oldPrice: 350, image: images.product16, parentChildCategoryId: "5-2-5" },

  // Beard Oils & Grooming Kits (5-4-1)
  { id: "P5-4-1-1", name: "Ustraa Beard Oil", weight: "60 ml", price: 260, oldPrice: 300, image: images.product28, parentChildCategoryId: "5-4-1" },
  { id: "P5-4-1-2", name: "Beardo Grooming Kit", weight: "1 kit", price: 799, oldPrice: 999, image: images.product19, parentChildCategoryId: "5-4-1" },
  { id: "P5-4-1-3", name: "UrbanGabru Beard Oil", weight: "60 ml", price: 220, oldPrice: 260, image: images.product17, parentChildCategoryId: "5-4-1" },

  // Shaving Creams & Razors (5-4-2)
  { id: "P5-4-2-1", name: "Gillette Shaving Cream", weight: "70 g", price: 95, oldPrice: 120, image: images.product33, parentChildCategoryId: "5-4-2" },
  { id: "P5-4-2-2", name: "Gillette Mach3 Razor", weight: "1 pc", price: 280, oldPrice: 320, image: images.product38, parentChildCategoryId: "5-4-2" },
  { id: "P5-4-2-3", name: "Park Avenue Shaving Cream", weight: "70 g", price: 85, oldPrice: 110, image: images.product54, parentChildCategoryId: "5-4-2" },

  // Men’s Face Wash (5-4-3)
  { id: "P5-4-3-1", name: "Nivea Men Face Wash", weight: "100 ml", price: 150, oldPrice: 180, image: images.product24, parentChildCategoryId: "5-4-3" },
  { id: "P5-4-3-2", name: "Garnier Men Oil Clear", weight: "100 ml", price: 160, oldPrice: 190, image: images.product33, parentChildCategoryId: "5-4-3" },
  { id: "P5-4-3-3", name: "Park Avenue Face Wash", weight: "100 ml", price: 140, oldPrice: 170, image: images.product30, parentChildCategoryId: "5-4-3" }
];

export const TopSellingProductData = [
  { id: "P3-5-1-1", name: "Premium Basmati Rice", weight: "1 kg", price: 110, oldPrice: 130, image: images.product10, parentChildCategoryId: "3-5-1", ifnew: true, ifwishlist: false, },
  { id: "P3", name: "Lemon", weight: "500 g", price: 40, oldPrice: 60, image: images.product9, ifnew: false, ifwishlist: true, qty: 0, disocunt: 10, parentChildCategoryId: "1-1-1" },
  { id: "P31", name: "Potato", weight: "1 kg", price: 30, oldPrice: 40, image: images.product17, parentChildCategoryId: "1-2-2" },
  { id: "P1", name: "Orange", weight: "1 kg", price: 120, oldPrice: 150, image: images.product5, ifnew: true, ifwishlist: false, qty: 1, parentChildCategoryId: "1-1-1" },

];
export const PreviousOrderData = [
  {
    id: "1",
    status: 'Delivered',
    date: 'On Wed, 27 Jul 2025',
    orderId: '#2HJHJ292999',
    total: '150',
    discount: 'Order Again & Get Flat 10% OFF',
    product: [
      { id: "P1", name: "Tomato", weight: "1 kg", price: 120, oldPrice: 150, image: images.productsmall1, ifnew: true, ifwishlist: false, qty: 1 },
      { id: "P3", name: "Onion", weight: "500 g", price: 40, oldPrice: 60, image: images.productsmall3, ifnew: false, ifwishlist: true, qty: 0, disocunt: 10 },
      { id: "P2", name: "Lemon", weight: "1 pc", price: 90, oldPrice: 120, image: images.productsmall4 },
      { id: "P4", name: "Garlic", weight: "1 kg", price: 110, oldPrice: 140, image: images.productsmall2, ifnew: false, ifwishlist: true, qty: 0 },
    ]
  },
  {
    id: "2",
    status: 'Delivered',
    date: 'On Wed, 27 Jul 2025',
    orderId: '#2HJHJ292999',
    total: '150',
    discount: 'Order Again & Get Flat 10% OFF',
    product: [
      { id: "P1", name: "Tomato", weight: "1 kg", price: 120, oldPrice: 150, image: images.productsmall1, ifnew: true, ifwishlist: false, qty: 1 },
      { id: "P3", name: "Onion", weight: "500 g", price: 40, oldPrice: 60, image: images.productsmall3, ifnew: false, ifwishlist: true, qty: 0, disocunt: 10 },
      { id: "P2", name: "Lemon", weight: "1 pc", price: 90, oldPrice: 120, image: images.productsmall4 },
      { id: "P4", name: "Garlic", weight: "1 kg", price: 110, oldPrice: 140, image: images.productsmall2, ifnew: false, ifwishlist: true, qty: 0 },
    ]
  }

];
export const FreshVeggiesProductData = [
  { id: "P1", name: "Tomato", weight: "1 kg", price: 120, oldPrice: 150, image: images.productsmall1, ifnew: true, ifwishlist: false, qty: 1 },
  { id: "P3", name: "Onion", weight: "500 g", price: 40, oldPrice: 60, image: images.productsmall3, ifnew: false, ifwishlist: true, qty: 0, disocunt: 10 },
  { id: "P2", name: "Lemon", weight: "1 pc", price: 90, oldPrice: 120, image: images.productsmall4 },
  { id: "P4", name: "Garlic", weight: "1 kg", price: 110, oldPrice: 140, image: images.productsmall2, ifnew: false, ifwishlist: true, qty: 0 },
];

export const FreshFruitsProductData = [
  { id: "P6", name: "Banana Robusta", weight: "1 dozen", price: 60, oldPrice: 80, image: images.product10, ifwishlist: true, parentChildCategoryId: "1-1-2" },
  { id: "P62", name: "Chilli Flakes", weight: "50 g", price: 40, oldPrice: 60, image: images.product12, parentChildCategoryId: "1-3-3" },
  { id: "P2-1-1-1", name: "Oreo Chocolate Cream", weight: "120 g", price: 30, oldPrice: 40, image: images.product39, ifwishlist: true, parentChildCategoryId: "2-1-1" },
  { id: "P2-2-5-1", name: "Amul Kool", weight: "200 ml", price: 25, oldPrice: 30, image: images.product65, parentChildCategoryId: "2-2-5" },


];
export const HomebannerBigData = [
  { id: 1, image: images.banner4 },
  { id: 2, image: images.banner5 },
  { id: 3, image: images.banner6 },
  { id: 5, image: images.banner7 },
  { id: 5, image: images.banner10 },
];
export const HomebannerSmallData = [
  { id: 1, title: "Pulses", image: images.small1, colors: '#f8a54c3e' },
  { id: 2, title: "Rice", image: images.small2, colors: '#53b17525' },
];

export const ProductDetailsData = {
  id: "P1",
  name: "Daawat Rozana Basmati Rice",
  weight: "1 kg",
  price: 120,
  oldPrice: 150,
  images: [
    { id: 1, image: images.productmain4 },
    { id: 2, image: images.productmain2 },
    { id: 3, image: images.productmain3 },
    { id: 5, image: images.productmain1 },
  ],
  ifnew: true,
  ifwishlist: false,
  reviews: "150",
  rating: "4.5",
  description:
    "Daawat Rozana Basmati Rice is known for its long grains, rich aroma, and soft fluffy texture. Ideal for daily cooking such as biryani, pulao, jeera rice, and other rice dishes.",

  productInformation: [
    {
      label: "Brand",
      value: "Daawat"
    },
    {
      label: "Manufacturer",
      value: "LT Foods Ltd."
    },
    {
      label: "Type",
      value: "Basmati Rice"
    },
    {
      label: "Variety",
      value: "Rozana"
    },
    {
      label: "Grain Type",
      value: "Long Grain"
    },
    {
      label: "Net Quantity",
      value: "1 kg"
    },
    {
      label: "Shelf Life",
      value: "24 months"
    },
    {
      label: "Maximum Shelf Life",
      value: "2 years"
    },
    {
      label: "Country of Origin",
      value: "India"
    },
    {
      label: "Ingredients",
      value: "Pure Basmati Rice"
    },
    {
      label: "Diet Type",
      value: "Vegetarian"
    },
    {
      label: "Speciality",
      value: "Low Fat, Low Cholesterol, Aromatic"
    },
    {
      label: "Texture",
      value: "Soft & Fluffy after cooking"
    },
    {
      label: "Cooking Method",
      value: "Rinse thoroughly and cook with 1:2.5 water ratio"
    },
    {
      label: "Storage Instructions",
      value: "Store in a cool, dry place away from moisture"
    },
    {
      label: "Serving Suggestions",
      value: "Ideal for daily meals, pulao, biryani, and fried rice"
    },
    {
      label: "Package Type",
      value: "Poly Pack"
    },
    {
      label: "Certification",
      value: "FSSAI Certified"
    },
    {
      label: "FSSAI License Number",
      value: "10012022000047"
    },
    {
      label: "Customer Care",
      value: "1800-123-1000 (Toll Free)"
    }
  ]

};

export const ProductRattingData = [
  {
    id: 1,
    name: "Rahul Verma",
    rating: 4,
    date: "20 Oct 2025",
    review:
      "Very nice product! Good quality and perfect for daily use. The aroma and texture are amazing. Definitely recommended!",
    images: [images.productreview1, images.productreview2],
  },
  {
    id: 2,
    name: "Priya Sharma",
    rating: 5,
    date: "18 Oct 2025",
    review:
      "Good packaging and fresh quality. Loved the taste and long grains. Worth the price, will buy again.",
    images: [images.productreview1],
  }
];

export const AllBannerData = {
  'whishlist': [
    { id: 1, title: "Big Sale", image: images.banner353X90_1 },
    { id: 2, title: "New Arrivals", image: images.banner353X90_2 },
  ],
  'category': [
    { id: 1, title: "Big Sale", image: images.banner393X100 },
    { id: 2, title: "New Arrivals", image: images.banner393X100_2 },
    { id: 3, title: "New Arrivals", image: images.banner393X100_3 },
  ],
  'categoryproduct': [
    { id: 1, title: "Big Sale", image: images.banner275X122_3 },
    { id: 2, title: "New Arrivals", image: images.banner275X122_2 },
    { id: 3, title: "New Arrivals", image: images.banner275X122_1 },
  ],
  'productdetails': [
    { id: 3, image: images.banner352X200 },
    { id: 5, image: images.banner352X200 },
  ],
  'HomebannerBigData': HomebannerBigData,
  'HomebannerSmallData': HomebannerSmallData,
  'MyOrderData': [
    { id: 2, image: images.banner9 },
    { id: 3, image: images.banner8 },
  ]


}

export const AllBrands = ["Amul", "Nestle", "Britannia", "Parle"];


export const CheckoutPaymentMethodData = [
  {
    "id": 1,
    "name": "My Wallet ($150)",
    "image": images.walletimage,
  },
  {
    "id": 2,
    "name": "Master Card",
    "image": images.pay2,
  },
  {
    "id": 3,
    "name": "Paypal",
    "image": images.pay1,
  },
  {
    "id": 4,
    "name": "Google Pay",
    "image": images.google,
  },
  {
    "id": 5,
    "name": "Cash On Delivery",
    "image": images.cash,
  }
];

export const MyOrdersData = [
  {
    id: "ORD12345",
    status: "Delivered",
    date: "22 Nov 2024",
    amount: "$799",
    product: "Grocery",
    images: [{ image: images.product1 }, { image: images.product2 }, { image: images.product3 }, { image: images.product4 }, { image: images.product5 }],
  },
  {
    id: "ORD98765",
    status: "Out for Delivery",
    date: "Arriving Today",
    amount: "$1199",
    product: "Grocery",
    images: [{ image: images.productmain4 }, { image: images.productmain6 }],
  },
  {
    id: "ORD54321",
    status: "Cancelled",
    date: "18 Nov 2024",
    amount: "$299",
    product: "Grocery",
    images: [{ image: images.productmain1 }, { image: images.productmain2 }, { image: images.productmain6 }],
  },
];

export const MyCartData = [
  { id: "P1", name: "Orange", weight: "1 kg", price: 120, oldPrice: 150, image: images.product5, ifnew: true, ifwishlist: false, qty: 1, parentChildCategoryId: "1-1-1" },
  { id: "P6", name: "Banana Robusta", weight: "1 dozen", price: 60, oldPrice: 80, image: images.product10, ifwishlist: true, qty: 1, parentChildCategoryId: "1-1-2" },
  { id: "P31", name: "Potato", weight: "1 kg", price: 30, oldPrice: 40, image: images.product17, qty: 1, parentChildCategoryId: "1-2-2" },
];