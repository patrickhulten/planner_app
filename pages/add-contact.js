import { Container } from "@chakra-ui/react";
import AddContact from "../components/AddContact";
import Auth from "../components/Auth";

export default function AddContactTo() {
  return (
    <Container maxW="7xl">
      <Auth />
      <AddContact />
    </Container>
  );
}
