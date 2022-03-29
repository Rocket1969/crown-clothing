import React from "react"
import "./category-directory.styles.scss"
import CategoryItem from "../category-item/Category-Item.component"

const CateogryDirectory = ({categories}) => {

      return (
        <div className="category-directory-container">
          {
            categories.map((category) => (
              <CategoryItem key={category.id} category={category}/>
            ))
          }
        </div>
      );
}

export default CateogryDirectory;