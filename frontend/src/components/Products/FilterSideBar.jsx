import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const filterSideBar = () => {
    const [searchParams , setSearParams] = useSearchParams();
    const [filters,setFilters] = useState({
        category:"",
        gender:"",
        color : "",
        size : [],
        material : [],
        brand : [],
        minPrice : 0,
        maxPrice : 100,
    });
    const [priceRange , setPriceRange] = useState([0,100]);
    const category = ["Top Wear","Bootom Wear",]
    const colors = [ 
        "Red",
        "Blue",
        "Black",
        "green",
        "Yellow",
        "Gray",
        "White",
        "pink",
        "Beige",
        "Navy",
    ]
    const sizes = ["XS","S","M","L","XL","XXL"];
    const materials = [
        "Cotton",
        "Wool",
        "Denim",
        "Polyester",
        "Lenin",
        "Silk",
        "Viscose",
        "Fleece",
    ]
    const Brands = [
        "Urban Threads",
        "Modern Fit",
        "Streat Style",
        "Beach Breeze",
        "Fashionista",
        "ChicsStyle",
    ]
    const genders = ["Men","Women"];
  return (
    <div>

    </div>
  )
}

export default filterSideBar