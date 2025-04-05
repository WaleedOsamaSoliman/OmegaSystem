import mainContext from "@context/main";
import mainPreload from "@preload/main";
import Menu from "@components/menu.jsx";
import Router from "@components/router.jsx";
import FooterComponent from "@components/footer.jsx";
import LoginPage from "@pages/login.jsx";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Container, Content, Footer, Divider } from "rsuite";
import Logout from "./assets/components/logout";

export default function App() {
  const Context = mainContext;
  const [preload, setPreload] = useState(
    JSON.parse(JSON.stringify(mainPreload))
  );
  const isLoggedString = "is_logged";

  useEffect(() => {
    const isLogged = Cookies.get(isLoggedString);

    isLogged === "true"
      ? setPreload((e) => {
          const updated = JSON.parse(JSON.stringify(e));
          updated.is_logged = true;
          return updated;
        })
      : setPreload((e) => {
          const updated = JSON.parse(JSON.stringify(e));
          updated.is_logged = false;

          return updated;
        });
  }, []);

  const LoggedComponents = () => {
    return (
      <>
        {preload.modals.logout ? <Logout /> : null}
        <Menu />
        <Content style={{ padding: 10 }}>
          <Router />
        </Content>
        <Divider />
        <Footer id="footer">
          <FooterComponent />
        </Footer>
      </>
    );
  };

  return (
    <Context.Provider value={[preload, setPreload]}>
      <Container id="container">
        {preload.is_logged ? <LoggedComponents /> : <LoginPage />}
      </Container>
    </Context.Provider>
  );
}
