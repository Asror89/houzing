import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Wrapper, Link, Logo, Section, Main } from "./style";
import { navbar } from "../../utils/navbar";
import { Button } from "../Generics/button";
import Filter from "../filter";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo>
            <Logo /> <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            <Button onClick={() => navigate("/signin")} type="dark">
              Sign In
            </Button>
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
    </Container>
  );
};

export default Home;
