import { useRouter } from "next/router";
import Head from "next/head";
import { housesData } from "@/constants/data";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

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
      <div className="container mx-auto min-h-[800px] mb-14">
        <div
          className="flex flex-col lg:flex-row lg:items-center 
        lg:justify-between px-3"
        >
          <div>
            <h2 className="text-2xl font-semibold">{selectedHouse.name}</h2>
            <h3 className="text-lg mb-4">{selectedHouse.address}</h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 text-white px-3 rounded-full">
              {selectedHouse.type}
            </div>
            <div className="bg-violet-500 text-white px-3 rounded-full">
              {selectedHouse.country}
            </div>
          </div>
          <div className="text-3xl font-semibold text-violet-600 mb-4">
            ${selectedHouse.price}
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[786px]">
            <div className="mb-8">
              <Image src={selectedHouse.imageLg} alt="largeHouse" />
            </div>
            <div className="flex gap-x-6 text-violet-700 mb-6 px-3">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />
                <div>{selectedHouse.bedrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl" />
                <div>{selectedHouse.bathrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl" />
                <div>{selectedHouse.surface}</div>
              </div>
            </div>
            <div className="px-3">{selectedHouse.description}</div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-4 mb-8">
              <div
                className="w-20 p-1 border border-gray-300 
              rounded-full"
              >
                <Image
                  className="rounded-full"
                  src={selectedHouse.agent.image}
                  alt="agentPic"
                />
              </div>
              <div>
                <div className="font-bold text-lg">
                  {selectedHouse.agent.name}
                </div>
                <Link href="" className="text-violet-700 text-sm">
                  View Listings
                </Link>
              </div>
            </div>
            {/* form */}
            <form className="flex flex-col gap-y-4">
              <input
                className="border border-gray-300 
                focus:border-violet-700 outline-none rounded w-full 
                px-4 h-14 text-sm"
                type="text"
                placeholder="Name*"
              />
              <input
                className="border border-gray-300 
                focus:border-violet-700 outline-none rounded w-full 
                px-4 h-14 text-sm"
                type="text"
                placeholder="Email*"
              />
              <input
                className="border border-gray-300 
                focus:border-violet-700 outline-none rounded w-full 
                px-4 h-14 text-sm"
                type="text"
                placeholder="Phone*"
              />
              <textarea
                className="border border-gray-300 
              focus:border-violet-700 outline-none resize-none rounded 
              w-full p-4 h-36 text-sm text-gray-400"
                placeholder="Message*"
                defaultValue="Hello I am intrested!"
              ></textarea>
              <div className="flex gap-x-2">
                <button
                  className="bg-violet-700 hover:bg-violet-800
                 text-white rounded p-4 text-sm w-full transition"
                >
                  Send message
                </button>
                <button
                  className="border border-violet-700 text-violet-700
                hover:border-violet-500 hover:text-violet-500 rounded p-4
                text-sm w-full transition"
                >
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
