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

import axios from "axios";

export default function App() {
  const Context = mainContext;
  const [preload, setPreload] = useState(
    JSON.parse(JSON.stringify(mainPreload))
  );

  // check user is login or not
  useEffect(() => {
    console.log("Check Authentication ...");
    axios
      .get("/api/v1/account/checkAuth", {
        withCredentials: true,
      })
      .then((r) => {
        switch (r.data.state) {
          case true:
            setPreload((e) => {
              const updated = JSON.parse(JSON.stringify(e));
              updated.is_logged = true;
              updated.user = r.data.user;
              updated.organization = r.data.organization;
              updated.permessions = r.data.permessions;
              return updated;
            });

            console.log("updated main state ", preload);
            break;
          default:
            setPreload((e) => {
              const updated = JSON.parse(JSON.stringify(e));
              updated.is_logged = false;
              return updated;
            });
            console.log("user not logged in !!!");
            break;
        }
      })
      .catch((err) => {
        console.log(err);
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
        {/* <LoggedComponents /> */}
      </Container>
    </Context.Provider>
  );
}
