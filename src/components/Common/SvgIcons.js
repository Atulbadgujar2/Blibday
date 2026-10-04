import React from "react";
import Home from '../../images/svg/home.svg';
import Category from '../../images/svg/category.svg';
import Cart from '../../images/svg/cart.svg';
import Wishlist from '../../images/svg/wishlist.svg';
import Account from '../../images/svg/account.svg';
import HomeFill from '../../images/svg/home-fill.svg';
import CategoryFill from '../../images/svg/category-fill.svg';
import CartFill from '../../images/svg/cart-fill.svg';
import WishlistFill from '../../images/svg/wishlist-fill.svg';
import AccountFill from '../../images/svg/account-fill.svg';
import Male from '../../images/svg/m.svg';
import Female from '../../images/svg/f.svg';
import Notfound from '../../images/svg/notfound.svg';
import Bag from '../../images/svg/bag.svg';

const SvgIcons = (props) => {
  const { name, height, width } = props
  let SvgIcon;
  switch (name) {
    case 'home':
      SvgIcon = Home;
      break;
    case 'category':
      SvgIcon = Category;
      break;
    case 'cart':
      SvgIcon = Cart;
      break;
    case 'wishlist':
      SvgIcon = Wishlist;
      break;
    case 'account':
      SvgIcon = Account;
      break;
    case 'home-fill':
      SvgIcon = HomeFill;
      break;
    case 'category-fill':
      SvgIcon = CategoryFill;
      break;
    case 'cart-fill':
      SvgIcon = CartFill;
      break;
    case 'wishlist-fill':
      SvgIcon = WishlistFill;
      break;
    case 'account-fill':
      SvgIcon = AccountFill;
      break;
    case 'male':
      SvgIcon = Male;
      break;
    case 'female':
      SvgIcon = Female;
      break;
    case 'notfound':
      SvgIcon = Notfound;
      break;
    case 'Bag':
      SvgIcon = Bag;
      break;
    default:
      SvgIcon = Home;
  }

  return <SvgIcon name={name} width={width} height={height} />;
}
export default SvgIcons;