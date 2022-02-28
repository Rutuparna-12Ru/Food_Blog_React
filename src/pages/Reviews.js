import React from "react";
import "../styles/Reviews.css";

const peoples = [
  {
    id: 1,
    img:
      "https://images.unsplash.com/photo-1616084403156-9ae114afa6a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Sachin Gupta",
    info:
      "“The food was excellent and so was the service.  I had the mushroom matar which was awesome. My wife had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies. ”"
  },
  {
    id: 2,
    img:
      "https://images.unsplash.com/photo-1573165850883-9b0e18c44bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwd29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Swati Biswas",
    info:
      "“ The food is simple, quick, economical and delicious. A good fare of Chinese food with an Indian twist. Highly recommended are the chilli chicken, sweet & spicy crispy chicken and shrimps.”"
  },
  {
    id: 3,
    img:
      "https://media.istockphoto.com/photos/portrait-of-a-smiling-man-of-indian-ethnicity-picture-id1277971635?b=1&k=20&m=1277971635&s=170667a&w=0&h=L1pgfiauaN2wIOgxdetel63XLq2ax3EkbfaIUT67USc=",
    name: "A.K. Singh",
    info:
      "“ Veg-manchurian is a glossy, rich-brown sauce with bold notes of tangy, sweet, spicy and salty is impossible to resist and I can honestly say I've never met a man, woman or child who could walk away from a plateful.”"
  },
  {
    id: 4,
    img:
      "https://media.istockphoto.com/photos/using-mobile-phone-picture-id1147785920?b=1&k=20&m=1147785920&s=170667a&w=0&h=eZMT8OJXwuU4LJdEyZ5-S4fOtPlrz70NJTEKT9qZ1G8=",
    name: "Mita Malviya",
    info:
      "“ Recipe of this masala dosa is very delicious and mouth watering. Do give a try, you won't regeret it. The dosas are small and good for a single person to eat ”"
  }
];

export default function Reviews() {
  return (
    <div className="peoplelist">
      {peoples.map((people) => {
        console.log(people);
        //    const{img,title,author} = book;
        return <People people={people}></People>;
      })}
    </div>
  );
}

const People = (props) => {
  const { img, name, info } = props.people;
  return (
    <article className="people">
      <img src={img} alt="" />
      <h1>{name}</h1>
      <h4>{info}</h4>
    </article>
  );
};
