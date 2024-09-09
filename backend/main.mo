import Hash "mo:base/Hash";

import Array "mo:base/Array";
import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Option "mo:base/Option";

actor {
  type Class = {
    name: Text;
    role: Text;
    image: Text;
  };

  type ClassDetail = {
    name: Text;
    role: Text;
    image: Text;
    pros: ?[Text];
    cons: ?[Text];
  };

  stable var classesArray: [Class] = [
    { name = "Warrior"; role = "Tank"; image = "warrior.jpg" },
    { name = "White Mage"; role = "Healer"; image = "whitemage.jpg" },
    { name = "Black Mage"; role = "DPS"; image = "blackmage.jpg" },
    { name = "Dragoon"; role = "DPS"; image = "dragoon.jpg" }
  ];

  let classDetails = HashMap.HashMap<Text, ClassDetail>(10, Text.equal, Text.hash);

  classDetails.put("Warrior", {
    name = "Warrior";
    role = "Tank";
    image = "warrior.jpg";
    pros = ?["High defense", "Good crowd control"];
    cons = ?["Low mobility", "Complex rotation"];
  });

  classDetails.put("White Mage", {
    name = "White Mage";
    role = "Healer";
    image = "whitemage.jpg";
    pros = ?["Strong healing", "Good AoE heals"];
    cons = ?["Limited damage output", "Mana management"];
  });

  classDetails.put("Black Mage", {
    name = "Black Mage";
    role = "DPS";
    image = "blackmage.jpg";
    pros = ?["High magical damage", "Powerful AoE spells"];
    cons = ?["Low mobility", "Cast times can be interrupted"];
  });

  classDetails.put("Dragoon", {
    name = "Dragoon";
    role = "DPS";
    image = "dragoon.jpg";
    pros = ?["High single-target damage", "Good mobility"];
    cons = ?["Long animation locks", "Positional requirements"];
  });

  public query func getClasses() : async [Class] {
    classesArray
  };

  public query func getClassDetails(className: Text) : async ?ClassDetail {
    classDetails.get(className)
  };
}
