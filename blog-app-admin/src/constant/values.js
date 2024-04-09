// import fetchApi from "../components/utils/helper";
// import { API_ENDPOINTS } from "./api";


const fetchData = async () => {
    try {
        const response = await fetch("https://tech-tonics.onrender.com/product");
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.log("ERROR");
    }
}

let data = await fetchData();

let select_data_category = {}
for (const key in data) {
    select_data_category[key] = Object.keys(data[key]);
}
select_data_category = Object.keys(select_data_category)
console.log(select_data_category)


// const select_data_category = [
//     { id: 1, name: 'Mobile' },
//     { id: 2, name: 'Laptop' },
//     { id: 3, name: 'Tablet' },
//     { id: 4, name: 'Dslr' },
//     { id: 5, name: 'Smart watches' },
//     { id: 6, name: 'Headphones' },
//     { id: 7, name: 'Earbuds' },
// ]

export {
    select_data_category,
    
};