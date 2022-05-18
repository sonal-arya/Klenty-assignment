import Card from "./Card";

const cardGrp = [
  {
    image: "/Group 1004.png",
    title: "Never update your contacts manually",
    description:
      "  Any contact you add in CRM gets update automatically in Klenty. Set up Triggers to drive leads from klenty back into the CRM. Save hours everyday to focus on critical activities.",
  },
  {
    image: "/Group 1003.png",
    title: "Engage instantly with prospects who show intent",
    description:
      " Auto-sync email engagement data like   opens, clicks and replies from Klenty   right into your CRM. Get notified  immediately. Followup without skipping a beat.",
  },  {
    image: "/Group 1006 (1).png",
    title: "Outreach without leaving your CRM ",
    description:
      " Engage with prospects straight from  your CRM.Book meetings using Klenty-  without ever logging into Klenty. No  more switching screens to execute sales outreach.",
  }
];
const Cards = () => {
  return (
    <>
      <div className="card-grp">
        {cardGrp.map((cardDetails) => (
          <div className="random" key="ex">
            <Card {...cardDetails} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
