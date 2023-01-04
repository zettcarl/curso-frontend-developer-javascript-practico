const menuEmail =document.querySelector('.navbar-email');
const menuHamIcon =document.querySelector('.menu');
const menuCarritoIcon =document.querySelector('.navbar-shopping-cart');

const mobileMenu =document.querySelector('.mobile-menu');
const desktopMenu =document.querySelector('.desktop-menu');
const aside =document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleDMobilepMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = !aside.classList.contains('inactive');
    const isDesktopClosed =!desktopMenu.classList.contains('inactive');
    if(isAsideClosed){
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleDMobilepMenu(){
    const isAsideClosed = !aside.classList.contains('inactive');
    if(isAsideClosed){
        aside.classList.add('inactive')
    }    
    mobileMenu.classList.toggle('inactive');

}
function toggleCarritoAside(){
    const isMobileMenuClosed = !mobileMenu.classList.contains('inactive');
    const isDesktopClosed =!desktopMenu.classList.contains('inactive');
    // aside.classList.toggle('inactive');
    if(isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    if(isDesktopClosed){
        desktopMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Monitor',
    price: 220,
    image:'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08382132.jpg'
});
productList.push({
    name: 'Laptop',
    price: 1230,
    image:'https://es.digitaltrends.com/wp-content/uploads/2022/06/surface-laptop-go-2-feat.jpg?p=1'
});
productList.push({
    name: 'Motorcycle',
    price: 1730,
    image:'https://t2.uc.ltmcdn.com/es/posts/9/0/7/como_comprar_una_moto_por_internet_28709_orig.jpg'
});

productList.push({
    name: 'Monkey',
    price: 1,
    image:'https://oldschool.runescape.wiki/images/thumb/Monkey.png/150px-Monkey.png?3df98'
});



function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productName, productPrice);
        // productInfoDiv.appendChild(productPrice);
        // productInfoDiv.appendChild(productName);
    
        const productFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productFigure.appendChild(productImgCart)
    
        productInfo.append(productInfoDiv, productFigure)
        
        productCard.append(productImg,productInfo );
        // productCard.appendChild(productImg);
        // productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}
renderProducts(productList)