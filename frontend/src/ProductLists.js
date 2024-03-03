import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
function Product() {
  useEffect(() => {
    axios
      .get("localhost...")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div
      className="product"
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Card
        style={{
          border: "1px solid black",
          display: "flex",
          width: "800px",
          height: "950px",
          borderRadius: "20%",
          flexDirection: "column",
          padding: "4%",
          alignmentBaseline: "baseline",
          marginTop: "5%",
          marginLeft: "25%",
          backgroundColor: "#439696b9",
          boxShadow: "20px 20px 18px black",
          hovertransform: "rotateY 180 deg",
        }}
      >
        <img src="https://th.bing.com/th/id/OIP.e2htGTYTrxa4vNJR1yxvJgHaF7?w=192&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        <Card.Body>
          Aikido is a modern Japanese martial art that is split into many
          different styles. Aikido's fundamental principles include: irimi
          (entering), atemi, kokyu-ho (breathing control), sankaku-ho
          (triangular principle) and tenkan (turning) movements that redirect
          the opponent's attack momentum.
          <Card.Title
            style={{
              fontSize: "30px",
            }}
          ></Card.Title>
        </Card.Body>
      </Card>
      <Card
        style={{
          border: "1px solid black",
          display: "flex",
          width: "800px",
          height: "950px",
          borderRadius: "20%",
          flexDirection: "column",
          padding: "4%",
          justifyContent: "",
          alignmentBaseline: "baseline",
          marginTop: "5%",
          marginLeft: "25%",
          backgroundColor: "#439696b9",
          boxShadow: "20px 20px 18px black",
          hovertransform: "rotateY 180 deg",
        }}
      >
        <img src="https://th.bing.com/th/id/OIP.cAL21Z2y8MWD9Bfb8Khr_QHaE8?rs=1&pid=ImgDetMain" />
        <Card.Body>
          Krav Maga was Developed for the Israel Defense Forces (IDF), it is
          derived from a combination of techniques used in aikido, judo, karate,
          boxing, and wrestling. It is known for its focus on real-world
          situations and its extreme efficiency.
          <Card.Title
            style={{
              fontSize: "30px",
            }}
          ></Card.Title>
        </Card.Body>
      </Card>

      <Card
        style={{
          border: "1px solid black",
          display: "flex",
          width: "800px",
          height: "950px",
          borderRadius: "20%",
          flexDirection: "column",
          padding: "4%",
          justifyContent: "",
          alignmentBaseline: "baseline",
          marginTop: "5%",
          marginLeft: "25%",
          backgroundColor: "#439696b9",
          boxShadow: "20px 20px 18px black",
          hovertransform: "rotateY 180 deg",
        }}
      >
        <img src="https://th.bing.com/th/id/OIP.z4jRIzdPbxpZVt5SaWm78wAAAA?rs=1&pid=ImgDetMain" />
        <Card.Body>
          no need to go to a Shaolin temple to learn Kung Fu techniques: Shaolin
          kung fu (Chinese: 少林功夫; pinyin: Shǎolín gōngfū), also called
          Shaolin Wushu (少林武術; Shǎolín wǔshù), or Shaolin quan (少林拳;
          Shàolínquán), is one of the oldest, largest, and most famous styles of
          wushu, or kung fu of Chan Buddhism. It combines Chan philosophy and
          martial arts.
          <Card.Title
            style={{
              fontSize: "30px",
            }}
          ></Card.Title>
        </Card.Body>
      </Card>
      <Card
        style={{
          border: "1px solid black",
          display: "flex",
          width: "800px",
          height: "950px",
          borderRadius: "20%",
          flexDirection: "column",
          padding: "4%",
          justifyContent: "",
          alignmentBaseline: "baseline",
          marginTop: "5%",
          marginLeft: "25%",
          backgroundColor: "#439696b9",
          boxShadow: "20px 20px 18px black",
          hovertransform: "rotateY 180 deg",
        }}
      >
        <img src="https://1.bp.blogspot.com/-_OC3eVT12do/Tt-gt43-KRI/AAAAAAAABEA/mcxQ3TVBmMQ/s1600/_MG_4850c.jpg" />
        <Card.Body>
          Yoseikan budo: The old Yoseikan style included mainly jujutsu,
          aikijujutsu, kobudo and a few karate techniques, such as: foot sweeps
          and trips (ashi waza), standing throws (nage waza) and groundwork (ne
          waza); punches, kicking and blocking techniques (kihon te waza, kihon
          uke waza, kihon geri waza); escapes (te hodoki), joints locks, bending
          or twisting (kansetsu waza), variation techniques (henka waza)...
          <Card.Title
            style={{
              fontSize: "30px",
            }}
          ></Card.Title>
        </Card.Body>
      </Card>
      <Card
        style={{
          border: "1px solid black",
          display: "flex",
          width: "800px",
          height: "950px",
          borderRadius: "20%",
          flexDirection: "column",
          padding: "4%",
          justifyContent: "",
          alignmentBaseline: "baseline",
          marginTop: "5%",
          marginLeft: "25%",
          backgroundColor: "#439696b9",
          boxShadow: "20px 20px 18px black",
          hovertransform: "rotateY 180 deg",
        }}
      >
        <img src="https://th.bing.com/th/id/R.4bb64965417f8bae88e0cc758491987b?rik=tTjeX%2fQba%2fuZDQ&riu=http%3a%2f%2fwww.trbimg.com%2fimg-58225e5d%2fturbine%2fph-cc-nh-hapkido-20161108&ehk=z3%2fVDk1yh4qc%2bV53qebNF59o3ASJfcVaB28mbFkwjY8%3d&risl=&pid=ImgRaw&r=0" />
        <Card.Body>
          Taekwondo: an excellent corean martial art for self-defense that uses
          Hand attacks,Kick (Chagi), Push/Throws, Foot Sweep, Joint Locks,
          Bends, Twists...
          <Card.Title
            style={{
              fontSize: "30px",
            }}
          ></Card.Title>
        </Card.Body>
      </Card>
      <Card
        style={{
          border: "1px solid black",
          display: "flex",
          width: "800px",
          height: "950px",
          borderRadius: "20%",
          flexDirection: "column",
          padding: "4%",
          justifyContent: "",
          alignmentBaseline: "baseline",
          marginTop: "5%",
          marginLeft: "25%",
          backgroundColor: "#439696b9",
          boxShadow: "20px 20px 18px black",
          hovertransform: "rotateY 180 deg",
        }}
      >
        <img src="https://th.bing.com/th?id=OSK.HEROWzKyO8r65HBTSBC2Pa6w_M1GStVnuTWxy5xsSVzGoFg&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM" />
        <Card.Body>
          Hapkido:hapki-do; from Korean 합기도 hapgido [hap̚.ki.do]) is a Korean
          hybrid martial art. It is a form of self-defense that employs joint
          locks, grappling, throwing techniques, kicks, punches, and other
          striking attacks. It also teaches the use of traditional weapons,
          including knife, sword, rope, nunchaku (ssang juhl bong), cane (ji
          pang ee), short stick (dan bong), and middle-length staff (joong
          bong), gun (analogous to the Japanese jō), and bō (Japanese), which
          vary in emphasis depending on the particular tradition examined.
          <Card.Title
            style={{
              fontSize: "30px",
            }}
          ></Card.Title>
        </Card.Body>
      </Card>
      <Card
        style={{
          border: "1px solid black",
          display: "flex",
          width: "800px",
          height: "950px",
          borderRadius: "20%",
          flexDirection: "column",
          padding: "4%",
          justifyContent: "",
          alignmentBaseline: "baseline",
          marginTop: "5%",
          marginLeft: "25%",
          backgroundColor: "#439696b9",
          boxShadow: "20px 20px 18px black",
          hovertransform: "rotateY 180 deg",
        }}
      >
        <img src="https://th.bing.com/th/id/R.d763ad5a7c82ae1cca7637b6d7db3e3d?rik=MYSHyej3aa5X0w&riu=http%3a%2f%2fhellinahandbasket.net%2fwp-content%2fuploads%2f2014%2f09%2fninja-suit-with-dagger.jpg&ehk=TdQoP9WGaqu9BSbypBUWcrJ5MzH12nbrkEchc0MLQxg%3d&risl=&pid=ImgRaw&r=0" />
        <Card.Body>
          Ninja:The ninja course trains all the muscles of the body, as well as
          flexibility, motor skills, dexterity and balance. The presence of a
          notion of challenge can be a tool to work on self-confidence, but also
          teamwork and socialization. Some movements, such as jumping or
          climbing a tall structure, are invitations to face your fears in a
          playful and fun way.
          <Card.Title
            style={{
              fontSize: "30px",
            }}
          ></Card.Title>
        </Card.Body>
      </Card>
      <Card
        style={{
          border: "1px solid black",
          display: "flex",
          width: "800px",
          height: "950px",
          borderRadius: "20%",
          flexDirection: "column",
          padding: "4%",
          justifyContent: "",
          alignmentBaseline: "baseline",
          marginTop: "5%",
          marginLeft: "25%",
          backgroundColor: "#439696b9",
          boxShadow: "20px 20px 18px black",
          hovertransform: "rotateY 180 deg",
        }}
      >
        <img src="https://th.bing.com/th?id=OIF.g%2fDwwE1DOU1eJtj0n6zauw&rs=1&pid=ImgDetMain" />
        <Card.Body>
          Hapkido:from Korean 합기도 hapgido [hap̚.ki.do]) is a Korean hybrid
          martial art. It is a form of self-defense that employs joint locks,
          grappling, throwing techniques, kicks, punches, and other striking
          attacks. It also teaches the use of traditional weapons, including
          knife, sword, rope, nunchaku (ssang juhl bong), cane (ji pang ee),
          short stick (dan bong), and middle-length staff (joong bong), gun
          (analogous to the Japanese jō), and bō (Japanese), which vary in
          emphasis depending on the particular tradition examined.
          <Card.Title
            style={{
              fontSize: "30px",
            }}
          ></Card.Title>
        </Card.Body>
      </Card>
      <Card
        style={{
          border: "1px solid black",
          display: "flex",
          width: "800px",
          height: "950px",
          borderRadius: "20%",
          flexDirection: "column",
          padding: "4%",
          justifyContent: "",
          alignmentBaseline: "baseline",
          marginTop: "5%",
          marginLeft: "25%",
          backgroundColor: "#439696b9",
          boxShadow: "20px 20px 18px black",
          hovertransform: "rotateY 180 deg",
        }}
      >
        <img src="https://www.bing.com/th?id=OIP.vsT2s6oVreHbisPZ3WFlSgHaLG&w=200&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
        <Card.Body>
          karate: Practice the Modern Japanese style training with a Japanese
          master.
          <Card.Title
            style={{
              fontSize: "30px",
            }}
          ></Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Product;
