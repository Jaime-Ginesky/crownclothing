import CategoryMenuItem from '../category-menu-item/category-menu-item.component';
import './category-menu.styles.scss';

const CategoryMenu = ({ categories }) => {
    
    return (
        <div className="menu-container">
      {categories.map((category) => (
       <CategoryMenuItem key={category.id} category={category} />
       ))}
    </div>
    )
}

export default CategoryMenu;