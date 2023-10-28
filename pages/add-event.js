import { Container } from "@chakra-ui/react";
import AddEvent from "../components/AddEvent";
import Auth from "../components/Auth";

export default function AddEventTo() {
  return (
    <Container maxW="7xl">
      <Auth />
      <AddEvent />
    </Container>
  );
}
