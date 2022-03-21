// use local storage to manage cart data

const addToDb = (id) => {
    let shoppingCart;

    // get the shopping cart from local storage
    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    } else {
        shoppingCart = {};
    }


    // add quantity 
    const quantity = shoppingCart[id];
    if (quantity) {
        // console.log("Already Exist!");
        const newQuantity = parseInt(quantity) + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity)

    } else {
        // console.log("new added.");
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1)
    }
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));

};

// remove from database
const remvoeFromDb = (id) => {
    const storedCart = localStorage.getItem("shopping-cart");
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart)
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));

        }
    }
};


const deleteShoppingCart = () => {
    localStorage.removeItem("shopping-cart");
};


export {addToDb, remvoeFromDb, deleteShoppingCart}