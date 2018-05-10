export interface RestaurantModel {
    id: string;
    name: string;
    cuisines: string;
    featured_image: string;
    location: {
        address: string,
        city: string,
        locality: string,
        latitude: string,
        longitude: string
    };
    user_rating: {
        aggregate_rating: string,
        rating_text: string
    };
    phone_numbers: string;
}
