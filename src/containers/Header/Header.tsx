import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import "./.././Header/Header.scss";
const Header = () => {
  return (
    <>
      <IonMenu contentId="main-content" slot="top">
        <IonHeader>
          <IonToolbar>
            <IonTitle>L2F</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonMenu>
    </>
  );
};

export default Header;
