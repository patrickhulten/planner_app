import React from "react";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useAuth from "../../hooks/useAuth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

// define the jsx component to show just one sngle to do
const TodoItem = ({ itemData }) => {
  //enforce user login
  const { user } = useAuth() || {};
  if (!user) {
    return;
  }
  return (
    <Box mt={5}>
      <Heading as="h3" fontSize={"xl"}>
        {itemData.title}
      </Heading>
      <Text>{itemData.description}</Text>
      <Text>{itemData.status}</Text>
      <Text>{itemData.createdAt}</Text>
    </Box>
  );
};

//define the required getServerSideProps()
export async function getServerSideProps(context) {
  let itemData = null;
  // get docref from firestore collection
  const docRef = doc(db, "todo", context.params.id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    itemData = docSnap.data();
  }

  return {
    props: {
      itemData,
    },
  };
}

export default TodoItem;
