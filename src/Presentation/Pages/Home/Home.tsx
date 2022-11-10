import './home.styles.scss';

import { CategoryContainer, CategoryContainerProps } from "./Components";

const categories: CategoryContainerProps[] = [
    {
        id: 1,
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
      },
      {
        "id": 2,
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
      },
      {
        "id": 3,
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
      },
      {
        "id": 4,
        title: "women",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
      },
      {
        "id": 5,
        title: "men",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
      }
];

const HomePage = () => {
  return (
    <main>
      {categories.map(({ title, id, imageUrl }) => (
        <CategoryContainer key={id} id={id} title={title} imageUrl={imageUrl} />
      ))}
    </main>
  );
};

export default HomePage;