import { ProductsAPIInstatnce } from "./index";

export const ProductsAPI = {
    getAllProducts(categoryId) {
        console.log(categoryId);
        if(categoryId != null)
        {
        const url = 'api/product/'
        
            return ProductsAPIInstatnce.get(url, {
                params: {
                    categoryId
                }
            })
        }
        else{
        const url = 'api/product/'
            return ProductsAPIInstatnce.get(url)
        }
        
    },

    getAllCategories() {
        const url = 'api/category/'
        return ProductsAPIInstatnce.get(url)
    }

}