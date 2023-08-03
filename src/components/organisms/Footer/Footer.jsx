import React from "react";
import Box from "../../atoms/Box";
import { Link } from "react-router-dom";
import Container from "../../atoms/Container";
import Menus from "../../molecules/Footer/Menus";
import Texts from "../../molecules/Footer/Texts";

export default function Footer() {
  return (
    <footer className="bg-gray-50 min-w-max border-t">
      <Container className="relative flex gap-8 w-inner py-8 mx-auto">
        <Box>
          <Link to="/" className="text-lg">
            카카오<span className="font-semibold">톡 쇼핑하기</span>
          </Link>
        </Box>
        <Texts />
        <Menus />
      </Container>
    </footer>
  );
}
