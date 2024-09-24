import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Background from "../components/Background";
import Up from "../components/Up";
import Chargement from "../components/Chargement";
import Footer from "../components/Footer";

const Home = () => {
  const [i, setI] = useState(0);
  const arrayHero = [
    { name: "Batman", src: "./images/batman.jpg", num: "555-999" },
    { name: "Robin", src: "./images/robin.jpg", num: "555-666" },
    { name: "Catwoman", src: "./images/catwoman.jpg", num: "555-444" },
    { name: "Harley Quinn", src: "./images/HQ.webp", num: "555-333" },
  ];
  const handleClickPlus = () => setI(i + 1);
  const handleClickMoins = () => setI(i - 1);

  const [jokerClass, setJokerClass] = useState("off");
  const [pingouinClass, setPingouinClass] = useState("off");
  const [scarecrowClass, setScarecrowClass] = useState("off");
  const [freezeClass, setFreezeClass] = useState("off");

  return (
    <div>
      <Chargement />
      <Up />
      <Background />
      <Navigation />
      <div className="title">
        <h1>GOTHAM CITY</h1>
        <img src="./images/logo.webp" alt="" />
      </div>
      <div className="call-hero">
        <h2 id="service">Services</h2>
        <div className="hero">
          {i > 0 ? (
            <i
              id="left"
              className="fa-solid fa-caret-left"
              onClick={handleClickMoins}
            ></i>
          ) : (
            <div className="vide"></div>
          )}
          <div className="text-call">
            <div className="image-contain">
              <img src={arrayHero[i].src} alt="" />
              <p>
                Pour joindre {arrayHero[i].name}
                <br />
                <div id="phone">
                  <i class="fa-solid fa-phone"></i>
                  <span>{arrayHero[i].num}</span>
                </div>
              </p>
            </div>
          </div>

          {i < 3 ? (
            <i
              id="right"
              className="fa-solid fa-caret-right"
              onClick={handleClickPlus}
            ></i>
          ) : (
            <div className="vide"></div>
          )}
        </div>
      </div>

      <div id="actu">
        <h2>
          <i class="fa-solid fa-backward"></i> Actualités{" "}
          <i class="fa-solid fa-forward"></i> <i class="fa-solid fa-play"></i>{" "}
          <i class="fa-solid fa-pause"></i>{" "}
        </h2>
        <div className="contain-actu">
          <div className="infos">
            <h3>Breaking News : Prise d'otage à Gotham City</h3>
            <img src="./images/banque.webp" alt="" />
            <p>
              Une situation de crise est en cours à la Banque Centrale de
              Gotham. Vers 9h ce matin, un groupe armé a pris en otage plusieurs
              employés et clients, menaçant de tout faire exploser si leurs
              exigences ne sont pas rapidement satisfaites. Les forces de
              l'ordre ont établi un périmètre de sécurité autour du bâtiment,
              tandis que le GCPD négocie avec les preneurs d’otages. Selon des
              témoins, les assaillants seraient lourdement armés et pourraient
              être affiliés à l'un des nombreux gangs de la ville. Les autorités
              demandent aux citoyens d'éviter la zone. Aucune victime n’a été
              signalée pour l’instant.
            </p>
          </div>
          <div className="infos">
            <h3>Avis de recherche : Chat perdu à Gotham City</h3>
            <img src="./images/chat.webp" alt="" />
            <p>
              Nom : Whiskers <br />
              Description : Chat noir aux yeux verts perçants, collier en cuir
              avec une petite clochette argentée. Il est agile, vif et peut être
              difficile à attraper. Il répond généralement à Catwoman, mais peut
              être méfiant envers les inconnus.
              <br />
              Dernière vue : Rooftops de Gotham, près du quartier des Diamants.
              Caractéristiques spéciales : Capable de disparaître comme une
              ombre. Il pourrait traîner dans des endroits sombres et
              mystérieux, à l’image de sa propriétaire. Si vous avez des
              informations, contactez Catwoman directement (de préférence via
              signaux félins ou messages cryptés). Une récompense "à la hauteur"
              est garantie.
            </p>
          </div>
          <div className="infos">
            <h3>Alerte Météo : Cyclone imminent sur Gotham City</h3>
            <img src="./images/cyclone.jpg" alt="" />
            <p>
              Une alerte cyclone a été émise pour Gotham City, où un phénomène
              de forte intensité est attendu cette nuit. Des vents violents, des
              pluies torrentielles et des risques d’inondations sont prévus,
              rendant la situation extrêmement dangereuse. Les autorités
              ordonnent l’évacuation immédiate des résidents des Narrows, du
              port industriel, du secteur Est de Burnley et d’Old Gotham. Les
              habitants sont invités à rejoindre les abris désignés, notamment
              le gymnase de Gotham High School et le Wayne Convention Center. Il
              est recommandé d’emporter les effets essentiels, d’éviter de
              conduire dans les zones inondées, ainsi que de contourner les
              routes côtières et les ponts. Les citoyens doivent se préparer,
              suivre les instructions d’évacuation et rester à l'écoute des
              informations d’urgence pour assurer leur sécurité.
            </p>
          </div>
          <div className="infos">
            <h3>Gotham Gazette : Succès éclatant du Gotham Music Fest</h3>
            <img src="./images/festival.jpg" alt="" />
            <p>
              Le Gotham Music Fest a enflammé la ville ce week-end, attirant des
              milliers de spectateurs venus vibrer au son des plus grands
              artistes locaux et internationaux. Organisé au parc Robinson,
              l'événement a offert une programmation éclectique, mêlant rock,
              jazz, et musique électronique, faisant de cette édition la plus
              fréquentée de ces dernières années. Le moment fort du festival a
              été la performance surprise de Black Canary, dont la voix a
              envoûté le public. Malgré quelques problèmes de circulation aux
              abords du parc, l'événement s'est déroulé sans incident majeur.
              Les organisateurs parlent déjà de la prochaine édition, promettant
              un festival encore plus grandiose.
            </p>
          </div>
        </div>
      </div>

      <div id="histoire">
        <h2>Histoire de Gotham City</h2>
        <p>
          Gotham City est une métropole tentaculaire située sur la côte est des
          États-Unis, à la population estimée à environ 10 millions d’habitants.
          La ville, bien qu'ultra-moderne dans certains quartiers, est marquée
          par une architecture néo-gothique et des quartiers historiques en
          proie à la déchéance. Connu pour son taux de criminalité parmi les
          plus élevés du pays, Gotham est un lieu où règnent la corruption, la
          violence et la peur.
        </p>
        <br />
        <h3>Démographie : </h3>
        <ul>
          <li>Population : 10 millions d’habitants</li>
          <li>
            Répartition ethnique : Gotham est une ville cosmopolite avec une
            diversité importante. Elle est composée d’environ 40% de Blancs, 25%
            d’Afro-Américains, 20% de Latinos, et 15% d’autres groupes
            (Asiatiques, immigrants européens et autres communautés).
          </li>
          <li>
            Pyramide des âges : 60% des habitants ont entre 18 et 45 ans, ce qui
            s’explique par la forte migration des jeunes adultes à la recherche
            de travail ou d'opportunités dans l’industrie technologique et les
            affaires.
          </li>
        </ul>
        <h3>Économie et emploi :</h3>
        <p>
          Le secteur industriel de Gotham est dominé par les entreprises telles
          que Wayne Enterprises, mais aussi par une économie souterraine
          prolifique due à la présence de nombreux syndicats criminels. Le taux
          de chômage est relativement élevé à 15%, bien au-dessus de la moyenne
          nationale, alimenté par une disparité économique frappante entre les
          classes sociales.
        </p>
        <h3>Taux de criminalité et mortalité :</h3>
        <p>
          Gotham est tristement célèbre pour son taux de criminalité
          anormalement élevé, largement supérieur à la moyenne nationale. La
          police locale, bien que sous-équipée et largement corrompue, tente de
          maintenir un semblant d’ordre. Les crimes violents, y compris les
          homicides, les vols et les extorsions, sont monnaie courante. Le taux
          de mortalité de la ville s’élève à 8,5 décès pour 1 000 habitants, en
          grande partie en raison de la violence criminelle. Gotham connaît en
          moyenne 2 000 homicides par an, souvent attribués à des super-vilains
          notoires comme le Joker, Double-Face et d'autres figures du crime
          organisé.
        </p>
        <h3>Conditions de vie :</h3>
        <ul>
          <li>
            Quartiers riches : Gotham Heights et Diamond District abritent
            l’élite économique, vivant dans des gratte-ciel modernes et des
            villas luxueuses.
          </li>
          <li>
            Quartiers pauvres : Des zones comme les Narrows ou Crime Alley sont
            des foyers de pauvreté extrême, où la drogue et la violence
            dominent.
          </li>
          <li>
            Espérance de vie : L’espérance de vie des habitants de Gotham est
            inférieure à la moyenne nationale, se situant autour de 68 ans à
            cause des conditions de vie difficiles et de l'insécurité constante.
          </li>
        </ul>

        <h3>Infrastructure et services publics :</h3>
        <p>
          Malgré ses défis, Gotham possède des infrastructures impressionnantes,
          dont plusieurs ponts, tunnels et un réseau de métro étendu. Cependant,
          les disparités entre les quartiers riches et pauvres se reflètent
          aussi dans les infrastructures. Tandis que certains secteurs de la
          ville bénéficient de services modernes, d'autres manquent cruellement
          de ressources, ce qui contribue à la propagation de maladies et à des
          conditions de vie insalubres.
        </p>
        <br />
        <br />
        <p>
          Gotham City est un mélange contradictoire de richesse et de pauvreté,
          d’espoir et de désespoir. Elle est à la fois un centre culturel et
          industriel majeur et un endroit où le chaos semble toujours sur le
          point d’éclater. C’est dans ce contexte que le justicier Batman,
          symbole d’espoir et de justice, combat pour restaurer l’ordre dans une
          ville constamment sur le fil du rasoir.
        </p>
        <br />
        <br />
      </div>
      <div id="administration">
        <h2>Administration</h2>
        <h3>Administration de Gotham City : Organisation et fonctionnement</h3>
        <p>
          Gotham City est une métropole où l’administration publique lutte pour
          maintenir l’ordre dans un environnement gangréné par la corruption, la
          violence et le crime. Bien que la ville dispose des structures
          administratives classiques d’une grande ville américaine, leur
          efficacité est régulièrement remise en cause par l'influence des
          syndicats criminels, la montée des super-vilains, et la défiance de la
          population. Cependant, Gotham possède aussi des figures emblématiques,
          comme Batman, qui incarne l’espoir d’une ville en quête de justice.
        </p>
        <h3>Mairie et gouvernement local :</h3>
        <p>
          La mairie de Gotham est le cœur du pouvoir exécutif de la ville,
          dirigée par le maire, qui est élu tous les quatre ans. La mairie est
          chargée de gérer les affaires courantes, notamment la sécurité,
          l’urbanisme, l’éducation et les services publics. Cependant, les
          maires successifs ont souvent été accusés de corruption ou d’être sous
          l’influence de puissants intérêts privés et criminels, à l'exception
          de quelques figures héroïques comme Harvey Dent (avant sa chute).
        </p>
        <p>
          Maire actuel Michael Akins :
          <img src="./images/maire.jpg" alt="" />
        </p>
        <p>
          Bien que politiquement habile, est souvent critiqué pour ses liens
          supposés avec des groupes criminels et sa gestion inefficace des
          crises.
        </p>
        <p>
          Conseil municipal : Le conseil municipal est composé de représentants
          élus des différents quartiers de la ville. Bien qu’il s'agisse d'une
          institution démocratique, la corruption y est omniprésente, freinant
          l’adoption de réformes vitales.
        </p>
        <h3>Police de Gotham (GCPD) :</h3>
        <p>
          La Gotham City Police Department (GCPD) est l’une des forces de police
          les plus infâmes du pays, connue pour sa lutte constante contre le
          crime organisé et les super-vilains. Avec plus de 15 000 agents, le
          GCPD est une institution immense, mais minée par la corruption. Les
          relations entre la police et les citoyens sont tendues, et le public a
          peu confiance en ses forces de l’ordre, souvent perçues comme
          inefficaces ou complices du crime.
        </p>
        <p>
          Commissaire James Gordon :
          <img src="./images/james.jpg" alt="" />
        </p>
        <p>
          {" "}
          Une figure incontournable de la GCPD, James Gordon est l'un des rares
          officiers incorruptibles et un allié secret de Batman. Il incarne
          l’espoir d’une police capable de redresser Gotham.
        </p>
        <p>
          Unité spéciale : Le GCPD dispose de plusieurs unités spéciales, dont
          une dédiée aux super-vilains. Néanmoins, ces unités sont souvent
          sous-équipées face à des menaces comme le Joker ou Bane.
        </p>

        <h3>Éducation et système scolaire :</h3>
        <p>
          Le système scolaire de Gotham City, administré par le Gotham Board of
          Education, est le reflet des inégalités sociales et économiques de la
          ville. Les écoles des quartiers riches comme Gotham Heights sont bien
          financées et offrent des programmes d’excellence, tandis que celles
          des quartiers défavorisés, comme les Narrows, sont vétustes,
          sous-financées, et sujettes à la violence.
        </p>
        <p>
          Taux de scolarisation : Bien que la scolarisation soit obligatoire, de
          nombreux jeunes quittent l’école prématurément, attirés par le monde
          du crime ou incapables de trouver une sécurité suffisante pour
          poursuivre leurs études.
        </p>
        <p>
          Violence scolaire : Les écoles publiques de Gotham sont régulièrement
          le théâtre de violences, et certaines sont sous la coupe de gangs
          locaux, ce qui complique encore plus la tâche des enseignants.
        </p>
        <p>
          Programme social : Les initiatives pour améliorer le système éducatif
          existent, mais sont souvent entravées par le manque de ressources et
          les détournements de fonds.
        </p>
        <h3>Justice et système judiciaire :</h3>
        <p>
          Le système judiciaire de Gotham est aussi gangrené par la corruption.
          Bien que des procureurs comme Harvey Dent aient tenté de faire régner
          l'ordre, beaucoup de juges et d’avocats sont sous la coupe des
          familles criminelles de Gotham, comme les Falcone ou les Maroni. La
          justice est donc lente et inefficace, laissant souvent les criminels
          s'en sortir grâce à des pots-de-vin ou à la manipulation du système
          judiciaire.
        </p>
        <p>
          Procurature de Gotham : Le bureau du procureur est une institution
          clé, mais la plupart des procureurs sont surchargés et parfois
          corrompus. Des figures comme Harvey Dent ont tenté de redorer le
          blason de l’institution, mais leur chute tragique a laissé un vide.
        </p>
        <h3>Services publics et infrastructures :</h3>
        <p>
          Les services publics de Gotham, tels que les transports, les hôpitaux,
          et la gestion des déchets, sont largement sous-financés. Le métro,
          pourtant essentiel au transport de millions de Gothamites, est
          vétuste, mal entretenu et souvent sujet à des actes de vandalisme. Les
          hôpitaux publics, comme Arkham Asylum, sont célèbres pour leur manque
          de moyens et leurs scandales de maltraitance.
        </p>
        <p>
          Santé : Les hôpitaux sont débordés, notamment en raison de la violence
          constante dans la ville. Les services d'urgence sont eux aussi sous
          pression et souvent trop lents à réagir.
        </p>
        <p>
          Infrastructures défaillantes : Gotham souffre également d'un manque de
          rénovation urbaine, avec des quartiers délabrés qui deviennent des
          refuges pour le crime. Les projets de réhabilitation sont souvent
          bloqués par la bureaucratie ou sabotés par des intérêts criminels.
        </p>
      </div>
      <div id="quartiers">
        <h2>Les quartiers</h2>

        <h3>Downtown Gotham</h3>
        <div className="quartier-image">
          <img src="./images/downtown.jpg" alt="" />
          <ul>
            <li>Caractéristiques : Gratte-ciel, banques, tours de bureaux</li>
            <li>
              Criminalité: Vols à grande échelle, blanchiment d'argent,
              corruption
            </li>
            <li>Lieu notable : Tour Wayne (siège de Wayne Enterprises)</li>
          </ul>
        </div>
        <p>
          Le cœur économique de Gotham, Downtown est un quartier de gratte-ciel
          imposants, où se situent de grandes entreprises, y compris Wayne
          Enterprises. C’est ici que l’élite financière et politique de Gotham
          travaille, dans des bureaux modernes et des tours ultramodernes.
          Toutefois, derrière cette façade de prospérité se cache une ville
          gangrenée par le crime organisé, et de nombreuses entreprises servent
          de façade pour les activités illégales des familles criminelles,
          telles que les Falcone ou les Maroni.
        </p>

        <h3>Gotham Heights</h3>
        <div className="quartier-image">
          <img src="./images/Gotham_Heights.webp" alt="" />
          <ul>
            <li>Caractéristiques : Villas, parcs privés, boutiques de luxe</li>
            <li>Criminalité: Cambriolages, enlèvements</li>
            <li>
              Lieu notable : Manoir Wayne, la résidence de Bruce Wayne et de
              Batman
            </li>
          </ul>
        </div>
        <p>
          Gotham Heights est l’un des quartiers les plus aisés de la ville, où
          résident les familles les plus riches et influentes, y compris Bruce
          Wayne. Le quartier se caractérise par ses manoirs luxueux, ses parcs
          bien entretenus et ses boutiques de luxe. Il est souvent perçu comme
          un refuge sécurisé pour l’élite, mais même Gotham Heights n’est pas
          totalement épargné par la violence et les crimes ciblés.
        </p>
        <h3>The Narrows</h3>
        <div className="quartier-image">
          <img src="./images/narrows.webp" alt="" />
          <ul>
            <li>
              Caractéristiques : Bâtiments délabrés, ruelles sombres,
              surpopulation
            </li>
            <li>Criminalité: Trafics de drogue, meurtres, guerre de gangs</li>
            <li>
              Lieu notable : Arkham Asylum, le tristement célèbre hôpital
              psychiatrique
            </li>
          </ul>
        </div>
        <p>
          Le quartier des Narrows est l’un des plus pauvres et des plus
          dangereux de Gotham. Situé sur une île séparée du centre-ville, il est
          densément peuplé et caractérisé par des immeubles délabrés et des rues
          étroites et mal éclairées. La pauvreté et la criminalité y sont
          omniprésentes. C’est un quartier souvent contrôlé par les gangs, où
          les habitants tentent tant bien que mal de survivre dans une jungle
          urbaine. Arkham Asylum, l’asile d’aliénés où sont enfermés les
          criminels les plus dangereux de Gotham, se trouve également dans ce
          quartier.
        </p>
      </div>
      <div id="plan">
        <h2>Plans</h2>
        <h3>Zones des "Vilains"</h3>
        <div className="plan-vilains">
          <img src="./images/carte-gotham.jpg" alt="" />
          <div className="vilains">
            <div className="zone-vilain" onClick={() => setJokerClass("on")}>
              <h4 className="joker">Joker : </h4>
              <img src="./images/joker.webp" alt="" />
            </div>

            <div className={jokerClass}>
              <div id="joker" onClick={() => setJokerClass("off")}>
                <div className="title-story">
                  <h4 className="joker">Joker : </h4>
                  <img src="./images/joker.webp" alt="" />
                </div>
                <div className="story">
                  <p>
                    Le Joker est l'un des ennemis les plus emblématiques de
                    Batman, souvent dépeint comme un criminel anarchiste et
                    psychopathe. Son origine reste floue, mais l'histoire la
                    plus connue le présente comme un comédien raté qui, après un
                    accident chimique, devient fou et adopte son apparence
                    emblématique. Fasciné par Batman, le Joker voit en lui un
                    adversaire et un miroir déformé, cherchant constamment à
                    semer le chaos et à briser le Chevalier Noir mentalement.
                    Malgré ses nombreux crimes, Batman refuse de le tuer, ce qui
                    nourrit leur relation destructrice.
                  </p>
                </div>
              </div>
            </div>

            <div className="zone-vilain" onClick={() => setPingouinClass("on")}>
              <h4 className="pingouin">Pingouin : </h4>
              <img src="./images/pingouin.jpeg" alt="" />
            </div>
            <div className={pingouinClass}>
              <div id="pingouin" onClick={() => setPingouinClass("off")}>
                <div className="title-story">
                  <h4 className="pingouin">Pingouin : </h4>
                  <img src="./images/pingouin.jpeg" alt="" />
                </div>
                <div className="story">
                  <p>
                    Le Pingouin, de son vrai nom Oswald Cobblepot, est l'un des
                    adversaires récurrents de Batman. Issu d'une famille riche
                    déchue, il a souvent été moqué pour son apparence
                    disgracieuse, ce qui l'a conduit à développer une amertume
                    profonde. Contrairement à d'autres criminels de Gotham, le
                    Pingouin n'est pas un psychopathe mais un homme d'affaires
                    rusé, souvent à la tête d'organisations criminelles
                    sophistiquées. Dirigeant généralement son célèbre club,
                    l'Iceberg Lounge, il préfère la stratégie et la manipulation
                    à la violence brute. Malgré ses ambitions criminelles, il
                    conserve une certaine élégance, et son intellect fait de lui
                    un adversaire redoutable pour Batman.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="zone-vilain"
              onClick={() => setScarecrowClass("on")}
            >
              <h4 className="scarecrow">Scarecrow : </h4>
              <img src="./images/scarecrow.webp" alt="" />
            </div>
            <div className={scarecrowClass}>
              <div id="scarecrow" onClick={() => setScarecrowClass("off")}>
                <div className="title-story">
                  <h4 className="scarecrow">Scarecrow : </h4>
                  <img src="./images/scarecrow.webp" alt="" />
                </div>
                <div className="story">
                  <p>
                    L'Épouvantail, ou Jonathan Crane, est un des ennemis les
                    plus redoutables de Batman. Ancien professeur de
                    psychologie, Crane est obsédé par la peur, qu'il considère
                    comme l'émotion humaine la plus puissante. Après avoir été
                    renvoyé de l'université pour ses expériences extrêmes sur la
                    peur, il adopte l'identité de l'Épouvantail et crée des
                    toxines capables de plonger ses victimes dans des terreurs
                    hallucinatoires. Contrairement à d'autres criminels de
                    Gotham, il ne cherche pas la richesse mais la domination
                    psychologique, utilisant la peur comme arme pour manipuler
                    ses adversaires. Son intellect et sa maîtrise de la peur en
                    font un adversaire psychologique redoutable pour Batman.
                  </p>
                </div>
              </div>
            </div>

            <div className="zone-vilain" onClick={() => setFreezeClass("on")}>
              <h4 className="mr-freeze">Mr Freeze : </h4>
              <img src="./images/mr-freeze.webp" alt="" />
            </div>
            <div className={freezeClass}>
              <div id="freeze" onClick={() => setFreezeClass("off")}>
                <div className="title-story">
                  <h4 className="mr-freeze">Mr Freeze : </h4>
                  <img src="./images/mr-freeze.webp" alt="" />
                </div>
                <div className="story">
                  <p>
                    Mr. Freeze, de son vrai nom Victor Fries, est l'un des
                    ennemis les plus tragiques de Batman. Ancien scientifique
                    brillant spécialisé en cryogénie, Victor est devenu un
                    criminel après un accident qui l'a forcé à vivre dans un
                    état de basse température. Sa motivation principale est de
                    sauver sa femme, Nora, atteinte d'une maladie incurable
                    qu'il a placée en cryostase. Pour financer ses recherches et
                    trouver un remède, il commet des crimes, utilisant une
                    combinaison réfrigérante et un canon à glace. Contrairement
                    à d'autres criminels, Freeze n'agit pas par méchanceté pure,
                    mais par désespoir, ce qui en fait un personnage
                    profondément humain et tragique dans son affrontement avec
                    Batman.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="plan-ville">
          <h3>Plan de la ville</h3>
          <img src="./images/gc2.png" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
