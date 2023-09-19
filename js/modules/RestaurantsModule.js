const RestaurantModule = (function (){
    const restaurants = [
        {
            location: "Bjerke",
            image: "bk.jpeg",
            address: "Hestegata 9"
           
        }, 
        {
            location: "Gamlebyen",
            image: "max.jpeg",
            address: "St.Halvardsgate 1B"
        },
        {
            location: "Majorstuen",
            image: "mcd.png",
            address: "Clascke Lanckegata 13"
        },
        {
            location: "Sagene",
            image: "pizza.png",
            address: "Trygdogsneip 22"
        }
    ];
    const getAllRestaurants = () => restaurants;
    return { getAllRestaurants }
}());

export { RestaurantModule };