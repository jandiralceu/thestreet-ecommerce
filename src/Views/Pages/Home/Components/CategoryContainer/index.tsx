import "./category_container.styles.scss";

export type CategoryContainerProps = {
  id: number;
  title: string;
  imageUrl: string;
};

export const CategoryContainer = ({ title, imageUrl }: CategoryContainerProps) => {
  return (
    <div className="category-container">
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};
