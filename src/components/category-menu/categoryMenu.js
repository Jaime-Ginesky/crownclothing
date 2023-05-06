import CategoryItem from '../category-item/categoryItem';
import './category-menu.styles.scss';

const CategoryMenu = ({ categories }) => {
    
    return (
        <div className="menu-container">
      {categories.map((category) => (
       <CategoryItem key={category.id} category={category} />
       ))}
    </div>
    )
}

export default CategoryMenu;