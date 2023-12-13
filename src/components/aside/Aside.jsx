import { Button } from "/src/components/ui";
import { adImage, Polygon } from "/src/assets/images";
import { profile1, plus } from "/src/assets/images/icons";
import "./Aside.scss";
import { Link } from "react-router-dom";

export default function Aside() {
  const users = [
    { name: "أحمد يس", job: "مدير تنفيذي", image: profile1 },
    { name: "ريان أحمد", job: "مبرمج", image: profile1 },
    { name: "حسن محمد", job: "مهندس مدني", image: profile1 },
  ];

  const titles = [
    "money",
    "work",
    "commerce",
    "digital",
    "designs",
    "beauty",
    "user experience",
    "medicine",
    "independent",
  ];

  return (
    <aside className="aside">
      <div className="aside__section ad">
        <h4>{"This site is completely free for six months"}</h4>
        <p>{"--Subscription fee is 0 pounds"}</p>
        <Button children={"Try for free"} />
        <img src={adImage} alt="" />
        <img className="polygon" src={Polygon} alt="" />
      </div>
      <div className="aside__section recommend">
        <h4>{"people you may know:"}</h4>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <img src={user.image} alt="" />
              <div>
                <p>{user.name}</p>
                <p>{user.job}</p>
              </div>
              <Button
                children={"add"}
                backgroundColor={"#fff"}
                color={"#A74ED1"}
                border={"1px"}
              />
            </li>
          ))}
          <Link>{"all"}</Link>
        </ul>
      </div>
      <div className="aside__section tags">
        <div className="tagsHeader">
          <p>{"followed-up titles:"}</p>
          <img src={plus} alt="" role="button" />
        </div>

        <div className="tagsBody">
          {titles.map((title, index) => (
            <p key={index}>
              <span>#</span>
              {title}
            </p>
          ))}
        </div>
      </div>
    </aside>
  );
}
