import { useRouter } from "next/router";
import Head from "next/head";
import { housesData } from "@/constants/data";

export default function PropertyDetails() {
  const router = useRouter();
  const { id } = router.query;

  // Check if 'id' is undefined or an array of strings
  if (Array.isArray(id) || typeof id !== "string") {
    // Handle the case where the 'id' is invalid
    return (
      <main>
        <Head>
          <title>Property Details</title>
        </Head>
        <p>Invalid house ID</p>
      </main>
    );
  }

  // Find the house with the matching 'id'
  const selectedHouse = housesData.find(
    (house) => house.id === parseInt(id, 10)
  );

  if (!selectedHouse) {
    // Handle the case where the house with the specified 'id' is not found
    return (
      <main>
        <Head>
          <title>Property Details</title>
        </Head>
        <p>House not found</p>
      </main>
    );
  }

  return (
    <main>
      <Head>
        <title>Property Details</title>
      </Head>
      <div>
        <h1>Property Details for {selectedHouse.name}</h1>
        <p>{selectedHouse.description}</p>
        {/* Display other details of the selected house */}
      </div>
    </main>
  );
}
